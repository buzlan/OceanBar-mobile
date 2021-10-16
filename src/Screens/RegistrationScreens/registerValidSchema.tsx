import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, ({ min }) => `Минимальное количество символов ${min} `)
    .max(30, ({ max }) => `Максимальное количество символов ${max} `)
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Z-]{2,30}$/, "Разрешён ввод букв"),
  lastname: yup
    .string()
    .min(3, ({ min }) => `Минимальное количество символов ${min} `)
    .max(30, ({ max }) => `Максимальное количество символов ${max} `)
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Z-]{3,30}$/, "Разрешён ввод букв"),
  email: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^([a-zA-Z0-9]{3,64})@([a-zA-Z0-9.-]{3,253})\.(com|org|net|ru)$/,
      "Электронная почта должна быть в формате xxx@yyy.zzz"
    ),
});
