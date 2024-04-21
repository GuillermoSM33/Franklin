import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import { useMediaQuery } from 'react-responsive'; // Importa useMediaQuery desde react-responsive
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el ícono que prefieras

const Menu = () => {
    const navigation = useNavigation();
    const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // Define si la pantalla es pequeña (para dispositivos móviles)

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
        <View style={[tw`flex-1 flex-row`, { backgroundColor: "#219ebc" }]}>
            {isSmallScreen ? ( // Renderiza para pantallas pequeñas
                <View style={[tw`flex-1 justify-center items-center`, { padding: 20 }]}>
                    <Text style={tw`text-4xl font-bold text-black text-center mb-6`}>Menú</Text>
                    <TouchableOpacity onPress={irANosotros} style={tw`flex-row items-center bg-blue-100 p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                        <Icon name="info-circle" size={20} color="black" />
                        <Text style={tw`text-lg ml-2 font-bold`}>Conocer Más</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={irAPantalla2} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                        <Icon name="tachometer" size={20} color="black" />
                        <Text style={tw`text-lg ml-2 font-bold`}>Temperatura y Humedad del ambiente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={irAPantalla3} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                        <Icon name="tint" size={20} color="black" />
                        <Text style={tw`text-lg ml-2 font-bold`}>Sensor de lluvia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={irAPantalla4} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                        <Icon name="thermometer" size={20} color="black" />
                        <Text style={tw`text-lg ml-2 font-bold`}>Temperatura del agua</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={irAPantalla5} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                        <Icon name="map-marker" size={20} color="black" />
                        <Text style={tw`text-lg ml-2 font-bold`}>Distancia con objetos</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <React.Fragment>
                    <View style={[tw`flex-1`, { position: 'relative', justifyContent: 'center', alignItems: 'center' }]}>
                        <Image
                            source={{ uri: "https://cdn.pixabay.com/animation/2023/06/26/21/48/21-48-10-87_512.gif" }}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                            source={require('../images/fondo02.png')}
                            style={{ position: 'absolute', width: "70%", height: "50%" }}
                        />
                    </View>

                    <View style={[tw`flex-1 justify-center items-center`, { padding: 20 }]}>
                        <Text style={tw`text-4xl font-bold text-black text-center mb-6`}>Menú</Text>
                        <TouchableOpacity onPress={irANosotros} style={tw`flex-row items-center bg-blue-100 p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                            <Icon name="info-circle" size={20} color="black" />
                            <Text style={tw`text-lg ml-2 font-bold`}>Conocer Más</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={irAPantalla2} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                            <Icon name="tachometer" size={20} color="black" />
                            <Text style={tw`text-lg ml-2 font-bold`}>Temperatura y Humedad del ambiente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={irAPantalla3} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                            <Icon name="tint" size={20} color="black" />
                            <Text style={tw`text-lg ml-2 font-bold`}>Sensor de lluvia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={irAPantalla4} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                            <Icon name="thermometer" size={20} color="black" />
                            <Text style={tw`text-lg ml-2 font-bold`}>Temperatura del agua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={irAPantalla5} style={tw`flex-row items-center bg-blue-100  p-4 rounded-lg w-72 mb-2 border-2 border-blue-300`}>
                            <Icon name="map-marker" size={20} color="black" />
                            <Text style={tw`text-lg ml-2 font-bold`}>Distancia con objetos</Text>
                        </TouchableOpacity>
                    </View>
                </React.Fragment>
            )}
        </View>
    );
}

export default Menu;
