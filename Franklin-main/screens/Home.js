import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

    // Creamos la constante de navegación

    const Navigation = useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Menú
            </Text>
            <TouchableOpacity
            onPress={() => Navigation.navigate("Nosotros")}
                style={{
                    fontSize: 25,
                    backgroundColor: "purple",
                    padding: 30,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 30,
                }}><Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white",
                }}
                >Conocer Más</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;