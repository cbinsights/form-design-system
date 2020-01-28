module.exports = {
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
    '@babel/plugin-transform-modules-commonjs', 
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
