import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Text } from "react-native-elements";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Checkbox from "react-native-check-box";

import { NumberInCircle } from "../../components/NumberInCircle";
import { reserveTableScreenStyles } from "../../styles/reserveTableScreenStyles";

export const reserveTableScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [data, setData] = useState("Выберете дату");
  const [time, setTime] = useState();
  const [table, setTable] = useState();

  useEffect(() => {
    if (route.params?.value) {
      setTable(route.params?.value);
    }
    if (route.params?.time) {
      setTime(route.params?.time);
    }
  }, [route.params]);

  const canContinue = () => {
    if (data === "Выберете дату" || isChecked === false || !time || !table) {
      return false;
    } else {
      return true;
    }
  };
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    if (mode === "date") {
      let fDate =
        tempDate.getDate() +
        "/" +
        (tempDate.getMonth() + 1) +
        "/" +
        tempDate.getFullYear();

      setData(fDate);
    } else {
      let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
      setTime(fTime);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={reserveTableScreenStyles.mainWrapper}>
      <View style={reserveTableScreenStyles.itemsContainer}>
        <View style={reserveTableScreenStyles.selectDateWrapper}>
          <NumberInCircle number={1} />
          <TouchableOpacity
            onPress={() => showMode("date")}
            style={reserveTableScreenStyles.dataElWrapper}
          >
            <Text style={reserveTableScreenStyles.dataText}>{data}</Text>
            <FAIcon name={"chevron-right"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={reserveTableScreenStyles.selectTableWrapper}>
          <NumberInCircle number={2} />
          <TouchableOpacity
            onPress={() => navigation.navigate("SelectTable", { table: table })}
            style={reserveTableScreenStyles.dataElWrapper}
          >
            <Text style={reserveTableScreenStyles.dataText}>
              {table ? `Стол на ${table}` : "Выберите стол"}
            </Text>

            <FAIcon name={"chevron-right"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={reserveTableScreenStyles.selectTimeWrapper}>
          <NumberInCircle number={3} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SelectTime", { orderType: "reserve" })
            }
            style={reserveTableScreenStyles.dataElWrapper}
          >
            <Text style={reserveTableScreenStyles.dataText}>
              {time || "Выберите время"}
            </Text>
            <FAIcon name={"chevron-right"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={reserveTableScreenStyles.checkboxWrapper}>
          <Checkbox
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            isChecked={isChecked}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          />
          <Text style={reserveTableScreenStyles.textCheckboxStyle}>
            Я согласен оплатить заказ онлайн
          </Text>
        </View>
        <View style={reserveTableScreenStyles.buttonWrapper}>
          <Button
            title="Далее"
            titleStyle={reserveTableScreenStyles.titleRegisterBtn}
            disabled={canContinue() ? false : true}
            disabledStyle={reserveTableScreenStyles.disabledRegisterButton}
            disabledTitleStyle={
              reserveTableScreenStyles.disabledTitleRegisterBtn
            }
            buttonStyle={reserveTableScreenStyles.registerButton}
            onPress={() => {
              navigation.navigate("Confirmation");
            }}
          />
        </View>
      </View>
      {show && (
        <DateTimePicker
          display="spinner"
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          minuteInterval={30}
          minimumDate={date}
        />
      )}
    </View>
  );
};
