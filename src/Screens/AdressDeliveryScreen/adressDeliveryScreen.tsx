import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
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
import { connect } from "react-redux";

const adressDeliveryScreen = ({ navigation, route, userInfo }) => {
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

  const showAlert = () => {
    Alert.alert("Упс....", "У вас нет адреса доставки!", [
      {
        text: "ОК",
        style: "cancel",
      },
    ]);
    setIsChecked((prev) => !prev);
  };
  console.log("USERINFOFROMADRESS", userInfo);

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
            initialValues={
              route.params?.adress || {
                street: "",
                house: "",
                corpus: "",
                flat: "",
              }
            }
            validationSchema={adressValidationSchema}
            validateOnMount={true}
            onSubmit={() => {}}
          >
            {({
              handleChange,
              handleBlur,
              setFieldValue,
              setValues,
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
                        setFieldValue("street", textV);
                        setSearchQuery(textV);
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
                      setIsChecked((prev) => !prev);
                      userInfo.street === ""
                        ? showAlert()
                        : setValues({
                            street: userInfo.street,
                            house: userInfo.homeNumber,
                            corpus: userInfo.homePart,
                            flat: userInfo.flat,
                          });
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
                    title="Готово"
                    titleStyle={adressDeliveryScreenStyles.titleRegisterBtn}
                    buttonStyle={adressDeliveryScreenStyles.registerButton}
                    disabledStyle={
                      adressDeliveryScreenStyles.disabledRegisterButton
                    }
                    disabledTitleStyle={
                      adressDeliveryScreenStyles.disabledTitleRegisterBtn
                    }
                    disabled={!isValid}
                    onPress={() => {
                      setValues(values);
                      navigation.navigate("OrderDelivery", {
                        adress: values,
                      });
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
const mapStateToProps = (state) => {
  return {
    userInfo: state.UserData,
  };
};

export default connect(mapStateToProps, null)(adressDeliveryScreen);
