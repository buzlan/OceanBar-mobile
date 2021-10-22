import * as yup from "yup";

export const registerValidationPhoneSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Поле обязательно к заполнению")
    .matches(
      /^(\+?375-?|8-?0)(25|29|44|33|17)-?([1-9]\d{2})(-?\d{2}){2}$/,
      "Номер введён некорректно"
    ),
});
