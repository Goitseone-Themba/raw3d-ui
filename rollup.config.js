import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import { defineConfig } from 'rollup';

export default defineConfig([
  // Main bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      url({ include: ['**/*.wav'], limit: 1000000 }),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
    external: ['react', 'react-dom', 'framer-motion', 'styled-components'],
  },
  // Theme bundle
  {
    input: 'src/theme.ts',
    output: [
      {
        file: 'dist/theme.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/theme.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
    external: ['styled-components'],
  },
]);
