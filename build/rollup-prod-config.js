const { _package, banner, handleMinEsm } = require('./helper');
const baseConfig = require('./rollup-base-config');
const { terser } = require('rollup-plugin-terser');

const config = Object.assign(baseConfig, {
  output: [
    {
      file: handleMinEsm(_package.main),
      format: 'umd',
      name: _package.namespace,
      banner: banner,
      extend: false,
    }
  ]
});

config.plugins.push(terser());

module.exports = config;
