import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-elements";
import FAIcon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";

import { NumberInCircle } from "../../components/NumberInCircle";
import { formatDate, formatTime } from "../../utils/dateUtils";
import { orderDeliveryScreenStyles } from "../../styles/orderDeliveryScreenStyles";

export const orderDeliveryScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [data, setData] = useState("Выберете дату");
  const [time, setTime] = useState();
  const [paidType, setPaidType] = useState();
  const [adress, setAdress] = useState();
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
  useEffect(() => {
    if (route.params?.time) {
      setTime(route.params?.time);
    }
    if (route.params?.paidType) {
      setPaidType(route.params?.paidType);
    }
    if (route.params?.adress) {
      setAdress(route.params?.adress);
    }
  }, [route.params]);
  return (
    <View style={orderDeliveryScreenStyles.mainWrapper}>
      <ScrollView>
        <View style={orderDeliveryScreenStyles.wrapperWithoutDTPicker}>
          <View style={orderDeliveryScreenStyles.selectDateWrapper}>
            <NumberInCircle number={1} />
            <TouchableOpacity
              onPress={() => showMode("date")}
              style={orderDeliveryScreenStyles.dataElWrapper}
            >
              <Text style={orderDeliveryScreenStyles.dataText}>{data}</Text>
              <FAIcon name={"chevron-right"} size={30} color={"black"} />
            </TouchableOpacity>
          </View>
          <View style={orderDeliveryScreenStyles.selectTimeWrapper}>
            <NumberInCircle number={2} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SelectTime", { orderType: "delivery" })
              }
              style={orderDeliveryScreenStyles.dataElWrapper}
            >
              <Text style={orderDeliveryScreenStyles.dataText}>
                {time || "Выберите время"}
              </Text>
              <FAIcon name={"chevron-right"} size={30} color={"black"} />
            </TouchableOpacity>
          </View>

          <View style={orderDeliveryScreenStyles.selectPaidTypeWrapper}>
            <NumberInCircle number={3} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AdressDelivery", { adress: adress })
              }
              style={orderDeliveryScreenStyles.dataElWrapper}
            >
              <Text style={orderDeliveryScreenStyles.dataText}>
                {adress
                  ? ` Адрес: ${adress.street}, дом:${adress.house}, корпус: ${adress.corpus}, квартира: ${adress.flat} `
                  : "Адрес доставки"}
              </Text>
              <FAIcon name={"chevron-right"} size={30} color={"black"} />
            </TouchableOpacity>
          </View>

          <View style={orderDeliveryScreenStyles.selectPaidTypeWrapper}>
            <NumberInCircle number={4} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PaidType", {
                  paidType: paidType,
                  orderType: "delivery",
                })
              }
              style={orderDeliveryScreenStyles.dataElWrapper}
            >
              <Text style={orderDeliveryScreenStyles.dataText}>
                {paidType
                  ? `Оплата ${paidType.toLowerCase()}`
                  : "Выберите тип оплаты"}
              </Text>
              <FAIcon name={"chevron-right"} size={30} color={"black"} />
            </TouchableOpacity>
          </View>
          <View style={orderDeliveryScreenStyles.buttonWrapper}>
            <Button
              title="Далее"
              titleStyle={orderDeliveryScreenStyles.titleRegisterBtn}
              disabled={canContinue() ? false : true}
              disabledStyle={orderDeliveryScreenStyles.disabledRegisterButton}
              disabledTitleStyle={
                orderDeliveryScreenStyles.disabledTitleRegisterBtn
              }
              buttonStyle={orderDeliveryScreenStyles.registerButton}
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
      </ScrollView>
    </View>
  );
};
