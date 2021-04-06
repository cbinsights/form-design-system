// Custom filters

exports.isColor = {
  name: 'isColor',
  matcher: (prop) => prop.attributes.category === 'color',
};

exports.excludeColor = {
  name: 'excludeColor',
  matcher: (prop) => prop.attributes.category !== 'color',
};

exports.isCustomMedia = {
  name: 'isCustomMedia',
  matcher: (prop) => prop.attributes.category === 'customMedia',
};

exports.excludeCustomMedia = {
  name: 'excludeCustomMedia',
  matcher: (prop) => prop.attributes.category !== 'customMedia',
};

// used to register filters for dictionary config
exports.allFilters = [
  exports.isColor,
  exports.excludeColor,
  exports.isCustomMedia,
  exports.excludeCustomMedia,
];
