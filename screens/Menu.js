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
        navigation.navigate("Presión del Agua");
    }

    const irAPantalla3 = () => {
        navigation.navigate("Ph")
    }

    const irAPantalla4 = () => {
        navigation.navigate("Temperatura")
    }

    const irAPantalla5 = () => {
        // Agrega la navegación a la pantalla 5 aquí
    }

    return (
        <View style={[tw`flex-1 justify-center items-center `, { backgroundColor: "#219ebc" }]}>
            <Image
                source={require('../images/fondo02.png')}
                style={{ width: 400, height: 200, alignSelf: 'center' }}
            />
            <Text style={tw`text-4xl mb-6 text-white`}>Menú</Text>
            <TouchableOpacity onPress={irANosotros} style={tw`flex-row items-center bg-gray-100 p-4 rounded-lg w-72 mb-2`}>
                <Icon name="info-circle" size={20} color="black" />
                <Text style={tw`text-lg ml-2`}>Conocer Más</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={irAPantalla2} style={tw`flex-row items-center bg-gray-100 p-4 rounded-lg w-72 mb-2`}>
                <Icon name="tachometer" size={20} color="black" />
                <Text style={tw`text-lg ml-2`}>Obtener Presión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={irAPantalla3} style={tw`flex-row items-center bg-gray-100 p-4 rounded-lg w-72 mb-2`}>
                <Icon name="flask" size={20} color="black" />
                <Text style={tw`text-lg ml-2`}>Obtener pH</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={irAPantalla4} style={tw`flex-row items-center bg-gray-100 p-4 rounded-lg w-72 mb-2`}>
                <Icon name="thermometer" size={20} color="black" />
                <Text style={tw`text-lg ml-2`}>Obtener Temperatura</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={irAPantalla5} style={tw`flex-row items-center bg-gray-100 p-4 rounded-lg w-72 mb-2`}>
                <Icon name="user" size={20} color="black" />
                <Text style={tw`text-lg ml-2`}>Pantalla 5</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Menu;
