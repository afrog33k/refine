"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"v4-to-v5",title:"Migration Guide"},i=void 0,l={unversionedId:"api-reference/antd/migration-guide/v4-to-v5",id:"api-reference/antd/migration-guide/v4-to-v5",title:"Migration Guide",description:"Ant Design released a new major version as a v5. This document will help you upgrade from antd 4.x version to antd 5.x version.",source:"@site/docs/api-reference/antd/migration-guide/v4-to-v5.md",sourceDirName:"api-reference/antd/migration-guide",slug:"/api-reference/antd/migration-guide/v4-to-v5",permalink:"/docs/api-reference/antd/migration-guide/v4-to-v5",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/migration-guide/v4-to-v5.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1672045520,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{id:"v4-to-v5",title:"Migration Guide"},sidebar:"someSidebar",previous:{title:"Sider",permalink:"/docs/api-reference/antd/customization/antd-custom-sider"},next:{title:"Chakra UI API",permalink:"/docs/api-reference/chakra-ui"}},d={},p=[{value:"Updating the packages",id:"updating-the-packages",level:2},{value:"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-codemod--recommended",level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",level:2},{value:"Updating Imports",id:"updating-imports",level:3},{value:"Updating Props",id:"updating-props",level:3},{value:"Customized <code>&lt;Sider&gt;</code>",id:"customized-sider",level:3},{value:"Customized <code>&lt;Header&gt;</code>",id:"customized-header",level:3},{value:"LESS Users",id:"less-users",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Compile errors",id:"compile-errors",level:3},{value:"Solution 1",id:"solution-1",level:4},{value:"Solution 2",id:"solution-2",level:4}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=s("Tabs"),u=s("TabItem"),c={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ant Design released a new major version as a v5. This document will help you upgrade from antd 4.x version to antd 5.x version."),(0,o.kt)("p",null,"Ant Design removed ",(0,o.kt)("inlineCode",{parentName:"p"},"less")," and adopt ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS-in-JS"),", for better support of dynamic themes. The bottom layer uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ant-design/cssinjs"},(0,o.kt)("inlineCode",{parentName:"a"},"@ant-design/cssinjs"))," as a solution.\nSome components are removed or renamed, and some APIs are changed."),(0,o.kt)("p",null,"Some of the changes are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PageHeader>")," component moved into ",(0,o.kt)("inlineCode",{parentName:"li"},"@ant-design/pro-components"),". ",(0,o.kt)("strong",{parentName:"li"},"refine")," is using ",(0,o.kt)("inlineCode",{parentName:"li"},"<PageHeader>")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"<List>"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"<Create>"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"<Edit>"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"<Show>")," components and added as a dependency. You don't need to install ",(0,o.kt)("inlineCode",{parentName:"li"},"@ant-design/pro-components")," package manually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Comment>")," component moved into ",(0,o.kt)("inlineCode",{parentName:"li"},"@ant-design/compatible"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"moment.js")," is replaced with ",(0,o.kt)("inlineCode",{parentName:"li"},"day.js"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"less")," is removed from ",(0,o.kt)("inlineCode",{parentName:"li"},"antd")," package.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5"},"Ant Design Migration Guide")," for detailed information.")),(0,o.kt)("admonition",{title:"Next.js 13 and Remix Not Supported Now",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Currently ",(0,o.kt)("inlineCode",{parentName:"p"},"ant-design/pro-components")," does not compatible with Next.js 13 and Remix.\n",(0,o.kt)("strong",{parentName:"p"},"refine")," is using ",(0,o.kt)("inlineCode",{parentName:"p"},"ant-design/pro-components")," as a dependency for ",(0,o.kt)("inlineCode",{parentName:"p"},"<PageHeader/>")," component."),(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ant-design/pro-components/issues/6338"},"Refer to a related issue on ant-design/pro-components repository")))),(0,o.kt)("admonition",{title:"A little more clarification",type:"info"},(0,o.kt)("table",{parentName:"admonition"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"refine")," package"),(0,o.kt)("th",{parentName:"tr",align:null},"Ant Design version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","3.x.x"),(0,o.kt)("td",{parentName:"tr",align:null},"antd","@","4.x.x")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","4.x.x"),(0,o.kt)("td",{parentName:"tr",align:null},"antd","@","5.x.x"))))),(0,o.kt)("h2",{id:"updating-the-packages"},"Updating the packages"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," must be updated to ",(0,o.kt)("inlineCode",{parentName:"p"},"4.x.x")),(0,o.kt)(m,{defaultValue:"refine-cli",values:[{label:"refine CLI",value:"refine-cli"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},(0,o.kt)(u,{value:"refine-cli",mdxType:"TabItem"},(0,o.kt)("p",null,"\u26a1\ufe0f You can easily update ",(0,o.kt)("strong",{parentName:"p"},"refine")," packages with ",(0,o.kt)("strong",{parentName:"p"},"refine")," CLI ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/cli/#update"},(0,o.kt)("inlineCode",{parentName:"a"},"update"))," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine update\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/cli/#how-to-add-to-an-existing-project"},"How to add refine CLI to an existing project?")))),(0,o.kt)(u,{value:"manual",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-antd@latest\n")))),(0,o.kt)("h2",{id:"-migrating-your-project-automatically-with-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-codemod")," package handles the breaking changes for your project automatically, without any manual steps. It migrates your ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," version from 3.x.x to 4.x.x."),(0,o.kt)("p",null,"Just ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx @pankod/refine-codemod antd4-to-antd5\n")),(0,o.kt)("p",null,"And it's done. Now your project uses ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udea8 Customized or swizzled ",(0,o.kt)("a",{parentName:"p",href:"#customized-sider"},"components")," and ",(0,o.kt)("a",{parentName:"p",href:"#less-users"},".less")," files cannot be migrated automatically. You need to migrate them manually.")),(0,o.kt)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,o.kt)("h3",{id:"updating-imports"},"Updating Imports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CSS files are no longer included in package. Since CSS-in-JS supports importing on demand, the original ",(0,o.kt)("inlineCode",{parentName:"li"},"styles/antd.less")," has also been abandoned. If you need to reset some basic styles, please import ",(0,o.kt)("inlineCode",{parentName:"li"},"@pankod/refine-antd/dist/reset.css"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="App.tsx"',title:'"App.tsx"'},'- import "@pankod/refine-antd/dist/styles.min.css";\n+ import "@pankod/refine-antd/dist/reset.css";\n')),(0,o.kt)("h3",{id:"updating-props"},"Updating Props"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"actionButtons")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pageHeaderProps")," props was deprecated on ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@3.x.x")," and removed on ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component due to incosistency with all UI packages. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtons")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"headerProps")," props instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="List.tsx"',title:'"List.tsx"'},"- <List actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <List headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Create.tsx"',title:'"Create.tsx"'},"- <Create actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Create headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Show.tsx"',title:'"Show.tsx"'},"- <Show actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Show headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Edit.tsx"',title:'"Edit.tsx"'},"- <Edit actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Edit headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,o.kt)("h3",{id:"customized-sider"},"Customized ",(0,o.kt)("inlineCode",{parentName:"h3"},"<Sider>")),(0,o.kt)("p",null,"If you have customized or ",(0,o.kt)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider>")," component, there may be a color mismatch issue.\nYou can give theme dark to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Menu>")," component in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Sider.tsx"',title:'"Sider.tsx"'},"    <AntdLayout.Sider\n      collapsible\n      collapsed={collapsed}\n      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n      collapsedWidth={isMobile ? 0 : 80}\n      breakpoint='lg'\n      style={isMobile ? antLayoutSiderMobile : antLayoutSider}>\n      <RenderToTitle collapsed={collapsed} />\n      <Menu\n+       theme='dark'\n        selectedKeys={[selectedKey]}\n        defaultOpenKeys={defaultOpenKeys}\n        mode='inline'\n        onClick={() => {\n          if (!breakpoint.lg) {\n            setCollapsed(true)\n          }\n        }}>\n        {renderSider()}\n      </Menu>\n    </AntdLayout.Sider>\n")),(0,o.kt)("h3",{id:"customized-header"},"Customized ",(0,o.kt)("inlineCode",{parentName:"h3"},"<Header>")),(0,o.kt)("p",null,"If you have customized or ",(0,o.kt)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Header>")," component, there may be a color mismatch issue.\nYou can remove constant background color in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Header>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Header.tsx"',title:'"Header.tsx"'},"   <AntdLayout.Header\n      style={{\n        display: 'flex',\n        justifyContent: 'flex-end',\n        alignItems: 'center',\n        padding: '0px 24px',\n        height: '64px',\n-       backgroundColor: '#FFF',\n      }}>\n")),(0,o.kt)("h3",{id:"less-users"},"LESS Users"),(0,o.kt)("p",null,"Ant Design removed ",(0,o.kt)("inlineCode",{parentName:"p"},"less"),", uses and recommends ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS-in-JS")," instead. You need to manually migrate your ",(0,o.kt)("inlineCode",{parentName:"p"},".less")," files to ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS-in-JS"),". ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5#less-migration"},"Ant Design's documentation for less migration.")),(0,o.kt)("h2",{id:"known-issues"},"Known Issues"),(0,o.kt)("h3",{id:"compile-errors"},"Compile errors"),(0,o.kt)("p",null,"Some users repored (",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056236230641209396/1056236230641209396"},"issue#1"),", ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056592183702061177/1056592183702061177"},"issue#2"),") compile errors after upgrading from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@3.x.x")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x"),". They also provided solutions."),(0,o.kt)("h4",{id:"solution-1"},"Solution 1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"remove ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," folder"),(0,o.kt)("li",{parentName:"ol"},"remove ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," file"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm install"))),(0,o.kt)("h4",{id:"solution-2"},"Solution 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react@latest react-dom@latest\n")))}k.isMDXComponent=!0}}]);