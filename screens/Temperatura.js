import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Temperatura = ({ navigation }) => {
    const data = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [
            {
                data: [20, 22, 23, 25, 24, 26],
            },
        ],
    };

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <LineChart
                    data={data}
                    width={350}
                    height={220}
                    chartConfig={{
                        backgroundColor: 'white',
                        backgroundGradientFrom: 'white',
                        backgroundGradientTo: 'white',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 57, 244, 0.8), ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#219ebc',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Temperatura;