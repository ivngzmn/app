"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[9912],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/atoms/FavoriteSelector/favorite-selector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,OutLined:()=>OutLined,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Filled$parameters,_Filled$parameters2,_OutLined$parameters,_OutLined$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_FavoriteSelector_favorite_selector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/FavoriteSelector/favorite-selector.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/FavoriteSelector"},FavoriteSelectorTemplate=args=>__jsx(components_atoms_FavoriteSelector_favorite_selector__WEBPACK_IMPORTED_MODULE_2__.Z,args);FavoriteSelectorTemplate.displayName="FavoriteSelectorTemplate";const Filled=FavoriteSelectorTemplate.bind({});Filled.args={isFavorite:!0};const OutLined=FavoriteSelectorTemplate.bind({});OutLined.args={isFavorite:!1},Filled.parameters=_objectSpread(_objectSpread({},Filled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Filled$parameters=Filled.parameters)||void 0===_Filled$parameters?void 0:_Filled$parameters.docs),{},{source:_objectSpread({originalSource:"args => <FavoriteSelector {...args} />"},null===(_Filled$parameters2=Filled.parameters)||void 0===_Filled$parameters2||null===(_Filled$parameters2=_Filled$parameters2.docs)||void 0===_Filled$parameters2?void 0:_Filled$parameters2.source)})}),OutLined.parameters=_objectSpread(_objectSpread({},OutLined.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_OutLined$parameters=OutLined.parameters)||void 0===_OutLined$parameters?void 0:_OutLined$parameters.docs),{},{source:_objectSpread({originalSource:"args => <FavoriteSelector {...args} />"},null===(_OutLined$parameters2=OutLined.parameters)||void 0===_OutLined$parameters2||null===(_OutLined$parameters2=_OutLined$parameters2.docs)||void 0===_OutLined$parameters2?void 0:_OutLined$parameters2.source)})});const __namedExportsOrder=["Filled","OutLined"]},"./components/atoms/FavoriteSelector/favorite-selector.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_icons_ai__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-icons/ai/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const FavoriteSelector=_ref=>{let{isFavorite=!0}=_ref;return __jsx("div",{className:"inline-flex rounded-md hover:bg-light-slate-2 cursor-pointer bg-transparent items-center gap-1 transition py-1 px-3 "},isFavorite?__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.pHD,{className:"text-light-slate-11 text-lg"}):__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.y5j,{className:"text-light-slate-9 text-lg"}),__jsx("span",{className:"".concat(isFavorite?"text-light-slate-12":"text-light-slate-11"," text-sm font-semibold hidden lg:block")},"Favorite"))};FavoriteSelector.displayName="FavoriteSelector";const __WEBPACK_DEFAULT_EXPORT__=FavoriteSelector;try{favoriteselector.displayName="favoriteselector",favoriteselector.__docgenInfo={description:"",displayName:"favoriteselector",props:{isFavorite:{defaultValue:{value:"true"},description:"",name:"isFavorite",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/FavoriteSelector/favorite-selector.tsx#favoriteselector"]={docgenInfo:favoriteselector.__docgenInfo,name:"favoriteselector",path:"components/atoms/FavoriteSelector/favorite-selector.tsx#favoriteselector"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);