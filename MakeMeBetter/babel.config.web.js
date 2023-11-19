module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
        'babel-preset-expo'
        ],
        plugins: [
        '@babel/plugin-proposal-export-namespace-from',
        // '@babel/plugin-transform-modules-commonjs',
        'react-native-reanimated/plugin',
        ["module-resolver", {
            "alias": {
            "~/assets/*": [
                "assets/*"
            ],
            "~/components/*": [
                "components/*"
            ]
            },
            "extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ]
        }],
        ],

    };
};
