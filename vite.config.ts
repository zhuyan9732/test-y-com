import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    //sourcemap: true, // 输出单独 source文件
    lib: {
      entry: "./src/index.ts", // 组件库入口文件
      name: "Y-COM",
      formats: ["es", "umd", "cjs"], // 输出格式
      fileName: "Y-COM",
    },
    outDir: "dist", // 输出目录
    rollupOptions: {
      // 其他 Rollup 配置
      external: ["react", "react-dom"], // 将这些库视为外部依赖
    },
  },
});
