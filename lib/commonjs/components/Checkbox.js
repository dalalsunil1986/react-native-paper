var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native-web");var _CheckboxAndroid2=_interopRequireDefault(require("./CheckboxAndroid"));var _CheckboxIOS2=_interopRequireDefault(require("./CheckboxIOS"));var _theming=require("../core/theming");var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/Checkbox.tsx";var Checkbox=function(_React$Component){(0,_inherits2.default)(Checkbox,_React$Component);function Checkbox(){(0,_classCallCheck2.default)(this,Checkbox);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Checkbox).apply(this,arguments));}(0,_createClass2.default)(Checkbox,[{key:"render",value:function render(){return _reactNative.Platform.OS==='ios'?React.createElement(_CheckboxIOS2.default,(0,_extends2.default)({},this.props,{__source:{fileName:_jsxFileName,lineNumber:92}})):React.createElement(_CheckboxAndroid2.default,(0,_extends2.default)({},this.props,{__source:{fileName:_jsxFileName,lineNumber:94}}));}}]);return Checkbox;}(React.Component);Checkbox.Android=_CheckboxAndroid2.default;Checkbox.IOS=_CheckboxIOS2.default;var _default=(0,_theming.withTheme)(Checkbox);exports.default=_default;
//# sourceMappingURL=Checkbox.js.map