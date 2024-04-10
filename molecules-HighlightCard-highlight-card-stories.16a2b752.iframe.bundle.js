"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[5422],{"./components/molecules/HighlightCard/highlight-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Decreases:()=>Decreases,Increases:()=>Increases,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Increases$parameters,_Increases$parameters2,_Decreases$parameters,_Decreases$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_highlight_card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/HighlightCard/highlight-card.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Highlight Card",component:"HighlightCard",argTypes:{label:{control:{type:"text"}},icon:{options:["participation","accepted-pr","unlabeled-pr","spam"],control:{type:"select"}},url:{control:{type:"text"}}}},HighlightCardTemplate=args=>__jsx(_highlight_card__WEBPACK_IMPORTED_MODULE_2__.Z,args);HighlightCardTemplate.displayName="HighlightCardTemplate";const Increases=HighlightCardTemplate.bind({});Increases.args={label:"Participation",icon:"participation",metricIncreases:!0,increased:!0,numChanged:38,percentage:42,percentageLabel:"of 49,999"};const Decreases=HighlightCardTemplate.bind({});Decreases.args={label:"Spam",icon:"spam",metricIncreases:!1,increased:!0,numChanged:98,percentage:80,percentageLabel:"of 49,999"},Increases.parameters=_objectSpread(_objectSpread({},Increases.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Increases$parameters=Increases.parameters)||void 0===_Increases$parameters?void 0:_Increases$parameters.docs),{},{source:_objectSpread({originalSource:"args => <HighlightCard {...args} />"},null===(_Increases$parameters2=Increases.parameters)||void 0===_Increases$parameters2||null===(_Increases$parameters2=_Increases$parameters2.docs)||void 0===_Increases$parameters2?void 0:_Increases$parameters2.source)})}),Decreases.parameters=_objectSpread(_objectSpread({},Decreases.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Decreases$parameters=Decreases.parameters)||void 0===_Decreases$parameters?void 0:_Decreases$parameters.docs),{},{source:_objectSpread({originalSource:"args => <HighlightCard {...args} />"},null===(_Decreases$parameters2=Decreases.parameters)||void 0===_Decreases$parameters2||null===(_Decreases$parameters2=_Decreases$parameters2.docs)||void 0===_Decreases$parameters2?void 0:_Decreases$parameters2.source)})});const __namedExportsOrder=["Increases","Decreases"]},"./components/atoms/Avatar/avatar-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar,Z:()=>avatar_hover_card});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement;const hover_card_wrapper=_ref=>{let{username,repositories}=_ref;const topic=(0,next_router.useRouter)().query.pageId,{data:contributor}=(0,useFetchUser.j)(username),{repoList}=(0,useContributorPullRequestsChart.u)(username,"*",repositories,"30"),profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},{is_maintainer,first_opened_pr_at}=null!=contributor?contributor:{};return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList,topic,repositories,isMaintainer:!!is_maintainer}))};try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement;const Avatar=_ref=>{let{contributor,size="large"}=_ref,width=500,height=500;switch(size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";const AvatarHoverCard=_ref2=>{let{contributor,repositories,size="large"}=_ref2;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,null,avatar_hover_card_jsx(Avatar,{contributor,size}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard";const avatar_hover_card=AvatarHoverCard;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ContributorHoverCard=_ref=>{let{repoList,githubName,totalPR,dateOfFirstPr,githubAvatar,repositories,isMaintainer}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar,githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",null,__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories,limit:5,contributor:githubName,topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard";const __WEBPACK_DEFAULT_EXPORT__=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/HighlightCard/highlight-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>highlight_card});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),go=__webpack_require__("./node_modules/react-icons/go/index.mjs"),hi=__webpack_require__("./node_modules/react-icons/hi/index.mjs"),hi2=__webpack_require__("./node_modules/react-icons/hi2/index.mjs"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),card=__webpack_require__("./components/atoms/Card/card.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),Tooltip_tooltip=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),stacked_avatar=__webpack_require__("./components/molecules/StackedAvatar/stacked-avatar.tsx");var person_icon=__webpack_require__("./img/icons/person-icon.svg");const metric_arrow_src="static/media/metric-arrow.785914af.svg";var __jsx=react.createElement;const icons={contributors:{src:person_icon.Z.src,label:"Contributors",color:"bg-blue-100"},participation:{src:"static/media/icon-repo--blue.3027cbd8.svg",label:"Participation",color:"bg-blue-100"},"merged-pr":{src:"static/media/icon-merged-pr--purple.4cc84040.svg",label:"Merged PRs",color:"bg-purple-200"},"unlabeled-pr":{src:"static/media/icon-label--blue.f5e9fc95.svg",label:"Unlabeled PRs",color:"bg-cyan-100"},spam:{src:"static/media/icon-thumbs-down--yellow.6b7da852.svg",label:"Spam",color:"bg-orange-100"},commits:{src:"",label:"Commits",color:"bg-purple-200"},"active-contributors":{src:"",label:"Active Contributors",color:"bg-green-200 text-green-500"},"new-contributors":{src:"",label:"New Contributors",color:"bg-blue-200 text-sky-500"},"alumni-contributors":{src:"",label:"Alumni Contributors",color:"bg-amber-200 text-amber-500"}},HighlightCard=_ref=>{let{className,label,icon,metricIncreases,increased,numChanged,percentage,percentageLabel,value,valueLabel,contributors=[],isLoading,tooltip}=_ref;return __jsx(card.Z,{className:"".concat(className||""," flex flex-col w-full sm:max-w-[calc(50%-(1rem/2))] h-auto flex-grow")},__jsx(react.Fragment,null,__jsx("div",{className:"flex justify-between w-full p-1"},__jsx("div",{className:"flex items-center gap-2"},__jsx("div",{className:"w-8 h-8 flex justify-center items-center ".concat(icon?icons[icon].color:"bg-slate-100"," rounded-full")},function getIcon(icon){switch(icon){case"commits":return __jsx(go.D_8,{width:16,height:16});case"active-contributors":return __jsx(hi2.$SI,{width:16,height:16});case"new-contributors":return __jsx(hi.b9W,{width:16,height:16});case"alumni-contributors":return __jsx(hi.Sul,{width:16,height:16});default:return __jsx(next_image.Z,{width:16,height:16,alt:icon?icons[icon].label:"Icon",src:icon?icons[icon].src:"Icon"})}}(icon)),__jsx("div",{className:(0,clsx_m.Z)("text-sm text-slate-600 leading-none")},tooltip&&label?__jsx(Tooltip_tooltip.Z,{className:"w-44 py-3 text-center",content:tooltip},label):label||"")),__jsx("div",{className:"flex items-center gap-1"},__jsx("div",{className:"text-sm text-slate-600   leading-none"},numChanged||0),__jsx(next_image.Z,{width:14,height:14,alt:(increased?"Increased ":"Decreased ")+label+" by"+numChanged,src:metric_arrow_src,className:"".concat(increased?"":"rotate-180")}))),isLoading?__jsx(skeleton_wrapper.Z,{height:62,count:2}):__jsx("div",{className:"flex flex-col w-full px-6 pb-5 mt-2"},__jsx("div",{className:"flex flex-col items-center"},__jsx("div",{className:"text-4xl"},void 0!==percentage?"".concat(percentage,"%"):__jsx("span",null),void 0!==value?value:""),__jsx("div",{className:"text-base   text-slate-600 mt-0.5"},__jsx("span",null,percentageLabel||"",valueLabel||""," "))),contributors&&contributors.length>0?__jsx("div",{className:"flex items-center justify-center mt-2 h-auto"},__jsx(stacked_avatar.Z,{contributors,visibleQuantity:5})):__jsx("div",{className:"flex items-center justify-center w-full mt-2 h-8"},__jsx("div",{className:"".concat(metricIncreases?percentage&&percentage>70?"bg-green-500":percentage&&percentage>30?"bg-yellow-500":"bg-purple-500":percentage&&percentage>70?"bg-purple-500":percentage&&percentage>30?"bg-yellow-500":"bg-green-500"," h-3  transition-all duration-500 ease-in-out rounded-l-full"),style:{width:(percentage||0)+"%"}}),__jsx("div",{className:"".concat(void 0!==percentage&&"bg-gray-200"," w-auto flex-auto h-3 ").concat(0===percentage?"rounded-full":"rounded-r-full"," transition-all duration-500 ease-in-out")})))))};HighlightCard.displayName="HighlightCard";const highlight_card=HighlightCard;try{highlightcard.displayName="highlightcard",highlightcard.__docgenInfo={description:"",displayName:"highlightcard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"contributors"'},{value:'"participation"'},{value:'"unlabeled-pr"'},{value:'"spam"'},{value:'"merged-pr"'},{value:'"commits"'},{value:'"new-contributors"'},{value:'"active-contributors"'},{value:'"alumni-contributors"'}]}},metricIncreases:{defaultValue:null,description:"",name:"metricIncreases",required:!0,type:{name:"boolean"}},increased:{defaultValue:null,description:"",name:"increased",required:!1,type:{name:"boolean"}},numChanged:{defaultValue:null,description:"",name:"numChanged",required:!1,type:{name:"string | number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!1,type:{name:"number"}},percentageLabel:{defaultValue:null,description:"",name:"percentageLabel",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},valueLabel:{defaultValue:null,description:"",name:"valueLabel",required:!1,type:{name:"string"}},contributors:{defaultValue:{value:"[]"},description:"",name:"contributors",required:!1,type:{name:"Contributor[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HighlightCard/highlight-card.tsx#highlightcard"]={docgenInfo:highlightcard.__docgenInfo,name:"highlightcard",path:"components/molecules/HighlightCard/highlight-card.tsx#highlightcard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/StackedAvatar/stacked-avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>stacked_avatar});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts");const hooks_useInsight=id=>{const baseEndpoint="insights/".concat(id),endpointString="".concat(baseEndpoint),{data,error,mutate}=(0,dist.ZP)(id?endpointString:null,public_api_fetcher.N);return{data,isLoading:!error&&!data,isError:!!error&&Object.keys(error).length>0,mutate}};var fallback_values=__webpack_require__("./lib/utils/fallback-values.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const StackedAvatar=_ref=>{let{contributors,visibleQuantity=5,classNames}=_ref;const router=(0,next_router.useRouter)(),{pageId}=router.query,insightId=Number.isInteger(parseInt(pageId,10))?pageId:"",{data:insight,isError}=hooks_useInsight(insightId),repositories=insight?insight.repos.map((repo=>repo.repo_id)):[];return isError?(console.log("Error fetching insight",isError),__jsx("div",null,fallback_values.I)):__jsx("div",{className:(0,clsx_m.Z)("flex -space-x-3 transition-all duration-300 hover:-space-x-1",classNames)},contributors&&contributors.slice(0,visibleQuantity).map((_ref2=>{let{host_login:hostLogin}=_ref2;return __jsx("div",{key:"contributor-avatar-".concat(hostLogin),className:"w-8 h-8 overflow-hidden transition-all duration-300 border-2 border-white border-solid rounded-full"},__jsx(avatar_hover_card.Z,{contributor:hostLogin,repositories}))})))};StackedAvatar.displayName="StackedAvatar";const stacked_avatar=StackedAvatar;try{stackedavatar.displayName="stackedavatar",stackedavatar.__docgenInfo={description:"",displayName:"stackedavatar",props:{contributors:{defaultValue:null,description:"",name:"contributors",required:!0,type:{name:"Contributor[]"}},visibleQuantity:{defaultValue:{value:"5"},description:"",name:"visibleQuantity",required:!1,type:{name:"number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"]={docgenInfo:stackedavatar.__docgenInfo,name:"stackedavatar",path:"components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/fallback-values.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>DATA_FALLBACK_VALUE});const DATA_FALLBACK_VALUE="-"},"./img/icons/person-icon.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/person-icon.f2841f1e.svg",height:14,width:12,blurDataURL:"static/media/person-icon.f2841f1e.svg"}}}]);