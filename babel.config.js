module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          ie: "11", /* transform arrow functions */
        },
      },
    ],
	 ["@babel/preset-react"]
  ],
};
