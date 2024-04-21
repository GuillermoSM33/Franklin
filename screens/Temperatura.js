import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import tw from 'twrnc';
import { LineChart } from 'react-native-chart-kit';

const Temperatura = () => {
    const temperatureData = [
        { valor: '19', mensaje: 'Temperatura fria' },
        { valor: '21', mensaje: 'Temperatura normal' },
        { valor: '19', mensaje: 'Temperatura fria' },
        { valor: '25.8', mensaje: 'Temperatura normal' },
        { valor: '23.7', mensaje: 'Temperatura normal' },
        { valor: '24.9', mensaje: 'Temperatura normal' },
        { valor: '23.2', mensaje: 'Temperatura normal' },
        { valor: '30', mensaje: 'Temperatura calurosa' },
        { valor: '30', mensaje: 'Temperatura calurosa' },
        { valor: '31', mensaje: 'Temperatura calurosa  ' },
        { valor: '19', mensaje: 'Temperatura fria' },
        { valor: '19', mensaje: 'Temperatura fria' }
    ];

    const [displayedData, setDisplayedData] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (temperatureData.length >= 2) {
                const newData = temperatureData.slice(0, 2);
                setDisplayedData(prevData => [...prevData, ...newData]);
                temperatureData.splice(0, 2);
            }
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const temperatureValues = displayedData.map(item => parseFloat(item.valor));
    const labels = displayedData.map((_, index) => index.toString());

    return (
        <ScrollView contentContainerStyle={[tw`flex-1 justify-center items-center`, { backgroundColor: '#219ebc' }]}>
            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={tw`text-4xl mb-10 font-bold uppercase text-white`}>Datos de Temperatura</Text>
                <View style={tw`flex-row justify-center w-full mb-6 `}>
                    <View style={tw`bg-gray-100 p-4 rounded-lg w-96 mr-6`}>
                        <View style={tw`flex-row justify-between mb-2 `}>
                            <Text style={tw`font-bold text-lg w-2/4 text-center`}>Valor del sensor</Text>
                            <Text style={tw`font-bold text-lg w-2/4 text-center`}>Mensaje del sensor</Text>
                        </View>
                        {displayedData.length > 0 && (
                            <FlatList
                                data={displayedData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={tw`flex-row justify-between `}>
                                        <Text style={tw`text-black w-2/4 text-center mb-1`}>{item.valor}°</Text>
                                        <Text style={tw`text-black w-2/4 text-center mb-1`}>{item.mensaje}</Text>
                                    </View>
                                )}
                                stickyHeaderIndices={[0]} // Aquí se fija el encabezado
                            />
                        )}
                    </View>
                    {displayedData.length > 0 && (
                        <View style={tw`w-1/2 mt-10`}>
                            <LineChart
                                data={{
                                    labels: labels,
                                    datasets: [{ data: temperatureValues }]
                                }}
                                width={300}
                                height={200}
                                yAxisLabel="C°"
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
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

export default Temperatura;
