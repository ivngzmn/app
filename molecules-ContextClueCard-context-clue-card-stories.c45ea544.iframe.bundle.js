"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[609],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/molecules/ContextClueCard/context-clue-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>context_clue_card_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Typography_title=__webpack_require__("./components/atoms/Typography/title.tsx"),__jsx=react.createElement;const ContextClueCard=_ref=>{let{title,desc}=_ref;return __jsx("div",{className:"bg-white relative border overflow-hidden inline-flex w-full flex-col gap-3 md:gap-8 border-light-slate-6 p-6 rounded-lg"},__jsx("div",{className:"absolute h-2 bg-orange-500 right-0 left-0 top-0"}),__jsx(Typography_title.Z,{className:"!text-3xl md:!text-5xl",level:1},title),__jsx("p",{className:"text-light-slate-11 text-sm md:text-base"},desc))};ContextClueCard.displayName="ContextClueCard";const context_clue_card=ContextClueCard;try{contextcluecard.displayName="contextcluecard",contextcluecard.__docgenInfo={description:"",displayName:"contextcluecard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContextClueCard/context-clue-card.tsx#contextcluecard"]={docgenInfo:contextcluecard.__docgenInfo,name:"contextcluecard",path:"components/molecules/ContextClueCard/context-clue-card.tsx#contextcluecard"})}catch(__react_docgen_typescript_loader_error){}var _DefaultStory$paramet,_DefaultStory$paramet2,context_clue_card_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const context_clue_card_stories={title:"Design System/Molecules/ContextClueCard"},ContextClueCardTemplate=args=>context_clue_card_stories_jsx(context_clue_card,args);ContextClueCardTemplate.displayName="ContextClueCardTemplate";const DefaultStory=ContextClueCardTemplate.bind({});DefaultStory.args={title:"Title",desc:"Lorem ipsum dolor sit amet consectetur. Tempus nascetur in nisl justo posuere lacinia blandit mi. Arcu eget tellus nibh pharetra est aliquam turpis. Penatibus in vulputate dui egestas vestibulum id pharetra. A urna donec in pharetra eu nec."},DefaultStory.parameters=_objectSpread(_objectSpread({},DefaultStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs),{},{source:_objectSpread({originalSource:"args => <ContextClueCard {...args} />"},null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source)})});const __namedExportsOrder=["DefaultStory"]},"./components/atoms/Typography/title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx");const _excluded=["children","level","weight","className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Title=_ref=>{let{children,level=1,weight="medium",className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const TitleTag="h".concat(level);return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,null,__jsx(TitleTag,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,"font-".concat(weight))},props),children))};Title.displayName="Title";const __WEBPACK_DEFAULT_EXPORT__=Title;try{title.displayName="title",title.__docgenInfo={description:"",displayName:"title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"}]}},weight:{defaultValue:{value:"medium"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"thin"'},{value:'"extralight"'},{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'},{value:'"black"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/title.tsx#title"]={docgenInfo:title.__docgenInfo,name:"title",path:"components/atoms/Typography/title.tsx#title"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["children","className","size"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TypographyWrapper=_ref=>{let{children,className,size="sm"}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper";const __WEBPACK_DEFAULT_EXPORT__=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);