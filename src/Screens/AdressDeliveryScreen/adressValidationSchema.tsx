import * as yup from "yup";

export const adressValidationSchema = yup.object().shape({
  //   street: yup

  //     .string()
  //     .required("Поле обязательно для заполнения")
  //     .min(2, ({ min }) => `Минимальное количество символов ${min} `)
  //     .max(30, ({ max }) => `Максимальное количество символов ${max} `)

  //     .matches(/^[a-zA-Z-]{2,30}$/, "Разрешён ввод букв"),
  house: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(1, ({ min }) => `Минимальное количество цифр ${min} `)
    .max(3, ({ max }) => `Максимальное количество цифр ${max} `)
    .matches(
      /^[\d]{1,3}$/,
      "Поле 'Дом' должно содержать 1-3 цифр, без пробелов и букв"
    ),

  corpus: yup
    .string()
    .min(2, "Пароль не может содержать менее 2 символов")
    .max(5, "Пароль не может содержать более 5SSS символов")
    .required("Поле обязательно к заполнению")
    .matches(
      /^(?=.*[a-zA-Z]{1,2})(?=.*[0-9]{1,3})[a-zA-Z\d]{2,5}$/,
      "Поле 'Корпус' должно содержать 2-5 символов c использованием букв и цифр"
    ),
  flat: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(1, ({ min }) => `Минимальное количество цифр ${min} `)
    .max(4, ({ max }) => `Максимальное количество цифр ${max} `)
    .matches(
      /^[\d]{1,4}$/,
      "Поле 'Дом' должно содержать 1-3 цифр, без пробелов и букв"
    ),
});