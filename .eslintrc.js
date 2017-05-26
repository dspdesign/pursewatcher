module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
        "no-debugger": 0,
        "no-console": 1,
        "new-cap": 0,
        "strict": 1,
        "eqeqeq": [
            "error",
            "smart"
        ],
        "camelcase": "error",
        "semi": [
            "error",
            "always"
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-underscore-dangle": 0,
        "no-use-before-define": 0,
        "eol-last": 0,
        "quotes": [
            2,
            "single"
        ],
        "jsx-quotes": [
            1,
            "prefer-single"
        ],
        "prefer-const": 1,
        "react/jsx-no-undef": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 3
            }
        ],
        "react/jsx-closing-bracket-location": [
            "error",
            {
                "nonEmpty": "after-props",
                "selfClosing": "after-props"
            }
        ],
        "react/jsx-no-duplicate-props": 2,
        "import/named": [
            "error"
        ],
        "no-debugger": 1,
        "no-console": 1,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
