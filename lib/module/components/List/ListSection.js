var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native-web");var _ListSubheader=_interopRequireDefault(require("./ListSubheader"));var _theming=require("../../core/theming");var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/List/ListSection.tsx";var ListSection=function(_React$Component){(0,_inherits2.default)(ListSection,_React$Component);function ListSection(){(0,_classCallCheck2.default)(this,ListSection);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ListSection).apply(this,arguments));}(0,_createClass2.default)(ListSection,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,title=_this$props.title,titleStyle=_this$props.titleStyle,style=_this$props.style,rest=(0,_objectWithoutProperties2.default)(_this$props,["children","title","titleStyle","style"]);return React.createElement(_reactNative.View,(0,_extends2.default)({},rest,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:73}}),title&&React.createElement(_ListSubheader.default,{style:titleStyle,__source:{fileName:_jsxFileName,lineNumber:74}},title),children);}}]);return ListSection;}(React.Component);ListSection.displayName='List.Section';var styles=_reactNative.StyleSheet.create({container:{marginVertical:8}});var _default=(0,_theming.withTheme)(ListSection);exports.default=_default;
//# sourceMappingURL=ListSection.js.map