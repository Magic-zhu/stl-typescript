
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
        file: 'dist/helper.es.js',
        format: 'es',
        name: 'Helper',
      },
      {
        file: 'dist/helper.iife.js',
        format: 'iife',
        name: 'Helper',
      },
      {
        file: 'dist/helper.umd.js',
        format: 'umd',
        name: 'Helper',
      },
    ],
  },
];