import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsScreen() {
  const Tab = createBottomTabNavigator();

  let tabs: any = [
    {
      name: "Screen1",
      component: Screen1,
      label: "News Feed",
      icon: "newspaper-variant",
    },
    {
      name: "Screen2",
      component: Screen2,
      label: "Requests",
      icon: "account-multiple",
    },
    {
      name: "Screen3",
      component: Screen3,
      label: "Messages",
      icon: "message",
    },
    {
      name: "Screen4",
      component: Screen4,
      label: "Notifications",
      icon: "earth",
    },
    {
      name: "Screen5",
      component: Screen5,
      label: "More",
      icon: "menu",
    },
  ];

  return (
    <Tab.Navigator>
      {tabs &&
        tabs.map((item: any, i: number) => {
          return [
            <Tab.Screen
              name={item.name}
              component={item.component}
              options={{
                tabBarLabel: item.label,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={size}
                    color={color}
                  />
                ),
              }}
            />,
          ];
        })}
    </Tab.Navigator>
  );
}

function Screen1() {
  return <Plantilla text="Soy el tab 1" />;
}

function Screen2() {
  return <Plantilla text="Soy el tab 2" />;
}

function Screen3() {
  return <Plantilla text="Soy el tab 3" />;
}

function Screen4() {
  return <Plantilla text="Soy el tab 4" />;
}

function Screen5() {
  return <Plantilla text="Soy el tab 5" />;
}

function Plantilla(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hola, este componente muestra los tabs.{"\n"}
        <Text style={{ fontWeight: "bold" }}>{props.text}</Text>
      </Text>
    </View>
  );
}

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
  text: {
    textAlign: "center",
    paddingBottom: 50,
  },
});
