// Menu.js o tu componente con el botón
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native"; // Mantén esta importación para la navegación
import { useColorScheme } from '../components/ColorSchemeContext'; // Asegúrate de importar correctamente tu contexto
import { Avatar, Button, Card } from 'react-native-paper';


const Menu = () => {
    const navigation = useNavigation(); // Usa useNavigation si necesitas navegar
    const { colorScheme, toggleColorScheme } = useColorScheme(); // Usa el hook para acceder al esquema de color y la función de cambio
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" /> //Cnstante para las cartas

    return (
        <View style={tw`flex h-full items-center justify-center ${colorScheme === 'dark' ? 'bg-gray-600' : 'bg-white'}`}>
            <Text style={tw`${colorScheme === 'dark' ? 'text-white' : 'text-gray-800'} text-lg font-bold`}>Herramientas</Text>
            <TouchableOpacity
                onPress={toggleColorScheme} // Cambia el esquema de color globalmente
                style={tw`bg-cyan-600 py-3 px-6 rounded mt-10`}>
                <Text style={tw`text-white font-bold`}>Cambiar Modo</Text>
            </TouchableOpacity>
            <Card style={tw`${colorScheme === 'dark' ? 'text-white' && 'bg-white': 'text-gray-800' && 'bg-gray-300'} text-xl font-bold my-3 text-justify`}>
                <Card.Title title="Mi perfil" subtitle="¿Cómo me ven?" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Bienvenid@: Alisson</Text>
                    <Text variant="bodyMedium">Usuaria regular de NeptunExplorer</Text>
                </Card.Content>
                <Card.Cover source={require('../assets/ALI.jpeg')} style={{
                    fontSize: 25,
                    backgroundColor: "purple",
                    padding: 15,
                    marginTop: "5%",
                    width: "60%",
                    alignSelf: "center",
                    borderRadius: 30,
                }} />
                <Card.Actions>
                    <Button style={tw`mr-8`}>Cancel</Button>
                    <Button style={tw`mr-8`}>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

export default Menu;
