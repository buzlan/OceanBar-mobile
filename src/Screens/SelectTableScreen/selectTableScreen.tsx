import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button, Text } from "react-native-elements";

import { selectTableStyles } from "../../styles/selectTableScreenStyles";

const PERSONS_COUNT = [
  { label: "двоих", value: "двоих" },
  { label: "четверых", value: "четверых" },
  { label: "шестерых", value: "шестерых" },
  { label: "восьмерых", value: "восьмерых" },
  { label: "десятерых", value: "десятерых" },
];

export const selectTableScreen = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(route.params?.table || "двоих");
  return (
    <View style={selectTableStyles.selectTableWrapper}>
      <Text style={selectTableStyles.selectTableText}>
        Забронировать стол на
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={PERSONS_COUNT}
        setOpen={setOpen}
        setValue={setValue}
        style={selectTableStyles.dropDownPickerStyle}
        textStyle={selectTableStyles.dropDownTextStyle}
        labelStyle={selectTableStyles.dropDownLabelStyle}
        dropDownDirection="BOTTOM"
        dropDownContainerStyle={selectTableStyles.dropDownContainerStyle}
        placeholder="двоих"
        placeholderStyle={selectTableStyles.dropDownPlaceholderStyle}
      />
      <View style={selectTableStyles.buttonWrapper}>
        <Button
          title="Далее"
          titleStyle={selectTableStyles.titleRegisterBtn}
          buttonStyle={selectTableStyles.registerButton}
          onPress={() => navigation.navigate("ReserveTable", { value: value })}
        />
      </View>
    </View>
  );
};
