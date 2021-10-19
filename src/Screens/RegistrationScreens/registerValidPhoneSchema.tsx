import * as yup from "yup";

export const registerValidationPhoneSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Поле обязательно к заполнению")
    .matches(/^[0-9]{9}$/, "Поле может содержать только 9 цифр"),
});
