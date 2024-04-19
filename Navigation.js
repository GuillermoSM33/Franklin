import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, navigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pantallas
import Menu from "./screens/Menu";
import Login from "./screens/Login";
import StackScreen from "./screens/StackScreen";
import Herramientas from "./screens/Herramientas";
import Home from "./screens/Home";
import Presion from "./screens/Presion"
import Ph from "./screens/Ph"
import Temperatura from "./screens/Temperatura";
import Ultrasonico from "./screens/Ultrasonico";

//Creamos la constante de stack

const MenuStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <MenuStackNavigator.Navigator
            initialRouteName="NeptunExplorer"
        >

            <MenuStackNavigator.Screen
                name="NeptunExplorer"
                component={Menu}
            >
            </MenuStackNavigator.Screen>
            <MenuStackNavigator.Screen
                name="Nosotros"
                component={StackScreen}
            >
            </MenuStackNavigator.Screen>

            <MenuStackNavigator.Screen
                name="Configuración"
                component={Herramientas}
            >
            </MenuStackNavigator.Screen>
            <MenuStackNavigator.Screen
                name="Temperatura y Humedad"
                component={Presion}
            >
            </MenuStackNavigator.Screen>

            <MenuStackNavigator.Screen
                name="Lluvia"
                component={Ph}
            ></MenuStackNavigator.Screen>

            <MenuStackNavigator.Screen
                name="Home"
                component={Home}
            >
            </MenuStackNavigator.Screen>

            <MenuStackNavigator.Screen
                name="Temperatura"
                component={Temperatura}
            ></MenuStackNavigator.Screen>

            <MenuStackNavigator.Screen
                name="Ultrasonico"
                component={Ultrasonico}
            ></MenuStackNavigator.Screen>

        </MenuStackNavigator.Navigator>
    );
}

//Creamos la constante de navegación

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Menu"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: 'black',
                headerShown: false,
            }}>
            <Tab.Screen
                name="Inicio"
                component={MyStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="card-bulleted"
                            color={color}
                            size={size}
                        />
                    )
                }}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs>

            </MyTabs>
        </NavigationContainer>
    );
}