var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _color=_interopRequireDefault(require("color"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native-web");var _Text=_interopRequireDefault(require("../Typography/Text"));var _Divider=_interopRequireDefault(require("../Divider"));var _theming=require("../../core/theming");var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/Drawer/DrawerSection.tsx";var DrawerSection=function(_React$Component){(0,_inherits2.default)(DrawerSection,_React$Component);function DrawerSection(){(0,_classCallCheck2.default)(this,DrawerSection);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(DrawerSection).apply(this,arguments));}(0,_createClass2.default)(DrawerSection,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,title=_this$props.title,theme=_this$props.theme,style=_this$props.style,rest=(0,_objectWithoutProperties2.default)(_this$props,["children","title","theme","style"]);var colors=theme.colors,fonts=theme.fonts;var titleColor=(0,_color.default)(colors.text).alpha(0.54).rgb().string();var font=fonts.medium;return React.createElement(_reactNative.View,(0,_extends2.default)({style:[styles.container,style]},rest,{__source:{fileName:_jsxFileName,lineNumber:72}}),title&&React.createElement(_reactNative.View,{style:styles.titleContainer,__source:{fileName:_jsxFileName,lineNumber:74}},React.createElement(_Text.default,{numberOfLines:1,style:(0,_objectSpread2.default)({color:titleColor},font,{marginLeft:16}),__source:{fileName:_jsxFileName,lineNumber:75}},title)),children,React.createElement(_Divider.default,{style:styles.divider,__source:{fileName:_jsxFileName,lineNumber:84}}));}}]);return DrawerSection;}(React.Component);DrawerSection.displayName='Drawer.Section';var styles=_reactNative.StyleSheet.create({container:{marginBottom:4},titleContainer:{height:40,justifyContent:'center'},divider:{marginTop:4}});var _default=(0,_theming.withTheme)(DrawerSection);exports.default=_default;
//# sourceMappingURL=DrawerSection.js.map