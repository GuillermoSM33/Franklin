import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el ícono que prefieras

const Menu = () => {
    const navigation = useNavigation();

    const irANosotros = () => {
        navigation.navigate("Nosotros");
    }

    const irAPantalla2 = () => {
        navigation.navigate("Temperatura y Humedad");
    }

    const irAPantalla3 = () => {
        navigation.navigate("Lluvia")
    }

    const irAPantalla4 = () => {
        navigation.navigate("Temperatura")
    }

    const irAPantalla5 = () => {
        navigation.navigate("Ultrasonico")
    }

    return (
        <View style={[tw`flex-1 justify-center items-center `, { backgroundColor: "#219ebc" }]}>
            <Image
                source={{ uri: "https://cdn.pixabay.com/animation/2023/06/26/21/48/21-48-10-87_512.gif" }}
                style={{ width: "100%", height: "100%", position: 'absolute', top: 0, left: 0}}
            />
            <Image
                source={require('../images/fondo02.png')}
                style={{ width: 400, height: 200, alignSelf: 'center', position: 'absolute', top: 0 }}
            />
            <View style={tw`mt-36`}>
                <Text style={tw`text-4xl font-bold text-black text-center mb-6`}>Menú</Text>
                <TouchableOpacity onPress={irANosotros} style={tw`flex-row items-center bg-blue-100 p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                    <Icon name="info-circle" size={20} color="black" />
                    <Text style={tw`text-lg ml-2 font-bold`}>Conocer Más</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={irAPantalla2} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                    <Icon name="tachometer" size={20} color="black" />
                    <Text style={tw`text-lg ml-2 font-bold`}>Temperatura y Humedad</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={irAPantalla3} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                    <Icon name="tint" size={20} color="black" />
                    <Text style={tw`text-lg ml-2 font-bold`}>Sensor de lluvia</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={irAPantalla4} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                    <Icon name="thermometer" size={20} color="black" />
                    <Text style={tw`text-lg ml-2 font-bold`}>Obtener Temperatura</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={irAPantalla5} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                    <Icon name="map-marker" size={20} color="black" />
                    <Text style={tw`text-lg ml-2 font-bold`}>Sensor ultrasonico</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Menu;
