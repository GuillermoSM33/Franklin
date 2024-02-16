import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";

const StackScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={[tw`flex-1 justify-center items-center`, {backgroundColor: "#219ebc" }]}>
            <Text style={tw`text-4xl mb-6 text-white`}>Presión</Text>
            <View style={[tw`bg-gray-100 p-4 rounded-lg w-72`, {alignItems: 'center'}]}>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`font-bold text-lg mr-10`}>Distancia</Text>
                    <Text style={tw`font-bold text-lg`}>Presion</Text>
                </View>
                <View style={tw`flex-row justify-between `}>
                    <Text style={tw`mr-20 `}>Alta</Text>
                    <Text>55</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`mr-20 `}>Baja</Text>
                    <Text>30</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`mr-20 `}>Alta</Text>
                    <Text>78</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`mr-18 `}>Media</Text>
                    <Text>42</Text>
                </View>
            </View>
        </View>
    );
}

export default StackScreen;
