(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4175:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return Ce},default:function(){return Le}});var n=r(4942),i=r(7294),a=r(9008),s=r(4298),o=r(4184),l=r.n(o),c=r(1116),d=r(279),u=r(1155),h=r(6998),p=r.n(h),f=r(5893);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e,t){return"".concat(e,"-").concat(t)},g=function(e){var t=e["aria-label"],r=e.baseId,n=e.className,a=e.items,s=e.onSelectValue,o=e.style,h=void 0===o?{}:o,v=e.tabClassName,g=e.value,x=(0,c.x)({selectedId:m(r,g)});return(0,i.useEffect)((function(){var e=document.querySelector("#".concat(x.selectedId));e&&s(e.getAttribute("data-value"))}),[x.selectedId]),(0,f.jsx)(d.t,b(b({},x),{},{style:h,className:l()(p().tabList,n),"aria-label":t,as:"div",children:a.map((function(e){var t=e.value,n=e.label;return(0,i.createElement)(u.O,b(b({},x),{},{id:m(r,t),className:l()(p().tab,v),key:t,as:"div","data-value":t}),(0,f.jsx)("span",{children:n}))}))}))},x=r(2982),j=r(885),_=r(9327),y={red:"#da291c",orange:"#ed8b00",green:"#00843d",blue:"#003da5",silver:"#666",bus:"#ffc72c",boat:"#1da2d8","regional-rail":"#742573"},w=r(3013),C=r.n(w),L=r(7432),k=r.n(L),T=r(7863),O=r.n(T),D=3600,S=function(e){var t=Math.floor(e/D),r=t>=12&&t<24;return"".concat(t>12?t-12:0===t?12:t," ").concat(r?"PM":"AM")},M=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=[],a=t;a<r;a++)(a-n)%e===0&&i.push(S(a*D));return i}(1),N=function(e){var t=e.color,r=e.baselineTph,n=e.currentTph,a=e.highestTph,s=e.lineTitle,o=(0,i.useRef)(null),l=(0,i.useMemo)((function(){var e=function(e){return e||0};return[{title:"Hour",values:M},r&&{title:"Pre-COVID trips",values:r.map(e)},n&&{title:"Current trips",values:n.map(e)}].filter((function(e){return e}))}),[M,r,n]);return(0,i.useEffect)((function(){var e=o.current.getContext("2d"),i=O()(t).alpha(.4).rgbString(),s=[{label:"Pre-COVID trips per hour",data:r,steppedLine:!0,borderColor:t,borderWidth:2,backgroundColor:"rgba(0,0,0,0)"},{label:"Current trips per hour",data:n,steppedLine:!0,borderWidth:2,borderColor:"rgba(0,0,0,0)",backgroundColor:i}],l=new(k())(e,{type:"line",data:{labels:M,datasets:s},options:{maintainAspectRatio:!1,animation:{duration:0},legend:{position:"top",align:"end",labels:{boxWidth:15}},scales:{xAxes:[{gridLines:{display:!1},ticks:{maxTicksLimit:12}}],yAxes:[{gridLines:{display:!1},ticks:{maxTicksLimit:4,suggestedMax:a}}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e){var t=e.datasetIndex,r=e.index,n=s[t],i=n.label,a=n.data;return"".concat(i,": ").concat(a[r]," (each direction)")}}},elements:{line:{tension:0},point:{radius:0}}}});return function(){return l.destroy()}}),[r,n]),(0,f.jsxs)("div",{className:C().tphChartContainer,children:[(0,f.jsx)("canvas",{ref:o}),(0,f.jsx)(ce,{columns:l,caption:"Trips each hour (".concat(s,")")})]})},P=r(2744),R=r.n(P),F=r(3316),A=r.n(F),E=new Intl.DateTimeFormat("en-US"),I=function(e){return["line-Red","line-Orange","line-Blue","line-Green"].includes(e)?"faregate validations":"riders"},B=function(e){var t=e[0];return e.map((function(e){return e/t}))},H=function(e){return Math.round(100*e).toString()+"%"},G=A()((function(e){var t=Date.now(),r=[],n=[],i=e.valueOf();do{r.push(E.format(i)),n.push(i),i+=864e5}while(i<=t);return{timestamps:n,dateStrings:r}}),{serializer:function(e){return e.valueOf().toString()}}),W=function(e){var t=e.color,r=e.serviceHistory,n=e.ridershipHistory,a=e.startDate,s=e.lineTitle,o=e.lineData,l=(0,i.useRef)(null),c=(0,i.useMemo)((function(){return n&&B(n)}),[n]),d=(0,i.useMemo)((function(){return r&&B(r)}),[r]),u=(0,i.useMemo)((function(){return G(a)}),[a]),h=u.timestamps,p=u.dateStrings,v=(0,i.useMemo)((function(){var e=I(o.id);return[{title:"Date",values:p},n&&{title:"Ridership (".concat(e,"/day)"),values:n},c&&{title:"Ridership (percentage)",values:c.map(H)},r&&{title:"Service levels (trips/day)",values:r},d&&{title:"Service levels (percentage)",values:d.map(H)}].filter((function(e){return e}))}),[p,n,c,r,d]);return(0,i.useEffect)((function(){var e=O()(t).alpha(.8).rgbString(),i=l.current.getContext("2d"),a=I(o.id),s=[c&&{label:"Ridership",actual:n,unit:"weekday ".concat(a),data:c,borderColor:t,backgroundColor:e,borderWidth:2},{label:"Service levels",actual:r,unit:"weekday trips per direction",data:d,borderColor:e,backgroundColor:R().draw("diagonal","rgba(0,0,0,0)",t,5),borderWidth:2}].filter((function(e){return e})),u=new(k())(i,{type:"line",data:{datasets:s,labels:h},options:{maintainAspectRatio:!1,animation:{duration:0},scales:{xAxes:[{gridLines:{display:!1},type:"time",time:{unit:"month",displayFormats:{month:"MMM 'YY"}}}],yAxes:[{ticks:{beginAtZero:!0,stepSize:.2,maxTicksLimit:6,callback:H},gridLines:{display:!1}}]},elements:{point:{radius:0},line:{tension:0}},legend:{position:"top",align:"end",labels:{boxWidth:15}},tooltips:{mode:"index",intersect:!1,callbacks:{title:function(e){var t=(0,j.Z)(e,1)[0].index;return E.format(h[t])},label:function(e){var t=e.datasetIndex,r=e.index,n=e.value,i=s[t],a=i.label,o=i.actual,l=i.unit,c=Math.round(100*parseFloat(n));return"".concat(a,": ").concat(o[r]," ").concat(l," (").concat(c,"%)")}}}}});return function(){return u.destroy()}}),[c,d,o.id]),(0,f.jsxs)("div",{className:C().serviceAndRidershipChartContainer,children:[(0,f.jsx)("canvas",{className:C().serviceAndRidershipChart,ref:l}),(0,f.jsx)(ce,{columns:v,caption:"Service levels and ridership (".concat(s,")")})]})},Z=[{value:"weekday",label:"Weekdays"},{value:"saturday",label:"Saturday"},{value:"sunday",label:"Sunday"}],V=function(e){var t=e.lineData,r=t.id,n=t.ridershipHistory,a=t.lineKind,s=t.serviceHistory,o=t.serviceRegimes,c=t.startDate,d=t.shortName,u=t.longName,h=y[a]||"black",p=(0,i.useState)("weekday"),v=p[0],b=p[1],m=(0,i.useMemo)((function(){return function(e){var t=0;return Object.entries(e.serviceRegimes).forEach((function(e){var r=(0,j.Z)(e,2),n=r[0],i=r[1];"baseline"!==n&&"current"!==n||Object.values(i).forEach((function(e){e.tripsPerHour&&(t=Math.max.apply(Math,[t].concat((0,x.Z)(e.tripsPerHour))))}))})),t}(t)}),[t]),w=(0,i.useMemo)((function(){return new Date(c)}),[c]),L=d||u,k=n?"Weekday ridership and service levels":"Weekday service levels (ridership not available)",T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,f.jsxs)("h3",{className:C().sectionLabel,children:[(0,f.jsx)("div",{className:"label",children:e}),t]})},O=function(){var e=o.current,t=o.baseline;return["23","28","29"].includes(d)?(0,f.jsxs)("div",{className:l()(C().statusBadge,"good"),children:[(0,f.jsx)(_.DNI,{size:20}),(0,f.jsx)("a",{href:"https://www.mbta.com/projects/fare-free-bus-pilot-route-28",target:"_blank",rel:"noopener noreferrer",children:"Free Fare Pilot"})]}):0===e.weekday.totalTrips?(0,f.jsxs)("div",{className:l()(C().statusBadge,"bad"),children:[(0,f.jsx)(_.KZq,{size:20}),"Canceled"]}):0===e.saturday.totalTrips&&t.saturday.totalTrips>0?(0,f.jsxs)("div",{className:l()(C().statusBadge,"warning"),children:[(0,f.jsx)(_.KZq,{size:20}),"Weekends"]}):void 0},D=(0,f.jsx)(g,{className:C().tabs,value:v,items:Z,onSelectValue:function(e){return b(e)},baseId:"line-day-selector-".concat(r),"aria-label":"Select day of service"});return(0,f.jsxs)("div",{className:C().lineCard,children:[(0,f.jsxs)("div",{className:C().topRow,children:[(0,f.jsx)("h2",{className:C().title,children:L}),O()]}),T("Daily service levels",D),(0,f.jsx)(N,{lineTitle:"".concat(L,", ").concat(v),baselineTph:o.baseline[v].tripsPerHour,currentTph:o.current[v].tripsPerHour,color:h,highestTph:m}),T(k),(0,f.jsx)(W,{lineData:t,lineTitle:"".concat(L,", ").concat(v),startDate:w,ridershipHistory:n,serviceHistory:s,color:h})]})},z=r(5675),q=["red","green","blue","orange","silver"],K=new Set([1,15,22,23,28,32,39,57,66,71,73,77,111,116,117].map(String)),Q=function(e){return e.serviceRegimes.current.weekday.cancelled},X=function(e){var t=e.ridershipHistory;return t&&!Q(e)?t[0]/t[t.length-1]:1/0},Y=function(e){var t=e.ridershipHistory;return t&&!Q(e)?t[t.length-1]:1/0},J={kind:function(e){if(q.includes(e.lineKind))return"silver"===e.lineKind?1:0;if(e.routeIds.some((function(e){return K.has(e)})))return 100+parseInt(e.routeIds[0]);if("regional-rail"===e.lineKind)return 200;var t=300+Math.min.apply(Math,(0,x.Z)(e.routeIds.map((function(e){return parseInt(e)}))));return Number.isNaN(t)?1/0:t},lowestServiceFraction:function(e){return e.serviceFraction},highestServiceFraction:function(e){return-e.serviceFraction},lowestTotalTrips:function(e){return e.totalTrips},highestTotalTrips:function(e){return-e.totalTrips},lowestRidershipFraction:function(e){return e.ridershipHistory&&!Q(e)?-X(e):1/0},highestRidershipFraction:X,lowestTotalRidership:Y,highestTotalRidership:function(e){return e.ridershipHistory&&!Q(e)?-Y(e):1/0}},U=r(2831),$=r.n(U),ee=function(e){return!!e},te=function(e){var t=e.lineData,r=e.summaryData,n=e.filter,a=void 0===n?ee:n,s=(0,i.useState)(12),o=s[0],c=s[1],d=(0,i.useState)(""),u=d[0],h=d[1],p=(0,i.useState)(""),v=p[0],b=p[1],m=(0,i.useState)("grid"),g=m[0],x=m[1],j=(0,i.useState)("all"),_=j[0],y=j[1],w=(0,i.useMemo)((function(){return function(e,t){var r={};return e.forEach((function(e){r[e.id]=t(e)})),e.sort((function(e,t){var n=r[e.id],i=r[t.id];return n===i?0:n>i?1:-1}))}(Object.values(t).filter((function(e){return a(e)&&function(e,t){var r=e.id,n=e.shortName||e.longName;return!t||(null===n||void 0===n?void 0:n.toLowerCase().includes(t))||r.toLowerCase().includes(t)}(e,u)&&function(e,t){var r=e.lineKind;return"all"===t||("regional-rail"===t||"bus"===t||"boat"===t?r===t:"regional-rail"!==r&&"bus"!==r&&"boat"!==r)}(e,_)})),J[v||"kind"])}),[t,a,u,_,v]),C=(0,i.useMemo)((function(){return w.slice(0,o)}),[w,o]);!function(e){var t=e.element,r=e.enabled,n=e.onRequestMoreItems,a=e.scrollTolerance,s=void 0===a?0:a;(0,i.useEffect)((function(){if(t&&r&&n){var e=function(){t&&r&&function(e,t){return e.scrollHeight-e.scrollTop-t<=e.clientHeight}(t,s)&&n()};e();var i=t===document.documentElement?window:t;return i.addEventListener("scroll",e),function(){return i.removeEventListener("scroll",e)}}return function(){}}),[t,r,s,n])}({element:"undefined"!==typeof document?document.documentElement:null,enabled:o<w.length,scrollTolerance:300,onRequestMoreItems:function(){return c((function(e){return e+12}))}});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:$().header,children:[(0,f.jsx)("a",{href:"https://transitmatters.org",children:(0,f.jsx)(z.default,{src:"/logo.svg",className:$().logo,height:20,width:197,alt:"Transitmatters Logo"})}),(0,f.jsx)("h1",{children:"MBTA Covid Recovery Dashboard"}),(0,f.jsxs)("div",{className:$().links,children:[(0,f.jsxs)("span",{children:["Data through ",r.endDate]}),(0,f.jsx)("a",{href:"https://transitmatters.org/transitmatters-labs",children:"TransitMatters Labs"}),(0,f.jsx)("a",{href:"https://github.com/transitmatters/mbta-covid-recovery-dash",children:"Source code"}),(0,f.jsx)("a",{href:"mailto:labs@transitmatters.org?subject=Covid Dashboard Feedback",children:"Send feedback"})]})]}),(0,f.jsxs)("div",{className:$().controls,children:[(0,f.jsx)("input",{placeholder:"Filter lines",className:$().filter,value:u,onChange:function(e){h(e.target.value.toLowerCase().trim()),c(12)}}),(0,f.jsxs)("select",{value:g,className:l()($().select,$().displaySelect),onChange:function(e){return x(e.target.value)},children:[(0,f.jsx)("option",{value:"grid",children:"Show grid"}),(0,f.jsx)("option",{value:"rows",children:"Show rows"})]}),(0,f.jsxs)("select",{className:$().select,value:_,onChange:function(e){var t=e.target.value;y(t),c(12),"regional-rail"!==t&&"boat"!==t||!function(e){return"lowestRidershipFraction"===e||"highestRidershipFraction"===e||"lowestTotalRidership"===e||"highestTotalRidership"===e}(v)||b("highestServiceFraction")},children:[(0,f.jsx)("option",{value:"all",children:"All lines"}),(0,f.jsx)("option",{value:"bus",children:"Bus"}),(0,f.jsx)("option",{value:"rapid-transit",children:"Rapid transit"}),(0,f.jsx)("option",{value:"regional-rail",children:"Commuter rail"}),(0,f.jsx)("option",{value:"boat",children:"Ferry"})]}),function(){var e="regional-rail"===_;return(0,f.jsxs)("select",{className:l()($().select,"kind"===v&&"default"),value:v,onChange:function(e){b(e.target.value),c(12)},children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Sort by..."}),(0,f.jsx)("option",{value:"kind",children:"Service kind"}),(0,f.jsx)("option",{value:"highestServiceFraction",children:"Least service cut"}),(0,f.jsx)("option",{value:"lowestServiceFraction",children:"Most service cut"}),(0,f.jsx)("option",{value:"lowestTotalTrips",children:"Least service"}),(0,f.jsx)("option",{value:"highestTotalTrips",children:"Most service"}),!e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("option",{value:"lowestRidershipFraction",children:"Least ridership retained"}),(0,f.jsx)("option",{value:"highestRidershipFraction",children:"Most ridership retained"}),(0,f.jsx)("option",{value:"lowestTotalRidership",children:"Least ridership"}),(0,f.jsx)("option",{value:"highestTotalRidership",children:"Most ridership"})]})]})}()]}),(0,f.jsx)(me,{summaryData:r}),(0,f.jsx)(_e,{summaryData:r}),(0,f.jsx)("div",{className:l()($().lineGrid,g),children:C.map((function(e){return(0,f.jsx)(V,{lineData:e},e.id)}))})]})},re=r(377),ne=r(3821),ie=r(2394),ae=r(9784),se=r.n(ae);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=function(e){var t=e.caption,r=e.columns,n=(0,re.b)(),a=(0,i.useMemo)((function(){for(var e=Math.max.apply(Math,(0,x.Z)(r.map((function(e){return e.values.length})))),t=[],n=0;n<e;n++){var i=[];t.push(i);for(var a=0;a<r.length;a++){var s=r[a].values[n]||"";i.push(s)}}return t}),[r]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(ne.S,le(le({},n),{},{as:"button",className:se().button,children:["Show data table: ",t]})),(0,f.jsx)(ie.V,le(le({},n),{},{children:n.visible&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:se().backdrop}),(0,f.jsxs)("div",{className:se().dialog,children:[(0,f.jsx)("p",{children:"Press ESC to close"}),(0,f.jsxs)("table",{children:[(0,f.jsx)("caption",{children:t}),(0,f.jsxs)("tbody",{children:[(0,f.jsx)("tr",{children:r.map((function(e,t){return(0,f.jsx)("th",{children:e.title},t)}))}),a.map((function(e,t){return(0,f.jsx)("tr",{children:e.map((function(e,t){return(0,f.jsx)("td",{children:e},t)}))},t)}))]})]})]})]})}))]})},de=r(2263),ue=r.n(de),he=function(e){var t=e.sparklineData,r=e.pieData,n=e.label,a=(0,i.useRef)(null);(0,i.useEffect)((function(){var e=a.current;if(e){var t=e.getContext("2d");new(k())(t,{type:"doughnut",data:r,options:{legend:{display:!1},tooltips:{enabled:!1},hover:{mode:null}}})}}),[e.pieData]);var s=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=s.current;if(e){var r=e.getContext("2d"),i=t.datasets;new(k())(r,{type:"line",data:t,options:{tooltips:{mode:"index",intersect:!1,displayColors:!1,callbacks:{title:function(e){var t=(0,j.Z)(e,1)[0],r=t.index,n=t.datasetIndex;return i[n].labels.dateStrings[r]},label:function(e){var t,r=e.index,a=e.datasetIndex,s=i[a].data,o=(t=s[r]/s[0],Math.round(100*t).toString()+"%");return"".concat(o," of pre-pandemic ").concat(n)}}},legend:{display:!1},layout:{padding:10},scales:{xAxes:[{gridLines:{drawBorder:!1,tickMarkLength:0,drawOnChartArea:!1},ticks:{display:!1,maxTicksLimit:2}}],yAxes:[{gridLines:{drawBorder:!1,tickMarkLength:0,drawOnChartArea:!1},ticks:{display:!1}}]},elements:{point:{radius:0}}}})}}),[e.sparklineData]),(0,f.jsxs)("div",{className:ue().flexWrap,children:[(0,f.jsx)("div",{className:ue().flexCol,children:(0,f.jsx)("canvas",{ref:a})}),(0,f.jsx)("div",{className:ue().flexCol,children:(0,f.jsx)("canvas",{ref:s})})]})},pe=r(2258),fe=r.n(pe),ve=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=[],n=Math.floor(e.length/t),i=0;i<e.length-t;i++){var a=e.slice(i,i+t).reduce((function(e,t){return e+t}));r.push(a),i%n===0&&r.push(a)}return r},be=function(e){return[100-100*e,100*e]},me=function(e){var t=e.summaryData,r=t.totalRidershipHistory,n=t.totalServiceHistory,a=t.totalRidershipPercentage,s=t.totalServicePercentage,o=t.totalRoutesCancelled,c=t.totalReducedService,d=t.totalIncreasedService,u=t.startDate,h=(0,i.useMemo)((function(){return new Date(u)}),[u]),p=(0,i.useMemo)((function(){return G(h)}),[h]),v=(0,i.useMemo)((function(){return["pre-covid"].concat((0,x.Z)(Array(r.length-2).fill("")),["current"])}),[]),b=(0,i.useMemo)((function(){return{labels:["","current"],datasets:[{strokeColor:"transparent",backgroundColor:["#D3D3D3","#D31A2B"],data:be(a)}]}}),[a]),m=(0,i.useMemo)((function(){return{labels:v,datasets:[{data:ve(r),fill:!1,tension:.8,borderColor:"#D31A2B",labels:p}]}}),[p,r]),g=(0,i.useMemo)((function(){return{labels:["","current"],datasets:[{backgroundColor:["#D3D3D3","#D31A2B"],data:be(s)}]}}),[s]),j=(0,i.useMemo)((function(){return{labels:v,datasets:[{data:ve(n),fill:!1,tension:0,borderColor:"#D31A2B",labels:p}]}}),[n]);return(0,f.jsxs)("div",{className:fe().topLine,children:[(0,f.jsxs)("div",{className:fe().column,children:[(0,f.jsx)("h4",{children:"Total Ridership"}),(0,f.jsx)(he,{sparklineData:m,pieData:b,label:"ridership"}),(0,f.jsxs)("p",{children:[(0,f.jsxs)("strong",{children:[Math.round(100*a),"%"]})," of pre-pandemic weekday ridership on subway and bus"]})]}),(0,f.jsxs)("div",{className:fe().column,children:[(0,f.jsx)("h4",{children:"Total Service"}),(0,f.jsx)(he,{sparklineData:j,pieData:g,label:"service"}),(0,f.jsxs)("p",{children:[(0,f.jsxs)("strong",{children:[Math.round(100*s),"%"]})," of pre-pandemic weekday service"]})]}),(0,f.jsx)("div",{className:fe().column,children:(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("div",{className:l()(fe().bubble,fe().bad),children:(0,f.jsx)("span",{children:o})})," ","routes canceled"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("div",{className:l()(fe().bubble,fe().warning),children:(0,f.jsx)("span",{children:c})})," ","routes with reduced service"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("div",{className:l()(fe().bubble,fe().good),children:(0,f.jsx)("span",{children:d})})," ","routes with increased service"]})]})})]})},ge=r(9849),xe=r.n(ge),je=function(e){return Math.round(100*e).toString()+"%"},_e=function(e){var t=e.summaryData,r=t.totalRidershipPercentage,n=t.totalServicePercentage;return(0,f.jsxs)("div",{className:xe().topLineMobile,children:[(0,f.jsxs)("div",{className:xe().ridership,children:[(0,f.jsx)("div",{className:xe().large,children:je(r)}),"of pre-pandemic weekday ridership"]}),(0,f.jsxs)("div",{className:xe().service,children:[(0,f.jsx)("div",{className:xe().large,children:je(n)}),"of pre-pandemic weekday service"]})]})};function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ce=!0,Le=function(e){var t=e.data;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(a.default,{children:[(0,f.jsx)("title",{children:"MBTA Covid Recovery Dashboard"}),(0,f.jsx)("meta",{name:"author",content:"TransitMatters"}),(0,f.jsx)("meta",{name:"description",content:"Data on MBTA ridership and service levels throughout the COVID-19 pandemic"}),(0,f.jsx)("link",{rel:"icon",type:"image/png",href:"./favicon.png"})]}),(0,f.jsx)(te,we({},t)),(0,f.jsx)(s.default,{"data-goatcounter":"https://transitmatters-crd.goatcounter.com/count",src:"//gc.zgo.at/count.js"})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4175)}])},9784:function(e){e.exports={button:"DataTable_button__3ymKP",backdrop:"DataTable_backdrop__1uYQi",dialog:"DataTable_dialog__2-QBT"}},3013:function(e){e.exports={lineCard:"LineCard_lineCard__e5BUV",cancellationText:"LineCard_cancellationText__2yr2Z",cancellationIcon:"LineCard_cancellationIcon__2WcLH",topRow:"LineCard_topRow__12HPP",title:"LineCard_title__1kqHr",statusBadge:"LineCard_statusBadge__2rhWL",tphChartContainer:"LineCard_tphChartContainer__1nbQa",tphChartLabel:"LineCard_tphChartLabel__3oVgv",sectionLabel:"LineCard_sectionLabel__299Cv",serviceAndRidershipChartContainer:"LineCard_serviceAndRidershipChartContainer__28Quq",tabs:"LineCard_tabs__1NGWl"}},2831:function(e){e.exports={lineGrid:"LineGrid_lineGrid__2MBV7",header:"LineGrid_header__18Q3z",links:"LineGrid_links__5RdGr",controls:"LineGrid_controls__t7snI",filter:"LineGrid_filter__3Ghd9",select:"LineGrid_select__1jClc",default:"LineGrid_default__1xDF5",displaySelect:"LineGrid_displaySelect__3XO4z"}},6998:function(e){e.exports={tabList:"TabPicker_tabList__2Qoyt",tab:"TabPicker_tab__2sgFs"}},2258:function(e){e.exports={topLine:"TopLine_topLine__2VbBj",column:"TopLine_column__3FL0O",bubble:"TopLine_bubble__1igxh",bad:"TopLine_bad__2XjpU",warning:"TopLine_warning__2qT99",good:"TopLine_good__C5JF6"}},2263:function(e){e.exports={flexWrap:"TopLineChart_flexWrap__3XwwY",flexCol:"TopLineChart_flexCol__9AJuS"}},9849:function(e){e.exports={topLineMobile:"TopLineMobile_topLineMobile__36gJa",service:"TopLineMobile_service__18BBL",ridership:"TopLineMobile_ridership__1ZAht",lines:"TopLineMobile_lines___bOz2",large:"TopLineMobile_large__3AekZ"}}},function(e){e.O(0,[774,90,885,698,61,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);