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
    ['@babel/preset-react'],
  ],
  plugins: [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs',
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragmaFrag": "React.Fragment"
      }
    ],
    [
      "module-resolver", {
        "root": ["./src"],
        "alias": {
          "lib": "./lib",
        }
      }
    ]
  ],
};

module.exports = (api) => {

  // avoid copying test files to destination for JSX build
  if (api.env('jsx_compile')) {
    config.ignore = [
      /\.test\.jsx?$/
    ];
  }

  return config;
};
