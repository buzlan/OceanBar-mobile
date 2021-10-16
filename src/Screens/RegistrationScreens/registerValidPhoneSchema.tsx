import * as yup from "yup";

export const registerValidationPhoneSchema = yup.object().shape({
  phoneNumber: yup
    .number()
    .required("Поле обязательно для заполнения")
    .matches(/^[0-9]{9}$/, "Введите правильный номер телефона"),
});
