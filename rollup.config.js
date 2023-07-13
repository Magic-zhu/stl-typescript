
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'index.ts',
    plugins: [
      resolve(),
      typescript(),
      terser(),
    ],
    output: [
      {
        file: 'dist/stl.es.js',
        format: 'es',
        name: 'STL',
      },
      {
        file: 'dist/stl.iife.js',
        format: 'iife',
        name: 'STL',
      },
      {
        file: 'dist/stl.umd.js',
        format: 'umd',
        name: 'STL',
      },
    ],
  },
];