module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 2, {"MemberExpression": 0}],
        "semi": ["error", "always"],
        "no-unused-vars": "off",
        "no-console": "off",
        "global-require": "error",
        "space-before-blocks": "error",
        "no-multi-spaces": "error",
        "comma-spacing": "error",
        "no-trailing-spaces": "error",
        "space-infix-ops": "error",
        "no-multiple-empty-lines": "error"
    }
};
