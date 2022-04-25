const path = require('path');
const fs = require('fs');
const base = path.resolve(process.cwd(), 'src');
const babelOptions = require('./.babelrc'); // get the babelrc file
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv-extended').load();

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require(path.resolve(__dirname, '..', 'config', 'globals.js'))
  .map(item => `@import '${base}/${item}';`)
  .join('\n')
  .replace(/\\/g, '/'); // use '/' dir seps on win32, to satisfy sass-loader/LibSass; otherwise crash
const { gatherAllVersions } = require(path.resolve(
  __dirname,
  '..',
  'scripts',
  'build',
  'version_info.js'
));
const stringifiedVersionInfo = gatherAllVersions(path.resolve(__dirname, '..'));
const colorsScssFile = fs.readFileSync(
  path.resolve(
    __dirname,
    '..',
    'src',
    'components',
    '00-materials',
    'styles',
    '00-colors.scss'
  )
);

module.exports = ({ config }) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '~/materials': path.join(base, 'components', 'materials'),
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      __VERSION_INFO__: stringifiedVersionInfo,
      __COLORS_SCSS_AS_STRING__: '`' + colorsScssFile.toString() + '`',
    }),
    new CopyPlugin({ patterns: [{ from: 'src/other/pages/utils/assets' }] })
  );

  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: [
        'to-string-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [autoprefixer({ grid: 'autoplace' })],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            data: globals,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.js$/,
      exclude: /node_modules\/(?!@?lit|@axa\-ch)/,
      loader: 'babel-loader',
      options: babelOptions,
    },
    {
      test: /\.jsx/,
      exclude: /node_modules\/(?!@?lit|@axa\-ch)/,
      loader: 'babel-loader',
      options: { ...babelOptions, presets: [...babelOptions.presets] },
    }
  );

  config.watchOptions = {
    poll: 1000,
    ignored: ['node_modules'],
  };

  return config;
};
