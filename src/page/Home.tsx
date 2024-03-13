import React from "react";
import { Image, View, Text, StatusBar, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BatLogo from "../assets/Batman-Logo-2016.png";

const Home = () => {
    const navigation = useNavigation();

    const onPressButton = () => {
        navigation.navigate('Formulario');
    };

    return (
        <View style={styles.colorTela}>
            <StatusBar/>
            <View style={styles.logoContainer}>
                <Image source={BatLogo} style={styles.batLogo}/>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={onPressButton}>
                    <Text style={styles.text}>Active Bat Signal</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    batLogo: {
        width: 400,
        height: 200,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logoContainer: {
        flexDirection: 'column',
        alignSelf: 'center',
        paddingTop: '50%',
        paddingBottom: 80,
    },
    button: {
        alignItems: 'center',
        elevation: 3,
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: "#ffff",
        fontWeight: 'bold',
    },
    colorTela: {
        backgroundColor: '#fff'
    }
});

export default Home;
