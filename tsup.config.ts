import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  treeshake: true,
  splitting: true,
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  clean: true,
  ...options,
}));
