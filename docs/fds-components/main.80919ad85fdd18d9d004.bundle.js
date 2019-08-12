(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    147: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(49),
        __webpack_require__(9),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.withFdsIconWrapper = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _propTypes = _interopRequireDefault(__webpack_require__(3));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      var withFdsIconWrapper = function(WrappedComponent) {
        var IconComponent = function(props) {
          var classNames = (0, _classnames.default)(
              'fds-icon',
              'fds-icon--'.concat(props.size),
              props.className
            ),
            otherProps = {};
          return (
            props.color && (otherProps.style = { fill: props.color }),
            _react.default.createElement(
              'div',
              _extends({ className: classNames }, otherProps),
              _react.default.createElement(WrappedComponent, null)
            )
          );
        };
        (IconComponent.defaultProps = { size: 's' }),
          (IconComponent.propTypes = {
            color: _propTypes.default.string,
            size: _propTypes.default.oneOf(['xs', 's', 'm', 'l', 'xl']),
            className: _propTypes.default.string,
          });
        var IconName = WrappedComponent.name;
        return (IconComponent.displayName = IconName), IconComponent;
      };
      exports.withFdsIconWrapper = withFdsIconWrapper;
      var _default = withFdsIconWrapper;
      exports.default = _default;
    },
    154: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(6),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.AlignPropMap = exports.JustifyPropMap = exports.DirectionPropMap = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _propTypes = _interopRequireDefault(__webpack_require__(3));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      var DirectionPropMap = { row: 'flex--row', column: 'flex--column' };
      exports.DirectionPropMap = DirectionPropMap;
      var JustifyPropMap = {
        end: 'flex--justifyEnd',
        center: 'flex--justifyCenter',
        spaceBetween: 'flex--justifySpaceBetween',
        spaceAround: 'flex--justifySpaceAround',
      };
      exports.JustifyPropMap = JustifyPropMap;
      var AlignPropMap = {
        start: 'flex--alignStart',
        end: 'flex--alignEnd',
        center: 'flex--alignCenter',
        stretch: 'flex--alignStretch',
      };
      exports.AlignPropMap = AlignPropMap;
      var Flex = function(props) {
        var classNames = (0, _classnames.default)(
          'flex',
          AlignPropMap[props.align],
          DirectionPropMap[props.direction],
          _defineProperty(
            {},
            'flex--'.concat(props.direction, '--reverse'),
            props.reverse
          ),
          _defineProperty({}, JustifyPropMap[props.justify], props.justify),
          { 'flex--wrap': props.wrap, 'flex--noGutters': props.noGutters },
          props.className
        );
        return _react.default.createElement(
          'div',
          { className: classNames, 'data-test': props.dataTest },
          props.children
        );
      };
      (Flex.displayName = 'Flex'),
        (Flex.defaultProps = { direction: 'row', align: 'stretch', dataTest: '' }),
        (Flex.propTypes = {
          direction: _propTypes.default.oneOf(Object.keys(DirectionPropMap)),
          justify: _propTypes.default.oneOf(Object.keys(JustifyPropMap)),
          align: _propTypes.default.oneOf(Object.keys(AlignPropMap)),
          noGutters: _propTypes.default.bool,
          wrap: _propTypes.default.bool,
          reverse: _propTypes.default.bool,
          className: _propTypes.default.string,
          children: _propTypes.default.oneOfType([
            _propTypes.default.arrayOf(_propTypes.default.node),
            _propTypes.default.node,
          ]).isRequired,
          dataTest: _propTypes.default.string,
        });
      var _default = Flex;
      (exports.default = _default),
        (Flex.__docgenInfo = {
          description: '@param {Object} props react props\n@returns {ReactElement}',
          methods: [],
          displayName: 'Flex',
          props: {
            direction: {
              defaultValue: { value: "'row'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: '"row"', computed: !1 },
                  { value: '"column"', computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            align: {
              defaultValue: { value: "'stretch'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: '"start"', computed: !1 },
                  { value: '"end"', computed: !1 },
                  { value: '"center"', computed: !1 },
                  { value: '"stretch"', computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            dataTest: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'data-test to pass to flex parent',
            },
            justify: {
              type: {
                name: 'enum',
                value: [
                  { value: '"end"', computed: !1 },
                  { value: '"center"', computed: !1 },
                  { value: '"spaceBetween"', computed: !1 },
                  { value: '"spaceAround"', computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            noGutters: {
              type: { name: 'bool' },
              required: !1,
              description: 'When set, gutters are removed from `FlexItem` children',
            },
            wrap: {
              type: { name: 'bool' },
              required: !1,
              description: 'When set, `FlexItem` children are allowed to wrap',
            },
            reverse: {
              type: { name: 'bool' },
              required: !1,
              description: 'When set, `FlexItem` order is rendered in reverse',
            },
            className: {
              type: { name: 'string' },
              required: !1,
              description: 'Classes to pass to flex parent',
            },
            children: {
              type: {
                name: 'union',
                value: [{ name: 'arrayOf', value: { name: 'node' } }, { name: 'node' }],
              },
              required: !0,
              description: 'React children (should be of type `FlexItem`)',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/layout/Flex.jsx'] = {
            name: 'Flex',
            docgenInfo: Flex.__docgenInfo,
            path: 'src/components/layout/Flex.jsx',
          });
    },
    155: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(6),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _propTypes = _interopRequireDefault(__webpack_require__(3));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      var JustifyPropMap = {
          start: 'flexItem--justifyStart',
          end: 'flexItem--justifyEnd',
          center: 'flexItem--justifyCenter',
          spaceBetween: 'flexItem--justifySpaceBetween',
          spaceAround: 'flexItem--justifySpaceAround',
        },
        AlignPropMap = {
          start: 'flexItem--alignStart',
          end: 'flexItem--alignEnd',
          center: 'flexItem--alignCenter',
        },
        FlexItem = function(props) {
          var _cx,
            classNames = (0, _classnames.default)(
              'flexItem',
              { 'flexItem--shrink': props.shrink },
              (_defineProperty((_cx = {}), JustifyPropMap[props.justify], props.justify),
              _defineProperty(_cx, AlignPropMap[props.align], props.align),
              _cx),
              props.className
            );
          return _react.default.createElement(
            'div',
            { className: classNames, 'data-test': props.dataTest },
            props.children
          );
        };
      (FlexItem.displayName = 'FlexItem'),
        (FlexItem.defaultProps = { shrink: !1, dataTest: '' }),
        (FlexItem.propTypes = {
          justify: _propTypes.default.oneOf(Object.keys(JustifyPropMap)),
          align: _propTypes.default.oneOf(Object.keys(AlignPropMap)),
          shrink: _propTypes.default.bool,
          className: _propTypes.default.string,
          children: _propTypes.default.node,
          dataTest: _propTypes.default.string,
        });
      var _default = FlexItem;
      (exports.default = _default),
        (FlexItem.__docgenInfo = {
          description: '@param {Object} props react props\n@returns {ReactElement}',
          methods: [],
          displayName: 'FlexItem',
          props: {
            shrink: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: 'When set, the `FlexItem` will shrink to content size',
            },
            dataTest: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'data-test to pass to flex child',
            },
            justify: {
              type: {
                name: 'enum',
                value: [
                  { value: '"start"', computed: !1 },
                  { value: '"end"', computed: !1 },
                  { value: '"center"', computed: !1 },
                  { value: '"spaceBetween"', computed: !1 },
                  { value: '"spaceAround"', computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            align: {
              type: {
                name: 'enum',
                value: [
                  { value: '"start"', computed: !1 },
                  { value: '"end"', computed: !1 },
                  { value: '"center"', computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            className: {
              type: { name: 'string' },
              required: !1,
              description: 'Classes to pass to flex child',
            },
            children: {
              type: { name: 'node' },
              required: !1,
              description: 'React children',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/layout/FlexItem.jsx'] = {
            name: 'FlexItem',
            docgenInfo: FlexItem.__docgenInfo,
            path: 'src/components/layout/FlexItem.jsx',
          });
    },
    207: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = (0, _interopRequireDefault(__webpack_require__(147)).default)(
        function() {
          return _react.default.createElement(
            'svg',
            { viewBox: '0 0 24 24' },
            _react.default.createElement(
              'g',
              { fillRule: 'evenodd' },
              _react.default.createElement(
                'g',
                null,
                _react.default.createElement('polygon', {
                  points:
                    '10.363961 11.7781746 4 5.41421356 5.41421356 4 11.7781746 10.363961 18.1421356 4 19.5563492 5.41421356 13.1923882 11.7781746 19.5563492 18.1421356 18.1421356 19.5563492 11.7781746 13.1923882 5.41421356 19.5563492 4 18.1421356',
                })
              )
            )
          );
        }
      );
      exports.default = _default;
    },
    217: function(module, exports, __webpack_require__) {
      'use strict';
      (exports.BORDER_RADIUS_DEFAULT = '4px'),
        (exports.COLOR_CHARCOAL = '#404040'),
        (exports.COLOR_SLATE = '#757575'),
        (exports.COLOR_GRAY = '#a2a0a0'),
        (exports.COLOR_SILVER = '#c2bfbf'),
        (exports.COLOR_TIMBERWOLF = '#d6d4d4'),
        (exports.COLOR_LIGHT_GRAY = '#f2f2f2'),
        (exports.COLOR_WHITE = '#ffffff'),
        (exports.COLOR_NAVY = '#003366'),
        (exports.COLOR_BLUE = '#006699'),
        (exports.COLOR_AQUA = '#4cabce'),
        (exports.COLOR_SKY = '#bbdbe5'),
        (exports.COLOR_HAZE = '#f1f5f7'),
        (exports.COLOR_RED = '#e5323e'),
        (exports.COLOR_ORANGE = '#ff6633'),
        (exports.COLOR_SIENNA = '#f9a862'),
        (exports.COLOR_SAND = '#fcc89a'),
        (exports.COLOR_GREEN = '#00986b'),
        (exports.COLOR_MINT = '#70c390'),
        (exports.COLOR_PURPLE = '#a02385'),
        (exports.COLOR_VIOLET = '#d772ad'),
        (exports.XS = '(min-width: 320px)'),
        (exports.S = '(min-width: 480px)'),
        (exports.M = '(min-width: 768px)'),
        (exports.L = '(min-width: 1024px)'),
        (exports.XL = '(min-width: 1280px)'),
        (exports.FONT_COLOR_LINK = '#4cabce'),
        (exports.FONT_COLOR_DARK = '#404040'),
        (exports.FONT_COLOR_DEFAULT = '#757575'),
        (exports.FONT_COLOR_LIGHT = '#a2a0a0'),
        (exports.FONT_COLOR_DISABLED = '#c2bfbf'),
        (exports.FONT_FAMILY_CONDENSED =
          "'Roboto Condensed', 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif"),
        (exports.FONT_FAMILY_DEFAULT =
          "Roboto, 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif"),
        (exports.FONT_FAMILY_MONO = 'Monaco, Consolas, monospace'),
        (exports.FONT_LINE_HEIGHT_BIG_TEXT = '1.1'),
        (exports.FONT_LINE_HEIGHT_DEFAULT = '1.4'),
        (exports.FONT_LINE_HEIGHT_SMALL_TEXT = '1.6'),
        (exports.FONT_SIZE_HEADING_1 = '39px'),
        (exports.FONT_SIZE_HEADING_2 = '31px'),
        (exports.FONT_SIZE_HEADING_3 = '25px'),
        (exports.FONT_SIZE_BIG = '20px'),
        (exports.FONT_SIZE_DEFAULT = '16px'),
        (exports.FONT_SIZE_SMALL = '13px'),
        (exports.FONT_SIZE_TINY = '10px'),
        (exports.FONT_WEIGHT_DEFAULT = '400'),
        (exports.FONT_WEIGHT_BOLD = '700'),
        (exports.MEDIA_XS = '16px'),
        (exports.MEDIA_S = '24px'),
        (exports.MEDIA_M = '40px'),
        (exports.MEDIA_L = '60px'),
        (exports.MEDIA_XL = '86px'),
        (exports.SPACE_DOUBLE = '32px'),
        (exports.SPACE_DEFAULT = '16px'),
        (exports.SPACE_HALF = '8px'),
        (exports.ZINDEX_MAIN = '10'),
        (exports.ZINDEX_NAVIGATION = '20'),
        (exports.ZINDEX_POPOVER = '30'),
        (exports.ZINDEX_BANNER = '40'),
        (exports.ZINDEX_FLOATING_ACTION = '50'),
        (exports.ZINDEX_SHIM = '60'),
        (exports.ZINDEX_MODAL = '70'),
        (exports.ZINDEX_CRAZY = '80'),
        (exports.MOTION_EASING_DEFAULT = 'cubic-bezier(0.4, 0, 0.2, 1)'),
        (exports.MOTION_EASING_DECELERATE = 'cubic-bezier(0, 0, 0.2, 1)'),
        (exports.MOTION_EASING_ACCELERATE = 'cubic-bezier(0.4, 0, 1, 1)');
    },
    318: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = function(_ref) {
        var href = _ref.href,
          as = _ref.as;
        return as || (href ? 'a' : 'button');
      };
      exports.default = _default;
    },
    339: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _propTypes = _interopRequireDefault(__webpack_require__(3)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _Button = _interopRequireDefault(__webpack_require__(321)),
        _IconButton = _interopRequireDefault(__webpack_require__(340)),
        _styleConstants = _interopRequireDefault(__webpack_require__(217)),
        _CheckIcon = _interopRequireDefault(__webpack_require__(341)),
        _InformationIcon = _interopRequireDefault(__webpack_require__(785)),
        _DenyIcon = _interopRequireDefault(__webpack_require__(207)),
        _Flex = _interopRequireDefault(__webpack_require__(154)),
        _FlexItem = _interopRequireDefault(__webpack_require__(155)),
        _CountdownButton = _interopRequireDefault(__webpack_require__(342)),
        _customPropTypes = _interopRequireDefault(__webpack_require__(792));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _ref2 = _react.default.createElement(
          'div',
          { role: 'image', className: 'typemod--white' },
          '!'
        ),
        _ref3 = _react.default.createElement(
          'div',
          { role: 'image', className: 'typemod--white' },
          '!'
        ),
        _ref4 = _react.default.createElement('div', {
          className: 'toast-progressBar toast-progressBar--continuous',
        }),
        Toast = function(_ref) {
          var content = _ref.content,
            type = _ref.type,
            actionLabel = _ref.actionLabel,
            progress = _ref.progress,
            onAction = _ref.onAction,
            isAutoDismiss = _ref.isAutoDismiss,
            dismissDelay = _ref.dismissDelay,
            canDismiss = _ref.canDismiss,
            dismissToast = _ref.dismissToast,
            classNames = (0, _classnames.default)('toast', 'toast--'.concat(type)),
            icon = {
              info: _react.default.createElement(_InformationIcon.default, {
                size: 'l',
                color: _styleConstants.default.COLOR_AQUA,
              }),
              success: _react.default.createElement(_CheckIcon.default, {
                size: 'xs',
                color: _styleConstants.default.COLOR_WHITE,
              }),
              warn: _ref2,
              error: _ref3,
            }[type],
            toastBar = _react.default.createElement(
              'div',
              { className: 'toast-bar' },
              'progress' === type && !progress && _ref4,
              'progress' === type &&
                progress &&
                _react.default.createElement('div', {
                  className: 'toast-progressBar toast-progressBar--amount',
                  style: { width: ''.concat(progress, '%') },
                })
            );
          return _react.default.createElement(
            'div',
            {
              className: classNames,
              role: 'error' === type ? 'alert' : 'log',
              'aria-relevant': 'all',
              'aria-atomic': 'true',
            },
            toastBar,
            _react.default.createElement(
              'div',
              { className: 'toast-content alignChild--left--center' },
              _react.default.createElement(
                _Flex.default,
                null,
                icon &&
                  _react.default.createElement(
                    _FlexItem.default,
                    { shrink: !0 },
                    _react.default.createElement(
                      'div',
                      { className: 'toast-constrainGrowth alignChild--center--center' },
                      _react.default.createElement(
                        'div',
                        { className: 'toast-icon media--s' },
                        icon
                      )
                    )
                  ),
                _react.default.createElement(
                  _FlexItem.default,
                  null,
                  _react.default.createElement(
                    'div',
                    { className: 'toast-constrainGrowth' },
                    content
                  )
                ),
                actionLabel &&
                  onAction &&
                  _react.default.createElement(
                    _FlexItem.default,
                    { shrink: !0 },
                    _react.default.createElement(
                      'div',
                      { className: 'toast-constrainGrowth alignChild--center--center' },
                      _react.default.createElement(
                        _Button.default,
                        {
                          className: 'toast-action',
                          onClick: function onActionDismiss(event) {
                            dismissToast(),
                              'function' == typeof onAction && onAction(event);
                          },
                          'data-test': 'toast-action',
                        },
                        actionLabel
                      )
                    )
                  ),
                canDismiss &&
                  'progress' !== type &&
                  _react.default.createElement(
                    _FlexItem.default,
                    { shrink: !0 },
                    _react.default.createElement(
                      'div',
                      { className: 'toast-constrainGrowth alignChild--center--center' },
                      isAutoDismiss
                        ? _react.default.createElement(_CountdownButton.default, {
                            onClick: dismissToast,
                            duration: dismissDelay,
                          })
                        : _react.default.createElement(
                            _IconButton.default,
                            { onClick: dismissToast },
                            _react.default.createElement(_DenyIcon.default, {
                              size: 'xs',
                              color: _styleConstants.default.FONT_COLOR_DEFAULT,
                            })
                          )
                    )
                  )
              )
            )
          );
        };
      (Toast.displayName = 'Toast'),
        (Toast.defaultProps = {
          dismissDelay: 4e3,
          canDismiss: !0,
          isAutoDismiss: !0,
          onDismiss: function onDismiss() {},
        }),
        (Toast.propTypes = {
          content: _propTypes.default.element.isRequired,
          type: _propTypes.default.oneOf(['info', 'warn', 'error', 'success', 'progress'])
            .isRequired,
          actionLabel: _propTypes.default.string,
          onAction: _propTypes.default.func,
          onDismiss: _propTypes.default.func,
          dismissDelay: _propTypes.default.number,
          isAutoDismiss: _propTypes.default.bool,
          canDismiss: _propTypes.default.bool,
          progress: _customPropTypes.default.range(1, 100),
          dismissToast: _propTypes.default.func,
        });
      var _default = Toast;
      (exports.default = _default),
        (Toast.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Toast',
          props: {
            dismissDelay: {
              defaultValue: { value: '4000', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: 'Time in ms to auto-dismiss toast',
            },
            canDismiss: {
              defaultValue: { value: 'true', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: 'Is this toast user-dismissable?',
            },
            isAutoDismiss: {
              defaultValue: { value: 'true', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: 'Should this toast auto-dismiss itself?',
            },
            onDismiss: {
              defaultValue: { value: '() => {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: 'Callback invoked on dismissal of toast',
            },
            content: {
              type: { name: 'element' },
              required: !0,
              description: 'JSX Content of Toast',
            },
            type: {
              type: {
                name: 'enum',
                value: [
                  { value: "'info'", computed: !1 },
                  { value: "'warn'", computed: !1 },
                  { value: "'error'", computed: !1 },
                  { value: "'success'", computed: !1 },
                  { value: "'progress'", computed: !1 },
                ],
              },
              required: !0,
              description: 'Type of toast',
            },
            actionLabel: {
              type: { name: 'string' },
              required: !1,
              description: 'Label for action button',
            },
            onAction: {
              type: { name: 'func' },
              required: !1,
              description: 'Callback for action button click',
            },
            progress: {
              type: { name: 'custom', raw: 'customPropTypes.range(1, 100)' },
              required: !1,
              description: 'Number 1-100 declaring % progress',
            },
            dismissToast: {
              type: { name: 'func' },
              required: !1,
              description: 'Passed by Toaster: function to dismiss the toast',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/interactive/Toast.jsx'] = {
            name: 'Toast',
            docgenInfo: Toast.__docgenInfo,
            path: 'src/components/interactive/Toast.jsx',
          });
    },
    341: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = (0, _interopRequireDefault(__webpack_require__(147)).default)(
        function() {
          return _react.default.createElement(
            'svg',
            { viewBox: '0 0 24 24' },
            _react.default.createElement(
              'defs',
              null,
              _react.default.createElement('polygon', {
                id: 'prefix__CheckIcona',
                points:
                  '8.36363636 15.8656716 3.59090909 11.1641791 2 12.7313433 8.36363636 19 22 5.56716418 20.4090909 4',
              })
            ),
            _react.default.createElement(
              'g',
              { fillRule: 'evenodd' },
              _react.default.createElement(
                'g',
                null,
                _react.default.createElement('use', { xlinkHref: '#prefix__CheckIcona' })
              )
            )
          );
        }
      );
      exports.default = _default;
    },
    342: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(7),
        __webpack_require__(47),
        __webpack_require__(91),
        __webpack_require__(786),
        __webpack_require__(6),
        __webpack_require__(5),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.getCircleInfo = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _propTypes = _interopRequireDefault(__webpack_require__(3)),
        _reactTransitionGroup = __webpack_require__(343),
        _IconButton = _interopRequireDefault(__webpack_require__(340)),
        _DenyIcon = _interopRequireDefault(__webpack_require__(207)),
        _styleConstants = _interopRequireDefault(__webpack_require__(217));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null == arguments[i] ? {} : arguments[i]),
            i % 2
              ? ownKeys(source, !0).forEach(function(key) {
                  _defineProperty(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(source).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      var getCircleInfo = function(circleSize, strokeWidth) {
        var radius = (circleSize - strokeWidth) / 2;
        return { r: radius, c: Math.PI * radius * 2, centerOffset: circleSize / 2 };
      };
      exports.getCircleInfo = getCircleInfo;
      var CountdownButton = function(_ref) {
        var icon = _ref.icon,
          duration = _ref.duration,
          onClick = _ref.onClick,
          _getCircleInfo = getCircleInfo(40, '2'),
          r = _getCircleInfo.r,
          c = _getCircleInfo.c,
          centerOffset = _getCircleInfo.centerOffset,
          defaultCircleStyle = {
            strokeDasharray: c,
            strokeDashoffset: 0,
            transition: 'all '.concat(duration, 'ms linear'),
            transformOrigin: 'center center',
            transform: 'rotate(-90deg)',
          },
          transitionStyles = {
            entering: { strokeDashoffset: 0 },
            entered: { strokeDashoffset: c },
          };
        return _react.default.createElement(
          'div',
          {
            className: 'countdownButton',
            style: { width: ''.concat(40, 'px'), height: ''.concat(40, 'px') },
          },
          _react.default.createElement(
            _IconButton.default,
            { className: 'countdownButton-button', onClick: onClick },
            icon
          ),
          _react.default.createElement(
            _reactTransitionGroup.Transition,
            {
              in: !0,
              appear: !0,
              timeout: { appear: 1, enter: duration },
              mountOnEnter: !0,
            },
            function(state) {
              return _react.default.createElement(
                'svg',
                {
                  className: 'countdownButton-animation',
                  width: 40,
                  height: 40,
                  viewBox: '0 0 '.concat(40, ' ').concat(40),
                },
                _react.default.createElement('circle', {
                  cx: centerOffset,
                  cy: centerOffset,
                  r: r,
                  strokeWidth: '2',
                  fill: 'transparent',
                  stroke: _styleConstants.default.FONT_COLOR_LIGHT,
                  style: _objectSpread(
                    {},
                    defaultCircleStyle,
                    {},
                    transitionStyles[state]
                  ),
                })
              );
            }
          )
        );
      };
      (CountdownButton.displayName = 'CountdownButton'),
        (CountdownButton.defaultProps = {
          icon: _react.default.createElement(_DenyIcon.default, {
            size: 'xs',
            color: _styleConstants.default.FONT_COLOR_DEFAULT,
          }),
        }),
        (CountdownButton.propTypes = {
          duration: _propTypes.default.number.isRequired,
          icon: _propTypes.default.element,
          onClick: _propTypes.default.func,
        });
      var _default = CountdownButton;
      (exports.default = _default),
        (CountdownButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CountdownButton',
          props: {
            icon: {
              defaultValue: {
                value: '<DenyIcon size="xs" color={FDS.FONT_COLOR_DEFAULT} />',
                computed: !1,
              },
              type: { name: 'element' },
              required: !1,
              description: 'Icon component to render inside the radial countdown',
            },
            duration: {
              type: { name: 'number' },
              required: !0,
              description: 'Duration in ms of countdown animation',
            },
            onClick: {
              type: { name: 'func' },
              required: !1,
              description: 'Click callback for button',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/media/CountdownButton.jsx'] = {
            name: 'CountdownButton',
            docgenInfo: CountdownButton.__docgenInfo,
            path: 'src/components/media/CountdownButton.jsx',
          });
    },
    348: function(module, exports, __webpack_require__) {
      __webpack_require__(349),
        __webpack_require__(451),
        (module.exports = __webpack_require__(452));
    },
    452: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        __webpack_require__(13),
          __webpack_require__(11),
          __webpack_require__(5),
          __webpack_require__(15);
        var _react = __webpack_require__(45),
          _react2 = (function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          })(__webpack_require__(612)),
          _storybookAddonReactDocgen = __webpack_require__(615),
          _storybookAddonJsx = __webpack_require__(646),
          _theming = __webpack_require__(651);
        __webpack_require__(669);
        var theme = (0, _theming.create)({
          brandTitle: 'fds-components',
          brandUrl: 'cbinsights.github.io/form-design-system',
          brandImage: '',
        });
        (0, _react.addParameters)({ options: { theme: theme } }),
          (0, _react.addDecorator)(_react2.default),
          (0, _react.addDecorator)(_storybookAddonReactDocgen.withPropsTable),
          (0, _react.addDecorator)(_storybookAddonJsx.jsxDecorator);
        var req = __webpack_require__(673);
        (0, _react.configure)(function loadStories() {
          req.keys().forEach(function(filename) {
            return req(filename);
          });
        }, module);
      }.call(this, __webpack_require__(25)(module)));
    },
    620: function(module, exports, __webpack_require__) {
      var map = { './nestedObjectAssign': 307, './nestedObjectAssign.js': 307 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 620);
    },
    669: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(670);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(671)(content, options);
      content.locals && (module.exports = content.locals);
    },
    670: function(module, exports) {
      module.exports =
        ':root{--color-charcoal:#404040;--color-slate:#757575;--color-gray:#a2a0a0;--color-silver:#c2bfbf;--color-timberwolf:#d6d4d4;--color-lightGray:#f2f2f2;--color-white:#fff;--color-navy:#036;--color-blue:#069;--color-aqua:#4cabce;--color-sky:#bbdbe5;--color-haze:#f1f5f7;--color-red:#e5323e;--color-orange:#f63;--color-sienna:#f9a862;--color-sand:#fcc89a;--color-green:#00986b;--color-mint:#70c390;--color-purple:#a02385;--color-violet:#d772ad;--xs:(min-width:320px);--s:(min-width:480px);--m:(min-width:768px);--l:(min-width:1024px);--xl:(min-width:1280px);--font-color-link:#4cabce;--font-color-dark:#404040;--font-color-default:#757575;--font-color-light:#a2a0a0;--font-color-disabled:#c2bfbf;--font-family-condensed:"Roboto Condensed","Helvetica Neue",Helvetica,"Segoe UI",Arial,sans-serif;--font-family-default:Roboto,"Helvetica Neue",Helvetica,"Segoe UI",Arial,sans-serif;--font-family-mono:Monaco,Consolas,monospace;--font-lineHeight-bigText:1.1;--font-lineHeight-default:1.4;--font-lineHeight-smallText:1.6;--font-size-heading1:39px;--font-size-heading2:31px;--font-size-heading3:25px;--font-size-big:20px;--font-size-default:16px;--font-size-small:13px;--font-size-tiny:10px;--font-weight-default:400;--font-weight-bold:700;--media-xs:16px;--media-s:24px;--media-m:40px;--media-l:60px;--media-xl:86px;--space-double:32px;--space-default:16px;--space-half:8px;--zindex-main:10;--zindex-navigation:20;--zindex-popover:30;--zindex-banner:40;--zindex-floatingAction:50;--zindex-shim:60;--zindex-modal:70;--zindex-crazy:80;--motion-easing-default:cubic-bezier(0.4,0,0.2,1);--motion-easing-decelerate:cubic-bezier(0,0,0.2,1);--motion-easing-accelerate:cubic-bezier(0.4,0,1,1)}html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0;margin:0;border:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto;height:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}body,html{margin:0;padding:0}html{line-height:1.4;line-height:var(--font-lineHeight-default);font-family:Roboto,Helvetica Neue,Helvetica,Segoe UI,Arial,sans-serif;font-family:var(--font-family-default);font-size:16px;font-size:var(--font-size-default);color:#757575;color:var(--font-color-default);text-rendering:geometricPrecision;overflow-y:scroll}a,abbr,acronym,em,kbd,samp,small,span,strike,strong,sub,sup,time,var{display:inline}abbr,acronym{border-width:0;outline-width:0}b,strong{font-weight:700;font-weight:var(--font-weight-bold)}kbd,samp,var{font-family:Monaco,Consolas,monospace;font-family:var(--font-family-mono)}small{font-size:10px;font-size:var(--font-size-tiny)}img{display:inline-block;vertical-align:middle;max-width:100%;line-height:0;margin:0;padding:0}a{text-decoration:none}a:focus{outline:5px auto -webkit-focus-ring-color}article,aside,blockquote,dd,details,dl,fieldset,figcaption,figure,footer,form,header,hgroup,legend,nav,ol,p,section,ul{display:block;margin:0;padding:0}audio,canvas,video{display:inline-block;margin:0;padding:0}ol,ul{margin-left:0;padding-left:0;list-style-type:none}li{margin:0;padding:0}address{display:inline-block;font-style:normal}h1,h2,h3,h4,h5,h6{font-size:1rem;font-weight:400;font-weight:var(--font-weight-default);margin:0;padding:0}:-ms-input-placeholder{color:#a2a0a0;color:var(--font-color-light)}::-ms-input-placeholder{color:#a2a0a0;color:var(--font-color-light)}::placeholder{color:#a2a0a0;color:var(--font-color-light)}label{display:block;margin-bottom:4px;font-weight:400;font-weight:var(--font-weight-default);color:#404040;color:var(--font-color-dark)}button,input,select,textarea{line-height:1.4;line-height:var(--font-lineHeight-default);font-weight:400;vertical-align:middle;margin-bottom:4px}input[type=color],input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],input[type=year],select,textarea{display:inline-block;padding:4px 8px;padding:calc(var(--space-half)/2) var(--space-half);border-radius:4px;border:1px solid #c2bfbf;border:1px solid var(--color-silver);background:#fff;background:var(--color-white);min-width:32px;min-width:var(--space-double)}button,input[type=color],input[type=reset],input[type=submit]{box-sizing:border-box;min-height:32px;min-height:var(--space-double)}button,input[type=checkbox],input[type=color],input[type=radio],input[type=reset],input[type=submit],label,select{cursor:pointer}button[disabled],input[disabled],label[disabled],select[disabled]{cursor:default}input[type=checkbox],input[type=radio]{font-size:16px;font-size:var(--font-size-default);margin-right:8px;margin-right:var(--space-half);vertical-align:text-top;margin-bottom:0}select{border-color:#f2f2f2;border-color:var(--color-lightGray);background:#f2f2f2;background:var(--color-lightGray);height:32px;height:var(--space-double)}select[multiple]{background:#fff;background:var(--color-white);height:auto}textarea{box-sizing:content-box;vertical-align:top}input[type=seach]{box-sizing:content-box;-webkit-appearance:textfield}input[type=file]{font-size:13px;font-size:var(--font-size-small)}input:not([type=submit]):invalid,select:invalid,textarea:invalid{border-color:#e5323e;border-color:var(--color-red)}input:not([type=submit]):disabled,select:disabled,textarea:disabled{color:#c2bfbf;color:var(--font-color-disabled);border-color:#f2f2f2;border-color:var(--color-lightGray)}.flush--top{margin-top:0!important;padding-top:0!important}.flush--right{margin-right:0!important;padding-right:0!important}.flush--bottom{margin-bottom:0!important;padding-bottom:0!important}.flush--left{margin-left:0!important;padding-left:0!important}.flush--all{margin:0!important;padding:0!important}.margin--top{margin-top:16px;margin-top:var(--space-default)}.margin--right{margin-right:16px;margin-right:var(--space-default)}.margin--bottom{margin-bottom:16px;margin-bottom:var(--space-default)}.margin--left{margin-left:16px;margin-left:var(--space-default)}.margin--all{margin:16px;margin:var(--space-default)}.margin--top--half{margin-top:8px;margin-top:var(--space-half)}.margin--right--half{margin-right:8px;margin-right:var(--space-half)}.margin--bottom--half{margin-bottom:8px;margin-bottom:var(--space-half)}.margin--left--half{margin-left:8px;margin-left:var(--space-half)}.margin--all--half{margin:8px;margin:var(--space-half)}.padding--top{padding-top:16px;padding-top:var(--space-default)}.padding--right{padding-right:16px;padding-right:var(--space-default)}.padding--bottom{padding-bottom:16px;padding-bottom:var(--space-default)}.padding--left{padding-left:16px;padding-left:var(--space-default)}.padding--all{padding:16px;padding:var(--space-default)}.padding--top--half{padding-top:8px;padding-top:var(--space-half)}.padding--right--half{padding-right:8px;padding-right:var(--space-half)}.padding--bottom--half{padding-bottom:8px;padding-bottom:var(--space-half)}.padding--left--half{padding-left:8px;padding-left:var(--space-half)}.padding--all--half{padding:8px;padding:var(--space-half)}.align--left{text-align:left}.align--center{text-align:center}.align--right{text-align:right}.valign--top{vertical-align:top}.valign--bottom{vertical-align:bottom}.valign--center,.valign--middle{vertical-align:middle}.alignChild--center--bottom,.alignChild--center--center,.alignChild--center--top,.alignChild--left--bottom,.alignChild--left--center,.alignChild--left--top,.alignChild--right--bottom,.alignChild--right--center,.alignChild--right--top{display:flex}.alignChild--center--center{justify-content:center;align-items:center}.alignChild--center--top{justify-content:center;align-items:flex-start}.alignChild--center--bottom{justify-content:center;align-items:flex-end}.alignChild--left--center{justify-content:flex-start;align-items:center}.alignChild--left--top{justify-content:flex-start;align-items:flex-start}.alignChild--left--bottom{justify-content:flex-start;align-items:flex-end}.alignChild--right--center{justify-content:flex-end;align-items:center}.alignChild--right--top{justify-content:flex-end;align-items:flex-start}.alignChild--right--bottom{justify-content:flex-end;align-items:flex-end}.media--xs{height:16px!important;height:var(--media-xs)!important;width:16px!important;width:var(--media-xs)!important}.media--s{height:24px!important;height:var(--media-s)!important;width:24px!important;width:var(--media-s)!important}.media--m{height:40px!important;height:var(--media-m)!important;width:40px!important;width:var(--media-m)!important}.media--l{height:60px!important;height:var(--media-l)!important;width:60px!important;width:var(--media-l)!important}.media--xl{height:86px!important;height:var(--media-xl)!important;width:86px!important;width:var(--media-xl)!important}.elevation--1{box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 3px 0 rgba(0,0,0,.2)}.elevation--2{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.elevation--3{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.elevation--4{box-shadow:0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12),0 7px 8px -4px rgba(0,0,0,.2)}.elevation--5{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.depth--1{box-shadow:inset 0 1px 1px 0 rgba(0,0,0,.14),inset 0 2px 1px -1px rgba(0,0,0,.12),inset 0 1px 3px 0 rgba(0,0,0,.2)}.depth--2{box-shadow:inset 0 2px 2px 0 rgba(0,0,0,.14),inset 0 3px 1px -2px rgba(0,0,0,.12),inset 0 1px 5px 0 rgba(0,0,0,.2)}.depth--3{box-shadow:inset 0 4px 5px 0 rgba(0,0,0,.14),inset 0 1px 10px 0 rgba(0,0,0,.12),inset 0 2px 4px -1px rgba(0,0,0,.2)}.typeset--head1,.typeset--head2,.typeset--head3,.typeset--head4{color:#404040;color:var(--font-color-dark);font-family:Roboto Condensed,Helvetica Neue,Helvetica,Segoe UI,Arial,sans-serif;font-family:var(--font-family-condensed)}.typeset--head1{font-size:39px;font-size:var(--font-size-heading1)}.typeset--head1,.typeset--head2{font-weight:700;font-weight:var(--font-weight-bold);line-height:1.1;line-height:var(--font-lineHeight-bigText)}.typeset--head2{font-size:31px;font-size:var(--font-size-heading2)}.typeset--head3{font-size:25px;font-size:var(--font-size-heading3)}.typeset--head3,.typeset--head4{font-weight:700;font-weight:var(--font-weight-bold);line-height:1.1;line-height:var(--font-lineHeight-bigText)}.typeset--head4{font-size:20px;font-size:var(--font-size-big)}.typeset--data{font-size:13px;font-size:var(--font-size-small)}.typeset--caption,.typeset--data{line-height:1.6;line-height:var(--font-lineHeight-smallText)}.typeset--caption{font-size:10px;font-size:var(--font-size-tiny)}.typeset--link{color:#4cabce;color:var(--font-color-link)}.typeset--link:active,.typeset--link:focus,.typeset--link:hover{cursor:pointer;color:#069;color:var(--color-blue);text-decoration:underline}.typemod--huge{font-size:39px!important;font-size:var(--font-size-heading1)!important}.typemod--huge,.typemod--xxlarge{line-height:1.1!important;line-height:var(--font-lineHeight-bigText)!important}.typemod--xxlarge{font-size:31px!important;font-size:var(--font-size-heading2)!important}.typemod--xlarge{font-size:25px!important;font-size:var(--font-size-heading3)!important;line-height:1.1!important;line-height:var(--font-lineHeight-bigText)!important}.typemod--large{font-size:20px!important;font-size:var(--font-size-big)!important}.typemod--small{font-size:13px!important;font-size:var(--font-size-small)!important}.typemod--small,.typemod--tiny{line-height:1.6!important;line-height:var(--font-lineHeight-smallText)!important}.typemod--tiny{font-size:10px!important;font-size:var(--font-size-tiny)!important}.typemod--bold{font-weight:700!important;font-weight:var(--font-weight-bold)!important}.typemod--book{font-weight:400!important;font-weight:var(--font-weight-default)!important}.typemod--dark{color:#404040!important;color:var(--font-color-dark)!important}.typemod--light{color:#a2a0a0!important;color:var(--font-color-light)!important}.typemod--slate{color:#757575!important;color:var(--color-slate)!important}.typemod--green{color:#00986b!important;color:var(--color-green)!important}.typemod--mint{color:#70c390!important;color:var(--color-mint)!important}.typemod--navy{color:#036!important;color:var(--color-navy)!important}.typemod--blue{color:#069!important;color:var(--color-blue)!important}.typemod--sky{color:#bbdbe5!important;color:var(--color-sky)!important}.typemod--purple{color:#a02385!important;color:var(--color-purple)!important}.typemod--red{color:#e5323e!important;color:var(--color-red)!important}.typemod--orange{color:#f63!important;color:var(--color-orange)!important}.typemod--white{color:#fff!important;color:var(--color-white)!important}.typemod--italic{font-style:italic}.typemod--underline{text-decoration:underline}.typemod--caps{text-transform:uppercase}input.error,select.error{border-color:#e5323e;border-color:var(--color-red)}button.resetButton,input.resetInput,select.resetInput{border-width:0;background:transparent;margin:0}button.resetButton{padding:0;min-height:0}.wrap--singleLine,.wrap--singleLine--truncate{white-space:nowrap!important}.wrap--singleLine--truncate{overflow:hidden!important;text-overflow:ellipsis!important}.wrap--hyphenate{word-break:break-word;word-wrap:break-word}.fds-icon{fill:currentColor;display:inline-flex;justify-content:center;align-items:center;vertical-align:middle}.fds-icon svg{shape-rendering:geometricPrecision;width:100%;height:100%}.fds-icon mask{visibility:hidden}.fds-icon--xs{width:16px;width:var(--media-xs);height:16px;height:var(--media-xs)}.fds-icon--s{width:24px;width:var(--media-s);height:24px;height:var(--media-s)}.fds-icon--m{width:40px;width:var(--media-m);height:40px;height:var(--media-m)}.fds-icon--l{width:60px;width:var(--media-l);height:60px;height:var(--media-l)}.fds-icon--xl{width:86px;width:var(--media-xl);height:86px;height:var(--media-xl)}.flex{box-sizing:border-box;display:flex;flex-wrap:nowrap}.flex--row{flex-direction:row;width:100%}.flex--row--reverse{flex-direction:row-reverse}.flex--column{flex-direction:column;height:100%}.flex--column--reverse{flex-direction:column-reverse}.flex--justifyEnd{justify-content:flex-end}.flex--justifyCenter{justify-content:center}.flex--justifySpaceBetween{justify-content:space-between}.flex--justifySpaceAround{justify-content:space-around}.flex--alignStretch{align-items:stretch}.flex--alignStart{align-items:flex-start}.flex--alignCenter{align-items:center}.flex--alignEnd{align-items:flex-end}.flex--wrap{flex-wrap:wrap}.flexItem{box-sizing:border-box;flex-basis:0;flex-grow:1;width:auto;min-width:0}.flexItem--shrink{flex-basis:auto;flex-grow:0;flex-shrink:0;width:auto}.flex--row>.flexItem{height:100%;padding-left:16px;padding-left:var(--space-default)}.flex--column>.flexItem{width:100%;padding-top:16px;padding-top:var(--space-default)}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.flex--column>.flexItem{flex-basis:auto}}.flexItem--justifyStart{justify-self:flex-start}.flexItem--justifyEnd{justify-self:flex-end}.flexItem--justifyCenter{justify-self:center}.flexItem--justifySpaceBetween{justify-self:space-between}.flexItem--justifySpaceAround{justify-self:space-around}.flexItem--alignStart{align-self:flex-start}.flexItem--alignCenter{align-self:center}.flexItem--alignEnd{align-self:flex-end}.flex--row--reverse>.flexItem:last-child,.flex--row:not(.flex--row--reverse)>.flexItem:first-child{padding-left:0}.flex--column--reverse>.flexItem:last-child,.flex--column:not(.flex--column--reverse)>.flexItem:first-child{padding-top:0}.flex--noGutters>.flexItem{padding:0!important}.avatarRow{display:flex;flex-direction:row-reverse;justify-content:flex-end}.avatarRow-item{display:inline-block;flex-shrink:1;overflow:visible}.avatarRow-avatar{box-sizing:border-box;display:inline-flex!important;justify-content:center;align-items:center;background-clip:content-box;background-color:#bbdbe5!important;background-color:var(--color-sky)!important;border-width:2px;border-style:solid}.avatarRow-avatar--count{background-color:#036!important;background-color:var(--color-navy)!important;border-color:inherit;color:#fff;color:var(--color-white)}.avatarRow--s .avatarRow-item{width:16px}.avatarRow--s .avatarRow-avatar{border-width:1px;width:24px!important;width:var(--media-s)!important;height:24px!important;height:var(--media-s)!important}.avatarRow--m .avatarRow-item{width:26px}.avatarRow--m .avatarRow-avatar{width:40px!important;width:var(--media-m)!important;height:40px!important;height:var(--media-m)!important}.avatarRow--l .avatarRow-item{width:40px}.avatarRow--l .avatarRow-avatar{width:60px!important;width:var(--media-l)!important;height:60px!important;height:var(--media-l)!important}.avatarRow--xl .avatarRow-item{width:55px}.avatarRow--xl .avatarRow-avatar{width:86px!important;width:var(--media-xl)!important;height:86px!important;height:var(--media-xl)!important}.updatable{display:inline-block;position:relative}.updatable-indicator{position:absolute;top:0;right:0;transform:translate(40%,-40%);box-sizing:border-box;display:flex;align-items:center;justify-content:center;color:#fff;color:var(--color-white);background:#e5323e;background:var(--color-red);border-radius:100px;padding:0 8px;padding:0 var(--space-half);height:16px;height:var(--space-default);white-space:nowrap;font-size:10px;font-size:var(--font-size-tiny)}.countdownButton{position:relative}.countdownButton-animation,.countdownButton-button{position:absolute;top:0;left:0;bottom:0;right:0}.countdownButton-animation{z-index:1}.countdownButton-button{z-index:2}.menuButton{padding:4px!important;color:#757575!important;color:var(--font-color-default)!important;text-transform:none!important;min-height:60px!important;min-height:var(--media-l)!important;max-width:40px;max-width:var(--media-m)}.menuButton--active{color:#404040!important;color:var(--font-color-dark)!important;font-weight:700!important;font-weight:var(--font-weight-bold)!important}.menuButton--disabled .menuButton-label{color:#c2bfbf!important;color:var(--font-color-disabled)!important}.menuButton--disabled svg{fill:#c2bfbf!important;fill:var(--font-color-disabled)!important}.menuButton-inner{height:100%}.menuButton-label{line-height:1.1!important;margin-top:4px;margin-top:calc(var(--space-half)/2);width:99.9%}:root{--toast-border-radius:4px;--toast-maxWidth:600px}.toast{max-width:600px;max-width:var(--toast-maxWidth);min-width:540px;border-radius:4px;border-radius:var(--toast-border-radius);box-shadow:0 2px 16px 4px rgba(0,0,0,.25);background:#fff;background:var(--color-white)}.toast-content{padding:4px 16px;padding:calc(var(--space-half)/2) var(--space-default);min-height:40px}.toast-action{color:#a2a0a0!important;color:var(--font-color-light)!important;font-size:13px!important;font-size:var(--font-size-small)!important;letter-spacing:.12em}.toast-action:hover{color:#757575!important;color:var(--font-color-default)!important}.toast-bar{height:8px;border-radius:4px 4px 0 0;border-radius:var(--toast-border-radius) var(--toast-border-radius) 0 0;overflow:hidden}.toast-icon{border-radius:100%;display:flex;justify-content:center;align-items:center}.toast--info .toast-bar{background:#069;background:var(--color-blue)}.toast--warn .toast-bar,.toast--warn .toast-icon{background:#f63;background:var(--color-orange)}.toast--error .toast-bar,.toast--error .toast-icon{background:#e5323e;background:var(--color-red)}.toast--success .toast-bar,.toast--success .toast-icon{background:#00986b;background:var(--color-green)}.toast--progress .toast-bar{background:#bbdbe5;background:var(--color-sky)}.toast-progressBar{height:100%;background-color:#4cabce;background-color:var(--color-aqua)}.toast-progressBar--amount{transition:width .5s}@keyframes moveX{0%{transform:translateX(-200px)}to{transform:translateX(800px);transform:translateX(calc(var(--toast-maxWidth) + 200px))}}.toast-progressBar--continuous{width:200px;animation:moveX 2.5s linear infinite}:root{--toast-timeout:380ms}body{position:relative}.toast-constrainGrowth{display:flex;align-items:center;min-height:40px}.toaster{position:fixed;bottom:32px;bottom:var(--space-double);left:32px;left:var(--space-double);z-index:70;z-index:var(--zindex-modal)}.toast-appear,.toast-enter{opacity:.01;transform:translateY(100px);transition:transform .38s cubic-bezier(.4,0,.2,1),opacity .38s cubic-bezier(.4,0,.2,1);transition:transform var(--toast-timeout) var(--motion-easing-default),opacity var(--toast-timeout) var(--motion-easing-default)}.toast-appear-active,.toast-enter-active,.toast-exit{opacity:1;transform:translateY(0)}.toast-exit{transition:transform .38s cubic-bezier(.4,0,.2,1),opacity .38s cubic-bezier(.4,0,.2,1);transition:transform var(--toast-timeout) var(--motion-easing-default),opacity var(--toast-timeout) var(--motion-easing-default)}.toast-exit-active{opacity:.01;transform:translateY(100px)}.toast-action span{line-height:1}:root{--button-group-timeout:250ms;--button-group-focus-color:rgba(0,51,102,0.32);--button-group-hover-color:#dee5eb;--button-group-pressed-color:#c2ceda;--button-group-active-color:#dbe2e9;--button-group-disabled-border-color:#dbe2e9;--border-radius-default:4px}.btngroup{display:inline-flex;z-index:0;position:relative}.btngroup .groupbtn{margin-left:-1px;position:relative;border-radius:0;z-index:2}.btngroup .groupbtn--disabled{z-index:1}.btngroup .groupbtn--active{z-index:3}.btngroup .groupbtn:focus{z-index:4}.btngroup .groupbtn:active{z-index:5}.btngroup .groupbtn:first-child{border-top-left-radius:4px;border-top-left-radius:var(--border-radius-default);border-bottom-left-radius:4px;border-bottom-left-radius:var(--border-radius-default);margin-left:0}.btngroup .groupbtn:last-child{border-top-right-radius:4px;border-top-right-radius:var(--border-radius-default);border-bottom-right-radius:4px;border-bottom-right-radius:var(--border-radius-default)}.groupbtn{border:1px solid #c2bfbf;border:1px solid var(--color-silver);border-radius:4px;border-radius:var(--border-radius-default);padding:8px 12px;font-size:12px;color:#757575;color:var(--color-slate);font-weight:700;font-weight:var(--font-weight-bold);text-transform:none;line-height:normal;display:inline-flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .25s cubic-bezier(.4,0,.2,1),box-shadow .25s cubic-bezier(.4,0,.2,1),border .25s cubic-bezier(.4,0,.2,1),z-index .25s cubic-bezier(.4,0,.2,1);transition:background-color var(--button-group-timeout) var(--motion-easing-default),box-shadow var(--button-group-timeout) var(--motion-easing-default),border var(--button-group-timeout) var(--motion-easing-default),z-index var(--button-group-timeout) var(--motion-easing-default);margin-bottom:0;background-color:transparent}.groupbtn .fds-icon{fill:currentColor}.groupbtn:active,.groupbtn:focus{border-color:#757575;border-color:var(--color-slate);text-decoration:none}.groupbtn:focus{background-color:none;box-shadow:0 0 0 3px rgba(0,51,102,.32);box-shadow:0 0 0 3px var(--button-group-focus-color);outline:0;color:#404040;color:var(--color-charcoal)}.groupbtn:hover{text-decoration:none;background-color:#dee5eb;background-color:var(--button-group-hover-color)}.groupbtn:active{background-color:#c2ceda;background-color:var(--button-group-pressed-color)}.groupbtn--active,.groupbtn:active{border-color:#757575;border-color:var(--color-slate);color:#404040;color:var(--color-charcoal)}.groupbtn--active{text-decoration:none;background-color:#dbe2e9;background-color:var(--button-group-active-color)}.groupbtn--disabled{color:#c2bfbf;color:var(--color-silver);border-color:#dbe2e9;border-color:var(--button-group-disabled-border-color);cursor:default;pointer-events:none}.groupbtn-icon{margin-right:4px;margin-right:calc(var(--space-half)/2)}:root{--chip-bg:#e6e6e6;--chip-active-bg:#cacaca;--chip-hover-bg:#d8d8d8;--chip-blue-bg:#e0edf2;--chip-blue-hover-bg:#d4e7ee}.fdsChip{display:inline-block;background-color:#e6e6e6;background-color:var(--chip-bg);color:#404040;color:var(--font-color-dark);border-radius:20px;font-size:12px;line-height:1;margin-right:8px;margin-right:var(--space-half);margin-bottom:4px;margin-bottom:calc(var(--space-half)/2);display:inline-flex;align-items:center;padding:5px 7px;border:1px solid transparent;vertical-align:top;min-height:auto}.fdsChip .fds-icon{width:10px;height:10px}.fdsChip-close,.fdsChip-subtitle{padding-left:8px;padding-left:var(--space-half);font-size:10px;font-size:var(--font-size-tiny)}.fdsChip-subtitle{color:#a2a0a0;color:var(--font-color-light)}.fdsChip--active{background-color:#cacaca;background-color:var(--chip-active-bg)}.fdsChip:hover{background-color:#d8d8d8;background-color:var(--chip-hover-bg)}.fdsChip--blue .fdsChip-subtitle{color:inherit}.fdsChip--blue{color:#069;color:var(--color-blue);background-color:#e0edf2;background-color:var(--chip-blue-bg)}.fdsChip--blue.fdsChip--active{background-color:#bbdbe5;background-color:var(--color-sky)}.fdsChip--blue:hover{background-color:#d4e7ee;background-color:var(--chip-blue-hover-bg)}.fdsChip--outline{color:#757575;color:var(--color-slate);border-color:#a2a0a0;border-color:var(--color-gray);background-color:transparent;font-weight:600}.fdsChip--outline:hover{color:#404040;color:var(--color-charcoal)}.fdsChip--small{padding-top:1px;padding-bottom:1px}.fdsChip-li,.fdsChip-ul{display:inline-block}img,p{margin:0;padding:0}\n/*# sourceMappingURL=src/components/style/index.css.map */';
    },
    673: function(module, exports, __webpack_require__) {
      var map = {
        './interactive/buttonGroup.stories.js': 674,
        './interactive/chip.stories.js': 695,
        './interactive/menuButton.stories.js': 710,
        './interactive/toast.stories.js': 783,
        './interactive/toaster.stories.js': 794,
        './layout/flex.stories.js': 797,
        './layout/flexItem.stories.js': 799,
        './media/avatarRow.stories.js': 801,
        './media/countdownButton.stories.js': 812,
        './media/updatable.stories.js': 814,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 673);
    },
    674: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonKnobs = __webpack_require__(50),
          _ButtonGroup = _interopRequireDefault(__webpack_require__(690)),
          _FeedIcon = _interopRequireDefault(__webpack_require__(693)),
          _ButtonGroup2 = _interopRequireDefault(__webpack_require__(694));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var buttons = [
            { label: 'Lorem', Icon: _FeedIcon.default, isActive: !0 },
            { label: 'Ipsum', Icon: _FeedIcon.default, disabled: !0 },
            { label: 'Dolor', Icon: _FeedIcon.default },
            { label: 'Sit', Icon: _FeedIcon.default },
          ],
          _ref = _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(_ButtonGroup.default, { buttons: buttons }),
            _react.default.createElement('br', null),
            ' ',
            _react.default.createElement('br', null),
            _react.default.createElement(_ButtonGroup.default, {
              buttons: [
                { label: 'Lorem', disabled: !0 },
                { label: 'Ipsum' },
                { label: 'Dolor', isActive: !0 },
                { label: 'Sit' },
              ],
            })
          );
        (0, _react2.storiesOf)('Interactive/ButtonGroup', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(_ButtonGroup.default, {
                buttons: (0, _addonKnobs.object)('buttons', buttons),
              });
            },
            { notes: { markdown: _ButtonGroup2.default } }
          )
          .add('Variations', function() {
            return _ref;
          });
      }.call(this, __webpack_require__(25)(module)));
    },
    690: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(7),
        __webpack_require__(46),
        __webpack_require__(9),
        __webpack_require__(6),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _propTypes = _interopRequireDefault(__webpack_require__(3)),
        _GroupButton = _interopRequireDefault(__webpack_require__(691)),
        _combine = _interopRequireDefault(__webpack_require__(692));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var ButtonGroup = function(_ref) {
        var buttons = _ref.buttons,
          onChange = _ref.onChange,
          restBtnGroup = _objectWithoutProperties(_ref, ['buttons', 'onChange']);
        return _react.default.createElement(
          'div',
          _extends({}, restBtnGroup, { className: 'btngroup' }),
          buttons.map(function(_ref2) {
            var value = _ref2.value,
              key = (_ref2.content, _ref2.key),
              Icon = _ref2.Icon,
              onClick = _ref2.onClick,
              label = _ref2.label,
              restBtn = _objectWithoutProperties(_ref2, [
                'value',
                'content',
                'key',
                'Icon',
                'onClick',
                'label',
              ]);
            return _react.default.createElement(
              _GroupButton.default,
              _extends(
                {
                  key: key || label,
                  onClick: onChange
                    ? (0, _combine.default)(function() {
                        return onChange(label || value);
                      }, onClick)
                    : onClick,
                  label: label,
                  Icon: Icon,
                },
                restBtn
              )
            );
          })
        );
      };
      (ButtonGroup.displayName = 'ButtonGroup'),
        (ButtonGroup.propTypes = {
          buttons: _propTypes.default.arrayOf(
            _propTypes.default.shape({
              Link: _propTypes.default.func,
              key: _propTypes.default.oneOfType([
                _propTypes.default.string,
                _propTypes.default.number,
              ]),
              isActive: _propTypes.default.bool,
              label: _propTypes.default.string,
              Icon: _propTypes.default.func,
            })
          ).isRequired,
          onChange: _propTypes.default.func,
        });
      var _default = ButtonGroup;
      (exports.default = _default),
        (ButtonGroup.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ButtonGroup',
          props: {
            buttons: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    Link: {
                      name: 'func',
                      description:
                        'Pass **only** react-router `Link` here. You may **not**\npass anything else here: SFC, Class Component, etc (even\nif they use react-router `Link` underneath the hood).',
                      required: !1,
                    },
                    key: {
                      name: 'union',
                      value: [{ name: 'string' }, { name: 'number' }],
                      description: 'Use if labels are not unique',
                      required: !1,
                    },
                    isActive: { name: 'bool', required: !1 },
                    label: { name: 'string', required: !1 },
                    Icon: { name: 'func', required: !1 },
                  },
                },
              },
              required: !0,
              description:
                'Each object in array accepts value, content, onClick, and icon, and also will pass through any extra props',
            },
            onChange: { type: { name: 'func' }, required: !1, description: '' },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/interactive/ButtonGroup.jsx'] = {
            name: 'ButtonGroup',
            docgenInfo: ButtonGroup.__docgenInfo,
            path: 'src/components/interactive/ButtonGroup.jsx',
          });
    },
    691: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(7),
        __webpack_require__(9),
        __webpack_require__(6),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.GroupButton = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _propTypes = _interopRequireDefault(__webpack_require__(3)),
        _baseElement = _interopRequireDefault(__webpack_require__(318));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var GroupButton = function(props) {
        var isActive = props.isActive,
          Icon = props.Icon,
          label = props.label,
          Link = props.Link,
          rest = _objectWithoutProperties(props, ['isActive', 'Icon', 'label', 'Link']),
          Element = (0, _baseElement.default)({ href: rest.href, as: Link }),
          rootClass = (0, _classnames.default)('groupbtn', {
            'groupbtn--disabled': props.disabled,
            'groupbtn--active': isActive,
          });
        return _react.default.createElement(
          Element,
          _extends({}, rest, { className: rootClass }),
          Icon &&
            _react.default.createElement(Icon, {
              size: 'xs',
              className: 'groupbtn-icon',
            }),
          label
        );
      };
      (exports.GroupButton = GroupButton),
        (GroupButton.displayName = 'GroupButton'),
        (GroupButton.propTypes = {
          isActive: _propTypes.default.bool,
          Link: _propTypes.default.func,
          label: _propTypes.default.string,
          disabled: _propTypes.default.bool,
          Icon: _propTypes.default.func,
        });
      var _default = GroupButton;
      (exports.default = _default),
        (GroupButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'GroupButton',
          props: {
            isActive: {
              type: { name: 'bool' },
              required: !1,
              description: 'Displays active button style when true',
            },
            Link: {
              type: { name: 'func' },
              required: !1,
              description:
                'Pass **only** react-router `Link` here. You may **not**\npass anything else here: SFC, Class Component, etc (even\nif they use react-router `Link` underneath the hood).',
            },
            label: { type: { name: 'string' }, required: !1, description: '' },
            disabled: { type: { name: 'bool' }, required: !1, description: '' },
            Icon: {
              type: { name: 'func' },
              required: !1,
              description: 'Specify a fds-icon component',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/interactive/GroupButton.jsx'] = {
            name: 'GroupButton',
            docgenInfo: GroupButton.__docgenInfo,
            path: 'src/components/interactive/GroupButton.jsx',
          });
    },
    692: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(47),
        __webpack_require__(5),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = function combine() {
        for (
          var _len = arguments.length, functions = Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          functions[_key] = arguments[_key];
        return function() {
          for (
            var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          )
            args[_key2] = arguments[_key2];
          return functions
            .filter(function(func) {
              return 'function' == typeof func;
            })
            .forEach(function(func) {
              return func.apply(void 0, args);
            });
        };
      };
      exports.default = _default;
    },
    693: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = (0, _interopRequireDefault(__webpack_require__(147)).default)(
        function() {
          return _react.default.createElement(
            'svg',
            { viewBox: '0 0 24 24' },
            _react.default.createElement(
              'g',
              { fillRule: 'evenodd' },
              _react.default.createElement(
                'g',
                null,
                _react.default.createElement('path', {
                  d:
                    'M19,15.2128305 L19,5 L5,5 L5,15.8356608 L7.0172612,14.2437324 L9.38643932,16.1790054 L14.7610559,12 L19,15.2128305 L19,15.2128305 Z M19,17.4984013 L14.7610559,14.0031738 L9.38643932,18.3001709 L7.0172612,16.4217529 L5,17.8134992 L5,19 L19,19 L19,17.4984013 L19,17.4984013 Z M5,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,19 C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,5 C3,3.8954305 3.8954305,3 5,3 Z M5,9 L19,9 L19,11 L5,11 L5,9 Z M10,6 L17,6 L17,8 L10,8 L10,6 Z M6,6 L8,6 L8,8 L6,8 L6,6 Z',
                })
              )
            )
          );
        }
      );
      exports.default = _default;
    },
    694: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# ButtonGroup\n\nDisplays a segmented button list (rounded).\n');
    },
    695: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        __webpack_require__(46), __webpack_require__(9);
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonActions = __webpack_require__(148),
          _addonKnobs = __webpack_require__(50),
          _Chip = _interopRequireDefault(__webpack_require__(708)),
          _Chip2 = _interopRequireDefault(__webpack_require__(709));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _extends() {
          return (_extends =
            Object.assign ||
            function(target) {
              for (var source, i = 1; i < arguments.length; i++)
                for (var key in (source = arguments[i]))
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              return target;
            }).apply(this, arguments);
        }
        var chips = [
            { label: 'Lorem', href: '#lorem' },
            { label: 'Ipsum', href: '#ipsum', isActive: !0, subtitle: 'active' },
            { label: 'Dolor', href: '#dolor', hasClose: !0 },
            {
              label: 'Sit',
              onClick: function onClick() {
                return (0, _addonActions.action)('custom chip clicked');
              },
              isActive: !1,
            },
          ],
          chipsTwo = [
            { label: 'Lorem Ipsum' },
            { label: 'Dolor Sit' },
            { label: 'Sit Amet' },
            {
              label: 'Consectetur',
              onClick: function onClick() {
                return (0, _addonActions.action)('custom chip clicked');
              },
            },
          ],
          _ref = _react.default.createElement('br', null),
          _ref2 = _react.default.createElement('br', null),
          _ref3 = _react.default.createElement('br', null),
          _ref4 = _react.default.createElement('br', null),
          _ref5 = _react.default.createElement('br', null);
        (0, _react2.storiesOf)('Interactive/Chip', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(_Chip.default, {
                isActive: (0, _addonKnobs.boolean)('isActive', !1),
                label: (0, _addonKnobs.text)('label', 'Hello World'),
                subtitle: (0, _addonKnobs.text)('subtitle', ''),
                hasClose: (0, _addonKnobs.boolean)('hasClose', !1),
                onClick: (0, _addonActions.action)('clicked'),
                size: (0, _addonKnobs.optionsKnob)(
                  'size',
                  { sm: 'sm', md: 'md', lg: 'lg' },
                  'sm',
                  { display: 'inline-radio' }
                ),
                theme: (0, _addonKnobs.optionsKnob)(
                  'theme',
                  { gray: 'gray', blue: 'blue', outline: 'outline' },
                  'gray',
                  { display: 'inline-radio' }
                ),
              });
            },
            { notes: { markdown: _Chip2.default } }
          )
          .add('Variations', function() {
            return _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(
                'div',
                null,
                chipsTwo.map(function(chip) {
                  return _react.default.createElement(
                    _Chip.default,
                    _extends({}, chip, {
                      key: chip.label,
                      theme: 'outline',
                      hasClose: !0,
                    })
                  );
                })
              ),
              _ref,
              chips.map(function(chip) {
                return _react.default.createElement(
                  _Chip.default,
                  _extends({}, chip, { key: chip.label, size: 'sm' })
                );
              }),
              _ref2,
              chips.map(function(chip) {
                return _react.default.createElement(
                  _Chip.default,
                  _extends({}, chip, { key: chip.label, theme: 'blue', size: 'sm' })
                );
              }),
              _ref3,
              _ref4,
              chips.map(function(chip) {
                return _react.default.createElement(
                  _Chip.default,
                  _extends({}, chip, { key: chip.label })
                );
              }),
              _ref5,
              chips.map(function(chip) {
                return _react.default.createElement(
                  _Chip.default,
                  _extends({}, chip, { key: chip.label, theme: 'blue' })
                );
              })
            );
          });
      }.call(this, __webpack_require__(25)(module)));
    },
    708: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(7),
        __webpack_require__(9),
        __webpack_require__(6),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _propTypes = _interopRequireDefault(__webpack_require__(3)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _DenyIcon = _interopRequireDefault(__webpack_require__(207)),
        _baseElement = _interopRequireDefault(__webpack_require__(318));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var _ref2 = _react.default.createElement(
          'span',
          { className: 'fdsChip-close' },
          _react.default.createElement(_DenyIcon.default, { size: 'xs' })
        ),
        Chip = function(_ref) {
          var size = _ref.size,
            Link = _ref.Link,
            theme = _ref.theme,
            isActive = _ref.isActive,
            label = _ref.label,
            subtitle = _ref.subtitle,
            hasClose = _ref.hasClose,
            rest = _objectWithoutProperties(_ref, [
              'size',
              'Link',
              'theme',
              'isActive',
              'label',
              'subtitle',
              'hasClose',
            ]),
            Element = (0, _baseElement.default)({ href: rest.href, as: Link }),
            rootClass = (0, _classnames.default)('fdsChip', {
              'fdsChip--active': isActive,
              'fdsChip--small': 'sm' === size,
              'fdsChip--large': 'lg' === size,
              'fdsChip--blue': 'blue' === theme,
              'fdsChip--outline': 'outline' === theme,
            });
          return _react.default.createElement(
            Element,
            _extends({}, rest, { className: rootClass }),
            label,
            subtitle &&
              _react.default.createElement(
                'span',
                { className: 'fdsChip-subtitle' },
                subtitle
              ),
            hasClose && _ref2
          );
        };
      (Chip.displayName = 'Chip'),
        (Chip.propTypes = {
          label: _propTypes.default.string.isRequired,
          Link: _propTypes.default.func,
          isActive: _propTypes.default.bool,
          subtitle: _propTypes.default.string,
          hasClose: _propTypes.default.bool,
          size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
          theme: _propTypes.default.oneOf(['blue', 'gray', 'outline']),
        }),
        (Chip.defaultProps = { theme: 'gray', size: 'md' });
      var _default = Chip;
      (exports.default = _default),
        (Chip.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Chip',
          props: {
            theme: {
              defaultValue: { value: "'gray'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'blue'", computed: !1 },
                  { value: "'gray'", computed: !1 },
                  { value: "'outline'", computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            size: {
              defaultValue: { value: "'md'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'sm'", computed: !1 },
                  { value: "'md'", computed: !1 },
                  { value: "'lg'", computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            label: { type: { name: 'string' }, required: !0, description: '' },
            Link: {
              type: { name: 'func' },
              required: !1,
              description:
                'Pass **only** react-router `Link` here. You may **not**\npass anything else here: SFC, Class Component, etc (even\nif they use react-router `Link` underneath the hood).',
            },
            isActive: { type: { name: 'bool' }, required: !1, description: '' },
            subtitle: { type: { name: 'string' }, required: !1, description: '' },
            hasClose: { type: { name: 'bool' }, required: !1, description: '' },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/interactive/Chip.jsx'] = {
            name: 'Chip',
            docgenInfo: Chip.__docgenInfo,
            path: 'src/components/interactive/Chip.jsx',
          });
    },
    709: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# Chip\n\nUsed to display tags, members, filter settings, and other tokens.\n\n\n');
    },
    710: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonActions = __webpack_require__(148),
          _addonKnobs = __webpack_require__(50),
          _MenuButton = _interopRequireDefault(__webpack_require__(711)),
          _MenuButton2 = _interopRequireDefault(__webpack_require__(782));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ref = _react.default.createElement(
            'span',
            { className: 'typemod--xlarge' },
            '🔥'
          ),
          _ref2 = _react.default.createElement(_MenuButton.default, {
            iconComponent: _react.default.createElement(
              'span',
              { className: 'typemod--xlarge' },
              '🍕'
            ),
            label: 'Long pizza button label',
          }),
          _ref3 = _react.default.createElement(_MenuButton.default, {
            iconComponent: _react.default.createElement(
              'span',
              { className: 'typemod--xlarge' },
              '📞'
            ),
            label: 'Call',
            disabled: !0,
          }),
          _ref4 = _react.default.createElement(_MenuButton.default, {
            iconComponent: _react.default.createElement(
              'span',
              { className: 'typemod--xlarge' },
              '✏️'
            ),
            label: 'Edit Mode',
            active: !0,
          });
        (0, _react2.storiesOf)('Interactive/MenuButton', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(_MenuButton.default, {
                iconComponent: (0, _addonKnobs.text)('iconComponent', '🔥'),
                label: (0, _addonKnobs.text)('label', 'Lorem Ipsum'),
                active: (0, _addonKnobs.boolean)('active', !1),
                className: (0, _addonKnobs.text)('className', ''),
                disabled: (0, _addonKnobs.boolean)('disabled', !1),
                labelClassName: (0, _addonKnobs.text)('labelClassName', ''),
              });
            },
            { notes: { markdown: _MenuButton2.default } }
          )
          .add('Variations', function() {
            return _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(_MenuButton.default, {
                iconComponent: _ref,
                label: 'Set on fire',
                onClick: function onClick() {
                  (0, _addonActions.action)('clicked');
                },
              }),
              _ref2,
              _ref3,
              _ref4
            );
          });
      }.call(this, __webpack_require__(25)(module)));
    },
    711: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(7),
        __webpack_require__(9),
        __webpack_require__(6),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _propTypes = _interopRequireDefault(__webpack_require__(3)),
        _Button = _interopRequireDefault(__webpack_require__(321)),
        _Flex = _interopRequireDefault(__webpack_require__(154)),
        _FlexItem = _interopRequireDefault(__webpack_require__(155));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var MenuButton = function(props) {
        var iconComponent = props.iconComponent,
          label = props.label,
          className = props.className,
          labelClassName = props.labelClassName,
          disabled = props.disabled,
          active = props.active,
          other = _objectWithoutProperties(props, [
            'iconComponent',
            'label',
            'className',
            'labelClassName',
            'disabled',
            'active',
          ]);
        return _react.default.createElement(
          _Button.default,
          _extends(
            {
              className: (0, _classnames.default)(
                'menuButton',
                { 'menuButton--active': active, 'menuButton--disabled': disabled },
                className
              ),
              disabled: disabled,
              variant: 'text',
            },
            other
          ),
          _react.default.createElement(
            _Flex.default,
            { className: 'menuButton-inner', direction: 'column', noGutters: !0 },
            _react.default.createElement(
              _FlexItem.default,
              { className: 'menuButton-icon' },
              iconComponent
            ),
            _react.default.createElement(
              _FlexItem.default,
              {
                shrink: !0,
                className: (0, _classnames.default)(
                  'typemod--tiny typemod--dark menuButton-label',
                  labelClassName
                ),
              },
              label
            )
          )
        );
      };
      (MenuButton.displayName = 'MenuButton'),
        (MenuButton.propTypes = {
          iconComponent: _propTypes.default.oneOfType([
            _propTypes.default.arrayOf(_propTypes.default.node),
            _propTypes.default.node,
          ]).isRequired,
          label: _propTypes.default.string.isRequired,
          disabled: _propTypes.default.bool,
          active: _propTypes.default.bool,
          labelClassName: _propTypes.default.string,
          className: _propTypes.default.string,
        });
      var _default = MenuButton;
      (exports.default = _default),
        (MenuButton.__docgenInfo = {
          description:
            '@module MenuButton\n@param {Object} props react props\n@returns {ReactElement}',
          methods: [],
          displayName: 'MenuButton',
          props: {
            iconComponent: {
              type: {
                name: 'union',
                value: [{ name: 'arrayOf', value: { name: 'node' } }, { name: 'node' }],
              },
              required: !0,
              description: 'Icon component to render in the button',
            },
            label: {
              type: { name: 'string' },
              required: !0,
              description: 'Button label',
            },
            disabled: {
              type: { name: 'bool' },
              required: !1,
              description: 'Disabled mode',
            },
            active: { type: { name: 'bool' }, required: !1, description: 'Active mode' },
            labelClassName: {
              type: { name: 'string' },
              required: !1,
              description: 'Class for label element',
            },
            className: {
              type: { name: 'string' },
              required: !1,
              description: 'Optional className for inner Button component',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/interactive/MenuButton.jsx'] = {
            name: 'MenuButton',
            docgenInfo: MenuButton.__docgenInfo,
            path: 'src/components/interactive/MenuButton.jsx',
          });
    },
    782: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# Menu Button\n\nNavigation button that renders an icon above a small label. Uses `material-ui` button as a base. These buttons can be used for either navigation or user actions.');
    },
    783: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonActions = __webpack_require__(148),
          _addonKnobs = __webpack_require__(50),
          _Toast = _interopRequireDefault(__webpack_require__(339)),
          _Toast2 = _interopRequireDefault(__webpack_require__(793));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ref = _react.default.createElement(
            'p',
            null,
            'Check out this ',
            _react.default.createElement(
              'strong',
              { className: 'typemod--dark' },
              'toast'
            )
          ),
          _ref2 = _react.default.createElement(
            'p',
            null,
            'Check out this ',
            _react.default.createElement(
              'strong',
              { className: 'typemod--dark' },
              'toast'
            )
          ),
          _ref3 = _react.default.createElement('br', null),
          _ref4 = _react.default.createElement(
            'p',
            null,
            'You better ',
            _react.default.createElement(
              'strong',
              { className: 'typemod--dark' },
              'watch out'
            )
          ),
          _ref5 = _react.default.createElement('br', null),
          _ref6 = _react.default.createElement(_Toast.default, {
            content: _react.default.createElement(
              'p',
              null,
              'You ',
              _react.default.createElement(
                'strong',
                { className: 'typemod--dark' },
                'Did it!'
              )
            ),
            type: 'success',
          }),
          _ref7 = _react.default.createElement('br', null),
          _ref8 = _react.default.createElement(
            'p',
            null,
            'Failed to ',
            _react.default.createElement(
              'strong',
              { className: 'typemod--dark' },
              'do a thing'
            )
          ),
          _ref9 = _react.default.createElement('br', null),
          _ref10 = _react.default.createElement(_Toast.default, {
            content: _react.default.createElement(
              'p',
              null,
              'Uploading a photo of your ',
              _react.default.createElement(
                'strong',
                { className: 'typemod--dark' },
                'your cat'
              )
            ),
            type: 'progress',
          }),
          _ref11 = _react.default.createElement('br', null),
          _ref12 = _react.default.createElement(_Toast.default, {
            content: _react.default.createElement(
              'p',
              null,
              _react.default.createElement(
                'strong',
                { className: 'typemod--dark' },
                '42%'
              ),
              ' complete uploading your cat photo'
            ),
            progress: 42,
            type: 'progress',
          });
        (0, _react2.storiesOf)('Interactive/Toast', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(_Toast.default, {
                content: (0, _addonKnobs.text)('label', _ref),
                actionLabel: (0, _addonKnobs.text)('actionLabel', 'Action'),
                onAction: (0, _addonActions.action)('action button clicked'),
                onDismiss: (0, _addonActions.action)('Toast dismissed'),
                canDismiss: (0, _addonKnobs.boolean)('canDismiss', !0),
                dismissDelay: (0, _addonKnobs.number)('dismissDelay', 4e3),
                isAutoDismiss: (0, _addonKnobs.boolean)('isAutoDismiss', !0),
                progress: (0, _addonKnobs.number)('progress', 42, {
                  range: !0,
                  min: 1,
                  max: 100,
                  step: 1,
                }),
                type: (0, _addonKnobs.optionsKnob)(
                  'type',
                  {
                    info: 'info',
                    error: 'error',
                    success: 'success',
                    warn: 'warn',
                    progress: 'progress',
                  },
                  'info',
                  { display: 'inline-radio' }
                ),
              });
            },
            { notes: { markdown: _Toast2.default } }
          )
          .add('Variations', function() {
            return _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(_Toast.default, {
                content: _ref2,
                actionLabel: 'Action',
                onAction: function onAction() {},
                type: 'info',
              }),
              _ref3,
              _react.default.createElement(_Toast.default, {
                content: _ref4,
                actionLabel: 'run away',
                onAction: function onAction() {},
                type: 'warn',
              }),
              _ref5,
              _ref6,
              _ref7,
              _react.default.createElement(_Toast.default, {
                content: _ref8,
                actionLabel: 'Retry',
                onAction: function onAction() {},
                type: 'error',
              }),
              _ref9,
              _ref10,
              _ref11,
              _ref12
            );
          });
      }.call(this, __webpack_require__(25)(module)));
    },
    785: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = (0, _interopRequireDefault(__webpack_require__(147)).default)(
        function() {
          return _react.default.createElement(
            'svg',
            { viewBox: '0 0 24 24' },
            _react.default.createElement(
              'defs',
              null,
              _react.default.createElement('path', {
                id: 'prefix__InformationIcona',
                d:
                  'M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M11,11 L13,11 L13,17 L11,17 L11,11 Z M12,10 C11.1715729,10 10.5,9.32842712 10.5,8.5 C10.5,7.67157288 11.1715729,7 12,7 C12.8284271,7 13.5,7.67157288 13.5,8.5 C13.5,9.32842712 12.8284271,10 12,10 Z',
              })
            ),
            _react.default.createElement(
              'g',
              { fillRule: 'evenodd' },
              _react.default.createElement(
                'g',
                null,
                _react.default.createElement('use', {
                  xlinkHref: '#prefix__InformationIcona',
                })
              )
            )
          );
        }
      );
      exports.default = _default;
    },
    792: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        range: function(start, end) {
          return function(props, propName, componentName) {
            var val = props[propName];
            return val
              ? 'number' == typeof val
                ? val < start || val > end
                  ? new Error(
                      "'progress' prop in "
                        .concat(componentName, ' must between ')
                        .concat(start, ' and ')
                        .concat(end)
                    )
                  : null
                : new Error(
                    "'progress' prop in ".concat(componentName, ' must be a number')
                  )
              : null;
          };
        },
      };
      exports.default = _default;
    },
    793: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default = '# Toast\n\nUsed to display alerts\n');
    },
    794: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        __webpack_require__(7),
          __webpack_require__(19),
          __webpack_require__(20),
          __webpack_require__(13),
          __webpack_require__(91),
          __webpack_require__(11),
          __webpack_require__(17),
          __webpack_require__(15);
        var _react = (function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj)
              for (var key in obj)
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc =
                    Object.defineProperty && Object.getOwnPropertyDescriptor
                      ? Object.getOwnPropertyDescriptor(obj, key)
                      : {};
                  desc.get || desc.set
                    ? Object.defineProperty(newObj, key, desc)
                    : (newObj[key] = obj[key]);
                }
            return (newObj.default = obj), newObj;
          })(__webpack_require__(0)),
          _propTypes = _interopRequireDefault(__webpack_require__(3)),
          _react2 = __webpack_require__(45),
          _addonKnobs = __webpack_require__(50),
          _Toaster = _interopRequireDefault(__webpack_require__(795)),
          _Toast = _interopRequireDefault(__webpack_require__(339)),
          _Toaster2 = _interopRequireDefault(__webpack_require__(796));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _slicedToArray(arr, i) {
          return (
            (function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            })(arr) ||
            (function _iterableToArrayLimit(arr, i) {
              var _arr = [],
                _n = !0,
                _d = !1,
                _e = void 0;
              try {
                for (
                  var _s, _i = arr[Symbol.iterator]();
                  !(_n = (_s = _i.next()).done) &&
                  (_arr.push(_s.value), !i || _arr.length !== i);
                  _n = !0
                );
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  _n || null == _i.return || _i.return();
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            })(arr, i) ||
            (function _nonIterableRest() {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            })()
          );
        }
        var _ref = _react.default.createElement(
            'p',
            null,
            'Check out this ',
            _react.default.createElement(
              'strong',
              { className: 'typemod--dark' },
              'toast'
            )
          ),
          _ref2 = _react.default.createElement(
            'p',
            null,
            'Check out this ',
            _react.default.createElement(
              'strong',
              { className: 'typemod--dark' },
              'toast'
            )
          ),
          _ref3 = _react.default.createElement(
            'p',
            null,
            'This is an ',
            _react.default.createElement(
              'strong',
              { className: 'typemod--dark' },
              'important message'
            ),
            ' ',
            'that does not go away until a user dismisses it with the close button'
          ),
          ReusableToaster = function(props) {
            return 'error' === props.toastType
              ? _react.default.createElement(_Toaster.default, {
                  toast: _react.default.createElement(_Toast.default, {
                    content: _ref,
                    actionLabel: 'Action',
                    onDismiss: function onDismiss() {
                      props.toggleToast(!1);
                    },
                    type: 'error',
                  }),
                })
              : 'success' === props.toastType
              ? _react.default.createElement(_Toaster.default, {
                  toast: _react.default.createElement(_Toast.default, {
                    content: _ref2,
                    actionLabel: 'Action',
                    onDismiss: function onDismiss() {
                      props.toggleToast(!1);
                    },
                    type: 'success',
                  }),
                })
              : 'persisting' === props.toastType
              ? _react.default.createElement(_Toaster.default, {
                  toast: _react.default.createElement(_Toast.default, {
                    isAutoDismiss: !1,
                    onDismiss: function onDismiss() {
                      props.toggleToast(!1);
                    },
                    content: _ref3,
                    type: 'info',
                  }),
                })
              : null;
          };
        ReusableToaster.propTypes = {
          toastType: _propTypes.default.string,
          toggleToast: _propTypes.default.func,
        };
        var _ref4 = _react.default.createElement(
            'p',
            null,
            'Hide toast ',
            _react.default.createElement('small', null, '(abruptly)')
          ),
          ToasterStory = function() {
            var _useState2 = _slicedToArray((0, _react.useState)(!1), 2),
              isToastShowing = _useState2[0],
              toggleToast = _useState2[1],
              niceSelect = (0, _addonKnobs.select)(
                'Select pre-build toast type',
                { Error: 'error', Success: 'success', Persisting: 'persisting' },
                'error'
              );
            return _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return toggleToast(!isToastShowing);
                  },
                },
                isToastShowing ? _ref4 : 'Show Toast'
              ),
              isToastShowing &&
                _react.default.createElement(_Toaster.default, {
                  toast: _react.default.createElement(ReusableToaster, {
                    toggleToast: toggleToast,
                    toastType: niceSelect,
                  }),
                })
            );
          };
        ToasterStory.displayName = 'ToasterStory';
        var _ref5 = _react.default.createElement(ToasterStory, null);
        (0, _react2.storiesOf)('Interactive/Toaster', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _ref5;
            },
            { notes: { markdown: _Toaster2.default } }
          );
      }.call(this, __webpack_require__(25)(module)));
    },
    795: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(7),
        __webpack_require__(19),
        __webpack_require__(20),
        __webpack_require__(13),
        __webpack_require__(91),
        __webpack_require__(11),
        __webpack_require__(17),
        __webpack_require__(15),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = (function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) return obj;
          var newObj = {};
          if (null != obj)
            for (var key in obj)
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(obj, key)
                    : {};
                desc.get || desc.set
                  ? Object.defineProperty(newObj, key, desc)
                  : (newObj[key] = obj[key]);
              }
          return (newObj.default = obj), newObj;
        })(__webpack_require__(0)),
        _reactDom = _interopRequireDefault(__webpack_require__(81)),
        _reactTransitionGroup = __webpack_require__(343),
        _propTypes = _interopRequireDefault(__webpack_require__(3));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      var Toaster = function(_ref) {
        var toast = _ref.toast,
          _useState2 = _slicedToArray((0, _react.useState)(!!toast), 2),
          isToasting = _useState2[0],
          setIsToasting = _useState2[1],
          clonedToast = null,
          dismissToast = function() {
            setIsToasting(!1);
          };
        toast &&
          (clonedToast = _react.default.cloneElement(toast, {
            dismissToast: dismissToast,
          })),
          (0, _react.useEffect)(
            function() {
              toast && !isToasting && setIsToasting(!0);
            },
            [!!toast]
          ),
          (0, _react.useEffect)(function() {
            if (toast && toast.props.isAutoDismiss) {
              var timer = setTimeout(dismissToast, toast.props.dismissDelay);
              return function() {
                clearTimeout(timer);
              };
            }
          });
        var onExited = (toast && toast.props && toast.props.onDismiss) || function() {};
        return _reactDom.default.createPortal(
          _react.default.createElement(
            'div',
            { 'aria-live': 'assertive', className: 'toaster' },
            _react.default.createElement(
              _reactTransitionGroup.CSSTransition,
              {
                in: isToasting,
                appear: !0,
                unmountOnExit: !0,
                timeout: 380,
                classNames: 'toast',
                onExited: onExited,
              },
              clonedToast
            )
          ),
          document.body
        );
      };
      Toaster.propTypes = { toast: _propTypes.default.element };
      var _default = Toaster;
      exports.default = _default;
    },
    796: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          'Controller for positioning, transition, and dismissal of toasts.\n\nTimer starts immediately on mount.\n\n**⚠️ Include only one `Toaster` component per page/container** to ensure that only one toast is rendered at a time.');
    },
    797: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonKnobs = __webpack_require__(50),
          _Flex = _interopRequireDefault(__webpack_require__(154)),
          _FlexItem = _interopRequireDefault(__webpack_require__(155)),
          _Flex2 = _interopRequireDefault(__webpack_require__(798));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var parentStyle = { width: '600px', background: 'var(--color-haze)' },
          _ref2 = _react.default.createElement(
            _FlexItem.default,
            { shrink: !0 },
            _react.default.createElement('p', null, '1')
          ),
          _ref3 = _react.default.createElement(
            _FlexItem.default,
            null,
            _react.default.createElement('p', null, '2')
          ),
          _ref4 = _react.default.createElement(
            _FlexItem.default,
            { shrink: !0 },
            _react.default.createElement('p', null, '3')
          ),
          _ref5 = _react.default.createElement(
            _FlexItem.default,
            { shrink: !0 },
            _react.default.createElement('p', null, '4')
          ),
          ConditionalItemsExample = function(_ref) {
            var show1 = _ref.show1,
              show2 = _ref.show2,
              show3 = _ref.show3,
              show4 = _ref.show4;
            return _react.default.createElement(
              'div',
              { style: parentStyle },
              _react.default.createElement(
                _Flex.default,
                { className: 'debug--boxModel fontSize--xl fontWeight--bold' },
                show1 && _ref2,
                show2 && _ref3,
                show3 && _ref4,
                show4 && _ref5
              )
            );
          };
        ConditionalItemsExample.displayName = 'ConditionalItemsExample';
        var _ref6 = _react.default.createElement(
            _FlexItem.default,
            { shrink: !0 },
            _react.default.createElement('img', {
              src: 'https://place-hold.it/40x40/a02385/fff&text=IMG',
            })
          ),
          _ref7 = _react.default.createElement(
            _FlexItem.default,
            { shrink: !0 },
            _react.default.createElement('h4', null, 'Look at this cool content')
          ),
          _ref8 = _react.default.createElement(
            _FlexItem.default,
            { shrink: !0 },
            _react.default.createElement('p', { className: 'color--link' }, 'edit')
          ),
          _ref9 = _react.default.createElement(
            'div',
            { style: parentStyle },
            _react.default.createElement(
              _Flex.default,
              { className: 'debug--boxModel' },
              _react.default.createElement(
                _FlexItem.default,
                { shrink: !0 },
                _react.default.createElement('img', {
                  src: 'https://place-hold.it/40x40/a02385/fff&text=:)',
                })
              ),
              _react.default.createElement(
                _FlexItem.default,
                null,
                'Look at this media block. Notice how this area grows to fill the remaining space of the fixed width parent container. When this content wraps, it will not wrap below the figure the same way it would when positioning the image with a',
                _react.default.createElement('code', null, 'float'),
                '.'
              )
            )
          ),
          _ref10 = _react.default.createElement(
            _Flex.default,
            { direction: 'column', className: 'debug--boxModel' },
            _react.default.createElement(
              _FlexItem.default,
              { shrink: !0 },
              _react.default.createElement(
                'p',
                null,
                'This is the header, in a ',
                _react.default.createElement('code', null, 'FlexItem'),
                ' set to ',
                _react.default.createElement('code', null, 'shrink')
              )
            ),
            _react.default.createElement(
              _FlexItem.default,
              null,
              _react.default.createElement(
                'p',
                null,
                'This is the content area, in a ',
                _react.default.createElement('code', null, 'FlexItem'),
                ' that will grow to fill remaining space'
              )
            ),
            _react.default.createElement(
              _FlexItem.default,
              { shrink: !0 },
              _react.default.createElement(
                'p',
                null,
                'This is the footer, in a ',
                _react.default.createElement('code', null, 'FlexItem'),
                ' set to ',
                _react.default.createElement('code', null, 'shrink')
              )
            )
          );
        (0, _react2.storiesOf)('Layout/Flex', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(
                'div',
                { style: parentStyle },
                _react.default.createElement(
                  _Flex.default,
                  {
                    className: 'debug--boxModel',
                    direction: (0, _addonKnobs.radios)(
                      'direction',
                      { row: 'row', column: 'column' },
                      'row'
                    ),
                    justify: (0, _addonKnobs.radios)('justify', {
                      end: 'end',
                      center: 'center',
                      spaceBetween: 'spaceBetween',
                      spaceAround: 'spaceAround',
                    }),
                    align: (0, _addonKnobs.radios)('align', {
                      start: 'start',
                      end: 'end',
                      center: 'center',
                      stretch: 'stretch',
                    }),
                    noGutters: (0, _addonKnobs.boolean)('noGutters', !1),
                    reverse: (0, _addonKnobs.boolean)('reverse', !1),
                  },
                  _ref6,
                  _ref7,
                  _ref8
                )
              );
            },
            { notes: { markdown: _Flex2.default } }
          )
          .add(
            'Classic media block',
            function() {
              return _ref9;
            },
            {
              notes: {
                markdown:
                  'Making the imge `FlexItem` `shrink` and allowing the description `FlexItem` to grow creates the classic "media block" layout pattern.',
              },
            }
          )
          .add(
            'Conditional items',
            function() {
              return _react.default.createElement(ConditionalItemsExample, {
                show1: (0, _addonKnobs.boolean)('Render item 1', !0),
                show2: (0, _addonKnobs.boolean)('Render item 2', !0),
                show3: (0, _addonKnobs.boolean)('Render item 3', !1),
                show4: (0, _addonKnobs.boolean)('Render item 4', !0),
              });
            },
            {
              notes: {
                markdown:
                  '💡 `Flex` is great for conditionaly rendering items. When an item is added or removed, the other items just flow around it!',
              },
            }
          )
          .add(
            'Auto-sized content area',
            function() {
              return _react.default.createElement(
                'div',
                { style: { height: '300px' } },
                _ref10
              );
            },
            {
              notes: {
                markdown:
                  'Within a fixed height container, this `Flex` creates a fixed height header and footer which allows the content area to expand to fill the remaining space.',
              },
            }
          );
      }.call(this, __webpack_require__(25)(module)));
    },
    798: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# Flex\n\nFlex is an abstraction of CSS flexbox that provides a subset of flexbox functionality.\n\n**A `Flex` should only contain `FlexItem` children**.\n\n## Flex direction\n`Flex` renders in row orientation by default. Use the `direction` prop to change flex direction. To reverse the row or column, use the boolean prop `reverse`.\n\n## Flex alignment/justification\nFollowing the flexbox spec, `align` controls cross-axis alignment and `justify` controls main axis alignment. In this example, both `align` and `justify` are set to `end`. The child\n`FlexItem` components here are set to `shrink` to their content width.\n\n_See `FlexItem` documentation for more information on the `FlexItem` `shrink` prop_\n\n');
    },
    799: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonKnobs = __webpack_require__(50),
          _Flex = _interopRequireDefault(__webpack_require__(154)),
          _FlexItem = _interopRequireDefault(__webpack_require__(155)),
          _FlexItem2 = _interopRequireDefault(__webpack_require__(800));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var parentStyle = { width: '600px', background: 'var(--color-haze)' },
          getAlignKnob = function(label) {
            return (0, _addonKnobs.select)('`align` "'.concat(label, '" item'), {
              start: 'start',
              end: 'end',
              center: 'center',
            });
          },
          _ref = _react.default.createElement('img', {
            src: 'https://place-hold.it/40x40/a02385/fff&text=IMG',
          }),
          _ref2 = _react.default.createElement('p', null, 'Dogs'),
          _ref3 = _react.default.createElement('p', null, 'Cats');
        (0, _react2.storiesOf)('Layout/FlexItem', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(
                'div',
                { style: parentStyle },
                _react.default.createElement(
                  _Flex.default,
                  { className: 'debug--boxModel' },
                  _react.default.createElement(
                    _FlexItem.default,
                    {
                      shrink: (0, _addonKnobs.boolean)(
                        'add `shrink` prop to "image" item',
                        !1
                      ),
                    },
                    _ref
                  ),
                  _react.default.createElement(
                    _FlexItem.default,
                    {
                      shrink: (0, _addonKnobs.boolean)(
                        'add `shrink` prop to "Dogs" item',
                        !1
                      ),
                      align: getAlignKnob('Dogs'),
                    },
                    _ref2
                  ),
                  _react.default.createElement(
                    _FlexItem.default,
                    {
                      shrink: (0, _addonKnobs.boolean)(
                        'add `shrink` prop to "Cats" item',
                        !1
                      ),
                      align: getAlignKnob('Cats'),
                    },
                    _ref3
                  )
                )
              );
            },
            { notes: { markdown: _FlexItem2.default } }
          );
      }.call(this, __webpack_require__(25)(module)));
    },
    800: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# FlexItem\n\n## Shrinking & growing a `FlexItem`\nBy default, all `FlexItem` components will grow to fill remaining space within the parent\n`Flex`. The boolean prop `shrink` will cause a `FlexItem` to shrink to its content size.\n\n\n## Controlling alignment/justification\nYou can use the same `align` and `justify` prop interface from `Flex` to control alignment and justification of individual `FlexItem` components.\n\n');
    },
    801: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonKnobs = __webpack_require__(50),
          _AvatarRow = _interopRequireDefault(__webpack_require__(802)),
          _AvatarRow2 = _interopRequireDefault(__webpack_require__(811));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        (0, _react2.storiesOf)('Media/AvatarRow', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(_AvatarRow.default, {
                max: (0, _addonKnobs.number)('max', 3),
                size: (0, _addonKnobs.optionsKnob)(
                  'size',
                  { s: 's', m: 'm', l: 'l', xl: 'xl' },
                  'm',
                  { display: 'inline-radio' }
                ),
                borderColor: (0, _addonKnobs.text)('borderColor', void 0),
                className: (0, _addonKnobs.text)('className', ''),
                memberList: (0, _addonKnobs.object)('memberList', [
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/80/81/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/81/80/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/82/80/animals',
                  },
                  { name: 'member mcmemberton' },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/83/80/animals',
                  },
                ]),
              });
            },
            { notes: { markdown: _AvatarRow2.default } }
          )
          .add('Variations', function() {
            return _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(_AvatarRow.default, {
                memberList: [
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/80/81/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/81/80/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/82/80/animals',
                  },
                  { name: 'member mcmemberton' },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/83/80/animals',
                  },
                ],
                size: 's',
              }),
              _react.default.createElement(_AvatarRow.default, {
                memberList: [
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/80/81/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/81/80/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/82/80/animals',
                  },
                  { name: 'member mcmemberton' },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/83/80/animals',
                  },
                ],
                max: 6,
              }),
              _react.default.createElement(_AvatarRow.default, {
                memberList: [
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/80/81/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/81/80/animals',
                  },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/82/80/animals',
                  },
                  { name: 'member mcmemberton' },
                  {
                    name: 'member mcmemberton',
                    src: 'https://placeimg.com/83/80/animals',
                  },
                ],
                size: 'l',
                max: 2,
              })
            );
          });
      }.call(this, __webpack_require__(25)(module)));
    },
    802: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(46),
        __webpack_require__(65),
        __webpack_require__(49),
        __webpack_require__(76),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.getRenderConfig = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _classnames = _interopRequireDefault(__webpack_require__(33)),
        _propTypes = _interopRequireDefault(__webpack_require__(3)),
        _Avatar = _interopRequireDefault(__webpack_require__(803)),
        _styles = __webpack_require__(805),
        _styleConstants = _interopRequireDefault(__webpack_require__(217));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var getRenderConfig = function(list, max) {
        var renderList = list.slice(0, max);
        return { renderList: renderList, count: list.length - renderList.length };
      };
      exports.getRenderConfig = getRenderConfig;
      var AvatarRow = function(props) {
        var memberList = props.memberList,
          size = props.size,
          max = props.max,
          className = props.className,
          borderColor = props.borderColor,
          renderConfig = getRenderConfig(memberList, max),
          classNames = (0, _classnames.default)(
            'avatarRow',
            'avatarRow--'.concat(size),
            className
          ),
          fontClass = (0, _classnames.default)({
            'typemod--tiny': 's' === size,
            'typemod--small': 'm' === size,
            'typemod--xxlarge': 'xl' === size,
          }),
          StyledAvatar = (0, _styles.withStyles)({ root: { borderColor: borderColor } })(
            _Avatar.default
          );
        return _react.default.createElement(
          'ul',
          { className: classNames },
          renderConfig.renderList.map(function(member, i) {
            return _react.default.createElement(
              'li',
              {
                className: 'avatarRow-item',
                key: ''.concat(member.name.replace(/\s/g, ''), '-').concat(i),
              },
              member.src
                ? _react.default.createElement(StyledAvatar, {
                    alt: member.name,
                    src: member.src,
                    className: 'avatarRow-avatar',
                  })
                : _react.default.createElement(
                    StyledAvatar,
                    {
                      alt: member.name,
                      className: (0, _classnames.default)('avatarRow-avatar', fontClass),
                    },
                    member.name.charAt(0).toUpperCase()
                  )
            );
          }),
          0 < renderConfig.count &&
            _react.default.createElement(
              'li',
              { className: 'avatarRow-item' },
              _react.default.createElement(
                StyledAvatar,
                { className: 'avatarRow-avatar avatarRow-avatar--count' },
                _react.default.createElement(
                  'span',
                  { className: (0, _classnames.default)('typemod--book', fontClass) },
                  '+',
                  renderConfig.count
                )
              )
            )
        );
      };
      (AvatarRow.displayName = 'AvatarRow'),
        (AvatarRow.defaultProps = {
          max: 3,
          size: 'm',
          borderColor: _styleConstants.default.COLOR_HAZE,
        }),
        (AvatarRow.propTypes = {
          memberList: _propTypes.default.arrayOf(
            _propTypes.default.shape({
              name: _propTypes.default.string.isRequired,
              src: _propTypes.default.string,
            })
          ).isRequired,
          size: _propTypes.default.oneOf(['s', 'm', 'l', 'xl']),
          max: _propTypes.default.number,
          className: _propTypes.default.string,
          borderColor: _propTypes.default.string,
        });
      var _default = AvatarRow;
      (exports.default = _default),
        (AvatarRow.__docgenInfo = {
          description: '@param {Object} props react props\n@returns {ReactElement}',
          methods: [],
          displayName: 'AvatarRow',
          props: {
            max: {
              defaultValue: { value: '3', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: 'Maximum number of avatars to render',
            },
            size: {
              defaultValue: { value: "'m'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'s'", computed: !1 },
                  { value: "'m'", computed: !1 },
                  { value: "'l'", computed: !1 },
                  { value: "'xl'", computed: !1 },
                ],
              },
              required: !1,
              description: 'Size of avatars',
            },
            borderColor: {
              defaultValue: { value: 'FDS.COLOR_HAZE', computed: !0 },
              type: { name: 'string' },
              required: !1,
              description:
                'Color of background under the avatars. Used to set the border colors',
            },
            memberList: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    name: { name: 'string', required: !0 },
                    src: { name: 'string', required: !1 },
                  },
                },
              },
              required: !0,
              description: 'List of members to render - `[ {name, src}, ... ]`',
            },
            className: {
              type: { name: 'string' },
              required: !1,
              description: 'Classes to pass to AvatarRow wrapper',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/media/AvatarRow.jsx'] = {
            name: 'AvatarRow',
            docgenInfo: AvatarRow.__docgenInfo,
            path: 'src/components/media/AvatarRow.jsx',
          });
    },
    811: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# AvatarRow\n\nRender an overlapping list of avatars with an overflow count.');
    },
    812: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonActions = __webpack_require__(148),
          _addonKnobs = __webpack_require__(50),
          _CountdownButton = _interopRequireDefault(__webpack_require__(342)),
          _CountdownButton2 = _interopRequireDefault(__webpack_require__(813));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        (0, _react2.storiesOf)('Interactive/CountdownButton', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(_CountdownButton.default, {
                duration: (0, _addonKnobs.number)('duration', 4e3),
                icon: (0, _addonKnobs.text)('icon', void 0),
                onClick: (0, _addonActions.action)('clicked'),
              });
            },
            { notes: { markdown: _CountdownButton2.default } }
          )
          .add('Variations', function() {
            return _react.default.createElement(_CountdownButton.default, {
              duration: 8e3,
              onClick: (0, _addonActions.action)('clicked'),
            });
          });
      }.call(this, __webpack_require__(25)(module)));
    },
    813: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# CountdownButton\n\nAn icon button that shows a radial countdown animation immediately on mount.');
    },
    814: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        var _react = _interopRequireDefault(__webpack_require__(0)),
          _react2 = __webpack_require__(45),
          _addonKnobs = __webpack_require__(50),
          _CheckIcon = _interopRequireDefault(__webpack_require__(341)),
          _Updatable = _interopRequireDefault(__webpack_require__(815)),
          _Updatable2 = _interopRequireDefault(__webpack_require__(816));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ref = _react.default.createElement('button', null, 'lorem ipsum'),
          _ref2 = _react.default.createElement('b', null, 'anything'),
          _ref3 = _react.default.createElement('br', null),
          _ref4 = _react.default.createElement('br', null),
          _ref5 = _react.default.createElement(
            _Updatable.default,
            {
              message: _react.default.createElement(_CheckIcon.default, {
                size: 'xs',
                color: '#fff',
              }),
            },
            _react.default.createElement('img', {
              src: 'https://placeimg.com/80/81/animals',
            })
          );
        (0, _react2.storiesOf)('Media/Updatable', module)
          .addDecorator(_addonKnobs.withKnobs)
          .add(
            'Knobs',
            function() {
              return _react.default.createElement(
                _Updatable.default,
                { message: (0, _addonKnobs.text)('message', 42) },
                _ref
              );
            },
            { notes: { markdown: _Updatable2.default } }
          )
          .add('Variations', function() {
            return _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(
                _Updatable.default,
                { message: 'alert' },
                _react.default.createElement(
                  'div',
                  { style: { border: '1px dashed #f09', padding: '5px' } },
                  'Updatable can wrap ',
                  _ref2,
                  '!'
                )
              ),
              _ref3,
              _ref4,
              _ref5
            );
          });
      }.call(this, __webpack_require__(25)(module)));
    },
    815: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireDefault(__webpack_require__(0)),
        _propTypes = _interopRequireDefault(__webpack_require__(3));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Updatable = function(_ref) {
        var message = _ref.message,
          children = _ref.children;
        return _react.default.createElement(
          'div',
          { className: 'updatable' },
          children,
          message &&
            _react.default.createElement(
              'div',
              { className: 'updatable-indicator' },
              message
            )
        );
      };
      (Updatable.displayName = 'Updatable'),
        (Updatable.propTypes = {
          message: _propTypes.default.oneOfType([
            _propTypes.default.element,
            _propTypes.default.string,
          ]),
          children: _propTypes.default.oneOfType([
            _propTypes.default.arrayOf(_propTypes.default.node),
            _propTypes.default.node,
          ]),
        });
      var _default = Updatable;
      (exports.default = _default),
        (Updatable.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Updatable',
          props: {
            message: {
              type: { name: 'union', value: [{ name: 'element' }, { name: 'string' }] },
              required: !1,
              description: 'Count or message for the updates bubble',
            },
            children: {
              type: {
                name: 'union',
                value: [{ name: 'arrayOf', value: { name: 'node' } }, { name: 'node' }],
              },
              required: !1,
              description: 'React children',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/media/Updatable.jsx'] = {
            name: 'Updatable',
            docgenInfo: Updatable.__docgenInfo,
            path: 'src/components/media/Updatable.jsx',
          });
    },
    816: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          '# Updatable\n\nWraps children in an "updatable" container with a `message` displayed as a notification-style red bubble.');
    },
  },
  [[348, 1, 2]],
]);
//# sourceMappingURL=main.80919ad85fdd18d9d004.bundle.js.map
