import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.tsx", // File đầu vào
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Đánh dấu React và các peer dependencies là external
    resolve(), // Xử lý import từ node_modules
    commonjs(), // Chuyển đổi CommonJS sang ESModules
    typescript({ tsconfig: "./tsconfig.json" }), // Sử dụng file tsconfig.json
  ],
  external: ["react", "react-dom"], // Không đóng gói React và React DOM
};
