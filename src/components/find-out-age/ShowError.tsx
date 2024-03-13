import { Div, Text } from "@vkontakte/vkui";

export const ShowError = ({ isError }: { isError: boolean }) => {
  return isError ? (
    <Div>
      <Text style={{ color: "red" }}>Неправильный формат имени</Text>
    </Div>
  ) : null;
};
