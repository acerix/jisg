import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {rules: {
    semi: [
        2,
        "never"
    ]
  }},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
