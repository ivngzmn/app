"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[133],{"./components/shared/LanguagePill/language-pill.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Shared/LanguagePill",component:__webpack_require__("./components/shared/LanguagePill/LanguagePill.tsx").ZP,args:{language:"javascript"}},Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/shared/LanguagePill/LanguagePill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>LanguagePill,qv:()=>renderLanguageIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),di=__webpack_require__("./node_modules/react-icons/di/index.mjs"),tb=__webpack_require__("./node_modules/react-icons/tb/index.mjs");const kubernetes={src:"static/media/kubernetes.b0121f66.svg",height:13,width:13,blurDataURL:"static/media/kubernetes.b0121f66.svg"};var __jsx=react.createElement;function getLanguageTopic(language){switch(language){case"go":return"golang";case"c++":return"cpp";case"c#":return"csharp";default:return language.toLowerCase()}}function renderLanguageIcon(language){switch(language){case"go":case"golang":return __jsx(tb.lS7,null);case"c++":case"cpp":return __jsx(tb.r28,null);case"c#":case"csharp":return __jsx(tb.siQ,null);case"react":return __jsx(tb.i1S,null);case"rust":return __jsx(tb.Lup,null);case"javascript":return __jsx(tb.Lcw,null);case"ml":return __jsx(tb.FUn,null);case"ai":return __jsx(tb.bAs,null);case"python":return __jsx(tb.nE5,null);case"svelte":return __jsx(tb.Vhi,null);case"typescript":return __jsx(tb.jNt,null);case"angular":return __jsx(tb.ixG,null);case"php":return __jsx(tb.hbX,null);case"c":return __jsx(tb.UFw,null);case"ruby":return __jsx(tb.j2F,null);case"java":return __jsx(tb.LyB,null);case"vue":return __jsx(tb.kWe,null);case"kubernetes":return __jsx(next_image.Z,{src:kubernetes,alt:"Kubernetes"});case"clojure":return __jsx(di.uW3,null);case"kotlin":return __jsx(tb.ZqF,null);case"android":return __jsx(tb.gSO,null);case"swift":return __jsx(tb.mh_,null);default:return __jsx(tb.ssl,null)}}function LanguagePill(_ref){let{language,className}=_ref;return __jsx("div",{className:"flex items-center gap-1 px-4 py-2 text-xs rounded-3xl w-max bg-light-slate-3 text-light-slate-11 ".concat(className)},__jsx("div",{className:"text-sm text-black"},renderLanguageIcon(language)),__jsx("span",{className:"font-normal capitalize"},language))}LanguagePill.displayName="LanguagePill";try{getLanguageTopic.displayName="getLanguageTopic",getLanguageTopic.__docgenInfo={description:"",displayName:"getLanguageTopic",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/LanguagePill/LanguagePill.tsx#getLanguageTopic"]={docgenInfo:getLanguageTopic.__docgenInfo,name:"getLanguageTopic",path:"components/shared/LanguagePill/LanguagePill.tsx#getLanguageTopic"})}catch(__react_docgen_typescript_loader_error){}try{renderLanguageIcon.displayName="renderLanguageIcon",renderLanguageIcon.__docgenInfo={description:"",displayName:"renderLanguageIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/LanguagePill/LanguagePill.tsx#renderLanguageIcon"]={docgenInfo:renderLanguageIcon.__docgenInfo,name:"renderLanguageIcon",path:"components/shared/LanguagePill/LanguagePill.tsx#renderLanguageIcon"})}catch(__react_docgen_typescript_loader_error){}try{LanguagePill.displayName="LanguagePill",LanguagePill.__docgenInfo={description:"",displayName:"LanguagePill",props:{language:{defaultValue:null,description:"",name:"language",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/LanguagePill/LanguagePill.tsx#LanguagePill"]={docgenInfo:LanguagePill.__docgenInfo,name:"LanguagePill",path:"components/shared/LanguagePill/LanguagePill.tsx#LanguagePill"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);