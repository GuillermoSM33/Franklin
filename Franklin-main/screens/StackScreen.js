import React from "react";
import { View, Text, Image } from "react-native";
import tw from 'twrnc';

const StackScreen = () =>{
    return(
        <View style={[tw`h-full w-full mx-auto`, {backgroundColor: "#219ebc"}]}>
            <Text style={tw`text-white mt-20 text-4xl font-bold text-center`}>CONOCE MAS SOBRE NEPTUN-EXPLORER</Text>
            <Image
                source={{uri: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                style={{width: 300, height: 300, alignSelf: 'center'}}
            />
        </View>
    );
}

export default StackScreen;
