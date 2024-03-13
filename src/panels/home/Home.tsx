import { FC } from "react";
import {
  Button,
  ButtonGroup,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const Home: FC<NavIdProps> = ({ nav }) => {
  const routeNavigator = useRouteNavigator();
  return (
    <Panel nav={nav}>
      <PanelHeader>Главная</PanelHeader>
      <Group>
        <ButtonGroup mode="horizontal" stretched>
          <Button
            stretched
            size="l"
            onClick={() => routeNavigator.push("/cat-facts")}
          >
            Факты о кошках
          </Button>
          <Button
            stretched
            size="l"
            onClick={() => routeNavigator.push("/find-out-age")}
          >
            Предсказать возраст по имени
          </Button>
        </ButtonGroup>
      </Group>
    </Panel>
  );
};
