import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import SideMenuScreen from "./SideMenuScreen";

export default function MainScreen(props: any) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen} />
        <Stack.Screen
          name="SideMenu"
          component={SideMenuScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Screen(props: any) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          paddingBottom: 50,
        }}
      >
        Hola, este componente muestra primero el Stack Navigation.
      </Text>

      {renderButton("Ver Side Menu", () =>
        props.navigation.navigate("SideMenu")
      )}

      {renderButton("Ver Tab Navigation", () => console.log("TAB NAVIGATION"))}
    </View>
  );
}

const renderButton = (text: string, callback: any) => {
  return (
    <TouchableOpacity
      onPress={() => callback()}
      style={{
        marginTop: 10,
        width: "100%",
        backgroundColor: "transparent",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#009923",
      }}
    >
      <Text
        style={{
          width: "100%",
          color: "#009923",
          textAlign: "center",
          paddingTop: 15,
          paddingBottom: 15,
          fontSize: 17,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: 50,
    alignItems: "center",
    textAlign: "center",
  },
});
