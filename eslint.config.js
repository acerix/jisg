import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"

export default [
  {files: ["**/*.ts"]},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  {rules: {
    semi: [
        2,
        "never"
    ]
  }}
]
