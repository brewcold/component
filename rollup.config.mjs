import babel from "@rollup/plugin-babel"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"

const config = isCJS => {
  const format = isCJS ? "cjs" : "es"
  const file = isCJS ? "./dist/cjs/index.cjs" : "./dist/index.mjs"
  return {
    input: "./index.ts",
    output: [{ file, format }],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        presets: ["@babel/env", "@babel/react", "@babel/preset-typescript"],
        plugins: ["@emotion"],
      }),
      typescript({
        outputToFilesystem: true,
        tsconfig: isCJS ? "tsconfig.cjs.json" : "tsconfig.json",
        declaration: true,
        declarationDir: isCJS ? "dist/cjs" : "dist",
        rootDir: ".",
        exclude: ["**/__tests__", "**/*.test.ts"],
      }),
    ],
  }
}

export default [config(false), config(true)]
