import { FC, useState } from "react";
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { ShowError } from "../../components/find-out-age/ShowError";
import { ShowNameWithAge } from "../../components/find-out-age/ShowNameWithAge";
import { Form } from "../../components/find-out-age/Form";
import "./findoutpage.css";

interface INameWithAge {
  age: number;
  name: string;
}
export const FindOutAge: FC<NavIdProps> = ({ nav }) => {
  const routeNavigator = useRouteNavigator();
  const [errorValidateYup, setErrorValidateYup] = useState(false);
  const [nameWithAge, setNameWithAge] = useState<INameWithAge>();

  return (
    <Panel nav={nav}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.push("/")} />}
      >
        Узнать возраст
      </PanelHeader>
      <Group>
        <Form
          errorValidateYup={errorValidateYup}
          setErrorValidateYup={setErrorValidateYup}
          setNameWithAge={setNameWithAge}
        />
        <ShowError isError={errorValidateYup} />
        <ShowNameWithAge nameWithAge={nameWithAge} />
      </Group>
    </Panel>
  );
};
