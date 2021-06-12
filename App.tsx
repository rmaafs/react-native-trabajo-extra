import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "./CustomSidebarMenu";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function firstScreenStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={HomeScreen}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={props.navigation} />
          ),
          headerStyle: {
            backgroundColor: "#6101ED", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

const NavigationDrawerStructure = (props: any) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

let menus: any = [
  {
    name: "Page1",
    component: firstScreenStack,
    icon: "folder",
    label: "First page",
  },
  {
    name: "Page2",
    component: firstScreenStack,
    icon: "account-multiple",
    label: "Shared with me",
  },
  {
    name: "Page3",
    component: firstScreenStack,
    icon: "star",
    label: "Starred",
  },
  {
    name: "Page4",
    component: firstScreenStack,
    icon: "clock-outline",
    label: "Recent",
  },
  {
    name: "Page5",
    component: firstScreenStack,
    icon: "check-underline-circle",
    label: "Offline",
  },
  {
    name: "Page6",
    component: firstScreenStack,
    icon: "upload",
    label: "Uploads",
  },
  {
    name: "Page7",
    component: firstScreenStack,
    icon: "folder",
    label: "Backups",
  },
  {
    name: "Page8",
    component: firstScreenStack,
    icon: "trash-can",
    label: "Trash",
  },
  {
    name: "Page9",
    component: firstScreenStack,
    icon: "cog",
    label: "Settings & account",
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#6101ED",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props: any) => <CustomSidebarMenu {...props} />}
      >
        {menus &&
          menus.map((item: any, i: number) => {
            return [
              <Drawer.Screen
                key={i}
                name={item.name}
                component={item.component}
                options={{
                  drawerIcon: (config: any) => (
                    <MaterialCommunityIcons
                      size={30}
                      name={item.icon}
                      style={{ color: config.color || "#757575" }}
                    />
                  ),
                  drawerLabel: item.label,
                  headerPressColorAndroid: "yellow",
                }}
              />,
            ];
          })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
});
