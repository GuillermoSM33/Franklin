// ColorSchemeContext.js
import React, { createContext, useContext, useState } from 'react';
import tw from 'twrnc';

const ColorSchemeContext = createContext();

export const useColorScheme = () => useContext(ColorSchemeContext);

export const ColorSchemeProvider = ({ children }) => {
    const [colorScheme, setColorScheme] = useState('light'); // Valor inicial

    const toggleColorScheme = () => {
        setColorScheme((prevScheme) => (prevScheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};
