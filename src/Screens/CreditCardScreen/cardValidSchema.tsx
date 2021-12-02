import * as yup from "yup";

export const creditCardSchema = yup.object().shape({
  cardOwnerName: yup

    .string()
    .required("Поле обязательно для заполнения")
    .min(2, ({ min }) => `Минимальное количество символов ${min} `)
    .max(30, ({ max }) => `Максимальное количество символов ${max} `)

    .matches(/^[a-zA-Z-\s]{2,30}$/, "Разрешён ввод букв"),
  cardNumber: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^[\d]{16}$/,
      "Номер карты должен содержать 16 цифр, без пробелов и букв"
    ),

  validity: yup
    .string()
    .required("Поле обязательно к заполнению")
    .matches(
      /^[\d/]{7}$/,
      "Срок действия должен содержать 7 символов c использованием цифр и символа /"
    ),
  CVVCVC: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^[\d]{3}$/,
      "CVV/CVC должно содержать 3 цифры, без пробелов и букв"
    ),
});
