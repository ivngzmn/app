(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[2421],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/organisms/ToolList/tool-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tool_nav_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),query_params=__webpack_require__("./lib/utils/query-params.ts"),component_date_filter=__webpack_require__("./components/molecules/ComponentDateFilter/component-date-filter.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),humanizeNumber=__webpack_require__("./lib/utils/humanizeNumber.ts"),__jsx=react.createElement;const NavItem=_ref=>{let{tool,selectedTool,navLink}=_ref;const{0:total,1:setTotal}=(0,react.useState)();return(0,react.useEffect)((()=>{setTotal(tool.numOf)}),[tool.numOf]),__jsx(link_default(),{href:navLink},__jsx("div",{className:"flex h-11 px-2 md:px-4 items-center rounded-t-lg ".concat(selectedTool===tool.name.toLowerCase()?"":"cursor-pointer hover:!bg-light-slate-4"," after:block after:relative after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-lg ").concat(selectedTool===tool.name.toLowerCase()?"after:bg-orange-500":"focus:after:bg-slate-400"," focus:bg-slate-100 focus:ring-slate-300 child:flex child:items-center")},__jsx("span",{className:"text-base whitespace-nowrap text-slate-900"},tool.name),void 0!==total&&__jsx("div",{className:"ml-2 py-0.5 px-1.5 h-fit bg-slate-200 border rounded-full text-xs font-semibold"},(0,humanizeNumber.Z)(total,null))))};NavItem.displayName="NavItem";const nav_item=NavItem;try{navitem.displayName="navitem",navitem.__docgenInfo={description:"",displayName:"navitem",props:{username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string | string[]"}},filterName:{defaultValue:null,description:"",name:"filterName",required:!1,type:{name:"string | string[]"}},tool:{defaultValue:null,description:"",name:"tool",required:!0,type:{name:"{ name: string; numOf?: number | undefined; }"}},selectedFilter:{defaultValue:null,description:"",name:"selectedFilter",required:!1,type:{name:"string | string[]"}},selectedTool:{defaultValue:null,description:"",name:"selectedTool",required:!0,type:{name:"string | string[]"}},navLink:{defaultValue:null,description:"",name:"navLink",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/ToolList/nav-item.tsx#navitem"]={docgenInfo:navitem.__docgenInfo,name:"navitem",path:"components/organisms/ToolList/nav-item.tsx#navitem"})}catch(__react_docgen_typescript_loader_error){}var nav_jsx=react.createElement;const Nav=_ref=>{let{toolList,selectedTool="dashboard",selectedFilter,filterName,username,workspaceId}=_ref;const router=(0,next_router.useRouter)(),{range=30,insightId}=router.query;return nav_jsx("nav",{role:"tablist","aria-orientation":"horizontal","aria-label":"Browse the tools",tabIndex:0,className:"tool-list-nav flex w-full overflow-x-auto overflow-y-hidden gap-2 border-b pt-3"},toolList.map(((tool,index)=>{const pageId=filterName||insightId,workspaceNavLink="/workspaces/".concat(workspaceId,"/repository-insights/").concat(pageId,"/").concat(tool.name.toLowerCase());let pageNavLink="/";pageNavLink+=username?"pages/".concat(username,"/explore/topic/"):"explore/topic/",pageNavLink+="".concat(pageId,"/").concat(tool.name.toLowerCase()),selectedFilter&&(Array.isArray(selectedFilter)?pageNavLink+="/filter/".concat(selectedFilter.join("/"),"?range=").concat(range):pageNavLink+="/filter/".concat(selectedFilter,"?range=").concat(range));const navLink=workspaceId?workspaceNavLink:pageNavLink;return nav_jsx("div",{role:"tab","aria-selected":selectedTool===tool.name.toLowerCase()?"true":"false","data-state":selectedTool===tool.name.toLowerCase()?"active":"inactive",tabIndex:-1,key:index,className:"tool-list-item border-b-2 ml-2 transition-all ease-in-out ".concat(selectedTool.toLowerCase()===tool.name.toLowerCase()?"border-orange-500":"border-transparent hover:border-light-slate-8")},nav_jsx(nav_item,{tool,selectedFilter,filterName:pageId,username,selectedTool,navLink}))})),nav_jsx("div",{className:"ml-auto hidden md:block"},nav_jsx(component_date_filter.Z,{setRangeFilter:selectedRange=>{(0,query_params.B)({range:"".concat(selectedRange)})},defaultRange:Number(range)})))};Nav.displayName="Nav";const ToolList_nav=Nav;try{nav.displayName="nav",nav.__docgenInfo={description:"",displayName:"nav",props:{toolList:{defaultValue:null,description:"",name:"toolList",required:!0,type:{name:"ToolListArray[]"}},selectedTool:{defaultValue:{value:"dashboard"},description:"",name:"selectedTool",required:!1,type:{name:"string | string[]"}},filterName:{defaultValue:null,description:"",name:"filterName",required:!1,type:{name:"string | string[]"}},selectedFilter:{defaultValue:null,description:"",name:"selectedFilter",required:!1,type:{name:"string | string[]"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string | string[]"}},workspaceId:{defaultValue:null,description:"",name:"workspaceId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/ToolList/nav.tsx#nav"]={docgenInfo:nav.__docgenInfo,name:"nav",path:"components/organisms/ToolList/nav.tsx#nav"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,tool_nav_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const tool_nav_stories={title:"Design System/Organisms/Tools Nav",component:"Tool List Nav"},ToolNavTemplate=args=>tool_nav_stories_jsx(ToolList_nav,args);ToolNavTemplate.displayName="ToolNavTemplate";const Default=ToolNavTemplate.bind({});Default.args={filterName:"test",selectedTool:"test 1",toolList:[{name:"test 1"},{name:"test 2",numOf:3},{name:"test 2",numOf:0}]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Nav {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/atoms/Tooltip/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>TipProvider,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Tooltip=_ref=>{let{children,content,className,direction,defaultOpen}=_ref;const{Portal,Root,Content,Trigger,Arrow}=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__;return __jsx(Root,{delayDuration:300,defaultOpen},__jsx(Trigger,{asChild:!0},__jsx("div",null,children)),__jsx(Portal,null,__jsx(Content,{sideOffset:4,collisionPadding:10,side:direction||"bottom",avoidCollisions:!0,style:{zIndex:9999}},__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-xs py-1 px-2 rounded shadow-lg  bg-dark-slate-2 text-dark-slate-12",className)},content),__jsx(Arrow,{className:"fill-dark "}))))};Tooltip.displayName="Tooltip";const TipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.zt,__WEBPACK_DEFAULT_EXPORT__=Tooltip;try{TipProvider.displayName="TipProvider",TipProvider.__docgenInfo={description:"",displayName:"TipProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#TipProvider"]={docgenInfo:TipProvider.__docgenInfo,name:"TipProvider",path:"components/atoms/Tooltip/tooltip.tsx#TipProvider"})}catch(__react_docgen_typescript_loader_error){}try{tooltip.displayName="tooltip",tooltip.__docgenInfo={description:"",displayName:"tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom"'}]}},delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tipClassName:{defaultValue:null,description:"",name:"tipClassName",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#tooltip"]={docgenInfo:tooltip.__docgenInfo,name:"tooltip",path:"components/atoms/Tooltip/tooltip.tsx#tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ComponentDateFilter/component-date-filter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ComponentDateFilter=_ref=>{let{setRangeFilter,defaultRange}=_ref;const{0:activeFilter,1:setActiveFilter}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!=defaultRange?defaultRange:30),rangeFormatter=value=>7===value?"7d":30===value?"30d":"3m";return __jsx("div",{className:"flex items-center text-sm bg-white rounded-lg shrink-0 w-max"},[7,30,90].map(((range,index)=>__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__.Z,{key:index,content:"".concat(rangeFormatter(range)," from today"),direction:"top"},__jsx("button",{onClick:()=>(range=>{setActiveFilter(range),setRangeFilter(range)})(range),className:"px-4 py-1.5 rounded-lg cursor-pointer transition text-light-slate-9 ".concat(activeFilter===range&&"border text-light-slate-12 bg-light-slate-5"),key:index},rangeFormatter(range))))))};ComponentDateFilter.displayName="ComponentDateFilter";const __WEBPACK_DEFAULT_EXPORT__=ComponentDateFilter;try{componentdatefilter.displayName="componentdatefilter",componentdatefilter.__docgenInfo={description:"",displayName:"componentdatefilter",props:{setRangeFilter:{defaultValue:null,description:"",name:"setRangeFilter",required:!0,type:{name:"(range: number) => void"}},defaultRange:{defaultValue:null,description:"",name:"defaultRange",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ComponentDateFilter/component-date-filter.tsx#componentdatefilter"]={docgenInfo:componentdatefilter.__docgenInfo,name:"componentdatefilter",path:"components/molecules/ComponentDateFilter/component-date-filter.tsx#componentdatefilter"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/humanizeNumber.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(num){let type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abbreviation";const number="number"!=typeof num?parseFloat(num):num,abs=Math.abs(number),sign=Math.sign(number),commaConverted="".concat(abs>999?(sign*abs/1e3).toFixed(3).replace(".",","):sign*abs),abbreviated=abs>999?"".concat((sign*abs/1e3).toFixed(1),"k"):"".concat(sign*abs);return"comma"===type?commaConverted:abbreviated}},"./lib/utils/query-params.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>setQueryParams});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),next_router__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function setQueryParams(params){let paramsToRemove=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],pathname=arguments.length>2?arguments[2]:void 0,scroll=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const presentQueryParams=function deleteKeys(obj,keys){for(const key of keys)delete obj[key];return obj}(next_router__WEBPACK_IMPORTED_MODULE_1___default().query,paramsToRemove);next_router__WEBPACK_IMPORTED_MODULE_1___default().push({pathname:pathname||next_router__WEBPACK_IMPORTED_MODULE_1___default().pathname,query:_objectSpread(_objectSpread({},presentQueryParams),params)},void 0,{scroll})}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"?c969":()=>{},"?fd9c":()=>{},"?0fee":()=>{},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{"use strict";function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);