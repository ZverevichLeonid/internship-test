import { FC } from "react";
import { Button } from "@vkontakte/vkui";

interface GetCatsFactButtonProps {
  isLoading: boolean;
  setEnabled: (bol: boolean) => void;
}

export const GetCatsFactButton: FC<GetCatsFactButtonProps> = ({
  isLoading,
  setEnabled,
}) => {
  function handleButtonClick() {
    setEnabled(true);
  }
  return (
    <Button
      disabled={isLoading}
      size="l"
      stretched
      onClick={() => handleButtonClick()}
    >
      Нажми и узнай факт о кошках
    </Button>
  );
};
