import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { BarChart } from 'react-native-chart-kit';

const StackScreen = () => {
    // Datos de ejemplo para el gráfico de barras
    const data = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        datasets: [
            {
                data: [6.5, 7.2, 6.8, 7.0, 7.4], // Niveles de pH
            },
        ],
    };

    return (
        <View style={[tw`flex-1 justify-center items-center `, {backgroundColor: '#219ebc'}]}>
            <Text style={tw`text-4xl mb-6 text-white`}>Niveles de pH</Text>
            <View style={[tw`bg-gray-100 p-4 rounded-lg w-full`, { alignItems: 'center' }]}>
                <BarChart
                    style={{ borderRadius: 16 }}
                    data={data}
                    width={380}
                    height={320}
                    yAxisLabel={'pH'}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 1, // Decimales para el pH
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    verticalLabelRotation={30}
                />
            </View>
        </View>
    );
}

export default StackScreen;
