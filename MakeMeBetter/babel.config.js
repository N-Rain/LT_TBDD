module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "~/assets": [
            "assets"
          ],
          "~/components": [
            "src/components"
          ],
          "~/services": [
            "src/services"
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
