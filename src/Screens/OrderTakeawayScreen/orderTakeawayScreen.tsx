import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-elements";
import FAIcon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";

import { NumberInCircle } from "../../components/NumberInCircle";
import { orderTakeawayScreenStyles } from "../../styles/orderTakeawayScreenStyles";
import { formatDate, formatTime } from "../../utils/dateUtils";

export const orderTakeawayScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [data, setData] = useState("Выберете дату");
  const [time, setTime] = useState();
  const [paidType, setPaidType] = useState();

  useEffect(() => {
    if (route.params?.time) {
      setTime(route.params?.time);
    }
    if (route.params?.paidType) {
      setPaidType(route.params?.paidType);
    }
  }, [route.params]);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    if (mode === "date") {
      let fDate = formatDate(tempDate);

      setData(fDate);
    } else {
      let fTime = formatTime(tempDate);
      setTime(fTime);
    }
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const canContinue = () => {
    if (data === "Выберете дату" || !time || !paidType) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <View style={orderTakeawayScreenStyles.mainWrapper}>
      <View style={orderTakeawayScreenStyles.wrapperWithoutDTPicker}>
        <View style={orderTakeawayScreenStyles.selectDateWrapper}>
          <NumberInCircle number={1} />
          <TouchableOpacity
            onPress={() => showMode("date")}
            style={orderTakeawayScreenStyles.dataElWrapper}
          >
            <Text style={orderTakeawayScreenStyles.dataText}>{data}</Text>
            <FAIcon name={"chevron-right"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={orderTakeawayScreenStyles.selectTimeWrapper}>
          <NumberInCircle number={2} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SelectTime", { orderType: "takeaway" })
            }
            style={orderTakeawayScreenStyles.dataElWrapper}
          >
            <Text style={orderTakeawayScreenStyles.dataText}>
              {time || "Выберите время"}
            </Text>
            <FAIcon name={"chevron-right"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={orderTakeawayScreenStyles.selectPaidTypeWrapper}>
          <NumberInCircle number={3} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PaidType", {
                paidType: paidType,
                orderType: "takeaway",
              })
            }
            style={orderTakeawayScreenStyles.dataElWrapper}
          >
            <Text style={orderTakeawayScreenStyles.dataText}>
              {paidType
                ? `Оплата ${paidType.toLowerCase()}`
                : "Выберите тип оплаты"}
            </Text>
            <FAIcon name={"chevron-right"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={orderTakeawayScreenStyles.buttonWrapper}>
          <Button
            title="Далее"
            titleStyle={orderTakeawayScreenStyles.titleRegisterBtn}
            disabled={canContinue() ? false : true}
            disabledStyle={orderTakeawayScreenStyles.disabledRegisterButton}
            disabledTitleStyle={
              orderTakeawayScreenStyles.disabledTitleRegisterBtn
            }
            buttonStyle={orderTakeawayScreenStyles.registerButton}
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
