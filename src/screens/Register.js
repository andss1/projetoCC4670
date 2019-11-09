import React, { Component } from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native'
import { Card, ListItem, Icon} from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import api from'../api'

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            testInput: '',
            getTeste: '',
        };
    };

    //função que captura e salva os dados
    saveValueFunc = () => {
        if(this.state.testInput){
            AsyncStorage.setItem('key_deafult', this.state.testInput);
            this.setState({testInput: ''});
            alert('Usuário cadastrado!');
        } else {
            alert('Favor preencher todos os campos!');
        }
    };

    //função resposável pela leitura dos dados
    getValueFunc = () => {
        AsyncStorage.getItem('key_default').then(
            value => this.setState({getTeste: value})
        );
    };

    render() {
        return (
            <ScrollView style={styles.father}>
                {/*
                <View elevation={10} style={styles.header}>
                    <Text style={styles.title}> AGENDAR </Text>
                </View>*/}

                <Card
                    title='Novo Cliente'
                    containerStyle={styles.card}
                >
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
                    <View style={styles.inputs}>
                        <Icon
                            name="calendar"
                            type = "font-awesome"
                            color="black"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Data"/> 
                    </View>
                    <View style={styles.inputs}>
                        <Icon
                            name="user-clock"
                            type = "font-awesome"
                            color="black"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Hora"/> 
                    </View>
                    <View style={{marginTop: 20}}/>
                    <Button
                        icon={<Icon name='code' color='white' />}
                        buttonStyle={{borderRadius: 0, marginTop: 0, marginRight: 0, marginBottom: 0}}
                        title='Cadastrar'
                        //onPress = {alert("Cadastrado")}
                    />
                </View>



                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    father:{
        display: 'flex',
        flex: 1,
        backgroundColor: '#f1f2f6',
    },

    header: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: -5,
        padding: 20,
        borderBottomWidth: 0,
        borderBottomStartRadius: 30,
        marginBottom: 20,
        borderBottomEndRadius: 30,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 22,
        shadowOffset: {
            height: 5,
            width: 10
        }
    },
    title:{
        marginTop: -40,
        fontFamily: 'Montserrat-Regular',
        fontSize: 36,
        alignSelf: 'center',
        letterSpacing: 20,
    },

    main:{
        display: 'flex',        
        flexDirection: 'column',
        //padding: 10,
        //borderWidth: 1,
        //borderRadius: 10,
        //margin: 10,
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
