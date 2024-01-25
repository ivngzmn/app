"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[5207],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/molecules/Pagination/pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoDivisor:()=>NoDivisor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_NoDivisor$parameters,_NoDivisor$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_molecules_Pagination_pagination__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/Pagination/pagination.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Pagination"},PaginationTemplate=args=>__jsx(components_molecules_Pagination_pagination__WEBPACK_IMPORTED_MODULE_2__.Z,args);PaginationTemplate.displayName="PaginationTemplate";const Default=PaginationTemplate.bind({}),NoDivisor=PaginationTemplate.bind({});Default.args={pages:[1,2,3,4,5,6,7,8,9,10],totalPage:2003,page:5},NoDivisor.args={pages:[1,2,3,4,5,6,7,8,9,10],totalPage:2003,page:5,divisor:!1},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Pagination {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),NoDivisor.parameters=_objectSpread(_objectSpread({},NoDivisor.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoDivisor$parameters=NoDivisor.parameters)||void 0===_NoDivisor$parameters?void 0:_NoDivisor$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Pagination {...args} />"},null===(_NoDivisor$parameters2=NoDivisor.parameters)||void 0===_NoDivisor$parameters2||null===(_NoDivisor$parameters2=_NoDivisor$parameters2.docs)||void 0===_NoDivisor$parameters2?void 0:_NoDivisor$parameters2.source)})});const __namedExportsOrder=["Default","NoDivisor"]},"./components/molecules/Pagination/pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_icons_ri__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/ri/index.mjs"),components_molecules_PaginationGotoPage_pagination_goto_page__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/molecules/PaginationGotoPage/pagination-goto-page.tsx"),lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/humanizeNumber.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{pages,totalPage,page,divisor=!0,goToPage=!1,pageSize=10,hasPreviousPage=!1,hasNextPage=!0,onPageChange,showTotalPages=!0}=_ref;const handleSelected=pageNumber=>{onPageChange(pageNumber)},middlePages=Array.from({length:Math.min(pages.length,pageSize)},((_,index)=>page<=Math.floor(pageSize/2)?index+1:page>=pages.length-Math.floor(pageSize/2)?pages.length-pageSize+index+1:page-Math.floor(pageSize/2)+index)).filter((page=>page>=1&&page<=pages.length));return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"w-max flex gap-x-4 items-center"},__jsx("div",{className:"flex items-center gap-x-4"},__jsx("button",{className:"text-light-slate-9 disabled:text-light-slate-7",disabled:!hasPreviousPage,onClick:()=>{hasPreviousPage&&onPageChange(page-1)}},__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.jW7,{className:"text-2xl md:text-lg"})),middlePages.map((pageNumber=>__jsx("button",{key:pageNumber,onClick:()=>{handleSelected(pageNumber)},className:"".concat(pageNumber===page&&"border !text-light-slate-12 shadow-paginate border-light-orange-10 bg-light-orange-2 shadow-search"," cursor-pointer text-light-slate-11 transition text-sm rounded-lg w-8 h-8 hover:bg-light-orange-2 hover:text-light-orange-10")},pageNumber))),__jsx("button",{className:"text-light-slate-9 disabled:text-light-slate-7",disabled:!hasNextPage,onClick:()=>{hasNextPage&&onPageChange(page+1)}},__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.jfD,{className:"text-2xl md:text-lg"}))),showTotalPages&&__jsx("div",{className:"".concat(divisor&&"md:border-r-2 border-r-light-slate-6"," text-sm text-light-slate-9    py-1 md:pr-4")},"Total ",totalPage>999?(0,lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_3__.Z)(totalPage,null):totalPage,__jsx("span",{className:"md:invisible lg:visible"}," pages ")),goToPage&&__jsx("div",{className:"hidden md:block"},__jsx(components_molecules_PaginationGotoPage_pagination_goto_page__WEBPACK_IMPORTED_MODULE_1__.Z,{totalPage,page,setPage:handleSelected,name:""}))))};try{pagination.displayName="pagination",pagination.__docgenInfo={description:"",displayName:"pagination",props:{pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"number[]"}},totalPage:{defaultValue:null,description:"",name:"totalPage",required:!0,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},pageSize:{defaultValue:{value:"10"},description:"",name:"pageSize",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},divisor:{defaultValue:{value:"true"},description:"",name:"divisor",required:!1,type:{name:"boolean"}},goToPage:{defaultValue:{value:"false"},description:"",name:"goToPage",required:!1,type:{name:"boolean"}},hasNextPage:{defaultValue:{value:"true"},description:"",name:"hasNextPage",required:!1,type:{name:"boolean"}},hasPreviousPage:{defaultValue:{value:"false"},description:"",name:"hasPreviousPage",required:!1,type:{name:"boolean"}},showTotalPages:{defaultValue:{value:"true"},description:"",name:"showTotalPages",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/Pagination/pagination.tsx#pagination"]={docgenInfo:pagination.__docgenInfo,name:"pagination",path:"components/molecules/Pagination/pagination.tsx#pagination"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/PaginationGotoPage/pagination-goto-page.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const PaginationGotoPage=_ref=>{let{page,name,setPage,totalPage}=_ref;const{0:pageNumber,1:setPageNumber}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(page),{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setPageNumber(page)}),[page]),__jsx("form",{onSubmit:e=>(e=>{e.preventDefault(),pageNumber!==page&&(Number(pageNumber)>totalPage||(setPage(pageNumber),setValue("")))})(e),className:"flex   gap-x-3"},__jsx("input",{type:"text",name,id:name,value,placeholder:"".concat(pageNumber),onChange:e=>{setPageNumber(e.target.value),setValue(e.target.value)},className:"min-w-4 w-10 text-center text-sm text-light-slate-10 focus:outline-none border rounded-lg py-1 px-2"}),__jsx("button",{className:"text-light-orange-10 text-sm px-2 py-1.5 rounded-lg hover:bg-orange-100 bg-light-orange-3",type:"submit"},"Go to page"))};PaginationGotoPage.displayName="PaginationGotoPage";const __WEBPACK_DEFAULT_EXPORT__=PaginationGotoPage;try{paginationgotopage.displayName="paginationgotopage",paginationgotopage.__docgenInfo={description:"",displayName:"paginationgotopage",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!0,type:{name:"Function"}},totalPage:{defaultValue:null,description:"",name:"totalPage",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/PaginationGotoPage/pagination-goto-page.tsx#paginationgotopage"]={docgenInfo:paginationgotopage.__docgenInfo,name:"paginationgotopage",path:"components/molecules/PaginationGotoPage/pagination-goto-page.tsx#paginationgotopage"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/humanizeNumber.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(num,type)=>{const number="number"!=typeof num?parseFloat(num):num,abs=Math.abs(number),sign=Math.sign(number),commaConverted="".concat(abs>999?(sign*abs/1e3).toFixed(3).replace(".",","):sign*abs),abbreviated=abs>999?"".concat((sign*abs/1e3).toFixed(1),"k"):"".concat(sign*abs);return"comma"===type?commaConverted:abbreviated}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);