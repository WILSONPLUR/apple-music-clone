const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/browse",
                permanent: true,
            },
        ];
    },
});
