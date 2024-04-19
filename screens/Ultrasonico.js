import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import { LineChart } from 'react-native-chart-kit';

const StackScreen = () => {
    const ultrasonicData = [
        { valor: '10', mensaje: 'Objeto demasiado cerca' },
        { valor: '30', mensaje: 'Objeto medio cerca' },
        { valor: '50', mensaje: 'Objeto lejos' },
        { valor: '15', mensaje: 'Objeto demasiado cerca' },
        { valor: '35', mensaje: 'Objeto medio cerca' },
        { valor: '55', mensaje: 'Objeto lejos' },
        { valor: '20', mensaje: 'Objeto demasiado cerca' },
        { valor: '40', mensaje: 'Objeto medio cerca' },
        { valor: '60', mensaje: 'Objeto lejos' },
        { valor: '25', mensaje: 'Objeto medio cerca' },
    ];

    const ultrasonicValues = ultrasonicData.map(item => parseFloat(item.valor));
    const labels = ultrasonicData.map((item, index) => index.toString());

    return (
        <View style={[tw`flex-1 justify-center items-center`, { backgroundColor: '#219ebc' }]}>
            <Text style={tw`text-4xl mb-6 text-white`}>Sensor Ultrasónico</Text>
            <View style={[tw`bg-gray-100 p-4 rounded-lg w-72 mb-10`, { alignItems: 'center' }]}>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`font-bold text-lg mr-2 `}>Valor del sensor</Text>
                    <Text style={tw`font-bold text-lg`}>Mensaje del sensor</Text>
                </View>
                <FlatList
                    data={ultrasonicData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={tw`flex-row justify-between `}>
                            <Text style={tw` text-black`}>{item.valor}cm</Text>
                            <Text style={tw`ml-20 text-black text-center`}>{item.mensaje}</Text>
                        </View>
                    )}
                />
            </View>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [{ data: ultrasonicValues }]
                }}
                width={350}
                height={200}
                yAxisLabel="Distancia"
                chartConfig={{
                    backgroundColor: "#219ebc",
                    backgroundGradientFrom: "#219ebc",
                    backgroundGradientTo: "#219ebc",
                    decimalPlaces: 0,
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
