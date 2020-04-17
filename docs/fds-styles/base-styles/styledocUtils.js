"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typesetting = exports.Headers = exports.Example = exports.labelStyle = exports.layoutStyle = exports.containerStyles = exports.generalStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleConstants = _interopRequireDefault(require("../../lib/dictionary/js/styleConstants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalStyles = {
  width: _styleConstants.default.MEDIA_XL,
  height: _styleConstants.default.MEDIA_XL,
  padding: '0.25rem'
};
exports.generalStyles = generalStyles;
var containerStyles = {
  margin: '-.9rem'
};
exports.containerStyles = containerStyles;
var layoutStyle = {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '.9rem'
};
exports.layoutStyle = layoutStyle;
var labelStyle = {
  fontSize: 11,
  marginBottom: 10,
  fontFamily: _styleConstants.default.FONT_FAMILY_MONO,
  color: '#f09'
};
exports.labelStyle = labelStyle;

var Example = function Example(props) {
  return _react.default.createElement("div", {
    style: layoutStyle
  }, _react.default.createElement("div", {
    style: labelStyle
  }, props.label), props.children);
};

exports.Example = Example;
Example.propTypes = {
  label: _propTypes.default.string,
  children: _propTypes.default.node
};

var typeStyle = _objectSpread({}, labelStyle, {
  marginBottom: 0
});

var Headers = function Headers() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, "Heading1"), _react.default.createElement("h2", null, "Heading2"), _react.default.createElement("h3", null, "Heading3"), _react.default.createElement("h4", null, "Heading4"), _react.default.createElement("h5", null, "Heading5"), _react.default.createElement("h6", null, "Heading6"));
};

exports.Headers = Headers;

var Typesetting = function Typesetting(_ref) {
  var isInverted = _ref.isInverted;
  return _react.default.createElement("div", {
    className: isInverted && 'inverted bgColor--navy padding--all'
  }, _react.default.createElement("div", {
    style: typeStyle
  }, "type--head1"), _react.default.createElement("div", {
    className: "type--head1 margin--bottom--half"
  }, "Sphinx of black quartz, judge my vow"), _react.default.createElement("div", {
    style: typeStyle
  }, "type--head2"), _react.default.createElement("div", {
    className: "type--head2 margin--bottom--half"
  }, "Sphinx of black quartz, judge my vow"), _react.default.createElement("div", {
    style: typeStyle
  }, "type--head3"), _react.default.createElement("div", {
    className: "type--head3 margin--bottom--half"
  }, "Sphinx of black quartz, judge my vow"), _react.default.createElement("div", {
    style: typeStyle
  }, "type--head4"), _react.default.createElement("div", {
    className: "type--head4 margin--bottom--half"
  }, "Sphinx of black quartz, judge my vow"), _react.default.createElement("div", {
    style: typeStyle
  }, "type--big"), _react.default.createElement("div", {
    className: "type--big margin--bottom--half"
  }, "Sphinx of black quartz, judge my vow"), _react.default.createElement("div", {
    style: typeStyle
  }, "type--data"), _react.default.createElement("div", {
    className: "type--data margin--bottom--half"
  }, "Sphinx of black quartz, judge my vow"), _react.default.createElement("div", {
    style: typeStyle
  }, "type--caption"), _react.default.createElement("div", {
    className: "type--caption margin--bottom--half"
  }, "Sphinx of black quartz, judge my vow"), _react.default.createElement("div", null, _react.default.createElement("span", {
    style: typeStyle
  }, "type--link "), " (anchor)"), _react.default.createElement("a", {
    className: "type--link margin--bottom--half display--block",
    href: "#"
  }, "Go to Homepage"));
};

exports.Typesetting = Typesetting;
Typesetting.propTypes = {
  isInverted: _propTypes.default.bool
};
//# sourceMappingURL=styledocUtils.js.map