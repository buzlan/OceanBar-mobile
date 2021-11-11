import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import Checkbox from "react-native-check-box";
import { stylesModal } from "../styles/stylesModal";

const convertIngredientsToChackboxes = (item) => {
  const convertToCheckbox = (ing, isChecked) => ({
    title: ing,
    checked: isChecked,
  });

  let excludedIngsCheckboxes = [];

  if (item.dish) {
    const selectedIngredients = item.ingredients.split(";");
    const allIngredients = item.dish.ingredients.split(";");
    const excludedIngredients = allIngredients.filter(
      (ingredient) => !selectedIngredients.includes(ingredient)
    );

    const includedIngsCheckboxes = selectedIngredients.map((ing) =>
      convertToCheckbox(ing, true)
    );

    if (excludedIngredients.length > 0) {
      excludedIngsCheckboxes = excludedIngredients.map((ing) =>
        convertToCheckbox(ing, false)
      );
    }
    return [...includedIngsCheckboxes, ...excludedIngsCheckboxes];
  }
  return item.ingredients.split(";").map((ing) => convertToCheckbox(ing, true));
};

export const ModalComponent = ({
  modalVisible,
  item,
  setModalVisible,
  sendNewData,
}) => {
  const [checkboxesState, setCheckboxesState] = useState(() =>
    convertIngredientsToChackboxes(item)
  );

  const [inclued, setIncluded] = useState([]);
  const [excluded, setExcluded] = useState([]);

  const updateCheckBoxes = (prev, index) => {
    const copiedState = [...prev];
    const updated = {
      ...copiedState[index],
      checked: !copiedState[index].checked,
    };
    copiedState.splice(index, 1, updated);
    return copiedState;
  };

  useEffect(() => {
    setIncluded(
      checkboxesState
        .filter((element) => {
          return element.checked === true;
        })
        .map((el) => el.title)
    );
    setExcluded(
      checkboxesState
        .filter((element) => {
          return element.checked === false;
        })
        .map((el) => el.title)
    );
  }, [checkboxesState]);

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={stylesModal.mainContainer}>
        <View style={stylesModal.itemNameWrapper}>
          <Text style={stylesModal.itemName}>{item.name}</Text>
        </View>
        <View style={stylesModal.compositionWrapper}>
          <Text style={stylesModal.compositionTitle}>Состав</Text>
        </View>
        <View style={stylesModal.mainItemsWrapper}>
          <View style={stylesModal.itemsContainer}>
            {checkboxesState.map((ing, index) => {
              return (
                <TouchableOpacity
                  style={stylesModal.touchableOpacity}
                  key={index}
                  onPress={() => {
                    setCheckboxesState((prev) => updateCheckBoxes(prev, index));
                  }}
                >
                  <Checkbox
                    onClick={() => {
                      setCheckboxesState((prev) =>
                        updateCheckBoxes(prev, index)
                      );
                    }}
                    isChecked={ing.checked}
                  />
                  <Text style={stylesModal.ingredientsText}>{ing.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={stylesModal.buttonWrapper}>
          <Button
            disabled={false}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            title="Отмена"
            titleStyle={stylesModal.titleButton}
            buttonStyle={stylesModal.buttonStyle}
          />
          <Button
            disabled={inclued.length >= 2 ? false : true}
            onPress={() => {
              setModalVisible(!modalVisible);
              const included = inclued.join(";");
              sendNewData({ id: item.id, ingredients: included });
            }}
            title="Готово"
            titleStyle={stylesModal.titleButton}
            buttonStyle={stylesModal.buttonStyle}
          />
        </View>
      </View>
    </Modal>
  );
};
