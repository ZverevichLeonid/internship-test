import { Div } from "@vkontakte/vkui";
import { FC } from "react";

interface ShowNameWithAgeProps {
  nameWithAge:
    | {
        name: string;
        age: number;
      }
    | undefined;
}

export const ShowNameWithAge: FC<ShowNameWithAgeProps> = ({ nameWithAge }) => {
  return nameWithAge?.name ? (
    <Div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <span>Ваше имя: {nameWithAge.name}</span>
      {nameWithAge.age ? (
        <span>Ваш возраст: {nameWithAge.age} </span>
      ) : (
        <span style={{ color: "red" }}>В базе данных такого имени нет</span>
      )}
    </Div>
  ) : null;
};
