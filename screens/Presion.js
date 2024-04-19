import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import { LineChart } from 'react-native-chart-kit';

const StackScreen = () => {
    const temperatureHumidityData = [
        { valor: '24.5°', mensaje: 'Temperatura' },
        { valor: '60', mensaje: 'Humedad' },
        { valor: '25°', mensaje: 'Temperatura' },
        { valor: '65', mensaje: 'Humedad' },
        { valor: '24°', mensaje: 'Temperatura' },
        { valor: '62', mensaje: 'Humedad' },
        { valor: '23.5°', mensaje: 'Temperatura' },
        { valor: '63', mensaje: 'Humedad' },
        { valor: '24°', mensaje: 'Temperatura' },
        { valor: '64', mensaje: 'Humedad' },
    ];

    // Filtrar los datos para incluir solo la temperatura
    const temperatureData = temperatureHumidityData.filter(item => item.mensaje === 'Temperatura');
    const temperatureValues = temperatureData.map(item => parseFloat(item.valor));
    const labels = temperatureData.map((item, index) => index.toString());

    return (
        <View style={[tw`flex-1 justify-center items-center`, {backgroundColor: "#219ebc" }]}>
            <Text style={tw`text-4xl mb-6 text-white`}>Temperatura y Humedad</Text>
            <View style={[tw`bg-gray-100 p-4 rounded-lg w-80 mb-10`, {alignItems: 'center'}]}>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`font-bold text-lg mr-2`}>Valor del sensor</Text>
                    <Text style={tw`font-bold text-lg`}>Mensaje del sensor</Text>
                </View>
                <FlatList
                    data={temperatureHumidityData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={tw`flex-row justify-between `}>
                            <Text style={tw`mr-10 text-black`}>{item.valor}</Text>
                            <Text style={tw`ml-14 text-black`}>{item.mensaje}</Text>
                        </View>
                    )}
                />
            </View>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [{ data: temperatureValues }]
                }}
                width={370}
                height={200}
                yAxisLabel="ºC"
                chartConfig={{
                    backgroundColor: "#219ebc",
                    backgroundGradientFrom: "#219ebc",
                    backgroundGradientTo: "#219ebc",
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: "#ffffff"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
}

export default StackScreen;
