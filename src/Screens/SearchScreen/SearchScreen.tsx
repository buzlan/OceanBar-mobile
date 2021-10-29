import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { MenuService } from "../../services/http/MenuService";

export const SearchScreen = (props) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await MenuService.getMenuDetails({});
        // setFilteredDataSource(response.data.data.dishes);
        setMasterDataSource(response.data.data.dishes);
      } catch (error) {
        console.log("errrrr", error);
      }
    })();
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const loweredCaseValue = text.toLowerCase();
      const newData = masterDataSource.filter((item) =>
        item.name.toLowerCase().includes(loweredCaseValue)
      );
      setFilteredDataSource(newData);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource([]);
    }
    setSearch(text);
  };

  const ItemView = ({ item, index }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {index + 1}
        {"."}
        {item.name.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    props.navigation.navigate("DishScreen", { dishDetails: item });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Searchbar
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder="Type Here..."
          value={search}
          icon="arrow-left-thick"
          onIconPress={() => props.navigation.goBack()}
        />

        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
});
function setKeyboardStatus(arg0: string) {
  throw new Error("Function not implemented.");
}
