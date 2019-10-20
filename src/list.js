import React, { Component } from 'react'
import { View , TouchableOpacity, Image, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {Radio, Body, Text} from 'native-base'
import MainButton from './MainButton'

class list extends Component {
    render() {
        return (
            <View style={{display: "flex", flex: 1, backgroundColor: "#ffe0b3"}}>
                <View style={styles.header}> 
                    <View style={{display: "flex", flex :1, borderWidth : 4,
        borderColor: 'blue',flexDirection: 'row',}}>
                        <Radio checked={false} color="#660040"/>
                        <Text>Masculino</Text>
                        
                    </View>
                    <View style={{display: "flex", flex :1, borderWidth : 4,
        borderColor: 'green',flexDirection: 'row',}}>
                        <Radio checked={false} color="#660040"/>
                            <Text>Feminino</Text>
                    </View>
                </View>
                <View style={styles.body}>

                </View>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator(
    {
        //Main: main,
        List : list,
    },
    {
        initialRouteName: 'List',
    }

);

const styles = StyleSheet.create({
    buttonView: {   
        flex: 3,
        margin: 75,
        marginBottom: 100,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderWidth : 4,
        borderColor: 'red',
    },
    body: {
        display: 'flex',
        flex: 4,
        borderWidth : 1.5, // retirar
        //borderColor: 'black', //retirar
        padding: 5,
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        backgroundColor: '#ffe0a3'
    },
});

export default list;