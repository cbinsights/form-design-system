const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          ie: '11' /* transform arrow functions */,
        },
      },
    ],
    '@babel/preset-react',
    ['@babel/preset-typescript'],
  ],
  plugins: [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs',
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragmaFrag: 'React.Fragment',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};

module.exports = (api) => {
  // avoid copying test files to destination for JSX build
  if (api.env('jsx_compile')) {
    config.ignore = [
      /\.test\.jsx?$/,
      /\.test\.tsx?$/,
      /\.stories\.jsx?$/,
      /\.stories\.tsx?$/,
    ];
  }

  return config;
};
