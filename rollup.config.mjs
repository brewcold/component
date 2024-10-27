import { babel } from "@rollup/plugin-babel"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"

const config = tsconfigpath => {
  const isCJS = tsconfigpath.includes("cjs")
  const format = isCJS ? "cjs" : "es"
  const file = isCJS ? "./dist/cjs/index.cjs" : "./dist/index.mjs"
  return {
    input: "./index.ts",
    output: [
      {
        file,
        format,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        presets: ["@babel/env", "@babel/react", "@babel/preset-typescript"],
        plugins: ["@emotion"],
      }),
      typescript(),
    ],
  }
}

export default [config("tsconfig.json"), config("tsconfig.cjs.json")]
