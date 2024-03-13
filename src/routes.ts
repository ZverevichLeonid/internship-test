import {
  createHashParamRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from "@vkontakte/vk-mini-apps-router";

export const DEFAULT_ROOT = "default_root";

export const DEFAULT_VIEW = "default_view";

export const DEFAULT_VIEW_PANELS = {
  HOME: "home",
  FIND_OUT_AGE: "find-out-age",
  CAT_FACTS: "cat-facts",
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, "/", []),
      createPanel(
        DEFAULT_VIEW_PANELS.CAT_FACTS,
        `/${DEFAULT_VIEW_PANELS.CAT_FACTS}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.FIND_OUT_AGE,
        `/${DEFAULT_VIEW_PANELS.FIND_OUT_AGE}`,
        []
      ),
    ]),
  ]),
]);

export const router = createHashParamRouter(routes.getRoutes());
