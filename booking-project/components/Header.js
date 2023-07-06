import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 6,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={{ marginLeft: 8, color: "white" }}>Quartos</Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="airplane-outline" size={26} color="white" />
        <Text style={{ marginLeft: 8, color: "white" }}>Voo</Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="car" size={26} color="white" />
        <Text style={{ marginLeft: 8, color: "white" }}>Aleguel de Carros</Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Fontisto name="uber" size={24} color="white" />
        <Text style={{ marginLeft: 8, color: "white" }}>Taxi/Uber</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
