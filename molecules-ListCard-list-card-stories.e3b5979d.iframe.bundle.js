"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[5468],{"./components/molecules/ListCard/list-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>list_card_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),tooltip=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),ri=__webpack_require__("./node_modules/react-icons/ri/index.mjs"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),bs=__webpack_require__("./node_modules/react-icons/bs/index.mjs"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),useList=__webpack_require__("./lib/hooks/useList.ts"),card=__webpack_require__("./components/atoms/Card/card.tsx"),stacked_avatar=__webpack_require__("./components/molecules/StackedAvatar/stacked-avatar.tsx"),__jsx=react.createElement;const ListCard=_ref=>{let{list,handleOnDeleteClick,workspaceId,user}=_ref;const{data:contributors,meta}=(0,useList.Uc)(list.id),contributorsAvatar=null==contributors?void 0:contributors.map((contributor=>({host_login:contributor.login||contributor.username})));return __jsx(card.Z,null,__jsx("div",{className:"flex flex-col items-start w-full gap-4 px-4 py-6 bg-white rounded-lg md:items-center md:justify-between md:flex-row lg:px-8 lg:gap-2"},__jsx("div",{className:"flex flex-col flex-1 gap-4 lg:gap-6"},__jsx("div",{className:"flex items-center gap-4 lg:items-center "},__jsx("div",{className:"w-4 h-4 rounded-full bg-light-orange-10"}),__jsx("div",{className:"flex justify-between text-xl text-light-slate-12"},__jsx(link_default(),{href:workspaceId?"/workspaces/".concat(workspaceId,"/contributor-insights/").concat(list.id,"/overview"):"/lists/".concat(list.id,"/overview")},list.name)),__jsx("div",{className:(0,clsx_m.Z)("px-2 border rounded-2xl text-light-slate-11",handleOnDeleteClick?"":"text-orange-700 bg-orange-50 border-orange-600")},handleOnDeleteClick?list.is_public?"public":"private":"demo"),__jsx("div",{className:"flex-1 md:hidden"},__jsx("span",{className:" bg-light-slate-1 inline-block rounded-lg p-2.5 border mr-2"},__jsx(link_default(),{href:"/lists/".concat(list.id,"/edit")},__jsx(bs.Aac,{title:"Edit Insight Page",className:"text-light-slate-10 text-md cursor-pointer w-4"})))))),__jsx("div",null,__jsx("div",{className:"flex items-center justify-end w-full gap-8"},__jsx("div",{className:"flex flex-col items-center flex-1 gap-1 mr-2"},__jsx("span",{className:"text-xs text-light-slate-11"},"Contributors"),__jsx(Typography_text.Z,{className:"flex items-center text-2xl"},meta.itemCount)),__jsx("div",{className:"flex items-center"},__jsx(stacked_avatar.Z,{contributors:contributorsAvatar,visibleQuantity:6,classNames:"scale-125"})),__jsx("div",{className:"justify-end flex-1 hidden md:flex items-center gap-2"},__jsx(link_default(),{href:"/lists/".concat(list.id,"/edit")},__jsx("span",{className:" bg-light-slate-1 inline-block rounded-lg p-2.5 border cursor-pointer"},__jsx(bs.Aac,{title:"Edit List Page",className:"text-light-slate-10 text-lg"}))),handleOnDeleteClick&&!!user&&__jsx("button",{onClick:()=>handleOnDeleteClick(list.name,list.id),className:"p-2.5 mb-1.5 border !border-light-slate-4 rounded-lg cursor-pointer bg-light-slate-1",type:"button"},__jsx(ri.qy0,{title:"Delete List",className:"text-lg text-light-slate-10"})),__jsx(link_default(),{href:"/lists/".concat(list.id,"/overview")},__jsx("span",{className:"bg-light-slate-1 inline-block rounded-lg p-2.5 border cursor-pointer"},__jsx(md.Djl,{title:"Go To List Page",className:"text-light-slate-10 text-lg"}))))))))};ListCard.displayName="ListCard";const list_card=ListCard;try{listcard.displayName="listcard",listcard.__docgenInfo={description:"",displayName:"listcard",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DbUserList"}},handleOnDeleteClick:{defaultValue:null,description:"",name:"handleOnDeleteClick",required:!1,type:{name:"((listName: string, listId: string) => void)"}},workspaceId:{defaultValue:null,description:"",name:"workspaceId",required:!1,type:{name:"string"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ListCard/list-card.tsx#listcard"]={docgenInfo:listcard.__docgenInfo,name:"listcard",path:"components/molecules/ListCard/list-card.tsx#listcard"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,list_card_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const list_card_stories={title:"Design System/Molecules/ListCard"},ListCardTemplate=args=>list_card_stories_jsx(tooltip.O,null,list_card_stories_jsx(list_card,args));ListCardTemplate.displayName="ListCardTemplate";const Default=ListCardTemplate.bind({});Default.args={list:{id:"1",name:"List 1",is_public:!0,created_at:"2021-08-10T14:00:00.000Z",updated_at:"2021-08-10T14:00:00.000Z",user:{id:1,login:"user1",name:"User 1"}}},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TipProvider>\n    <ListCard {...args} />\n  </TipProvider>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/atoms/Avatar/avatar-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,q:()=>Avatar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),components_molecules_HoverCardWrapper_hover_card_wrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/HoverCardWrapper/hover-card-wrapper.tsx"),lib_utils_github__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/github.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Avatar=_ref=>{let{contributor,size="large"}=_ref,width=500,height=500;switch(size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return __jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,lib_utils_github__WEBPACK_IMPORTED_MODULE_4__.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";const AvatarHoverCard=_ref2=>{let{contributor,repositories,size="large"}=_ref2;return __jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.fC,null,__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},__jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.xz,null,__jsx(Avatar,{contributor,size}))),__jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.h_,null,__jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.VY,{sideOffset:5},__jsx(components_molecules_HoverCardWrapper_hover_card_wrapper__WEBPACK_IMPORTED_MODULE_3__.Z,{username:contributor,repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard";const __WEBPACK_DEFAULT_EXPORT__=AvatarHoverCard;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/CardProfile/card-profile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/atoms/Icon/icon.tsx"),components_atoms_Typography_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/Typography/text.tsx"),img_icons_fork_icon_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./img/icons/fork-icon.svg"),img_icons_first_pr_icon_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./img/icons/first-pr-icon.svg"),components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const CardProfile=_ref=>{let{githubAvatar,githubName,totalPRs,dateOfFirstPR,isRoundedAvatar}=_ref;return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/user/".concat(githubName),as:"/user/".concat(githubName)},__jsx("div",{className:"flex items-center gap-2"},__jsx(components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{isCircle:isRoundedAvatar,size:40,avatarURL:githubAvatar||void 0}),__jsx("div",null,__jsx("div",null,__jsx(components_atoms_Typography_text__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"!text-base !text-black  "},githubName)),__jsx("div",{className:"flex gap-2 text-xs"},__jsx("div",{className:"flex items-center gap-1 text-xs text-light-slate-11"},void 0!==totalPRs&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_7__.Z,{content:"PRs merged"},__jsx(components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_3__.Z,{size:12,alt:"PRs merged",IconImage:img_icons_fork_icon_svg__WEBPACK_IMPORTED_MODULE_5__.Z})),totalPRs," PR",1===totalPRs?"":"s")),__jsx("div",{className:"flex items-center gap-1 text-light-slate-11"},__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_7__.Z,{content:"First commit date"},__jsx(components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_3__.Z,{size:12,alt:"First commit date",IconImage:img_icons_first_pr_icon_svg__WEBPACK_IMPORTED_MODULE_6__.Z})," ",dateOfFirstPR))))))};CardProfile.displayName="CardProfile";const __WEBPACK_DEFAULT_EXPORT__=CardProfile;try{cardprofile.displayName="cardprofile",cardprofile.__docgenInfo={description:"",displayName:"cardprofile",props:{githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!1,type:{name:"string | StaticImageData"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPRs:{defaultValue:null,description:"",name:"totalPRs",required:!0,type:{name:"number"}},dateOfFirstPR:{defaultValue:null,description:"",name:"dateOfFirstPR",required:!0,type:{name:"string"}},isRoundedAvatar:{defaultValue:null,description:"",name:"isRoundedAvatar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/CardProfile/card-profile.tsx#cardprofile"]={docgenInfo:cardprofile.__docgenInfo,name:"cardprofile",path:"components/molecules/CardProfile/card-profile.tsx#cardprofile"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ContributorHoverCard=_ref=>{let{repoList,githubName,totalPR,dateOfFirstPr,githubAvatar,repositories,isMaintainer}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar,githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",null,__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories,limit:5,contributor:githubName,topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard";const __WEBPACK_DEFAULT_EXPORT__=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/HoverCardWrapper/hover-card-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_hooks_useFetchUser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/hooks/useFetchUser.ts"),lib_hooks_useContributorPullRequestsChart__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),lib_utils_github__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/github.ts"),_ContributorHoverCard_contributor_hover_card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{username,repositories}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,{data:contributor}=(0,lib_hooks_useFetchUser__WEBPACK_IMPORTED_MODULE_2__.j)(username),{repoList}=(0,lib_hooks_useContributorPullRequestsChart__WEBPACK_IMPORTED_MODULE_3__.u)(username,"*",repositories,"30"),profile={githubAvatar:(0,lib_utils_github__WEBPACK_IMPORTED_MODULE_4__.cc)(username,40),githubName:username,totalPR:repoList.length},{is_maintainer,first_opened_pr_at}=null!=contributor?contributor:{};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_ContributorHoverCard_contributor_hover_card__WEBPACK_IMPORTED_MODULE_5__.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList,topic,repositories,isMaintainer:!!is_maintainer}))};try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/StackedAvatar/stacked-avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>stacked_avatar});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts");const hooks_useInsight=id=>{const baseEndpoint="insights/".concat(id),endpointString="".concat(baseEndpoint),{data,error,mutate}=(0,dist.ZP)(id?endpointString:null,public_api_fetcher.N);return{data,isLoading:!error&&!data,isError:!!error&&Object.keys(error).length>0,mutate}};var fallback_values=__webpack_require__("./lib/utils/fallback-values.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const StackedAvatar=_ref=>{let{contributors,visibleQuantity=5,classNames}=_ref;const router=(0,next_router.useRouter)(),{pageId}=router.query,insightId=Number.isInteger(parseInt(pageId,10))?pageId:"",{data:insight,isError}=hooks_useInsight(insightId),repositories=insight?insight.repos.map((repo=>repo.repo_id)):[];return isError?(console.log("Error fetching insight",isError),__jsx("div",null,fallback_values.I)):__jsx("div",{className:(0,clsx_m.Z)("flex -space-x-3 transition-all duration-300 hover:-space-x-1",classNames)},contributors&&contributors.slice(0,visibleQuantity).map((_ref2=>{let{host_login:hostLogin}=_ref2;return __jsx("div",{key:"contributor-avatar-".concat(hostLogin),className:"w-8 h-8 overflow-hidden transition-all duration-300 border-2 border-white border-solid rounded-full"},__jsx(avatar_hover_card.Z,{contributor:hostLogin,repositories}))})))};StackedAvatar.displayName="StackedAvatar";const stacked_avatar=StackedAvatar;try{stackedavatar.displayName="stackedavatar",stackedavatar.__docgenInfo={description:"",displayName:"stackedavatar",props:{contributors:{defaultValue:null,description:"",name:"contributors",required:!0,type:{name:"Contributor[]"}},visibleQuantity:{defaultValue:{value:"5"},description:"",name:"visibleQuantity",required:!1,type:{name:"number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"]={docgenInfo:stackedavatar.__docgenInfo,name:"stackedavatar",path:"components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/useList.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Uc:()=>useFetchListContributors,Z7:()=>useFetchAllLists,k:()=>addListContributor});var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),lib_utils_supabase__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/supabase.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const useFetchAllLists=function(){var _data$data,_data$meta;let range=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,shouldFetch=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{0:page,1:setPage}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),{0:limit,1:setLimit}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10),query=new URLSearchParams;query.set("page","".concat(page)),query.set("limit","".concat(limit)),query.set("range","".concat(range));const baseEndpoint="lists?".concat(query.toString()),endpointString="".concat(baseEndpoint),{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(shouldFetch?endpointString:null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__.N);return{data:null!==(_data$data=null==data?void 0:data.data)&&void 0!==_data$data?_data$data:[],isLoading:!error&&!data,isError:!!error,meta:null!==(_data$meta=null==data?void 0:data.meta)&&void 0!==_data$meta?_data$meta:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},mutate,setPage,setLimit}},useFetchListContributors=function(id){var _data$data2,_data$meta2;let range=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;const{0:page,1:setPage}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),{0:limit,1:setLimit}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10),query=new URLSearchParams;query.set("page","".concat(page)),query.set("limit","".concat(limit)),query.set("range","".concat(range));const endpointString="lists/".concat(id,"/contributors?").concat(query.toString()),{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(id?endpointString:null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__.N);return{data:null!==(_data$data2=null==data?void 0:data.data)&&void 0!==_data$data2?_data$data2:[],isLoading:!error&&!data,isError:!!error,meta:null!==(_data$meta2=null==data?void 0:data.meta)&&void 0!==_data$meta2?_data$meta2:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},mutate,setPage,setLimit}},addListContributor=async(listId,contributors)=>{var _sessionResponse$data;const sessionResponse=await lib_utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.getSession(),sessionToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.access_token;try{const response=await fetch("".concat("https://beta.api.opensauced.pizza/v2","/lists/").concat(listId,"/contributors"),{method:"POST",body:JSON.stringify({contributors}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(sessionToken)}});if(response.ok){return{data:await response.json(),error:null}}return{data:null,error:{message:(await response.json()).message,listId}}}catch(error){return console.log(error),{data:null,error:{message:error.message,listId}}}}},"./lib/utils/fallback-values.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>DATA_FALLBACK_VALUE});const DATA_FALLBACK_VALUE="-"}}]);