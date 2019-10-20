import React, { Component } from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Image, Dimensions, Button} from 'react-native'
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
                    <TextInput style={styles.txtinput} placeholder = "Nome"/> 
                    <TextInput style={styles.txtinput} placeholder = "Email"/> 
                    <TextInput style={styles.txtinput} placeholder = "Telefone"/> 
                    <TextInput style={styles.txtinput} placeholder = "Sexo"/>
                    <View style={styles.buttonView}> 
                        <MainButton name='CADASTRAR'/>
                    </View>
                    
                </View>
                <MainButton name='CADASTRAR'/>
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


    txtinput:{
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 0.8,
        borderBottomColor: 'black',

    },

    buttonView: {
        marginTop: 45,
    },
});


export default Register
