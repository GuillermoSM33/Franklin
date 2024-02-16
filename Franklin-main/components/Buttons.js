import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el conjunto de iconos deseado
import tw from 'twrnc';

const Buttons = ({ navigation }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page1')}>
                <View style={tw.style("px-30 flex-row items-center")}>
                    <Icon style={tw.style("pr-2")} name="thermometer-half" size={30} color="red" />
                    <Text style={styles.buttonText}>Temperatura</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page2')}>
                <View style={tw.style("px-32 flex-row items-center")}>
                    <Icon style={tw.style("pr-2")} name="tint" size={30} color="blue" />
                    <Text style={styles.buttonText}>Salinidad</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page3')}>
                <View style={tw.style("px-30 flex-row items-center")}>
                    <Icon style={tw.style("pr-2")} name="flask" size={30} color="green" />
                    <Text style={styles.buttonText}>Turbidez</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page4')}>
                <View style={tw.style("px-32.5 flex-row items-center")}>
                    <Icon style={tw.style("pr-2")} name="tint" size={30} color="purple" />
                    <Text style={styles.buttonText}>Presión</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page5')}>
                <View style={tw.style("px-36.5 flex-row items-center")}>
                    <Icon style={tw.style("pr-2")} name="tint" size={30} color="orange" />
                    <Text style={styles.buttonText}>PH</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start', // Alinear los botones horizontalmente
    },
    button: {
        borderWidth: 1, // Añadir un borde
        borderColor: 'black', // Color del borde
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10, // Espacio entre el icono y el texto
        textAlignVertical: 'center', // Alinear el texto verticalmente con el icono
    }
});

export default Buttons;