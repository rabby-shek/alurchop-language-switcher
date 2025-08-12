import fs from "fs";
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// Read and parse package.json manually
const pkg = JSON.parse(
  fs.readFileSync(path.resolve("./package.json"), { encoding: "utf-8" })
);

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx"]  // Add .jsx here
    }),
     babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"]  // Include .jsx here to process JSX files
    }),
    commonjs(),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    postcss()
  ]
};
