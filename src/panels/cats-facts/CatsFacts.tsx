import { FC, useEffect, useRef, useState } from "react";
import {
  FormItem,
  FormLayoutGroup,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useQuery } from "@tanstack/react-query";
import { GetCatsFactButton } from "../../components/cats-fact/GetCatsFactButton";
import { getCatsFact } from "../../utils/getCatsFact";
import { ShowCatsFactText } from "../../components/cats-fact/ShowCatsFactText";
import { setCursor } from "../../utils/setCursor";

export const CatsFacts: FC<NavIdProps> = ({ nav }) => {
  const routeNavigator = useRouteNavigator();

  const [inputValue, setInputValue] = useState("");
  const [enabled, setEnabled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const queryFn = async () => {
    let fact = await getCatsFact();
    setEnabled(false);
    setInputValue(fact);
    return fact;
  };

  const { isLoading } = useQuery({
    queryKey: ["facts", inputValue],
    queryFn: queryFn,
    enabled: enabled,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setCursor(inputValue, inputRef);
  }, [inputValue]);

  return (
    <Panel nav={nav}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.push("/")} />}
      >
        Факты о котиках
      </PanelHeader>
      <Group>
        <FormLayoutGroup mode="vertical">
          <FormItem>
            <GetCatsFactButton isLoading={isLoading} setEnabled={setEnabled} />
          </FormItem>
          <FormItem>
            <ShowCatsFactText inputRef={inputRef} defaultValue={inputValue} />
          </FormItem>
        </FormLayoutGroup>
      </Group>
    </Panel>
  );
};
