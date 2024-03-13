import { string } from "yup";

export async function ValidationNameWithYup(inputName: string) {
  let nameSchema = string().matches(/^[a-z ,.'-]+$/i);
  return await nameSchema.isValid(inputName);
}
