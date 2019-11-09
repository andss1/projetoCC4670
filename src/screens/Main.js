import React, { Component } from 'react'
import { ScrollView, Text, View , TouchableOpacity, Image, StyleSheet, Button} from 'react-native'
import { Card , Icon } from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

class Main extends Component {   
    render() {
        return (
            <ScrollView style={{display: "flex", flex: 1, backgroundColor: "#f7f6f6"}}>

                <View style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                    <Text style={styles.title}> AV</Text>
                    <Text style={styles.title}>  STUDIO</Text>
                </View>

                <View style={styles.imageView}>
                    <Image source={require('../images/av_logo.png')} /*style={styles.iconImage}*//>
                </View>

                
                
                <View style={styles.options}>
                <TouchableOpacity
                    style={{
                        borderWidth:1,
                        borderColor:'#8e44ad',
                        alignItems:'center',
                        justifyContent:'center',
                        width:100,
                        height:100,
                        backgroundColor:'white',
                        borderRadius:50,
                        }}
                        onPress={() => this.props.navigation.navigate('Registra')}
                    >
                    <Icon name={"chevron-right"}  size={30} color="black" />
                    <Text> Cadastrar </Text>
                </TouchableOpacity>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageView:{
        display: "flex",
        marginTop: 10,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    options:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 40,
        alignItems: 'center',
        //borderWidth: 1,
    },

    title:{
        //marginTop: -40,
        fontFamily: 'Montserrat-Regular',
        fontSize: 40,
        //fontWeight: 'bold',
        //alignSelf: 'center',
        letterSpacing: 20,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },

    opt:{
        display:'flex',
        flexDirection: 'column',
        marginLeft: 60,
    },

    iconImage:{
        width: 240,
        height: 280,
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