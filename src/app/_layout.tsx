import "../../global.css";

import { Stack, Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";



export default function RootLayout() {
    
    const myTheme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: "white",
            card: "#101010",
        }
    }
    return ( 
        <ThemeProvider value={myTheme}>
            <Slot />
        </ThemeProvider>
    );
}

