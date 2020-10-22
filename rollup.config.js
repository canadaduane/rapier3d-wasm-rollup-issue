import { wasm } from "@rollup/plugin-wasm";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    // file: "dist/bundle.js",
    dir: "dist/",
    format: "cjs",
  },
  plugins: [
    resolve({
      browser: true,
      extensions: [".js", ".ts", ".wasm"],
    }),
    wasm(),
  ],
};
