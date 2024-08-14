"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[541],{"./components/organisms/DevCardCarousel/dev-card-carousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DevCardCarouselStory:()=>DevCardCarouselStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dev_card_carousel_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");const index_esm=function cntl(template){for(var templateElements=[],_i=1;_i<arguments.length;_i++)templateElements[_i-1]=arguments[_i];return template.reduce((function(sum,n,index){var templateElement=templateElements[index];return"string"==typeof templateElement?""+sum+n+templateElement:""+sum+n}),"").trim().replace(/\s{2,}/g," ")};var _templateObject,react_spring_web_modern=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs"),use_gesture_react_esm=__webpack_require__("./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js"),useKey=__webpack_require__("./node_modules/react-use/esm/useKey.js"),dev_card=__webpack_require__("./components/molecules/DevCard/dev-card.tsx"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const startTo=function(index){return{x:-50*index,scale:1-.1*index,delay:arguments.length>1&&void 0!==arguments[1]&&arguments[1]?100*index:0,zIndex:100-index,coverOpacity:.1*index,immediate:key=>"zIndex"===key}},transform=(x,y,s)=>"translate(".concat(x,"px, ").concat(y,"px) scale(").concat(s,")");function DevCardCarousel(props){const{0:cardOrder,1:setCardOrder}=(0,react.useState)(props.cards.map(((card,index)=>index))),[springProps,api]=(0,react_spring_web_modern.bY)(props.cards.length,(i=>_objectSpread(_objectSpread({},startTo(i,!0)),{},{from:{x:0,scale:1,y:0,zIndex:0,coverOpacity:0}}))),bind=(0,use_gesture_react_esm.useGesture)({onHover:state=>{const hoverIndex=state.args[0];api.start((i=>({y:state.hovering&&i===hoverIndex?-20:0})))}}),handleSelect=(0,react.useCallback)((cardOrderIndex=>{var _props$onSelect;const cardIndex=cardOrder[cardOrderIndex];null===(_props$onSelect=props.onSelect)||void 0===_props$onSelect||_props$onSelect.call(props,props.cards[cardIndex].login),setCardOrder((cards=>[...cards.slice(cardOrderIndex),...cards.slice(0,cardOrderIndex)]))}),[cardOrder,props,setCardOrder]);return(0,useKey.Z)("ArrowRight",(()=>{handleSelect(cardOrder.length-1)}),{},[handleSelect]),(0,useKey.Z)("ArrowLeft",(()=>{handleSelect(1)}),{},[handleSelect]),(0,react.useEffect)((()=>{api.start((i=>{const newIndex=cardOrder.indexOf(i);return _objectSpread({},startTo(newIndex))}))}),[cardOrder,api]),__jsx("div",{className:"grid place-content-center mb-8"},springProps.map(((_ref,index)=>{let{x,y,scale,zIndex,coverOpacity}=_ref;const cardProps=props.cards[index],cardOrderIndex=cardOrder.indexOf(index),className=index_esm(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n          DevCardCarousel-card\n          rounded-3xl\n          left-0\n          top-0\n          w-full\n          h-full\n          relative\n          cursor-pointer\n        "])));return __jsx(react_spring_web_modern.q.div,(0,esm_extends.Z)({},bind(index),{key:cardProps.login,className,role:"button",title:cardProps.login,style:{gridArea:"1 / 1",zIndex,transform:(0,react_spring_web_modern.to)([x,y,scale],transform),transformOrigin:"left center"}}),__jsx(dev_card.Z,{key:"card",isInteractive:index===cardOrder[0],user:cardProps,isFlipped:!1}),__jsx(react_spring_web_modern.q.div,{key:"cover",className:"DevCardCarousel-darken absolute left-0 right-0 top-0 bottom-0 bg-black rounded-3xl z-10",title:"Select @".concat(cardProps.login),style:{opacity:coverOpacity,pointerEvents:index===cardOrder[0]?"none":"auto"},onClick:()=>{!function handleClick(cardOrderIndex){handleSelect(cardOrderIndex)}(cardOrderIndex)}}))})))}DevCardCarousel.displayName="DevCardCarousel";try{devcardcarousel.displayName="devcardcarousel",devcardcarousel.__docgenInfo={description:"",displayName:"devcardcarousel",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"any[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((username: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/DevCardCarousel/dev-card-carousel.tsx#devcardcarousel"]={docgenInfo:devcardcarousel.__docgenInfo,name:"devcardcarousel",path:"components/organisms/DevCardCarousel/dev-card-carousel.tsx#devcardcarousel"})}catch(__react_docgen_typescript_loader_error){}var _DevCardCarouselStory,_DevCardCarouselStory2,stubData=__webpack_require__("./components/organisms/DevCardCarousel/stubData.ts"),dev_card_carousel_stories_jsx=react.createElement;function dev_card_carousel_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function dev_card_carousel_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?dev_card_carousel_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dev_card_carousel_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const dev_card_carousel_stories={title:"Design System/Organisms/DevCardCarousel",component:DevCardCarousel,parameters:{layout:"centered",backgrounds:{default:"dark"}}},DevCardTemplate=args=>dev_card_carousel_stories_jsx(DevCardCarousel,args);DevCardTemplate.displayName="DevCardTemplate";const DevCardCarouselStory=DevCardTemplate.bind({});DevCardCarouselStory.args={cards:[...stubData.V]},DevCardCarouselStory.parameters=dev_card_carousel_stories_objectSpread(dev_card_carousel_stories_objectSpread({},DevCardCarouselStory.parameters),{},{docs:dev_card_carousel_stories_objectSpread(dev_card_carousel_stories_objectSpread({},null===(_DevCardCarouselStory=DevCardCarouselStory.parameters)||void 0===_DevCardCarouselStory?void 0:_DevCardCarouselStory.docs),{},{source:dev_card_carousel_stories_objectSpread({originalSource:"args => <DevCardCarousel {...args} />"},null===(_DevCardCarouselStory2=DevCardCarouselStory.parameters)||void 0===_DevCardCarouselStory2||null===(_DevCardCarouselStory2=_DevCardCarouselStory2.docs)||void 0===_DevCardCarouselStory2?void 0:_DevCardCarouselStory2.source)})});const __namedExportsOrder=["DevCardCarouselStory"]},"./components/organisms/DevCardCarousel/stubData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>STUB_DEV_CARDS});const STUB_DEV_CARDS=[{email:"",notification_count:0,insights_count:0,personal_workspace_id:"",id:20603494,open_issues:31,created_at:"2016-07-22T19:49:17.000Z",updated_at:"2024-08-08T19:49:09.940Z",first_opened_pr_at:"2022-11-09T20:50:08.000Z",first_pushed_commit_at:"2019-04-11T20:59:57.000Z",connected_at:"2024-01-31T17:16:08.609Z",campaign_start_date:"2024-01-31T17:16:08.609Z",node_id:"",avatar_url:"https://avatars.githubusercontent.com/u/20603494?u=dab23ed63c98dc94be294eb1a826e8d204b72235&v=4",gravatar_id:"",url:"https://github.com/zeucapua",login:"zeucapua",is_private:!1,is_open_sauced_member:!0,is_onboarded:!0,is_waitlisted:!0,role:10,bio:"Fullstack Web Developer and Coding Educator",blog:"zeu.dev",name:"zeudev",twitter_username:"zeu_dev",linkedin_url:"",github_sponsors_url:"",discord_url:"",company:"@open-sauced",location:"Los Angeles, CA",display_local_time:!1,interests:"javascript,typescript,svelte,react",hireable:!1,public_repos:58,public_gists:0,type:"User",display_email:!1,receive_collaboration:!1,receive_product_updates:!0,timezone:"Pacific Daylight Time",coupon_code:"",languages:{CSS:228,HTML:346,Svelte:10076,JavaScript:1015,TypeScript:5284},highlights_count:0,following_count:1,followers_count:1,oscr:165.20000000000002,devstats_updated_at:"2024-08-08T19:49:08.000Z",accepted_usage_terms:!1,recent_pull_request_velocity_count:4,recent_pull_requests_count:23,is_maintainer:!0,commits:0,prs_created:19,prs_reviewed:14,issues_created:15,commit_comments:0,issue_comments:14,pr_review_comments:3,comments:17,total_contributions:48},{email:"",notification_count:0,insights_count:0,personal_workspace_id:"3432aaf7-55db-4c2b-9fde-f61604471e21",id:833231,open_issues:150,created_at:"2011-06-06T17:32:57.000Z",updated_at:"2024-08-10T02:49:07.497Z",first_opened_pr_at:"2014-05-01T01:58:22.000Z",first_pushed_commit_at:"2020-03-30T12:04:16.000Z",connected_at:"2023-07-30T03:31:02.219Z",campaign_start_date:null,node_id:"MDQ6VXNlcjgzMzIzMQ==",avatar_url:"https://avatars.githubusercontent.com/u/833231?u=c462621b379f11fb265d8f85b8c75016ad33d243&v=4",gravatar_id:"",url:"https://github.com/nickytonline",login:"nickytonline",is_private:!1,is_open_sauced_member:!0,is_onboarded:!0,is_waitlisted:!0,role:50,bio:"Senior Software Engineer at OpenSauced",blog:"https://oss.fyi/nickytonline",name:"Nick Taylor",twitter_username:"nickytonline",linkedin_url:"https://www.linkedin.com/in/nickytonline/",github_sponsors_url:"https://github.com/sponsors/nickytonline",discord_url:"",company:"@open-sauced",location:"Montreal, Canada",display_local_time:!0,interests:"javascript,typescript,csharp,ai,ml,react,rust",hireable:!1,public_repos:197,public_gists:32,type:"User",display_email:!0,receive_collaboration:!0,receive_product_updates:!0,timezone:"Egypt Standard Time",coupon_code:"OPENSAUCEDFOREVERTEST",languages:{CSS:2139,SCSS:92601,Astro:23912,Shell:2987,Liquid:3994,Nunjucks:30270,JavaScript:97519,TypeScript:65126},highlights_count:13,following_count:38,followers_count:9,oscr:258.00000000000006,devstats_updated_at:"2024-08-09T15:19:50.000Z",accepted_usage_terms:!1,recent_pull_request_velocity_count:1,recent_pull_requests_count:41,is_maintainer:!0,commits:98,prs_created:39,prs_reviewed:151,issues_created:36,commit_comments:0,issue_comments:55,pr_review_comments:55,comments:110,total_contributions:324},{email:"",notification_count:0,insights_count:0,personal_workspace_id:"85be2079-5293-4482-9cd2-d420de812691",id:42211,open_issues:83,created_at:"2008-12-23T02:43:29.000Z",updated_at:"2024-08-09T17:24:50.173Z",first_opened_pr_at:"2012-10-06T02:35:52.000Z",first_pushed_commit_at:"2013-01-22T06:22:13.000Z",connected_at:"2023-05-10T16:50:57.665Z",campaign_start_date:"2023-05-10T16:50:57.665Z",node_id:"MDQ6VXNlcjQyMjEx",avatar_url:"https://avatars.githubusercontent.com/u/42211?u=af4c194c5ba48b817aab3f0ca39724e92d468e82&v=4",gravatar_id:"",url:"https://github.com/brandonroberts",login:"brandonroberts",is_private:!1,is_open_sauced_member:!0,is_onboarded:!0,is_waitlisted:!1,role:50,bio:"Web developer, @ngrx  maintainer, creator of @analogjs, GDE, sports ranter, and gif slinger. Engineering Lead @open-sauced.",blog:"https://brandonroberts.dev",name:"Brandon Roberts",twitter_username:"brandontroberts",linkedin_url:"https://www.linkedin.com/in/brandontroberts",github_sponsors_url:"https://github.com/sponsors/brandonroberts",discord_url:"",company:"@open-sauced",location:"Alabama",display_local_time:!0,interests:"typescript",hireable:!1,public_repos:307,public_gists:69,type:"User",display_email:!1,receive_collaboration:!0,receive_product_updates:!0,timezone:"Central Standard Time",coupon_code:"",languages:{jq:1282,CSS:11344,EJS:12611,MDX:22588,HTML:98065,Shell:8132,Starlark:107250,JavaScript:52839,TypeScript:4365822},highlights_count:21,following_count:10,followers_count:15,oscr:269.64285714285717,devstats_updated_at:"2024-08-09T16:00:46.000Z",accepted_usage_terms:!1,recent_pull_request_velocity_count:1,recent_pull_requests_count:51,is_maintainer:!0,commits:464,prs_created:49,prs_reviewed:87,issues_created:7,commit_comments:0,issue_comments:54,pr_review_comments:17,comments:71,total_contributions:607}]},"./node_modules/react-use/esm/misc/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S1:()=>off,ZT:()=>noop,jU:()=>isBrowser,on:()=>on});var noop=function(){};function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)}function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)}var isBrowser="undefined"!=typeof window},"./node_modules/react-use/esm/useKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>esm_useKey});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),util=__webpack_require__("./node_modules/react-use/esm/misc/util.js"),defaultTarget=util.jU?window:null,isListenerType1=function(target){return!!target.addEventListener},isListenerType2=function(target){return!!target.on};const esm_useEvent=function(name,handler,target,options){void 0===target&&(target=defaultTarget),(0,react.useEffect)((function(){if(handler&&target)return isListenerType1(target)?(0,util.on)(target,name,handler,options):isListenerType2(target)&&target.on(name,handler,options),function(){isListenerType1(target)?(0,util.S1)(target,name,handler,options):isListenerType2(target)&&target.off(name,handler,options)}}),[name,handler,target,JSON.stringify(options)])};const esm_useKey=function(key,fn,opts,deps){void 0===fn&&(fn=util.ZT),void 0===opts&&(opts={}),void 0===deps&&(deps=[key]);var _a=opts.event,event=void 0===_a?"keydown":_a,target=opts.target,options=opts.options,useMemoHandler=(0,react.useMemo)((function(){var keyFilter,predicate="function"==typeof(keyFilter=key)?keyFilter:"string"==typeof keyFilter?function(event){return event.key===keyFilter}:keyFilter?function(){return!0}:function(){return!1};return function(handlerEvent){if(predicate(handlerEvent))return fn(handlerEvent)}}),deps);esm_useEvent(event,useMemoHandler,target,options)}}}]);