const {PHASE_PRODUCTION_SERVER} =
    process.env.NODE_ENV === "development"
        ? {} // We're never in "production server" phase when in development mode
        : !process.env.NOW_REGION
        ? require("next/constants") // Get values from `next` package when building locally
        : require("next-server/constants"); // Get values from `next-server` package when building on now v2

const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx"],
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        };

        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === "babel-loader") {
                rule.options.cacheDirectory = false;
            }
            return rule;
        });
        return config;
    }
};

module.exports = (phase, {defaultConfig}) => {
    if (phase === PHASE_PRODUCTION_SERVER) {
        return {};
    }

    const images = require("remark-images");
    const emoji = require("remark-emoji");
    const withImages = require("next-images");
    const withSass = require("@zeit/next-sass");
    const withMDX = require("@zeit/next-mdx")({
        extension: /\.(md|mdx)$/,
        options: {
            mdPlugins: [images, emoji]
        }
    });
    const {withPlugins} = require("next-compose-plugins");

    return withPlugins([[withSass], [withImages], [withMDX]], nextConfig)(phase, defaultConfig);
};
