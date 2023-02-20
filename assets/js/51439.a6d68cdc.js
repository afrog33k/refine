"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51439],{51439:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"{@link https://refine.dev/docs/api-references/components/refine-config `<Refine> component`} is the entry point of a refine app.\\nIt is where the highest level of configuration of the app occurs.\\nOnly a dataProvider is required to bootstrap the app. After adding a dataProvider, resources can be added as property.","displayName":"Refine","props":{"resources":{"defaultValue":null,"description":"`resources` is the main building block of a refine app. A resource represents an entity in an endpoint in the API.","name":"resources","required":false,"type":{"name":"[`ResourceProps[]`](/docs/api-reference/core/components/refine-config/#resources)"},"tags":{"type":"[`ResourceProps[]`] (/docs/api-reference/core/components/refine-config/#resources)"}},"routerProvider":{"defaultValue":null,"description":"**refine** needs some router functions to create resource pages, handle navigation, etc. This provider allows you to use the router library you want","name":"routerProvider","required":true,"type":{"name":"[`IRouterProvider`](/docs/api-reference/core/providers/router-provider/)"},"tags":{"type":"[`IRouterProvider`] (/docs/api-reference/core/providers/router-provider/)"}},"dataProvider":{"defaultValue":null,"description":"A `dataProvider` is the place where a refine app communicates with an API. Data providers also act as adapters for refine, making it possible for it to consume different API\'s and data services.","name":"dataProvider","required":true,"type":{"name":"[`IDataContextProvider` | `IDataMultipleContextProvider`](/docs/api-reference/core/providers/data-provider/)"},"tags":{"type":"[`IDataContextProvider` | `IDataMultipleContextProvider`] (/docs/api-reference/core/providers/data-provider/)"}},"authProvider":{"defaultValue":null,"description":"`authProvider` handles authentication logic like login, logout flow and checking user credentials. It is an object with methods that refine uses when necessary.","name":"authProvider","required":false,"type":{"name":"[`AuthProvider`](/docs/api-reference/core/providers/auth-provider/)"},"tags":{"type":"[`AuthProvider`] (/docs/api-reference/core/providers/auth-provider/)"}},"liveProvider":{"defaultValue":null,"description":"**refine** lets you add Realtime support to your app via `liveProvider`. It can be used to update and show data in Realtime throughout your app.","name":"liveProvider","required":false,"type":{"name":"[`ILiveContext`](/docs/api-reference/core/providers/live-provider/)"},"tags":{"type":"[`ILiveContext`] (/docs/api-reference/core/providers/live-provider/)"}},"notificationProvider":{"defaultValue":null,"description":"`notificationProvider` handles notification logics. It is an object with methods that refine uses when necessary.","name":"notificationProvider","required":false,"type":{"name":"[`NotificationProvider` | `(() => NotificationProvider)`](/docs/api-reference/core/providers/notification-provider/)"},"tags":{"type":"[`NotificationProvider` | `(() => NotificationProvider)`] (/docs/api-reference/core/providers/notification-provider/)"}},"accessControlProvider":{"defaultValue":null,"description":"`accessControlProvider` is the entry point for implementing access control for refine apps.","name":"accessControlProvider","required":false,"type":{"name":"[`AccessControlProvider`](/docs/api-reference/core/providers/accessControl-provider/)"},"tags":{"type":"[`AccessControlProvider`] (/docs/api-reference/core/providers/accessControl-provider/)"}},"auditLogProvider":{"defaultValue":null,"description":"**refine** allows you to track changes in your data and keep track of who made the changes.","name":"auditLogProvider","required":false,"type":{"name":"[`AuditLogProvider`](/docs/api-reference/core/providers/audit-log-provider#overview)"},"tags":{"type":"[`AuditLogProvider`] (/docs/api-reference/core/providers/audit-log-provider#overview)"}},"i18nProvider":{"defaultValue":null,"description":"`i18nProvider` property lets you add i18n support to your app. Making you able to use any i18n framework.","name":"i18nProvider","required":false,"type":{"name":"[`i18nProvider`](/docs/api-reference/core/providers/i18n-provider/)"},"tags":{"type":"[`i18nProvider`] (/docs/api-reference/core/providers/i18n-provider/)"}},"catchAll":{"defaultValue":null,"description":"A custom error component.","name":"catchAll","required":false,"type":{"name":"[`ReactNode`](/docs/api-reference/core/components/refine-config/#catchall)"},"tags":{"type":"[`ReactNode`] (/docs/api-reference/core/components/refine-config/#catchall)"}},"LoginPage":{"defaultValue":null,"description":"Custom login component can be passed to the `LoginPage` property.","name":"LoginPage","required":false,"type":{"name":"[`React.FC`](/docs/api-reference/core/components/refine-config/#loginpage)"},"tags":{"type":"[`React.FC`] (/docs/api-reference/core/components/refine-config/#loginpage)"}},"DashboardPage":{"defaultValue":null,"description":"A custom dashboard page can be passed to the `DashboardPage` prop which is accessible on root route.","name":"DashboardPage","required":false,"type":{"name":"[`React.FC<DashboardPageProps>`](/docs/api-reference/core/components/refine-config/#dashboardpage)"},"tags":{"type":"[`React.FC<DashboardPageProps>`] (/docs/api-reference/core/components/refine-config/#dashboardpage)"}},"ReadyPage":{"defaultValue":null,"description":"Custom ready page component can be set by passing to `ReadyPage` property.","name":"ReadyPage","required":false,"type":{"name":"[`React.FC`](/docs/api-reference/core/components/refine-config/#readypage)"},"tags":{"type":"[`React.FC`] (/docs/api-reference/core/components/refine-config/#readypage)"}},"Layout":{"defaultValue":null,"description":"Default layout can be customized by passing the `Layout` property.","name":"Layout","required":false,"type":{"name":"[`React.FC<LayoutProps>`](/docs/api-reference/core/components/refine-config/#layout)"},"tags":{"type":"[`React.FC<LayoutProps>`] (/docs/api-reference/core/components/refine-config/#layout)"}},"Sider":{"defaultValue":null,"description":"The default sidebar can be customized by using refine hooks and passing custom components to `Sider` property.","name":"Sider","required":false,"type":{"name":"[`React.FC`](/docs/api-reference/core/components/refine-config/#sider)"},"tags":{"type":"[`React.FC`] (/docs/api-reference/core/components/refine-config/#sider)"}},"Header":{"defaultValue":null,"description":"The default app header can be customized by passing the `Header` property.","name":"Header","required":false,"type":{"name":"[`React.FC`](/docs/api-reference/core/components/refine-config/#header)"},"tags":{"type":"[`React.FC`] (/docs/api-reference/core/components/refine-config/#header)"}},"Footer":{"defaultValue":null,"description":"The default app footer can be customized by passing the `Footer` property.","name":"Footer","required":false,"type":{"name":"[`React.FC`](/docs/api-reference/core/components/refine-config/#footer)"},"tags":{"type":"[`React.FC`] (/docs/api-reference/core/components/refine-config/#footer)"}},"OffLayoutArea":{"defaultValue":null,"description":"The component wanted to be placed out of app layout structure can be set by passing to `OffLayoutArea` prop.","name":"OffLayoutArea","required":false,"type":{"name":"[`React.FC`](/docs/api-reference/core/components/refine-config/#offlayoutarea)"},"tags":{"type":"[`React.FC`] (/docs/api-reference/core/components/refine-config/#offlayoutarea)"}},"Title":{"defaultValue":null,"description":"TThe app title can be set by passing the `Title` property.","name":"Title","required":false,"type":{"name":"[`React.FC<TitleProps>`](/docs/api-reference/core/components/refine-config/#title)"},"tags":{"type":"[`React.FC<TitleProps>`] (/docs/api-reference/core/components/refine-config/#title)"}},"onLiveEvent":{"defaultValue":null,"description":"Callback to handle all live events.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/providers/live-provider/#onliveevent)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/providers/live-provider/#onliveevent)"}},"options":{"defaultValue":null,"description":"`options` is used to configure the app.","name":"options","required":false,"type":{"name":"[`IRefineOptions`](/docs/api-reference/core/components/refine-config/#options-1)"},"tags":{"type":"[`IRefineOptions`] (/docs/api-reference/core/components/refine-config/#options-1)"}},"disableTelemetry":{"defaultValue":null,"description":"**refine** implements a simple and transparent telemetry module for collecting usage statistics defined in a very limited scope. This telemetry module is used to improve the refine experience.","name":"disableTelemetry","required":false,"type":{"name":"[`boolean`](/docs/api-reference/core/components/refine-config/#disabletelemetry)"},"tags":{"deprecated":"`disableTelemetry`  property is deprecated. Use it from within [`options`](/docs/api-reference/core/components/refine-config/#options) instead.","type":"[`boolean`] (/docs/api-reference/core/components/refine-config/#disabletelemetry)"}},"reactQueryClientConfig":{"defaultValue":null,"description":"Config for React Query client that refine uses.","name":"reactQueryClientConfig","required":false,"type":{"name":"[`QueryClientConfig` | `false`](/docs/api-reference/core/components/refine-config/#reactquery)"},"tags":{"deprecated":"`reactQueryClientConfig` property is deprecated. Use `clientConfig` in `reactQuery` in [`options`](/docs/api-reference/core/components/refine-config/#options) instead.","example":"`options={{ reactQuery: { clientConfig: { queryCache: new QueryCache() } } }}`","see":"https://refine.dev/docs/core/components/refine-config/#clientconfig","type":"[`QueryClientConfig` | `false`] (/docs/api-reference/core/components/refine-config/#reactquery)"}},"reactQueryDevtoolConfig":{"defaultValue":null,"description":"Config for customize React Query Devtools.","name":"reactQueryDevtoolConfig","required":false,"type":{"name":"[`ReactQueryDevtools` | `false`](/docs/api-reference/core/components/refine-config/#devtoolconfig)"},"tags":{"deprecated":"`reactQueryDevtoolConfig` property is deprecated. Use `devtoolConfig` in `reactQuery` in [`options`](/docs/api-reference/core/components/refine-config/#options) instead.","example":"`options={{ reactQuery: { devtoolConfig: false } }}`","see":"https://refine.dev/docs/core/components/refine-config/#devtoolConfig","type":"[`ReactQueryDevtools` | `false`] (/docs/api-reference/core/components/refine-config/#devtoolconfig)"}},"liveMode":{"defaultValue":null,"description":"Whether to update data automatically (auto) or not (manual) if a related live event is received. The off value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`LiveModeProps[\\"liveMode\\"]`](/docs/api-reference/core/components/refine-config/#livemode)"},"tags":{"deprecated":"`liveMode` property is deprecated. Use it from within [`options`](/docs/api-reference/core/components/refine-config/#options) instead.","example":"`options={{ liveMode: \\"auto\\" }}`","see":"https://refine.dev/docs/core/components/refine-config/#livemode","type":"[`LiveModeProps[\\"liveMode\\"]`] (/docs/api-reference/core/components/refine-config/#livemode)"}},"mutationMode":{"defaultValue":{"value":"\\"pessimistic\\""},"description":"`mutationMode` determines which mode the mutations run with. (e.g. useUpdate, useDelete).","name":"mutationMode","required":false,"type":{"name":"[`MutationMode`](/docs/api-reference/core/components/refine-config/#mutationmode)"},"tags":{"deprecated":"`mutationMode` property is deprecated at this level. Use it from within `options` instead.","type":"[`MutationMode`] (/docs/api-reference/core/components/refine-config/#mutationmode)","default":"\\"pessimistic\\""}},"syncWithLocation":{"defaultValue":null,"description":"List query parameter values can be edited manually by typing directly in the URL. To activate this feature syncWithLocation needs to be set to true.","name":"syncWithLocation","required":false,"type":{"name":"[`boolean`](/docs/api-reference/core/components/refine-config/#syncwithlocation)"},"tags":{"deprecated":"`syncWithLocation` property is deprecated at this level. Use it from within `options` instead.","example":"`options={{ syncWithLocation: true }}`","see":"https://refine.dev/docs/core/components/refine-config/#syncwithlocation","type":"[`boolean`] (/docs/api-reference/core/components/refine-config/#syncwithlocation)"}},"warnWhenUnsavedChanges":{"defaultValue":null,"description":"When you have unsaved changes and try to leave the current page, **refine** shows a confirmation modal box.","name":"warnWhenUnsavedChanges","required":false,"type":{"name":"[`boolean`](/docs/api-reference/core/components/refine-config/#warnwhenunsavedchanges)"},"tags":{"deprecated":"`warnwhenunsavedchanges` property is deprecated at this level. Use it from within `options` instead.","example":"`options={{ warnwhenunsavedchanges: true }}`","see":"https://refine.dev/docs/core/components/refine-config/#warnwhenunsavedchanges","type":"[`boolean`] (/docs/api-reference/core/components/refine-config/#warnwhenunsavedchanges)"}},"undoableTimeout":{"defaultValue":null,"description":"The duration of the timeout period in undoable mode, shown in milliseconds. Mutations can be cancelled during this period.","name":"undoableTimeout","required":false,"type":{"name":"[`number`](/docs/api-reference/core/components/refine-config/#undoabletimeout)"},"tags":{"deprecated":"`undoableTimeout` property is deprecated at this level. Use it from within `options` instead.","example":"`options={{ undoableTimeout: 5000 }}`","see":"https://refine.dev/docs/core/components/refine-config/#undoabletimeout","type":"[`number`] (/docs/api-reference/core/components/refine-config/#undoabletimeout)"}}},"generatedAt":1676897019337}')}}]);