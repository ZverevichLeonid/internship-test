import { Input } from "@vkontakte/vkui";
import { FC } from "react";

interface ShowCatsFactTextProps {
  inputRef: React.RefObject<HTMLInputElement>;
  defaultValue: string;
}

export const ShowCatsFactText: FC<ShowCatsFactTextProps> = ({
  defaultValue,
  inputRef,
}) => {
  return (
    <Input
      getRef={inputRef}
      defaultValue={defaultValue}
      placeholder="Сейчас здесь будет факт о кошках"
    />
  );
};
