import { Button, FormItem, FormLayoutGroup } from "@vkontakte/vkui";
import { FC, useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { getAgeByName } from "../../utils/getAgeByName";
import { useQuery } from "@tanstack/react-query";
import { ValidationNameWithYup } from "../../utils/validationNameWithYup";
import { useDebouncedCallback } from "use-debounce";
import { FormInput } from "./FormInput";
interface IForm {
  name: string;
}

interface INameWithAge {
  age: number;
  name: string;
}
interface FormProps {
  errorValidateYup: boolean;
  setErrorValidateYup: React.Dispatch<React.SetStateAction<boolean>>;
  setNameWithAge: React.Dispatch<
    React.SetStateAction<INameWithAge | undefined>
  >;
}
export const Form: FC<FormProps> = ({
  errorValidateYup,
  setErrorValidateYup,
  setNameWithAge,
}) => {
  const { register, handleSubmit } = useForm<IForm>();
  const { onChange, onBlur, name, ref } = register("name");
  const [inputValue, setInputValue] = useState("");
  const [requestValue, setRequestValue] = useState(inputValue);
  const [enable, setEnable] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["age", requestValue],
    queryFn: async ({ signal }) => {
      setEnable(false);
      let res = await getAgeByName(requestValue, signal);
      return res;
    },
    enabled: enable,
    staleTime: Infinity,
  });

  const submitForm: SubmitHandler<IForm> = async (inputValue) => {
    let isValid = await ValidationNameWithYup(inputValue.name);
    if (isValid) {
      setErrorValidateYup(false);
      setRequestValue(inputValue.name);
      setInputValue("");
      setEnable(true);
    } else {
      setErrorValidateYup(true);
    }
  };
  const errorForm: SubmitErrorHandler<IForm> = (error) => {
    setErrorValidateYup(true);
    console.error(error);
    return;
  };
  const debouncedSubmitForm = useDebouncedCallback((submitForm, errorForm) => {
    if (inputValue.length > 0) {
      handleSubmit(submitForm, errorForm)();
    }
  }, 3000);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setInputValue(e.currentTarget.value);
    debouncedSubmitForm(submitForm, errorForm);
  };

  useEffect(() => {
    !isLoading &&
      setNameWithAge({
        age: data?.age,
        name: data?.name,
      });
  }, [data]);

  return (
    <form onSubmit={handleSubmit(submitForm, errorForm)}>
      <FormLayoutGroup mode="horizontal">
        <FormItem
          top="Имя"
          bottom="Имя может содержать только латинские буквы"
          status={!errorValidateYup ? "default" : "error"}
        >
          <FormInput
            value={inputValue}
            name={name}
            onBlur={onBlur}
            onChangeHandler={onChangeHandler}
            inputRef={ref}
          />
        </FormItem>
        <FormItem>
          <Button size="l" stretched type="submit">
            Узнать возраст
          </Button>
        </FormItem>
      </FormLayoutGroup>
    </form>
  );
};
