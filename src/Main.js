import React, {Component} from 'react'
import { Text, View , TouchableOpacity, Image, StyleSheet, Button} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainButton from './MainButton'
import Register from './Register'
import List from './List'

class Main extends Component {
    render() {
        return (
            <View style={{display: "flex", flex: 1, backgroundColor: "#ffe0b3"}}>
                <View style={styles.imageView}>
                    <Image source={require('../images/av_logo.png')} style={styles.iconImage}/>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={{display:"flex"}} onPress={alert('aaaaa')}>
                        <MainButton name='CADASTRAR'/>
                    </TouchableOpacity>
                    <View style={styles.separator}></View>
                    <MainButton name='BUSCAR'/>
                    <View style={styles.separator}></View>
                    <MainButton name='LISTAR'/>
                </View>
                <View>
                    <Text></Text>
                </View>
                <></>
            </View>
        )
    }
}


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


const AppNavigator = createStackNavigator(
    {
        HomeScreen: Main,
        Cadastra: Register,
        Lista: List,
    },
    {
        initialRouteName: 'HomeScreen',
    }

);

export default Main;