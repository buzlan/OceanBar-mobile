import * as yup from "yup";

export const loginScreenValidSchema = yup.object().shape({
  email: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^([a-zA-Z0-9]{3,64})@([a-zA-Z0-9.-]{3,253})\.(com|org|net|ru|in)$/,
      "Электронная почта должна быть в формате xxx@yyy.zzz"
    ),
  password: yup
    .string()
    .min(8, "Пароль не может содержать менее 8 символов")
    .max(15, "Пароль не может содержать более 15 символов")
    .required("Поле обязательно к заполнению")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z\d]{8,15}$/,
      "[Пароль должен содержать 8-15 символов, без пробелов и специальных знаков (#, %, &, !, $, etc.)"
    ),
});
