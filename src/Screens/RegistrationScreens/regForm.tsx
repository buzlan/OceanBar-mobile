import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { stylesRegForm } from "../../styles/regFormStyle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import * as yup from "yup";
import { Formik } from "formik";

import { Keyboard } from "react-native";

const registerValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, ({ min }) => `Минимальное количество символов ${min} `)
    .max(30, ({ max }) => `Максимальное количество символов ${max} `)
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Z-]{2,30}$/, "Разрешён ввод букв и символа -"),
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
      /^([a-zA-Z0-9]{3,64})@([a-zA-Z0-9.-]{3,253})\.(com|org|net)$/,
      "Электронная почта должна быть в формате xxx@yyy.zzz"
    ),
});

export const RegistrationForm = ({ navigation }) => {
  const [step, setStep] = useState(1);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {step === 1 && (
        <Formik
          initialValues={{ firstname: "", lastname: "", email: "" }}
          // validateOnMount={true}
          onSubmit={(values) => {
            setStep(step + 1);
            console.log(JSON.stringify(values));
          }}
          validationSchema={registerValidationSchema}
        >
          {({
            initialValues,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
            setTouched,
            dirty,
          }) => (
            <View>
              {console.log(errors)}
              <View>
                <TextInput
                  placeholder="Имя"
                  onChangeText={handleChange("firstname")}
                  onBlur={handleBlur("firstname")}
                  // onFocus={() =>
                  //   setTouched({ ...touched, firstname: true }, true)
                  // }
                  value={values.firstname}
                  right={
                    !errors.firstname &&
                    values.firstname !== initialValues.firstname && (
                      <TextInput.Icon name={"check"} color={"green"} />
                    )
                  }
                />
              </View>
              {errors.firstname && touched?.firstname && (
                <Text style={stylesRegForm.errors}>{errors.firstname}</Text>
              )}
              <View>
                <TextInput
                  placeholder="Фамилия"
                  onChangeText={handleChange("lastname")}
                  onBlur={handleBlur("lastname")}
                  // onFocus={() =>
                  //   setTouched({ ...touched, lastname: true }, false)
                  // }
                  value={values.lastname}
                  right={
                    !errors.lastname &&
                    values.firstname !== initialValues.firstname && (
                      <TextInput.Icon name={"check"} color={"green"} />
                    )
                  }
                />
              </View>
              {errors.lastname && touched.lastname && (
                <Text style={stylesRegForm.errors}>{errors.lastname}</Text>
              )}
              <View>
                <TextInput
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  // onFocus={() => setTouched({ ...touched, email: true }, false)}
                  value={values.email}
                  right={
                    !errors.email &&
                    values.firstname !== initialValues.firstname && (
                      <TextInput.Icon name={"check"} color={"green"} />
                    )
                  }
                />
              </View>
              {errors.email && touched.email && (
                <Text style={stylesRegForm.errors}>{errors.email}</Text>
              )}
              <Button
                disabled={!(isValid && dirty)}
                onPress={handleSubmit}
                title="Продолжить"
              />
            </View>
          )}
        </Formik>
      )}

      {/* second screen */}

      {step === 2 && (
        <Formik
          initialValues={{ firstname: "", lastname: "", email: "" }}
          validateOnMount={true}
          onSubmit={(values) => console.log(JSON.stringify(values))}
          validationSchema={registerValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <View>
              <View>
                <TextInput
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  right={
                    !errors.email ? (
                      <TextInput.Icon name={"check"} color={"green"} />
                    ) : null
                  }
                />
              </View>
              {errors.email && touched.email && (
                <Text style={stylesRegForm.errors}>{errors.email}</Text>
              )}
              <Button
                disabled={
                  !isValid ||
                  (Object.keys(touched).length === 0 &&
                    touched.constructor === Object)
                }
                onPress={handleSubmit}
                title="Регистрация"
              />
            </View>
          )}
        </Formik>
      )}
    </TouchableWithoutFeedback>
  );
};

// const [step, setStep] = useState(1);
// const [isDisabled, setIsDisabled] = useState(true);
// const [userInfo, setUserInfo] = useState({
//   firstname: '',
//   lastname: '',
//   email: '',
// });

// const [error, setError] = useState('');

// const isValidObjField = obj => {
//   return Object.values(obj).every(value => value.trim());
// };
// const isValidFirstName = value => {
//   const regexFirstname = /^[a-zA-Z-]{2,30}$/;
//   console.log(regexFirstname.test(value));
//   if (!regexFirstname.test(value)) {
//     updateError('Неверный формат Имени!', setError);
//   }
// };

// const isValidLastName = value => {
//   const regexFirstname = /^[a-zA-Z-]{3,30}/;
//   return regexFirstname.test(value);
// };

// const isValidEmail = value => {
//   const regx = /^([a-zA-Z0-9]{3,64})@([a-zA-Z0-9.-]{3,253})\.(com|org|net)/;
//   return regx.test(value);
// };

// const updateError = (error, stateUpdater) => {
//   setError(error);
//   setTimeout(() => {
//     setError('');
//   }, 2500);
// };

// const {firstname, lastname, email} = userInfo;

// const handleOnChangeText = (value, fieldname) => {
//   setUserInfo({...userInfo, [fieldname]: value});
// };

// const isValidForm = () => {
//   if (!isValidObjField(userInfo))
//     return updateError('Required all fields', setError);
//   // if (!isValidFirstName(firstname)) {
//   //   updateError('Неверный формат Имени!', setError);
//   //   return false;
//   // }
//   if (!isValidLastName(lastname)) {
//     updateError('Неверный формат Фамилии!', setError);
//     return false;
//   }
//   if (!isValidEmail(email)) {
//     updateError('Email не корректен!', setError);
//     return false;
//   }
//   // setIsDisabled(false);
//   return true;
// };

// const continuePress = () => {
//   if (isValidForm()) {
//     setStep(step + 1);
//     console.log(userInfo);
//   }
// };

// const isAllFieldsPassed = data => {
//   const keys = Object.keys(data);
//   for (let i = 0; i < keys.length; i++) {
//     if (!data[keys[i]].length) {
//       return false;
//     }
//   }
//   return true;
// };
// useEffect(() => {
//   if (isAllFieldsPassed(userInfo)) {
//     if (isValidForm()) {
//       setIsDisabled(false);
//     } else {
//       setIsDisabled(true);
//     }

//     // setIsDisabled(false);
//     //setColorBtn('green');
//   } else {
//     setIsDisabled(true);
//   }
// }, [userInfo]);
//   return (
//     <View style={stylesRegForm.regForm}>
//       {error ? (
//         <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
//           {error}
//         </Text>
//       ) : null}
//       {step === 1 && (
//         <>
//           <TextInput
//             placeholder="Имя"
//             mode="flat"
//             value={firstname}
//             onChangeText={value => handleOnChangeText(value, 'firstname')}
//             autoCapitalize="none"
//             style={stylesRegForm.textInput}
//             onBlur={() => {
//               console.log('trigered');
//               isValidFirstName(firstname);
//             }}
//           />
//           <TextInput
//             mode="flat"
//             value={lastname}
//             onChangeText={value => handleOnChangeText(value, 'lastname')}
//             autoCapitalize="none"
//             style={stylesRegForm.textInput}
//             placeholder={'Фамилия'}
//             underlineColorAndroid={'black'}
//           />
//           <TextInput
//             mode="flat"
//             value={email}
//             onChangeText={value => handleOnChangeText(value, 'email')}
//             autoCapitalize="none"
//             style={stylesRegForm.textInput}
//             placeholder={'Электронный адрес'}
//             underlineColorAndroid={'black'}
//           />
//         </>
//       )}
//       {step === 2 && (
//         <>
//           <TextInput
//             style={stylesRegForm.textInput}
//             placeholder={'Номер телефона'}
//             underlineColorAndroid={'black'}
//           />
//         </>
//       )}
//       {step === 3 && (
//         <>
//           <TextInput
//             style={stylesRegForm.textInput}
//             placeholder={'Имя3'}
//             underlineColorAndroid={'black'}
//           />
//           <TextInput
//             style={stylesRegForm.textInput}
//             placeholder={'Фамилия'}
//             underlineColorAndroid={'black'}
//           />
//           <TextInput
//             style={stylesRegForm.textInput}
//             placeholder={'Электронный адрес'}
//             underlineColorAndroid={'black'}
//           />
//         </>
//       )}
//       <TouchableOpacity
//         style={styles.button}
//         disabled={isDisabled}
//         onPress={() => {
//           if (step === 3) {
//             navigation.navigate('tabs', {screen: 'Блюда'});
//             return;
//           }
//           continuePress();
//         }}>
//         <Text
//           style={[styles.btnText, !isDisabled ? styles.disabledButton : {}]}>
//           {titleByStep[step] || titleByStep.default}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 200,
    marginTop: 20,
    backgroundColor: "transparent",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  btnText: {
    color: "black",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  disabledButton: {
    color: "green",
  },
});
