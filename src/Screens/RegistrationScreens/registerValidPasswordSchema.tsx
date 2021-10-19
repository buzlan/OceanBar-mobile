import * as yup from "yup";

export const registerValidationPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Пароль не может содержать менее 8 символов")
    .max(15, "Пароль не может содержать более 15 символов")
    .required("Поле обязательно к заполнению")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "[Пароль должен содержать 8-15 символов, без пробелов и специальных знаков (#, %, &, !, $, etc.)"
    ),
});
