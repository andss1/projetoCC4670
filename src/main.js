import React, { Component } from 'react'
import { Text, View , TouchableOpacity, Image, StyleSheet, Button} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainButton from './MainButton'

class main extends Component {
    render() {
        return (
            <View style={{display: "flex", flex: 1, backgroundColor: "#ffe0b3"}}>
                <View style={styles.imageView}>
                    <Image source={require('../images/av_logo.png')} style={styles.iconImage}/>
                </View>
                <View style={styles.buttonView}>
                    <MainButton name='CADASTRAR'/>
                    <View style={styles.separator}></View>
                    <MainButton name='BUSCAR'/>
                    <View style={styles.separator}></View>
                    <MainButton name='LISTAR'/>
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator(
    {
        Main: main,
    },
    {
        initialRouteName: 'Main',
    }

);

const styles = StyleSheet.create({
    imageView:{
        display: "flex",
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconImage:{
        width: 210,
        height: 250,
    },
    buttonView: {   
        flex: 3,
        margin: 75,
        marginBottom: 100,
    },
    separator:{
        margin: 10,
    },
});

export default main;