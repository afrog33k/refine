"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));a(96462),a(88074);const i={title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",slug:"customizable-admin-panel-with-nestjs",authors:"yildiray",tags:["refine","nestjs","crud","react"],image:"/img/placeholder.png",hide_table_of_contents:!1},l=void 0,o={permalink:"/blog/customizable-admin-panel-with-nestjs",source:"@site/blog/2021-10-4-admin-panel-with-nestjs.md",title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"crud",permalink:"/blog/tags/crud"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4.06,hasTruncateMarker:!0,authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],frontMatter:{title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",slug:"customizable-admin-panel-with-nestjs",authors:"yildiray",tags:["refine","nestjs","crud","react"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Migrating a React-Admin Application to Refine",permalink:"/blog/migrating-a-react-admin-application-to-refine"},nextItem:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi"},relatedPosts:[{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.15,date:"2022-09-09T00:00:00.000Z"},{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.39,date:"2022-09-25T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.035,date:"2022-02-14T00:00:00.000Z"}],authorPosts:[{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.545,date:"2022-05-05T00:00:00.000Z"},{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",permalink:"/blog/how-to-access-control-with-nestjs",formattedDate:"February 21, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.19,date:"2022-02-21T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this article, we will prepare a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"job-posting")," application. We will also use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," framework for the ",(0,n.kt)("strong",{parentName:"p"},"admin panel"),". The project will consist of two parts, api and admin."))}m.isMDXComponent=!0},96462:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/api-c3af02e04ca94fc4e86a29aa5c715a79.png"},88074:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/refine_sample-433131d60b66bbf057e3b840531e0476.png"}}]);