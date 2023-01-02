"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const i={title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react","react-suspense"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social.png",hide_table_of_contents:!1},o=void 0,r={permalink:"/blog/react-suspense-guide",source:"@site/blog/2022-09-23-react-suspense.md",title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",date:"2022-09-23T00:00:00.000Z",formattedDate:"September 23, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"react-suspense",permalink:"/blog/tags/react-suspense"}],readingTime:4.55,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],frontMatter:{title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react","react-suspense"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use the useParams hook in React Router",permalink:"/blog/react-router-useparams"},nextItem:{title:"An article guideline for refine blog posts",permalink:"/blog/article-guideline"},relatedPosts:[{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:12.495,date:"2022-09-22T00:00:00.000Z"},{title:"Svelte vs React Comparison",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.31,date:"2022-12-08T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.555,date:"2021-10-25T00:00:00.000Z"}],authorPosts:[{title:"Neumorphism with CSS - A new design trend",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.26,date:"2022-08-20T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.07,date:"2022-09-09T00:00:00.000Z"},{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 26, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.215,date:"2022-10-26T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Suspense?",id:"what-is-suspense",level:2},{value:"Comparing React Suspense to Transitions",id:"comparing-react-suspense-to-transitions",level:2},{value:"Use cases of Suspense",id:"use-cases-of-suspense",level:2},{value:"Common Mistakes Made When Using Suspense",id:"common-mistakes-made-when-using-suspense",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Content delivery and site performance are important factors for web applications to achieve maximum user experience. Content must be delivered to users quickly and effectively. You want your site to function at its best performance to keep a decent dwell time. "),(0,s.kt)("p",null,"Before React 16, React had the ",(0,s.kt)("inlineCode",{parentName:"p"},"React.lazy()"),' method to allow developers to label a component as "lazy," causing it to be downloaded before being rendered. '),(0,s.kt)("p",null,"React 18 has made some changes and modifications to the React library, some of which were additions, removals, or deprecations, and enhancements to what was already there."),(0,s.kt)("p",null,'One of these enhancements involves React\'s "Suspense" functionality. The "Suspense" feature has been part of the library since React 16. With the recent release of React 18, the capability has been enhanced even better. '),(0,s.kt)("p",null,'In this article, we will discuss how "Suspense" works in React and some of its common use cases. '),(0,s.kt)("p",null,"You must have a working knowledge of React and JavaScript to follow along with this post."),(0,s.kt)("p",null,"Steps we'll cover:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#what-is-suspense"},"What is Suspense?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#comparing-suspense-to-transitions"},"Comparing Suspense to Transitions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#use-cases-of-suspense"},"Use cases of Suspense")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#common-mistakes-made-when-using-suspense"},"Common Mistakes Made When Using Suspense"))),(0,s.kt)("h2",{id:"what-is-suspense"},"What is Suspense?"),(0,s.kt)("p",null,"The React Suspense API is a low-level interface that tracks a component's lifecycle and delays rendering while data required pends. User experience improves since users won't have to view a partially loaded component before data is eventually fetched and loaded fully. "),(0,s.kt)("p",null,"For instance, if the duration it takes for a table to load its data is not handled properly, users may initially see an empty table before the component rerenders and displays a fully loaded table."),(0,s.kt)("p",null,"The Suspense API acts as a wrapper around a component to be rendered and then provides a fallback that executes first before the main component renders."),(0,s.kt)("p",null,"Let's look at an example.\nWe may use React Suspense to wrap the component that renders an image and specify a spinner loader as the fallback option for the image to prevent viewers from seeing blurry images that gradually change into the original picture when an image is downloaded from a CDN or cloud storage."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"//Logo is a component that fetches an image from a CDN\nimport Logo from '.LoadLogo.js'\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n    <Logo />\n</Suspense>\n")),(0,s.kt)("p",null,"Let's examine a different scenario in which data loads from a JSON API, and we need to prevent the component from delivering an empty result."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import loadData from './api/loadData.js';\nconst data = loadData('users.json');\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n    <Users />\n</Suspense>\n\nconst Users = () => {\n    const people = data.read();\n\n    return (\n        <div>\n            {people.map(person => {\n                <p key={person.id}>{person.name}</p>\n            })}\n        </div>\n    );\n};\n")),(0,s.kt)("br",null),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://github.com/refinedev/refine"},(0,s.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"comparing-react-suspense-to-transitions"},"Comparing React Suspense to Transitions"),(0,s.kt)("p",null,"Despite their similarities, Suspense and Transition APIs should not be used interchangeably or in the same context. "),(0,s.kt)("p",null,"React Suspense tracks a component's readiness before rendering it and only offers a deferred alternative until the original component prepares for rendering. "),(0,s.kt)("p",null,"Transition, on the other hand, enables you to prioritize one event over another.\nFor instance, when adding a search feature, you might want to show the user what they are entering but wait to start the search until the user finishes typing."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import {startTransition} from 'react';\n\n// Set the input value but don't initiate the search\nsetInputValue(input);\n\nstartTransition(() => {\n    // Set the final search value, then initiate search\n    setSearchQuery(input);\n});\n")),(0,s.kt)("p",null,"States updates tagged as non-urgent inside of ",(0,s.kt)("inlineCode",{parentName:"p"},"startTransition")," are interrupted if an urgent update is made while the non-urgent state is still updating. This process continues until no new urgent updates are made."),(0,s.kt)("h2",{id:"use-cases-of-suspense"},"Use cases of Suspense"),(0,s.kt)("p",null,"As was discussed in the previous section, it is simple to mistake the React Suspense API for Transition and vice versa. Therefore, it's crucial to know when to use and when to forgot them."),(0,s.kt)("p",null,"The following are some notable uses for the React Suspense API:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Rendering media: Inadequate bandwidth could slow media download from an external server to be rendered on the client side. Suspense can provide a fallback option while waiting for the content to download, ensuring a smooth user experience."),(0,s.kt)("li",{parentName:"ul"},"External Data Fetching: This case is similar to media downloading, except that we might be downloading data from databases and may need to tackle race conditions and concurrency issues. In this situation, suspense can be a huge asset."),(0,s.kt)("li",{parentName:"ul"},"Code splitting: Suspense can execute content delivery in parallel or on demand.")),(0,s.kt)("h2",{id:"common-mistakes-made-when-using-suspense"},"Common Mistakes Made When Using Suspense"),(0,s.kt)("p",null,"Developers frequently misuse Suspense because of its similarity to Transition and other APIs. For illustration: "),(0,s.kt)("p",null,"Using components that handle concurrency using ",(0,s.kt)("inlineCode",{parentName:"p"},"useEffect()"),' inside Suspense. The use of "useEffect", which is designed to manage concurrency, inside the Suspense API defeats the purpose of the API. '),(0,s.kt)("p",null,"Relay uses Suspense, however, it doesn't perform the same functions as Relay. Some users mistake Suspense for a server API request tool like Axios or Relay."),(0,s.kt)("p",null,"Another mistake people make is using ",(0,s.kt)("inlineCode",{parentName:"p"},"catch()")," to handle errors. This will cause the component to wait for the promise before rendering. Instead, Error Boundary can be used to handle rendering errors."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"Although Suspense has been a part of React since version 16, React 18's Concurrency concept makes the Suspense API's concept more effective and improved. "),(0,s.kt)("p",null,"Suspense is rather cheap and easy to switch to; if you're interested in learning more about the API, check the ",(0,s.kt)("a",{parentName:"p",href:"https://17.reactjs.org/docs/concurrent-mode-suspense.html"},"official documentation"),"."),(0,s.kt)("br",null),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://discord.gg/refine"},(0,s.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))))}p.isMDXComponent=!0}}]);