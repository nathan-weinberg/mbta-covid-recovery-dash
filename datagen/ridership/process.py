import json
import pandas as pd
import numpy as np
from os import path
from pandas.tseries.holiday import USFederalHolidayCalendar

from ridership.source import RidershipSource

unofficial_labels_map = {
    "SL1": "741",
    "SL2": "742",
    "SL3": "743",
    "SL4": "751",
    "SL5": "749",
    "SLW": "746",
}


def format_subway_data(path_to_csv_file: str):
    # read data, convert to datetime
    df = pd.read_csv(path_to_csv_file)
    df["servicedate"] = pd.to_datetime(df["servicedate"])

    # add holidays
    cal = USFederalHolidayCalendar()
    holidays = cal.holidays(start=df["servicedate"].min(), end=df["servicedate"].max())

    # mark as holiday and weekday
    df["holiday"] = df["servicedate"].dt.date.astype("datetime64").isin(holidays.date)
    df["weekday"] = df["servicedate"].dt.dayofweek

    # define peak, mark weekdays, convert service date back
    conditions = [(df["holiday"] == False) & (df["weekday"] < 5)]
    choices = ["peak"]
    df["peak"] = np.select(conditions, choices, default="offpeak")
    df["week"] = df["servicedate"].dt.isocalendar().week
    df["year"] = df["servicedate"].dt.isocalendar().year
    df["servicedate"] = df["servicedate"].dt.date.astype(str)

    # select date of the week
    dates = df[df["weekday"] == 0]
    dates = dates[["servicedate", "week", "year"]].drop_duplicates()

    # limit data to just peak, merge back dates
    final = df[df["peak"] == "peak"]
    final = (
        final.groupby(["year", "week", "route_or_line"])["validations"]
        .mean()
        .round()
        .reset_index()
    )

    final = final.merge(dates, on=["week", "year"], how="left")

    # get list of bus routes
    routelist = list(set(final["route_or_line"].tolist()))

    # create dict
    output = {}

    # write out each set of routes to dict
    for route in routelist:
        dftemp = final[final["route_or_line"] == route]
        dictdata = (
            dftemp[["servicedate", "validations"]]
            .rename(columns={"servicedate": "date", "validations": "riders"})
            .to_dict(orient="records")
        )
        output[route] = dictdata

    return output


def format_bus_data(path_to_excel_file: str):
    # read data, ignore first sheet and row
    df = pd.read_excel(
        path_to_excel_file,
        sheet_name="Ridership by Route",
        skiprows=2,
        keep_default_na=False,
        na_values=["N/A", "999999"],
    )

    # rename unnamed data
    df = df.rename(columns={"Route": "route"})
    # cast empty values to 0
    df = df.replace(to_replace="", value=0)
    # melt to get into long format
    df = pd.melt(df, id_vars=["route"], var_name="date", value_name="riders")
    # change datetime to date
    df["date"] = pd.to_datetime(
        df["date"],
        infer_datetime_format=True,
    ).dt.date.astype(str)

    # get list of bus routes
    routelist = list(set(df["route"].tolist()))

    # create dict
    output = {}

    # write out each set of routes to dict
    for route in routelist:
        dftemp = df[df["route"] == route]
        dictdata = dftemp[["date", "riders"]].to_dict(orient="records")
        rewritten_route_id = unofficial_labels_map.get(route) or route
        output[rewritten_route_id] = dictdata

    return output


def generate_ridership_json(source: RidershipSource):
    subway = format_subway_data(source.subway_ridership_csv_path)
    bus = format_bus_data(source.bus_ridership_xlsx_path)
    return {**subway, **bus}


def get_ridership_json(source: RidershipSource):
    target_path = source.ridership_json_path
    if not path.exists(target_path):
        data_dict = generate_ridership_json(source)
        with open(target_path, "w") as file:
            file.write(json.dumps(data_dict))
    with open(target_path, "r") as file:
        return json.loads(file.read())
