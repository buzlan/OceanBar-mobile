import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/routers";
import { Button } from "react-native-elements";

import { getMenuButtons } from "../mocks/getMenuBtns";
import { stylesDishes } from "../styles/dishesStyle";

interface Props extends BottomTabScreenProps<ParamListBase> {}

export const DishesScreen: React.FC<Props> = ({ navigation }) => {
  const [menuButtons, setMenuButtons] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getMenuButtons();
      setMenuButtons(data as any[]);
    })();
  }, []);

  return (
    <View style={stylesDishes.container}>
      {menuButtons.map((button) => {
        return (
          <Button
            type="clear"
            key={button.id}
            title={button.title}
            buttonStyle={stylesDishes.buttons}
            onPress={() => {
              navigation.navigate("MenuDetailsScreen", {
                menuName: button.title,
                title: button.title,
              });
            }}
          />
        );
      })}
    </View>
  );
};
