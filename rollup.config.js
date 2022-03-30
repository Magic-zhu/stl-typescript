
import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'index.ts',
    plugins: [
      typescript(),
      terser(),
    ],
    output: [
      {
        file: 'dist/helper.es.js',
        format: 'es',
        name: 'helper',
      },
      {
        file: 'dist/helper.iife.js',
        format: 'iife',
        name: 'helper',
      },
      {
        file: 'dist/helper.umd.js',
        format: 'umd',
        name: 'helper',
      },
    ],
  },
];