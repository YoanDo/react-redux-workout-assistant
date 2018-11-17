module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    plugins: ["react-redux"],
    "ecmaFeatures": {
      "jsx": true
    },
    "parser": "babel-eslint",
    "extends": [
      // "airbnb",
      "plugin:react-redux/recommended"
    ],
    "rules": {
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "quotes": [2, "single"],
      "no-alert": [0],
      "camelcase": [2],
      "no-unused-vars": [2],
      "no-shadow": [2],
      "no-var": [2],
      "prefer-arrow-callback": [2]
    }
}
