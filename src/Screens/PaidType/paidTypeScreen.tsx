import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import { RadioButton } from "react-native-paper";
import uuid from "uuid";
import { TouchableOpacity } from "react-native-gesture-handler";

import { paidTypeScreenStyles } from "../../styles/paidTypeScreenStyle";

const data = [
  { name: "Онлайн" },
  { name: "На месте карточкой" },
  { name: "На месте наличными" },
];

export const paidTypeScreen = ({ navigation, route }) => {
  const [checked, setChecked] = useState(
    route.params?.paidType || data[0].name
  );
  return (
    <View style={paidTypeScreenStyles.mainWrapper}>
      {data.map((item) => (
        <View style={paidTypeScreenStyles.radioButtonWrapper} key={uuid.v4()}>
          <TouchableOpacity
            style={paidTypeScreenStyles.touchOpWrapper}
            onPress={() => setChecked(item.name)}
          >
            <RadioButton
              value={item.name}
              status={checked === item.name ? "checked" : "unchecked"}
              color={"black"}
            />
            <Text style={paidTypeScreenStyles.textItem}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={paidTypeScreenStyles.buttonWrapper}>
        <Button
          title="Далее"
          titleStyle={paidTypeScreenStyles.titleRegisterBtn}
          buttonStyle={paidTypeScreenStyles.registerButton}
          onPress={() => {
            const obj = {
              takeaway: () =>
                navigation.navigate("OrderTakeaway", { paidType: checked }),
              delivery: () =>
                navigation.navigate("OrderDelivery", { paidType: checked }),
              default: () => {},
            };
            const navFunc = obj[route.params?.orderType] || obj.default;
            navFunc();
            // navigation.navigate("OrderTakeaway", { paidType: checked });
          }}
        />
      </View>
    </View>
  );
};
