const terser = require('rollup-plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const isDev = process.env.NODE_ENV === 'develop';

const { version } = require('./package.json');
const outputDir = isDev ? 'stage' : 'dist';
const libName = 'libName';

const config = {
  input: './src/index.ts',
  output: [{
    file: `./${outputDir}/bundle.js`,
    name: libName,
    format: 'iife',
    sourcemap: 'inline'
  }],
  plugins: [
    replace({
      __VERSION__: version,
      preventAssignment: true
    }),
    json(),
    nodeResolve(),
    commonjs(),
    typescript()
  ],
  watch: {
    buildDelay: 100,
    include: 'src/**',
    exclude: 'node_modules/**'
  }
}

if(!isDev) {
  config.output.push({
    file: './dist/bundle.min.js',
    name: libName,
    format: 'iife',
    sourcemap: true,
    plugins: [terser.terser()]
  })
}


module.exports = config;
