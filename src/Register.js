import React, { Component } from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Image, Dimensions, Button} from 'react-native'
import { Icon } from 'react-native-elements'
import MainButton from './MainButton'

class Register extends Component {
    render() {
        return (
            <ScrollView style={styles.father}>
                <View style={styles.header}>
                    <Text style={styles.title}> AV </Text>
                    <Text style={styles.title}> STUDIO</Text>
                
                </View>

                <View style={styles.main}>
                    <View style={styles.inputs}>
                        <Icon
                            name="account"
                            color="black"
                            type = "material-community"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Nome"/> 
                    </View>
                    <View style={styles.inputs}>
                        <Icon
                            name="mail"
                            color="black"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Email"/> 
                    </View>
                    <View style={styles.inputs}>
                        <Icon
                            name="phone"
                            color="black"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Telefone"/> 
                    </View>
                    <View style={styles.inputs}>
                        <Icon
                            name="intersex"
                            type = "font-awesome"
                            color="black"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Sexo"/> 
                    </View>
                
                    <View style={styles.buttonView}> 
                        <MainButton name='CADASTRAR'/>
                    </View>
                </View>
                <View style={{marginTop: 10, marginRight: 50, marginLeft: 50}}>
                    <MainButton name='Voltar'/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    father:{
        display: 'flex',
        flex: 1,
        backgroundColor: '#ffe0b3',
    },

    header: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
    },
    title:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 40,
        alignSelf: 'center',
        letterSpacing: 20
    },

    main:{
        display: 'flex',        
        flexDirection: 'column',
        marginTop: 25,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
    },

    inputs:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        //borderWidth: 1,

    },

    txtinput:{
        width: 250,
        marginLeft: 10,
        marginBottom: 5,
        borderBottomWidth: 0.8,
        borderBottomColor: 'black',

    },

    buttonView: {
        marginTop: 45,
    },
});


export default Register
