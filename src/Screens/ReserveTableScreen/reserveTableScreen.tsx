import React, { useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-elements";
import FAIcon from "react-native-vector-icons/FontAwesome";
import IOIcon from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from "react-native-check-box";
import { reserveTableStyles } from "../../styles/reserveTableStyle";
import { NumberInCircle } from "../../components/NumberInCircle";

export const reserveTableScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [data, setData] = useState("Дата");
  const [time, setTime] = useState("Время");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "двоих", value: "2" },
    { label: "четверых", value: "4" },
    { label: "шестерых", value: "6" },
    { label: "восьмерых", value: "8" },
    { label: "десятерых", value: "10" },
  ]);

  const canContinue = () => {
    if (data === "Дата" || time === "Время" || isChecked === false) {
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
    <View style={reserveTableStyles.mainWrapper}>
      <View style={reserveTableStyles.dataWrapper}>
        <View style={{ paddingRight: 30, paddingTop: 10 }}>
          <NumberInCircle number={1} />
        </View>
        <TouchableOpacity
          onPress={() => showMode("date")}
          style={reserveTableStyles.dataElWrapper}
        >
          <FAIcon name={"calendar"} size={35} color={"black"} />
          <Text style={reserveTableStyles.dataText}>{data}</Text>
        </TouchableOpacity>
      </View>
      <View style={reserveTableStyles.reserveTableWrapper}>
        <View style={{ paddingRight: 20, paddingTop: 4 }}>
          <NumberInCircle number={2} />
        </View>
        <Text style={reserveTableStyles.reserveTableText}>
          Забронировать стол на
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{ width: 150, height: 30 }}
          dropDownDirection="BOTTOM"
          dropDownContainerStyle={{ width: 150 }}
          placeholder="двоих"
        />
      </View>
      <View style={reserveTableStyles.paddingT30}>
        <TouchableOpacity
          onPress={() => showMode("time")}
          style={reserveTableStyles.timeWrapper}
        >
          <View style={{ paddingRight: 20, paddingTop: 10 }}>
            <NumberInCircle number={3} />
          </View>
          <IOIcon name={"time-outline"} size={35} color={"black"} />
          <Text style={reserveTableStyles.timeText}>{time}</Text>
        </TouchableOpacity>
        <View style={reserveTableStyles.checkboxWrapper}>
          <View style={{ paddingRight: 20, paddingBottom: 2 }}>
            <NumberInCircle number={4} />
          </View>
          <Checkbox
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            isChecked={isChecked}
          />
          <Text style={reserveTableStyles.paddingB3}>
            Я согласен оплатить заказ онлайн
          </Text>
        </View>
        <View style={reserveTableStyles.nextBtnWrapper}>
          <TouchableOpacity
            style={
              canContinue()
                ? reserveTableStyles.textBtnWrapper
                : reserveTableStyles.textBtnWrapperDisabled
            }
            onPress={() => navigation.navigate("Confirmation")}
            disabled={canContinue() ? false : true}
          >
            <Text style={reserveTableStyles.textBtn}>Далее</Text>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
