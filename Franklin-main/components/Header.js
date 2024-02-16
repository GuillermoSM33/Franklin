// src/components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.headerText}>HOME</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: '#0073DE', // Puedes cambiar el color de fondo según tus necesidades
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    logo: {
        width: 50, // Ajusta el ancho según el tamaño de tu logotipo
        height: 50, // Ajusta la altura según el tamaño de tu logotipo
    }
};

export default Header;