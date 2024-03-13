import { FC } from "react";
import { ChangeHandler, RefCallBack } from "react-hook-form";

interface FormInputProps {
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: ChangeHandler;
  name: string;
  inputRef: RefCallBack;
}

export const FormInput: FC<FormInputProps> = ({
  value,
  onChangeHandler,
  onBlur,
  name,
  inputRef,
}) => {
  return (
    <input
      className="input_el_custom"
      placeholder="Введите имя"
      value={value}
      onChange={onChangeHandler}
      onBlur={onBlur}
      name={name}
      ref={inputRef}
      required
    />
  );
};
