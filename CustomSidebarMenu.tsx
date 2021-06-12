import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomSidebarMenu = (props: any) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <MaterialCommunityIcons size={30} name={"cloud-circle"} />
        <Text style={styles.name}>Sandra Adams</Text>
        <Text style={styles.email}>
          sandra_a88@gmail.com{" "}
          <MaterialCommunityIcons
            size={20}
            name={"menu-down"}
            style={{ textAlign: "right" }}
          />
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: "#EBEBEB",
          borderBottomWidth: 1,
        }}
      />
      <DrawerContentScrollView {...props}>
        {<DrawerItemList {...props} />}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    margin: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  email: {
    width: "100%",
    color: "gray",
  },
});

export default CustomSidebarMenu;
