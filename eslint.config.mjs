import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginPrettier from "eslint-plugin-prettier"
import configPrettier from "eslint-config-prettier"
import pluginStorybook from "eslint-plugin-storybook"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    plugins: [pluginPrettier],
    extends: ["plugin:prettier/recommended", configPrettier],
  },
  { plugins: [pluginStorybook], extends: ["plugin:storybook/recommended"] },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]
