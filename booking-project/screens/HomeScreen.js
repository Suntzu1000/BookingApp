import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Reserva.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
    });
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
