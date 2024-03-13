import { View, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useGetPanelForView } from "@vkontakte/vk-mini-apps-router";
import { DEFAULT_VIEW_PANELS } from "./routes";
import { Home } from "./panels/index";
import { CatsFacts } from "./panels/index";
import { FindOutAge } from "./panels/index";

export const App = () => {
  const defaultActivePanel = useGetPanelForView("default-view");
  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={defaultActivePanel || DEFAULT_VIEW_PANELS.HOME}>
          <Home nav={DEFAULT_VIEW_PANELS.HOME} />
          <CatsFacts nav={DEFAULT_VIEW_PANELS.CAT_FACTS} />
          <FindOutAge nav={DEFAULT_VIEW_PANELS.FIND_OUT_AGE} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
