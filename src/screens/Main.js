import React, { Component } from 'react'
import { Text, View , TouchableOpacity, Image, StyleSheet, Button} from 'react-native'
import { Card , Icon } from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

class Main extends Component {
    render() {
        return (
            <View style={{display: "flex", flex: 1, backgroundColor: "#f1f2f6"}}>

                <View style={styles.imageView}>
                    <Image source={require('../images/av_logo.png')} style={styles.iconImage}/>
                </View>

                <View style={styles.options}>
                    <View style={styles.opt}>
                        <Icon name='cut' type='font-awesome' size={70}/>
                        <Button
                            title="Cadastro"
                            type="outline"
                            onPress={() => this.props.navigation.navigate('Registra')}
                        />
                    </View>

                    <View style={styles.opt}>
                        <Icon name='search' type='font-awesome' size={70}/>
                        <Button
                            title="Buscar"
                            type="outline"
                            onPress={() => this.props.navigation.navigate('Cadastra')}
                        />
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageView:{
        display: "flex",
        marginTop: 20,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    options:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,
        //borderWidth: 1,
    },

    opt:{
        display:'flex',
        flexDirection: 'column',
        marginLeft: 60,
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

export default Main;