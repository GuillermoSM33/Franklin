import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tw from 'twrnc';

const StackScreen = () => {
    return (
        <ScrollView contentContainerStyle={[tw`min-h-full w-full mx-auto`, { backgroundColor: "#219ebc" }]}>
            <Text style={tw`text-white mt-10 text-4xl font-bold text-center mb-8`}>CONOCE MÁS SOBRE NEPTUN-EXPLORER</Text>
            <Image
                source={{ uri: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                style={{ width: 300, height: 300, alignSelf: 'center', marginBottom: 20 }}
            />
            <View style={tw`px-4`}>
                <View style={tw`flex-row items-center mb-4`}>
                    <Text style={tw`text-white text-lg text-justify flex-1`}>
                        En Neptun-Explorer, nos dedicamos a explorar los misterios del océano y llevar la maravilla de sus descubrimientos a todo el mundo. Desde la investigación submarina hasta la conservación del medio ambiente marino, nuestra misión es impulsar el conocimiento y la conciencia sobre los océanos.
                    </Text>
                    <Image
                        source={{ uri: "https://images.pexels.com/photos/5901268/pexels-photo-5901268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                        style={{ width: 100, height: 100, alignSelf: 'center', marginLeft: 10 }}
                    />
                </View>
                <View style={tw`flex-row items-center mb-4`}>
                <Image
                        source={{ uri: "https://images.pexels.com/photos/5746276/pexels-photo-5746276.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                        style={{ width: 100, height: 100, alignSelf: 'center', marginRight: 10 }}
                    />
                    <Text style={tw`text-white text-lg text-justify flex-1`}>
                        Con un equipo de expertos en diversas disciplinas, desde biología marina hasta ingeniería oceánica, trabajamos incansablemente para desarrollar tecnologías innovadoras y métodos sostenibles que nos permitan comprender mejor y proteger nuestros océanos.
                    </Text>
                    
                </View>
                <View style={tw`flex-row items-center mb-4`}>
                    <Text style={tw`text-white text-lg text-justify flex-1`}>
                        Únete a nosotros en nuestro viaje mientras exploramos las profundidades del océano y trabajamos para un futuro donde los mares y sus habitantes prosperen en armonía con la humanidad.
                    </Text>
                    <Image
                        source={{ uri: "https://images.pexels.com/photos/13010769/pexels-photo-13010769.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                        style={{ width: 100, height: 100, alignSelf: 'center', marginLeft: 10 }}
                    />
                </View>


            </View>
        </ScrollView>
    );
}

export default StackScreen;
