(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[4477],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./components/Contributors/OscrButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Blurred:()=>Blurred,Default:()=>Default,NotCalculated:()=>NotCalculated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Blurred$parameters,_Blurred$parameters2,_NotCalculated$parame,_NotCalculated$parame2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Contributors/OscrButton",component:__webpack_require__("./components/Contributors/Oscr.tsx").Ck,args:{signIn:options=>Promise.resolve({}),rating:.5,calculated:!0}},Default={args:{hideRating:!1}},Blurred={args:{hideRating:!0}},NotCalculated={args:{calculated:!1}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    hideRating: false\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Blurred.parameters=_objectSpread(_objectSpread({},Blurred.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Blurred$parameters=Blurred.parameters)||void 0===_Blurred$parameters?void 0:_Blurred$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    hideRating: true\n  }\n}"},null===(_Blurred$parameters2=Blurred.parameters)||void 0===_Blurred$parameters2||null===(_Blurred$parameters2=_Blurred$parameters2.docs)||void 0===_Blurred$parameters2?void 0:_Blurred$parameters2.source)})}),NotCalculated.parameters=_objectSpread(_objectSpread({},NotCalculated.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NotCalculated$parame=NotCalculated.parameters)||void 0===_NotCalculated$parame?void 0:_NotCalculated$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    calculated: false\n  }\n}"},null===(_NotCalculated$parame2=NotCalculated.parameters)||void 0===_NotCalculated$parame2||null===(_NotCalculated$parame2=_NotCalculated$parame2.docs)||void 0===_NotCalculated$parame2?void 0:_NotCalculated$parame2.source)})});const __namedExportsOrder=["Default","Blurred","NotCalculated"]},"./components/Contributors/Oscr.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>OscrButton,O_:()=>OscrPill,_W:()=>OscrInfoTooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_primer_octicons_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@primer/octicons-react/dist/index.esm.js"),posthog_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/posthog-js/react/dist/esm/index.js"),next_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/router.js"),react_icons_hi__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-icons/hi/index.mjs"),components_atoms_Pill_pill__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/atoms/Pill/pill.tsx"),components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),components_shared_Button_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/shared/Button/button.tsx"),lib_utils_supabase__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/supabase.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const DEFAULT_SIGN_IN=lib_utils_supabase__WEBPACK_IMPORTED_MODULE_6__.O.auth.signInWithOAuth.bind(lib_utils_supabase__WEBPACK_IMPORTED_MODULE_6__.O.auth),OSCR_LOGIN_TEXT="Log in to view Open Source Contributor Rating (OSCR)",OscrPill=_ref=>{let{rating,hideRating,signIn=DEFAULT_SIGN_IN,calculated}=_ref;const router=(0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),posthog=(0,posthog_js_react__WEBPACK_IMPORTED_MODULE_1__.U0)();let ratingToRender=calculated?rating?Math.ceil(rating):0:"-";const tooltipText=hideRating?OSCR_LOGIN_TEXT:"Open Source Contributor Rating (OSCR)";return __jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{direction:"top",content:tooltipText},hideRating?__jsx("div",{className:"relative flex items-center justify-center w-fit"},__jsx("span",{className:"absolute blur-sm text-xl text-purple-00 leading-tight"},"000"),__jsx(components_shared_Button_button__WEBPACK_IMPORTED_MODULE_5__.Z,{variant:"primary",className:"flex items-center gap-2 !p-1 !text-xs z-0",onClick:()=>{posthog.capture("OSCR Login Button Clicked",{pathname:router.pathname}),signIn({provider:"github",options:{redirectTo:window.location.href}})}},__jsx("span",{className:"sr-only"},OSCR_LOGIN_TEXT),__jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_7__.mBM,{size:16}))):__jsx(components_atoms_Pill_pill__WEBPACK_IMPORTED_MODULE_3__.Z,{color:"purple",size:"small",text:"".concat(ratingToRender)}))};OscrPill.displayName="OscrPill";const OscrButton=_ref2=>{let{rating,hideRating,signIn=DEFAULT_SIGN_IN,calculated}=_ref2;const router=(0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),posthog=(0,posthog_js_react__WEBPACK_IMPORTED_MODULE_1__.U0)();let ratingToRender=calculated?rating?Math.ceil(rating):0:"-";return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,hideRating?__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{direction:"top",content:OSCR_LOGIN_TEXT},__jsx("div",{className:"relative flex items-center justify-center w-fit"},__jsx("span",{className:"absolute blur-sm text-xl text-black z-0 leading-tight"},"000"),__jsx(components_shared_Button_button__WEBPACK_IMPORTED_MODULE_5__.Z,{variant:"primary",className:"flex items-center gap-2 !p-1 !text-xs z-10",onClick:()=>{posthog.capture("OSCR Login Button Clicked",{pathname:router.pathname}),signIn({provider:"github",options:{redirectTo:window.location.href}})}},__jsx("span",{className:"sr-only"},OSCR_LOGIN_TEXT),__jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_7__.mBM,{size:16})))):__jsx("span",null,ratingToRender))},OscrInfoTooltip=()=>__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{content:__jsx("div",{className:"grid gap-2"},__jsx("p",null,"OSCR evaluates the engagement and impact of contributors across the entire open source ecosystem."),__jsx("a",{href:"https://opensauced.pizza/docs/features/contributor-insights/#open-source-contributor-rating-oscr",className:"underline"},"Learn more...",__jsx("span",{className:"sr-only"}," about OSCR rating"))),className:"w-fit max-w-xs !text-sm shadow-lg text-slate-100 !px-4 !py-3 !rounded-xl"},__jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.if7,{className:"text-slate-500"}));OscrInfoTooltip.displayName="OscrInfoTooltip";try{OscrPill.displayName="OscrPill",OscrPill.__docgenInfo={description:"",displayName:"OscrPill",props:{rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"number | undefined"}},hideRating:{defaultValue:null,description:"",name:"hideRating",required:!0,type:{name:"boolean"}},signIn:{defaultValue:{value:"supabase.auth.signInWithOAuth.bind(supabase.auth)"},description:"",name:"signIn",required:!1,type:{name:"((credentials: SignInWithOAuthCredentials) => Promise<OAuthResponse>)"}},calculated:{defaultValue:null,description:"",name:"calculated",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Contributors/Oscr.tsx#OscrPill"]={docgenInfo:OscrPill.__docgenInfo,name:"OscrPill",path:"components/Contributors/Oscr.tsx#OscrPill"})}catch(__react_docgen_typescript_loader_error){}try{OscrButton.displayName="OscrButton",OscrButton.__docgenInfo={description:"",displayName:"OscrButton",props:{rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"number | undefined"}},hideRating:{defaultValue:null,description:"",name:"hideRating",required:!0,type:{name:"boolean"}},signIn:{defaultValue:{value:"supabase.auth.signInWithOAuth.bind(supabase.auth)"},description:"",name:"signIn",required:!1,type:{name:"((credentials: SignInWithOAuthCredentials) => Promise<OAuthResponse>)"}},calculated:{defaultValue:null,description:"",name:"calculated",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Contributors/Oscr.tsx#OscrButton"]={docgenInfo:OscrButton.__docgenInfo,name:"OscrButton",path:"components/Contributors/Oscr.tsx#OscrButton"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Pill/pill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const Pill=_ref=>{let{className,text,color="slate",size="base",icon,blurText=!1}=_ref;return __jsx("div",{className:"\n        ".concat("green"===color?"bg-light-grass-4 ":"yellow"===color?"bg-amber-200 ":"red"===color?"bg-light-red-4 ":"purple"===color?"bg-purple-200":"bg-light-slate-3 ","\n        ").concat("small"===size?"py-1 px-1.5":"py-1.5 px-2 ","\n        inline-flex items-center rounded-full w-fit gap-1 ").concat(className)},__jsx("span",{className:"".concat("green"===color?"text-light-grass-11":"yellow"===color?"text-amber-700":"red"===color?"text-light-red-11":"purple"===color?"text-purple-600":"text-light-slate-11")},icon),__jsx("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("green"===color?"text-light-grass-11":"yellow"===color?"text-amber-700":"red"===color?"text-light-red-11":"purple"===color?"text-purple-600":"text-light-slate-11","xsmall"===size?"text-xs":"text-sm",blurText?"blur-sm":"","leading-none"),style:{"--tw-blur":"blur(2.85px)"}},text))};Pill.displayName="Pill";const __WEBPACK_DEFAULT_EXPORT__=Pill;try{pill.displayName="pill",pill.__docgenInfo={description:"",displayName:"pill",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | number"}},color:{defaultValue:{value:"slate"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"slate"'},{value:'"green"'},{value:'"yellow"'},{value:'"red"'},{value:'"purple"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'},{value:'"xsmall"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},blurText:{defaultValue:{value:"false"},description:"",name:"blurText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Pill/pill.tsx#pill"]={docgenInfo:pill.__docgenInfo,name:"pill",path:"components/atoms/Pill/pill.tsx#pill"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Tooltip/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>TipProvider,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Tooltip=_ref=>{let{children,content,className,direction,defaultOpen}=_ref;const{Portal,Root,Content,Trigger,Arrow}=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__;return __jsx(Root,{delayDuration:300,defaultOpen},__jsx(Trigger,{asChild:!0},__jsx("div",null,children)),__jsx(Portal,null,__jsx(Content,{sideOffset:4,collisionPadding:10,side:direction||"bottom",avoidCollisions:!0,style:{zIndex:9999}},__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-xs py-1 px-2 rounded shadow-lg  bg-dark-slate-2 text-dark-slate-12",className)},content),__jsx(Arrow,{className:"fill-dark "}))))};Tooltip.displayName="Tooltip";const TipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.zt,__WEBPACK_DEFAULT_EXPORT__=Tooltip;try{TipProvider.displayName="TipProvider",TipProvider.__docgenInfo={description:"",displayName:"TipProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#TipProvider"]={docgenInfo:TipProvider.__docgenInfo,name:"TipProvider",path:"components/atoms/Tooltip/tooltip.tsx#TipProvider"})}catch(__react_docgen_typescript_loader_error){}try{tooltip.displayName="tooltip",tooltip.__docgenInfo={description:"",displayName:"tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom"'}]}},delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tipClassName:{defaultValue:null,description:"",name:"tipClassName",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#tooltip"]={docgenInfo:tooltip.__docgenInfo,name:"tooltip",path:"components/atoms/Tooltip/tooltip.tsx#tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","loadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,loadingText="Loading...",onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},loadingText)):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"primary"'},{value:'"outline"'},{value:'"default"'},{value:'"dark"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/shared/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/supabase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>supabase});var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/auth-helpers-nextjs/dist/index.js");const supabase=(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)()},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"?c969":()=>{},"?fd9c":()=>{},"?0fee":()=>{},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{"use strict";function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);