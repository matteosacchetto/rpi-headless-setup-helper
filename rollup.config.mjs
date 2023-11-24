// rollup.config.mjs
import json from '@rollup/plugin-json';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import run from '@rollup/plugin-run';
import externals from 'rollup-plugin-node-externals';
import esbuild from 'rollup-plugin-esbuild';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import { defineConfig } from 'rollup';
import replace from '@rollup/plugin-replace';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const preferConst = true; // Use "const" instead of "var"
const usePreserveModules = true; // `true` -> keep modules structure, `false` -> combine everything into a single file
const useThrowOnError = false; // On error throw and exception
const useEsbuild = true; // `true` -> use esbuild, `false` use tsc

const isCli = process.env.NODE_ENV === 'production' ? true : false; // `true` -> is a CLI so bunlde to a single file, `false` not a cli, so use `usePreserveModules`
const isWatched = process.env.ROLLUP_WATCH === 'true'; // `true` if -w option is used
const useSourceMaps = process.env.NODE_ENV === 'debug' ? true : false; // gerenetae sourcemaps only for debug

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    generatedCode: {
      constBindings: preferConst,
    },
    preserveModules: isCli ? false : usePreserveModules,
    strict: true,
    entryFileNames: '[name].mjs',
    banner: isCli ? '#!/usr/bin/env node' : undefined,
    sourcemap: useSourceMaps,
  },
  plugins: [
    externals(),
    eslint({
      throwOnError: useThrowOnError,
      cache: true,
    }),
    json({
      preferConst: preferConst,
    }),
    replace({
      'process.env.PKG_NAME': `"${Object.keys(pkg.bin)[0]}"`,
      'process.env.PKG_VERSION': `"${pkg.version}"`,
      'process.env.PKG_DESCRIPTION': `"${pkg.description}"`,
      preventAssignment: true,
    }),
    useEsbuild
      ? [
          typescriptPaths({
            preserveExtensions: true,
          }),
          esbuild({
            legalComments: 'none',
            target: 'esnext',
          }),
        ]
      : typescript({
          noEmitOnError: useThrowOnError,
          removeComments: true,
        }),
    isWatched ? run() : undefined,
  ],
});
