// Custom filters to be used in style-dictionary.config.json
module.exports = [
  {
    name: 'isColor',
    matcher: (prop) => prop.attributes.category === 'color',
  },
  {
    name: 'isCustomMedia',
    matcher: (prop) => prop.attributes.category === 'customMedia',
  },
  {
    name: 'excludeCustomMedia',
    matcher: (prop) => prop.attributes.category !== 'customMedia',
  },
];
