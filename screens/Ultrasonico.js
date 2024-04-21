import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
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
        { valor: '55', mensaje: 'Objeto lejos' },
        { valor: '22', mensaje: 'Objeto demasiado cerca' },
        { valor: '49', mensaje: 'Objeto medio cerca' },
        { valor: '68', mensaje: 'Objeto lejos' },
        { valor: '22', mensaje: 'Objeto medio cerca' }
    ];

    const [displayedData, setDisplayedData] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (ultrasonicData.length >= 2) {
                const newData = ultrasonicData.slice(0, 2);
                setDisplayedData(prevData => [...prevData, ...newData]);
                ultrasonicData.splice(0, 2);
            }
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const ultrasonicValues = displayedData.map(item => parseFloat(item.valor));
    const labels = displayedData.map((_, index) => index.toString());

    return (
        <ScrollView contentContainerStyle={[tw`flex-1 justify-center items-center`, { backgroundColor: '#219ebc' }]}>
            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={tw`text-4xl mb-10 font-bold uppercase text-white`}>Sensor Ultrasónico</Text>
                <View style={tw`flex-row justify-center w-full mb-6 `}>
                    <View style={tw`bg-gray-100 p-4 rounded-lg w-96 mr-10`}>
                        <View style={tw`flex-row justify-between mb-2 `}>
                            <Text style={tw`font-bold text-lg mr-2`}>Valor del sensor</Text>
                            <Text style={tw`font-bold text-lg`}>Mensaje del sensor</Text>
                        </View>
                        {displayedData.length > 0 && (
                            <FlatList
                                data={displayedData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={tw`flex-row justify-between `}>
                                        <Text style={tw`text-black w-2/4 text-center`}>{item.valor}cm</Text>
                                        <Text style={tw`text-black w-2/4 text-center`}>{item.mensaje}</Text>
                                    </View>
                                )}
                            />
                        )}
                    </View>
                    {displayedData.length > 0 && (
                        <View style={tw`w-1/2 mt-10`}>
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
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export default StackScreen;
