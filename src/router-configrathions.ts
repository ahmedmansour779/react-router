import { setRouterConfigurations } from "@mongez/react-router";
import App from "./App";

setRouterConfigurations({
  rootComponent: App,
  strictMode: false,
  localization: {
    defaultLocaleCode: "en",
    localeCodes: ["en", "ar"],
    changeLanguageReloadMode: "soft"
  },
  lazyLoading: {
    loaders: {
      app(app) {
        return import(`../src/apps2/${app}/${app}-provider`);
      },
      module(appName, moduleName) {
        return import(`../src/apps2/${appName}/${moduleName}/provider`);
      }
    }
  }
});
