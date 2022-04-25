const copy = require('rollup-plugin-copy');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');

const { commonPlugins } = require('./common.rollup.js');

const lib = {
  input: 'index.js',
  external: ['lit', '@skatejs/val'],
  output: {
    file: './lib/index.js',
    format: 'es',
  },
  plugins: [
    ...commonPlugins,
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
      plugins: ['@babel/plugin-proposal-class-properties'],
      babelrc: false,
      exclude: ['node_modules/**'],
      babelHelpers: 'bundled',
    }),
    nodeResolve({
      mainFields: ['module', 'main'],
      resolveOnly: [/^\.{0,2}\/|\.scss$/i], // threat all node_modules as external apart od .scss files
    }),
    copy({
      targets: [{ src: 'index.d.ts', dest: './lib' }],
    }),
  ],
};

const libReact = {
  ...lib,
  input: 'index.react.js',
  output: {
    file: './lib/index.react.js',
    format: 'es',
  },
  plugins: [
    ...lib.plugins,
    copy({
      targets: [{ src: 'index.react.d.ts', dest: './lib' }],
    }),
  ],
};

module.exports = { lib, libReact };
