import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import { LineChart } from 'react-native-chart-kit';

const StackScreen = () => {
    const rainData = [
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '1023', mensaje: 'Sensor muy mojado' },
        { valor: '950', mensaje: 'Sensor mojado' },
        { valor: '900', mensaje: 'Sensor mojado' },
    ];

    const rainValues = rainData.map(item => parseFloat(item.valor));
    const labels = rainData.map((item, index) => index.toString());

    return (
        <View style={[tw`flex-1 justify-center items-center`, { backgroundColor: '#219ebc' }]}>
            <Text style={tw`text-4xl mb-6 text-white`}>Datos del sensor de lluvia</Text>
            <View style={[tw`bg-gray-100 p-4 rounded-lg w-80`, { alignItems: 'center' }]}>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`font-bold text-lg mr-10`}>Valor del sensor</Text>
                    <Text style={tw`font-bold text-lg`}>Mensaje del sensor</Text>
                </View>
                <FlatList
                    data={rainData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={tw`flex-row justify-between `}>
                            <Text style={tw`mr-10 text-black`}>{item.valor}</Text>
                            <Text style={tw`ml-16 text-black`}>{item.mensaje}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={tw`mt-6`}>
                <LineChart
                    data={{
                        labels: labels,
                        datasets: [{ data: rainValues }]
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
    );
};

export default StackScreen;
