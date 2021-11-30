import { Alert } from "react-native";

export const showAlert = (typeError: string, navigation?) => {
  if (typeError === "OLDPASSWORD") {
    Alert.alert("Ошибка!", "Старый пароль неверен! Попробуйте ещё раз!", [
      {
        text: "ОК",
        style: "cancel",
      },
    ]);
  } else if (typeError === "NEWPASSWORDNOTCOMPARE") {
    Alert.alert(
      "Ошибка!",
      "Повторение нового пароля неверно! Попробуйте ещё раз!",
      [
        {
          text: "ОК",
          style: "cancel",
        },
      ]
    );
  } else if (typeError === "OLDPASSWORDEQUALNEWPASSWORD") {
    Alert.alert(
      "Ошибка!",
      "Новый пароль совпадает со старым! Попробуйте ещё раз!",
      [
        {
          text: "ОК",
          style: "cancel",
        },
      ]
    );
  } else if (typeError === "SUCCESSFULL") {
    Alert.alert("Отлично", "Пароль успешно изменен!", [
      {
        text: "ОК",
        onPress: () => navigation.navigate("LoginScreen"),
        style: "cancel",
      },
    ]);
  }
};
