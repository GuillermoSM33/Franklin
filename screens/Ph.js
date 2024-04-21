import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import tw from 'twrnc';
import { LineChart } from 'react-native-chart-kit';

const StackScreen = () => {
    const rainData = [
        { valor: '0', mensaje: 'Barco fuera de peligro' },
        { valor: '0', mensaje: 'Barco fuera de peligro' },
        { valor: '250', mensaje: 'Barco en posible peligro' },
        { valor: '0', mensaje: 'Barco fuera de peligro' },
        { valor: '0', mensaje: 'Barco fuera de peligro' },
        { valor: '400', mensaje: 'Barco en posible peligro' },
        { valor: '350', mensaje: 'Barco en posible peligro' },
        { valor: '0', mensaje: 'Barco fuera de peligro' },
        { valor: '100', mensaje: 'Barco en peligro bajo' },
        { valor: '0', mensaje: 'Barco fuera de peligro' },
        { valor: '0', mensaje: 'Barco fuera de peligro' },
    ];

    const [displayedData, setDisplayedData] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (rainData.length >= 2) {
                const newData = rainData.slice(0, 2);
                setDisplayedData(prevData => [...prevData, ...newData]);
                rainData.splice(0, 2);
            }
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <ScrollView contentContainerStyle={[tw`flex-1 justify-center items-center`, { backgroundColor: '#219ebc' }]}>
            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={tw`text-4xl mb-10 font-bold uppercase text-white`}>Datos del sensor de lluvia</Text>
                {displayedData.length > 0 && (
                    <View style={tw`flex-row justify-center w-full mb-6 `}>
                        <View style={tw`bg-white p-4 rounded-lg w-96 mr-6`}>
                            <View style={tw`flex-row justify-between mb-2 `}>
                                <Text style={tw`font-bold text-lg w-2/4 text-center`}>Valor del sensor</Text>
                                <Text style={tw`font-bold text-lg w-2/4 text-center`}>Mensaje del sensor</Text>
                            </View>
                            <FlatList
                                data={displayedData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-black w-2/4 text-center mb-1`}>{item.valor}</Text>
                                        <Text style={tw`text-black w-2/4 text-center mb-1`}>{item.mensaje}</Text>
                                    </View>
                                )}
                            />
                        </View>
                        <View style={tw`w-3/4 mt-10`}>
                            <LineChart
                                data={{
                                    labels: displayedData.map((_, index) => index.toString()),
                                    datasets: [{ data: displayedData.map(item => parseFloat(item.valor)) }]
                                }}
                                width={350}
                                height={200}
                                yAxisLabel="mm"
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
                                    borderRadius: 16
                                }}
                            />
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default StackScreen;
