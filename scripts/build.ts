import fs from "fs-extra";
import path from "path";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
import config from "../vite.config";

async function start() {
  // 全量打包
  //await build(defineConfig(config as UserConfig) as InlineConfig);

  const srcDir = path.resolve(path.resolve(), "./src");
  console.log(srcDir);

  const InitOutDir = config.build!.outDir;
  fs.readdirSync(srcDir)
    .filter((item) => {
      const componentDir = path.join(srcDir, item);
      const isDir = fs.statSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      console.log(name);
      const outDir = path.resolve(InitOutDir, name);
      //const outDir = path.resolve(config.build!.outDir, name);

      //console.log(path.resolve(InitOutDir, name), "----------------", outDir);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`, "cjs"],
        },
        outDir,
      };
      //Object.assign(config.build!, custom);
      await build(
        defineConfig({
          ...config,
          build: {
            ...config.build,
            ...custom,
          },
        } as UserConfig) as InlineConfig
      );

      //await build(defineConfig(config as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "Y-COM/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
        `utf-8`
      );
    });
}

start();
