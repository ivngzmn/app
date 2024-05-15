"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[3938],{"./components/organisms/TopNav/top-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TopNavOrganism:()=>TopNavOrganism,__namedExportsOrder:()=>__namedExportsOrder,default:()=>top_nav_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_router=__webpack_require__("./node_modules/next/router.js"),auth_section=__webpack_require__("./components/molecules/AuthSection/auth-section.tsx"),header_logo=__webpack_require__("./components/molecules/HeaderLogo/header-logo.tsx"),useSession=__webpack_require__("./lib/hooks/useSession.ts"),useSupabaseAuth=__webpack_require__("./lib/hooks/useSupabaseAuth.ts"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),onboarding_button=__webpack_require__("./components/molecules/OnboardingButton/onboarding-button.tsx"),tooltip=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),useMediaQuery=__webpack_require__("./lib/hooks/useMediaQuery.ts"),__jsx=react.createElement;const TopNav=()=>{const isLargeScreen=(0,useMediaQuery.a)("(min-width: 1024px)"),{user}=(0,useSupabaseAuth.Z)(),{onboarded}=(0,useSession.Z)();return __jsx("header",{className:"top-nav-container w-full sm:fixed top-0 left-0 z-50 py-0.5 bg-light-slate-2 border-b px-2"},__jsx("div",{className:"flex gap-2 justify-between items-center mx-auto px-2"},__jsx("div",{className:"flex gap-3 md:gap-8 items-center"},__jsx(header_logo.Z,{textIsBlack:!0}),__jsx(Nav,{className:"flex"}),user&&!1===onboarded&&__jsx("div",{className:"relative lg:hidden"},__jsx(tooltip.Z,{content:"Complete the onboarding",defaultOpen:!isLargeScreen},__jsx(onboarding_button.Z,{ariaLabel:"Complete the onboarding"})))),__jsx(auth_section.Z,null)))};TopNav.displayName="TopNav";const Nav=_ref=>{let{className}=_ref;const{user}=(0,useSupabaseAuth.Z)(),{data:gitHubUser}=(0,useFetchUser.j)(null==user?void 0:user.user_metadata.user_name),userInterest=(null==gitHubUser?void 0:gitHubUser.interests.split(",")[0])||"javascript",router=(0,next_router.useRouter)();return __jsx("nav",{className,"aria-label":"top navigation"},__jsx("ul",{className:"flex items-center gap-3 md:gap-8 mb-1 ml-2 sm:m-0 w-full sm:w-auto"},user?__jsx("li",null,__jsx(link_default(),{className:"font-medium text-sm text-slate-700 hover:text-orange-500 transition-all ".concat(getActiveStyle(router.asPath.startsWith("/workspaces/")||router.asPath.includes("/pages"))),href:"/workspaces"},"Workspace")):null,__jsx("li",{className:"hidden lg:inline"},__jsx(link_default(),{className:"tracking-tight font-medium text-slate-700 text-sm hover:text-orange-500 transition-all ".concat(getActiveStyle(/^(\/explore\/topic).*\/(dashboard|reports|contributors|activity).*/g.test(router.asPath))),href:"/explore/topic/".concat(userInterest,"/dashboard/filter/recent")},"Explore")),__jsx("li",{className:"hidden lg:inline"},__jsx(link_default(),{className:"tracking-tight font-medium text-sm text-slate-700 hover:text-orange-500 transition-all ".concat(getActiveStyle("/feed"===router.pathname)),href:"/feed"},"Highlights")),__jsx("li",null,__jsx(link_default(),{className:"tracking-tight font-medium text-sm text-slate-700 hover:text-orange-500 flex gap-1 items-center transition-all ".concat(getActiveStyle("/star-search"===router.pathname)),href:"/star-search"},__jsx("img",{src:"/assets/star-search-logo.svg",alt:"",className:"w-5 h-5"}),__jsx("p",{className:"mt-0.5"},"StarSearch")))))};function getActiveStyle(isActive){return isActive?"!text-orange-600":""}Nav.displayName="Nav";const top_nav=TopNav;var _TopNavOrganism$param,_TopNavOrganism$param2,top_nav_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const top_nav_stories={title:"Design System/Organisms/Top Nav"},TopNavOrganism=()=>top_nav_stories_jsx(top_nav,null);TopNavOrganism.displayName="TopNavOrganism",TopNavOrganism.parameters=_objectSpread(_objectSpread({},TopNavOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TopNavOrganism$param=TopNavOrganism.parameters)||void 0===_TopNavOrganism$param?void 0:_TopNavOrganism$param.docs),{},{source:_objectSpread({originalSource:"() => <TopNav />"},null===(_TopNavOrganism$param2=TopNavOrganism.parameters)||void 0===_TopNavOrganism$param2||null===(_TopNavOrganism$param2=_TopNavOrganism$param2.docs)||void 0===_TopNavOrganism$param2?void 0:_TopNavOrganism$param2.source)})});const __namedExportsOrder=["TopNavOrganism"]},"./components/atoms/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Icon=_ref=>{let{onClick,className,IconImage,alt,size=16}=_ref;return __jsx("div",{className:"".concat(className||""," inline-flex")},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick,className:"items-center justify-center ",alt:null!=alt?alt:"",width:size,height:size,src:IconImage,style:{maxWidth:"100%",height:"auto"}}))};Icon.displayName="Icon";const __WEBPACK_DEFAULT_EXPORT__=Icon;try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{IconImage:{defaultValue:null,description:"",name:"IconImage",required:!0,type:{name:"string | StaticImageData"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"components/atoms/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ProgressPie/progress-pie.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const ProgressPie=_ref=>{let{className,percentage,svgStyles,circleStyles}=_ref;return __jsx("div",{className:"".concat(className||""," w-6 h-6 text-base relative flex items-center justify-center border-2 rounded-full border-orange-500")},__jsx("svg",{className:"".concat(svgStyles||""," w-4 h-4 text-base"),viewBox:"0 0 20 20",height:"20",width:"20"},__jsx("circle",{className:"".concat(circleStyles||""," transition-all duration-700 ease-out fill-transparent stroke-orange-500 -rotate-90 translate-y-[20px]"),r:"5",cx:"10",cy:"10",strokeWidth:"10",strokeDasharray:"calc(".concat(percentage," * 31.4 / 100) 31.4")})))};ProgressPie.displayName="ProgressPie";const __WEBPACK_DEFAULT_EXPORT__=ProgressPie;try{progresspie.displayName="progresspie",progresspie.__docgenInfo={description:"",displayName:"progresspie",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!1,type:{name:"number"}},svgStyles:{defaultValue:null,description:"",name:"svgStyles",required:!1,type:{name:"string"}},circleStyles:{defaultValue:null,description:"",name:"circleStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ProgressPie/progress-pie.tsx#progresspie"]={docgenInfo:progresspie.__docgenInfo,name:"progresspie",path:"components/atoms/ProgressPie/progress-pie.tsx#progresspie"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Tooltip/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>TipProvider,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Tooltip=_ref=>{let{children,content,className,direction,defaultOpen}=_ref;const{Portal,Root,Content,Trigger,Arrow}=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__;return __jsx(Root,{delayDuration:300,defaultOpen},__jsx(Trigger,{asChild:!0},__jsx("div",null,children)),__jsx(Portal,null,__jsx(Content,{sideOffset:4,collisionPadding:10,side:direction||"bottom",avoidCollisions:!0,style:{zIndex:9999}},__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-xs py-1 px-2 rounded shadow-lg  bg-dark-slate-2 text-dark-slate-12",className)},content),__jsx(Arrow,{className:"fill-dark "}))))};Tooltip.displayName="Tooltip";const TipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.zt,__WEBPACK_DEFAULT_EXPORT__=Tooltip;try{TipProvider.displayName="TipProvider",TipProvider.__docgenInfo={description:"",displayName:"TipProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#TipProvider"]={docgenInfo:TipProvider.__docgenInfo,name:"TipProvider",path:"components/atoms/Tooltip/tooltip.tsx#TipProvider"})}catch(__react_docgen_typescript_loader_error){}try{tooltip.displayName="tooltip",tooltip.__docgenInfo={description:"",displayName:"tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom"'}]}},delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tipClassName:{defaultValue:null,description:"",name:"tipClassName",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#tooltip"]={docgenInfo:tooltip.__docgenInfo,name:"tooltip",path:"components/atoms/Tooltip/tooltip.tsx#tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/AuthSection/auth-section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>auth_section});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),io5=__webpack_require__("./node_modules/react-icons/io5/index.mjs"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),bi=__webpack_require__("./node_modules/react-icons/bi/index.mjs"),Divider2=__webpack_require__("./node_modules/@supabase/ui/dist/esm/components/Divider/Divider2.js"),store=__webpack_require__("./lib/store/index.ts"),useSession=__webpack_require__("./lib/hooks/useSession.ts"),person_icon=__webpack_require__("./img/icons/person-icon.svg"),avatar=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),Button_button=__webpack_require__("./components/shared/Button/button.tsx"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),github_icon=__webpack_require__("./img/icons/github-icon.svg"),icon=__webpack_require__("./components/atoms/Icon/icon.tsx"),search_dialog=__webpack_require__("./components/organisms/SearchDialog/search-dialog.tsx"),tooltip=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),dropdown_list=__webpack_require__("./components/molecules/DropdownList/dropdown-list.tsx"),onboarding_button=__webpack_require__("./components/molecules/OnboardingButton/onboarding-button.tsx");const ellipse_1={src:"static/media/ellipse-1.aa9bf040.png",height:32,width:32,blurDataURL:"static/media/ellipse-1.aa9bf040.png"};var chevron_down=__webpack_require__("./img/chevron-down.svg"),useSupabaseAuth=__webpack_require__("./lib/hooks/useSupabaseAuth.ts"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const auth_section=_ref=>{let{}=_ref;const router=(0,next_router.useRouter)(),currentPath=router.asPath,{redirectedFrom}=router.query,openSearch=(0,store.Z)((state=>state.openSearch)),{signIn,signOut,user}=(0,useSupabaseAuth.Z)(),{onboarded,session}=(0,useSession.Z)(!0),{0:userInfo,1:setUserInfo}=(0,react.useState)(void 0),{0:host,1:setHost}=(0,react.useState)("");(0,react.useEffect)((()=>{"undefined"!=typeof window&&setHost(window.location.origin)}),[]),(0,react.useEffect)((()=>{redirectedFrom&&session&&router.replace("".concat(decodeURIComponent(redirectedFrom)))}),[redirectedFrom,session]),(0,react.useEffect)((()=>{session&&!userInfo&&setUserInfo(session)}),[session]);const authMenu={authed:[__jsx(link_default(),{href:"/user/".concat(null==user?void 0:user.user_metadata.user_name),key:"settings",className:"flex items-center px-4 py-2 text-lg transition rounded-md cursor-pointer group gap-x-3 hover:bg-light-orange-3"},__jsx("div",{className:"flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full"},__jsx(next_image.Z,{width:10,height:10,alt:"Icon",src:person_icon.Z})),__jsx(Typography_text.Z,{className:"group-hover:text-light-orange-10"},null==user?void 0:user.user_metadata.user_name)),__jsx(link_default(),{href:"https://docs.opensauced.pizza/welcome/faqs/",key:"faqs",className:"flex items-center px-4 py-2 text-lg transition rounded-md cursor-pointer group gap-x-3 hover:bg-light-orange-3"},__jsx(bi.rpH,{className:"group-hover:text-light-orange-10"}),__jsx(Typography_text.Z,{className:"group-hover:text-light-orange-10"},"FAQs")),__jsx(link_default(),{href:"/user/settings",key:"settings",className:"flex items-center px-4 py-2 text-lg transition rounded-md cursor-pointer group gap-x-3 hover:bg-light-orange-3"},__jsx(fi.nbt,{className:"group-hover:text-light-orange-10"}),__jsx(Typography_text.Z,{className:"group-hover:text-light-orange-10"},"Settings")),__jsx("span",{onClick:async()=>{const pageHref=window.location.href,searchParams=new URLSearchParams(pageHref.substring(pageHref.indexOf("?")));searchParams.has("login")&&(searchParams.delete("login"),router.replace("".concat(pageHref.substring(0,pageHref.indexOf("?")),"?").concat(searchParams.toString()))),await signOut()},key:"authorized",className:"flex items-center px-4 py-2 text-lg transition rounded-md cursor-pointer group gap-x-3 hover:bg-light-orange-3"},__jsx(fi.xqh,{className:"group-hover:text-light-orange-10"}),__jsx(Typography_text.Z,{className:"group-hover:text-light-orange-10"},"Disconnect"))]};return __jsx(react.Fragment,null,__jsx("div",{className:"flex p-2 m-1 sm:py-0"},__jsx("div",{className:"flex items-center gap-2 lg:gap-3"},__jsx(search_dialog.Z,null),user?__jsx(react.Fragment,null,void 0!==onboarded&&!onboarded&&__jsx(react.Fragment,null,__jsx("div",{className:"relative hidden lg:flex xl:hidden"},__jsx(tooltip.Z,{content:"Complete the onboarding",direction:"bottom"},__jsx(onboarding_button.Z,{ariaLabel:"Complete your onboarding",className:"!flex !pr-1"}))),__jsx(onboarding_button.Z,{className:"!hidden xl:!flex !pr-1"},__jsx(Typography_text.Z,{className:"text-sm !text-light-slate-12 hidden xl:block py-1 px-2"},"Complete the onboarding")),__jsx(Divider2.Z,{type:"vertical",className:"!h-6 !bg-light-slate-6"})),__jsx("button",{className:"relative cursor-pointer",onClick:()=>{userInfo&&userInfo.notification_count>0&&setUserInfo(_objectSpread(_objectSpread({},userInfo),{},{notification_count:0})),router.push("/user/notifications")}},userInfo&&userInfo.notification_count>0&&__jsx("span",{className:"absolute right-0 block w-2 h-2 bg-orange-300 rounded-full"}),__jsx(io5.IZE,{className:"text-xl text-light-slate-9"})),__jsx(dropdown_list.Z,{className:"-mb-1",menuContent:authMenu.authed},__jsx("div",{className:"flex justify-end min-w-[60px] gap-2"},__jsx(avatar.Z,{alt:"User Avatar",avatarURL:user?user.user_metadata.avatar_url:ellipse_1,size:"base",hasBorder:!0,isCached:!1}),__jsx(next_image.Z,{alt:"Down Arrow",src:chevron_down.Z})))):__jsx(Button_button.Z,{variant:"primary",onClick:async()=>{signIn({provider:"github",options:{redirectTo:"".concat(host).concat(redirectedFrom?decodeURIComponent(redirectedFrom):currentPath)}})},className:"flex items-center"},"Connect ",__jsx("span",{className:"hidden sm:inline-block ml-1"},"with GitHub"),__jsx(icon.Z,{IconImage:github_icon.Z,className:"ml-2"})))),openSearch&&__jsx(search_dialog.C,null))};try{authsection.displayName="authsection",authsection.__docgenInfo={description:"",displayName:"authsection",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/AuthSection/auth-section.tsx#authsection"]={docgenInfo:authsection.__docgenInfo,name:"authsection",path:"components/molecules/AuthSection/auth-section.tsx#authsection"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/DropdownList/dropdown-list.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/components/menu/menu.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const DropdownList=_ref=>{let{children,menuContent,className,menuContentClassName,menuButtonClassName}=_ref;return __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.v,{as:"div",className:"".concat(className||""," relative inline-block text-left")},__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.v.Button,{className:"".concat(menuButtonClassName&&menuButtonClassName)},children),__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.v.Items,{className:"".concat(menuContentClassName&&menuContentClassName," z-10 bg-white absolute right-0 w-56 origin-top-right rounded-md shadow-lg shadow-gray-400/10   focus:outline-none focus-within:ring focus-within:ring-white px-1 py-1 bg-darkestGrey text-md font-semibold")},menuContent.map(((menuItemContent,index)=>__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.v.Item,{key:index},menuItemContent)))))};DropdownList.displayName="DropdownList";const __WEBPACK_DEFAULT_EXPORT__=DropdownList;try{dropdownlist.displayName="dropdownlist",dropdownlist.__docgenInfo={description:"",displayName:"dropdownlist",props:{menuContent:{defaultValue:null,description:"",name:"menuContent",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},menuContentClassName:{defaultValue:null,description:"",name:"menuContentClassName",required:!1,type:{name:"string"}},menuButtonClassName:{defaultValue:null,description:"",name:"menuButtonClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/DropdownList/dropdown-list.tsx#dropdownlist"]={docgenInfo:dropdownlist.__docgenInfo,name:"dropdownlist",path:"components/molecules/DropdownList/dropdown-list.tsx#dropdownlist"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/HeaderLogo/header-logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>header_logo});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const logo_slice_gradient={src:"static/media/logo-slice-gradient.8198f82d.svg",height:142,width:114,blurDataURL:"static/media/logo-slice-gradient.8198f82d.svg"};var __jsx=react.createElement;const HeaderLogo=_ref=>{let{textIsBlack}=_ref;return __jsx(link_default(),{href:"/",className:"flex items-center py-2 gap-2 cursor-pointer"},__jsx(next_image.Z,{className:"rounded",alt:"",width:20,src:logo_slice_gradient}),__jsx("span",{className:"font-bold text-lg tracking-tight ".concat(textIsBlack?"text-black":"text-white"," hidden md:inline")},"OpenSauced"))};HeaderLogo.displayName="HeaderLogo";const header_logo=HeaderLogo;try{headerlogo.displayName="headerlogo",headerlogo.__docgenInfo={description:"",displayName:"headerlogo",props:{textIsBlack:{defaultValue:null,description:"",name:"textIsBlack",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HeaderLogo/header-logo.tsx#headerlogo"]={docgenInfo:headerlogo.__docgenInfo,name:"headerlogo",path:"components/molecules/HeaderLogo/header-logo.tsx#headerlogo"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/OnboardingButton/onboarding-button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),components_atoms_ProgressPie_progress_pie__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/ProgressPie/progress-pie.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const OnboardingButton=_ref=>{let{className,children,aria,ariaLabel}=_ref;const router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();return __jsx("button",{"aria-labelledby":aria,"aria-label":ariaLabel,onClick:()=>router.push("/start"),className:"".concat(className," items-center gap-2 border border-light-orange-8 py-1 px-1 pr-3 rounded-lg md:flex")},__jsx(components_atoms_ProgressPie_progress_pie__WEBPACK_IMPORTED_MODULE_2__.Z,{percentage:66}),children)};OnboardingButton.displayName="OnboardingButton";const __WEBPACK_DEFAULT_EXPORT__=OnboardingButton;try{onboardingbutton.displayName="onboardingbutton",onboardingbutton.__docgenInfo={description:"",displayName:"onboardingbutton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/OnboardingButton/onboarding-button.tsx#onboardingbutton"]={docgenInfo:onboardingbutton.__docgenInfo,name:"onboardingbutton",path:"components/molecules/OnboardingButton/onboarding-button.tsx#onboardingbutton"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","loadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,loadingText="Loading...",onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},loadingText)):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"outline"'},{value:'"default"'},{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/shared/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/useFetchUser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useFetchUser});var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils/public-api-fetcher.ts");const useFetchUser=(username,config)=>{const{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(username?"users/".concat(username):null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_1__.N,config);return{data:data||void 0,isLoading:!error&&!data,isError:!!error,mutate}}},"./lib/hooks/useMediaQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useMediaQuery(query){const getMatches=mediaQuery=>"undefined"!=typeof window&&window.matchMedia(mediaQuery).matches,{0:matches,1:setMatches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getMatches(query));function handleChange(){setMatches(getMatches(query))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const matchMedia=window.matchMedia(query);matchMedia.addEventListener;return handleChange(),matchMedia.addEventListener("change",handleChange),()=>{matchMedia.removeEventListener("change",handleChange)}}),[query]),matches}},"./lib/hooks/useSession.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lib_store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/store/index.ts"),_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/hooks/useSupabaseAuth.ts");const __WEBPACK_DEFAULT_EXPORT__=function(){let getSession=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{sessionToken}=(0,_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_2__.Z)(getSession),store=(0,lib_store__WEBPACK_IMPORTED_MODULE_1__.Z)(),hasReports=(0,lib_store__WEBPACK_IMPORTED_MODULE_1__.Z)((state=>state.hasReports)),onboarded=(0,lib_store__WEBPACK_IMPORTED_MODULE_1__.Z)((state=>state.onboarded)),waitlisted=(0,lib_store__WEBPACK_IMPORTED_MODULE_1__.Z)((state=>state.waitlisted)),{0:session,1:setSession}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(async()=>{if(sessionToken&&getSession){const data=await(async()=>{const response=await fetch("".concat("https://beta.api.opensauced.pizza/v2","/auth/session"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(sessionToken)}});if(200===response.status)return await response.json();return!1})();setSession(data),isOnboarded=data.is_onboarded,isWaitlisted=data.is_waitlisted,data.insights_role,store.setSession({onboarded:isOnboarded,waitlisted:isWaitlisted})}var isOnboarded,isWaitlisted})()}),[sessionToken]),{onboarded,waitlisted,hasReports,session}}},"./img/chevron-down.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/chevron-down.d99071fc.svg",height:16,width:16,blurDataURL:"static/media/chevron-down.d99071fc.svg"}},"./img/icons/github-icon.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/github-icon.d9e0f44a.svg",height:16,width:16,blurDataURL:"static/media/github-icon.d9e0f44a.svg"}},"./img/icons/person-icon.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/person-icon.f2841f1e.svg",height:14,width:12,blurDataURL:"static/media/person-icon.f2841f1e.svg"}}}]);