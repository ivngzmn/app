"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[8460],{"./components/shared/AppSidebar/InsightsPanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContributorInsights:()=>ContributorInsights,Loading:()=>InsightsPanel_stories_Loading,RepositoryInsights:()=>RepositoryInsights,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InsightsPanel_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-collapsible/dist/index.module.js"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.module.js"),client_only=__webpack_require__("./components/atoms/ClientOnly/client-only.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),sidebar_menu_item=__webpack_require__("./components/shared/AppSidebar/sidebar-menu-item.tsx"),__jsx=react.createElement;const Loading=()=>__jsx("ul",{className:"list-none w-full px-2 mt-1 [&_li]:border-l-2"},new Array(5).fill(0).map(((_,i)=>__jsx("li",{key:i,className:"p-2"},__jsx(skeleton_wrapper.Z,{height:20})))));Loading.displayName="Loading";const InsightsPanel=_ref=>{let{title,username,insights,type,isLoading}=_ref;const{0:open,1:setOpen}=(0,react.useState)(!0);return __jsx(index_module.fC,{open,onOpenChange:setOpen,className:"max-w-full overflow-x-hidden"},__jsx(index_module.xz,{asChild:!0},__jsx(dist_index_module.fC,{defaultChecked:!0,checked:open,onClick:()=>{setOpen(!open)},name:"".concat(title,"-toggle")},__jsx(dist_index_module.bU,null,__jsx("h3",{className:"uppercase text-gray-500 text-sm font-medium flex gap-1 items-center"},__jsx("span",null,title),__jsx(client_only.Z,null,open?__jsx(fi.bTu,{className:"w-4 h-4",title:"close ".concat(title," panel")}):__jsx(fi.rH8,{className:"w-4 h-4",title:"open ".concat(title," panel")})))))),__jsx(index_module.VY,null,isLoading?__jsx(Loading,null):__jsx("ul",{className:"list-none w-full px-2 mt-1 [&_li]:border-l-2"},insights.map((insight=>{const url="list"===type?"/lists/".concat(insight.id):"/pages/".concat(username,"/").concat(insight.id,"/dashboard");return __jsx(sidebar_menu_item.Z,{key:insight.id,title:insight.name,url,type})})))))};InsightsPanel.displayName="InsightsPanel";try{InsightsPanel.displayName="InsightsPanel",InsightsPanel.__docgenInfo={description:"",displayName:"InsightsPanel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string | null"}},insights:{defaultValue:null,description:"",name:"insights",required:!0,type:{name:"DbUserList[] | DbUserInsight[]"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"repo"'},{value:'"list"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/AppSidebar/InsightsPanel.tsx#InsightsPanel"]={docgenInfo:InsightsPanel.__docgenInfo,name:"InsightsPanel",path:"components/shared/AppSidebar/InsightsPanel.tsx#InsightsPanel"})}catch(__react_docgen_typescript_loader_error){}var _RepositoryInsights$p,_RepositoryInsights$p2,_ContributorInsights$,_ContributorInsights$2,_Loading$parameters,_Loading$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const InsightsPanel_stories={title:"Components/Workspaces/InsightsPanel",component:InsightsPanel,args:{isLoading:!1}},RepositoryInsights={args:{title:"Repository Insights",username:"bdougie",insights:new Array(5).fill("").map(((_,i)=>({id:"{i}",user:{id:1,name:"bdougie",user_email:"",login:"bdougie"},name:"Repository Insight ".concat(i+1),is_public:!0,is_favorite:!1,is_featured:!1,short_code:"my-insight-".concat(i),created_at:"2021-09-14T20:30:14.000Z",updated_at:"2021-09-14T20:30:14.000Z",repos:[],members:[]}))),type:"repo"}},ContributorInsights={args:{title:"Contributor Insights",username:"bdougie",insights:new Array(5).fill("").map(((_,i)=>({id:"{i}",user:{id:1,name:"bdougie",user_email:"",login:"bdougie"},name:"Contributor Insight ".concat(i+1),is_public:!0,is_favorite:!1,created_at:"2021-09-14T20:30:14.000Z",updated_at:"2021-09-14T20:30:14.000Z"}))),type:"list"}},InsightsPanel_stories_Loading={args:{title:"Repository Insights",isLoading:!0}};RepositoryInsights.parameters=_objectSpread(_objectSpread({},RepositoryInsights.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RepositoryInsights$p=RepositoryInsights.parameters)||void 0===_RepositoryInsights$p?void 0:_RepositoryInsights$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Repository Insights",\n    username: "bdougie",\n    insights: new Array(5).fill("").map((_, i) => {\n      return {\n        id: `{i}`,\n        user: {\n          id: 1,\n          name: "bdougie",\n          user_email: "",\n          login: "bdougie"\n        },\n        name: `Repository Insight ${i + 1}`,\n        is_public: true,\n        is_favorite: false,\n        is_featured: false,\n        short_code: `my-insight-${i}`,\n        created_at: "2021-09-14T20:30:14.000Z",\n        updated_at: "2021-09-14T20:30:14.000Z",\n        repos: [],\n        members: []\n      };\n    }),\n    type: "repo"\n  }\n}'},null===(_RepositoryInsights$p2=RepositoryInsights.parameters)||void 0===_RepositoryInsights$p2||null===(_RepositoryInsights$p2=_RepositoryInsights$p2.docs)||void 0===_RepositoryInsights$p2?void 0:_RepositoryInsights$p2.source)})}),ContributorInsights.parameters=_objectSpread(_objectSpread({},ContributorInsights.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContributorInsights$=ContributorInsights.parameters)||void 0===_ContributorInsights$?void 0:_ContributorInsights$.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Contributor Insights",\n    username: "bdougie",\n    insights: new Array(5).fill("").map((_, i) => {\n      return {\n        id: `{i}`,\n        user: {\n          id: 1,\n          name: "bdougie",\n          user_email: "",\n          login: "bdougie"\n        },\n        name: `Contributor Insight ${i + 1}`,\n        is_public: true,\n        is_favorite: false,\n        created_at: "2021-09-14T20:30:14.000Z",\n        updated_at: "2021-09-14T20:30:14.000Z"\n      };\n    }),\n    type: "list"\n  }\n}'},null===(_ContributorInsights$2=ContributorInsights.parameters)||void 0===_ContributorInsights$2||null===(_ContributorInsights$2=_ContributorInsights$2.docs)||void 0===_ContributorInsights$2?void 0:_ContributorInsights$2.source)})}),InsightsPanel_stories_Loading.parameters=_objectSpread(_objectSpread({},InsightsPanel_stories_Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=InsightsPanel_stories_Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Repository Insights",\n    isLoading: true\n  }\n}'},null===(_Loading$parameters2=InsightsPanel_stories_Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})});const __namedExportsOrder=["RepositoryInsights","ContributorInsights","Loading"]},"./components/atoms/ClientOnly/client-only.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>client_only});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var __jsx=react.createElement;function ClientOnly(_ref){let{children}=_ref;return function useHasMounted(){const{0:hasMounted,1:setHasMounted}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setHasMounted(!0)}),[]),hasMounted}()?__jsx(react.Fragment,null,children):null}const client_only=ClientOnly;try{ClientOnly.displayName="ClientOnly",ClientOnly.__docgenInfo={description:"",displayName:"ClientOnly",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ClientOnly/client-only.tsx#ClientOnly"]={docgenInfo:ClientOnly.__docgenInfo,name:"ClientOnly",path:"components/atoms/ClientOnly/client-only.tsx#ClientOnly"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SkeletonLoader/skeleton-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{classNames,count=1,width,height,radius}=_ref;const skeletonArray=Array(count).fill(!0);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,skeletonArray.map(((_,index)=>height?__jsx("div",{className:classNames},__jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{height,width,borderRadius:radius,count:1})):__jsx("div",{className:"react-loading-skeleton"}))))};try{skeletonwrapper.displayName="skeletonwrapper",skeletonwrapper.__docgenInfo={description:"",displayName:"skeletonwrapper",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"",name:"count",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"]={docgenInfo:skeletonwrapper.__docgenInfo,name:"skeletonwrapper",path:"components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/AppSidebar/sidebar-menu-item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@heroicons/react/24/solid/UsersIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@heroicons/react/24/outline/ChartBarSquareIcon.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const SidebarMenuItem=_ref=>{let{title,icon,type,url:href}=_ref;return __jsx("li",{className:"py-2 px-3"},__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{title,href,className:"grid grid-cols-[1.25rem,1fr] gap-2 items-center"},type&&!icon?(type=>{switch(type){case"list":return __jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__,{className:"w-5 h-5 text-slate-400"});case"repo":return __jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__,{className:"w-5 h-5 text-slate-400"})}})(type):icon,__jsx("span",{className:"whitespace-nowrap overflow-hidden overflow-ellipsis"},title)))};SidebarMenuItem.displayName="SidebarMenuItem";const __WEBPACK_DEFAULT_EXPORT__=SidebarMenuItem;try{sidebarmenuitem.displayName="sidebarmenuitem",sidebarmenuitem.__docgenInfo={description:"",displayName:"sidebarmenuitem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"repo"'},{value:'"list"'}]}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/AppSidebar/sidebar-menu-item.tsx#sidebarmenuitem"]={docgenInfo:sidebarmenuitem.__docgenInfo,name:"sidebarmenuitem",path:"components/shared/AppSidebar/sidebar-menu-item.tsx#sidebarmenuitem"})}catch(__react_docgen_typescript_loader_error){}}}]);