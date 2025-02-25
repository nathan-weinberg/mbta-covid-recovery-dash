// See https://github.com/vercel/next.js/issues/10142#issuecomment-648974042
const hackStylesToSupportNonPureDeclarations = (config) => {
    const oneOf = config.module.rules.find((rule) => typeof rule.oneOf === "object");

    const fixUse = (use) => {
        if (use.loader.indexOf("css-loader") >= 0 && use.options.modules) {
            use.options.modules.mode = "local";
        }
    };

    if (oneOf) {
        oneOf.oneOf.forEach((rule) => {
            if (Array.isArray(rule.use)) {
                rule.use.map(fixUse);
            } else if (rule.use && rule.use.loader) {
                fixUse(rule.use);
            }
        });
    }

    return config;
};

const assetPrefix = process.env.BUILD_GH_PAGES === "true" ? "./" : null;

module.exports = {
    webpack: (config) => {
        return hackStylesToSupportNonPureDeclarations(config);
    },
    // https://stackoverflow.com/questions/65487914/error-image-optimization-using-next-js-default-loader-is-not-compatible-with-n
    // On Next.js 12.3 we can use unoptimized: true instead
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix,
};
