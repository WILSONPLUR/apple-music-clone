module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "deep-gray": "#262626",
                "dark-gray": "#1F1F1F",
                "medium-gray": "#2B2B2B",
                "border-gray": "#3C3C3C",
                "light-gray": "#3A3A3B",
            },
            fontFamily: {
                default: ["Inter", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
