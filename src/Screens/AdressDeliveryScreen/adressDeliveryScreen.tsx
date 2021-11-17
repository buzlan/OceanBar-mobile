import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import uuid from "uuid";
import Checkbox from "react-native-check-box";
import { Button } from "react-native-elements";

import { ApiDelivery } from "../../services/http/apiDelivery";
import { stylesRegForm } from "../../styles/regFormStyle";
import { adressValidationSchema } from "./adressValidationSchema";
import { adressDeliveryScreenStyles } from "../../styles/adressDeliveryScreenStyles";

export const adressDeliveryScreen = ({ navigation }) => {
  const isStreetSetted = useRef(false);
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const getData = async () => {
    const response = await ApiDelivery.getDelivery(searchQuery);
    const filteredResponse = response.data.suggestions.map(
      (item) => item.value
    );
    setData(filteredResponse);
  };
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getData();
  }, [searchQuery]);
  console.log(isStreetSetted.current);
  return (
    <SafeAreaView style={adressDeliveryScreenStyles.mainSafeAreaViewWrapper}>
      <ScrollView>
        <View style={adressDeliveryScreenStyles.adressDeliveryTextWrapper}>
          <Text style={adressDeliveryScreenStyles.adressDeliveryTextStyle}>
            Введите адрес доставки :
          </Text>
        </View>
        <View style={adressDeliveryScreenStyles.cityNameWrapper}>
          <Text style={adressDeliveryScreenStyles.cityNameStyle}>г.Минск</Text>
        </View>
        <View style={adressDeliveryScreenStyles.formikWrapper}>
          <Formik
            initialValues={{ street: "", house: "", corpus: "", flat: "" }}
            validateOnMount={true}
            validationSchema={adressValidationSchema}
            onSubmit={() => {}}
          >
            {({
              handleChange,
              handleBlur,
              setFieldValue,
              values,
              touched,
              errors,
              isValid,
            }) => (
              <>
                <View>
                  <View>
                    <TextInput
                      style={adressDeliveryScreenStyles.textInputStyle}
                      onChangeText={(textV) => {
                        isStreetSetted.current = false;
                        setFieldValue("street", textV);
                        setSearchQuery(textV);
                        console.log(textV);
                      }}
                      onBlur={handleBlur("street")}
                      value={values.street}
                      placeholder="Улица"
                    />
                    {data.length > 0 ? (
                      <View style={{ alignItems: "center" }}>
                        <ScrollView
                          style={
                            adressDeliveryScreenStyles.searchItemsScrollWrapper
                          }
                        >
                          {data.map((item) => (
                            <TouchableOpacity
                              style={
                                adressDeliveryScreenStyles.itemSearchWrapper
                              }
                              key={uuid.v4()}
                              onPress={() => {
                                isStreetSetted.current = true;
                                setFieldValue("street", item);
                                setData([]);
                              }}
                            >
                              <Text
                                style={adressDeliveryScreenStyles.itemTextStyle}
                              >
                                {item}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </ScrollView>
                      </View>
                    ) : null}
                  </View>
                  <View>
                    <TextInput
                      style={adressDeliveryScreenStyles.textInputStyle}
                      onChangeText={(textV) => {
                        setFieldValue("house", textV);
                        console.log(textV);
                      }}
                      onBlur={handleBlur("house")}
                      value={values.house}
                      placeholder="Дом"
                    />
                    {errors.house && touched?.house && (
                      <Text style={stylesRegForm.errors}>{errors.house}</Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      style={adressDeliveryScreenStyles.textInputStyle}
                      onChangeText={handleChange("corpus")}
                      onBlur={handleBlur("corpus")}
                      value={values.corpus}
                      placeholder="Корпус"
                    />
                    {errors.corpus && touched?.corpus && (
                      <Text style={stylesRegForm.errors}>{errors.corpus}</Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      style={adressDeliveryScreenStyles.textInputStyle}
                      onChangeText={handleChange("flat")}
                      onBlur={handleBlur("flat")}
                      value={values.flat}
                      placeholder="Квартира"
                    />
                    {errors.flat && touched?.flat && (
                      <Text style={stylesRegForm.errors}>{errors.flat}</Text>
                    )}
                  </View>
                </View>
                <View style={adressDeliveryScreenStyles.checkboxWrapper}>
                  <Checkbox
                    onClick={() => {
                      setIsChecked(!isChecked);
                    }}
                    isChecked={isChecked}
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                  />
                  <Text style={adressDeliveryScreenStyles.textCheckboxStyle}>
                    Использовать мой адрес доставки
                  </Text>
                </View>
                <View style={adressDeliveryScreenStyles.buttonWrapper}>
                  <Button
                    title="Далее"
                    titleStyle={adressDeliveryScreenStyles.titleRegisterBtn}
                    buttonStyle={adressDeliveryScreenStyles.registerButton}
                    disabled={!(isStreetSetted.current && isValid)}
                    onPress={() => {
                      navigation.navigate("Confirmation");
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
