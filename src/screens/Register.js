import React, { Component } from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native'
import { Card, Icon} from 'react-native-elements'
import api from '../api'

class Register extends Component {
    //estados dos usuários
    constructor(props){
        super(props);
        this.state = {name : '', email: '', number: '', sex: '', dateOfB: ''}
    }

    saveUser = async () => {
        if(this.state.name == "" || this.state.email == "" || this.state.number == ""  || this.state.sex == "" ){
            alert('Favor preencher todos os campos!')
        } else {
            const user = {
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                sex: this.state.sex,
                dateOfB: this.state.dateOfB,
            }

            api.post('/', user).then((data) => {
                    console.log(data.data)
                })
        }
    }

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
                        <TextInput style={styles.txtinput} placeholder = "Nome"
                        onChangeText={(name) => this.setState({name})}
                        value = {this.state.name}
                        /> 
                    </View>
                    <View style={styles.inputs}>
                        <Icon
                            name="mail"
                            color="black"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Email"
                        onChangeText={(email) => this.setState({email})}
                        value = {this.state.email}
                        /> 
                    </View>
                    <View style={styles.inputs}>
                        <Icon
                            name="phone"
                            color="black"
                            size={25}
                        />
                        <TextInput style={styles.txtinput} placeholder = "Telefone"
                        onChangeText={(number) => this.setState({number})}
                        value = {this.state.number}
                        /> 
                    </View>
                    <View style={styles.inputs}>
                        <Icon
                            name="intersex"
                            type = "font-awesome"
                            color="black"
                            size={25}
                        />  
                        <TextInput style={styles.txtinput} placeholder = "Sexo"
                        onChangeText={(sex) => this.setState({sex})}
                        value = {this.state.sex}
                        /> 
                        <TextInput style={styles.txtinput} placeholder = "Date de Nascimento"
                        onChangeText={(dateOfB) => this.setState({dateOfB})}
                        value = {this.state.dateOfB}
                        /> 
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
                        onPress = {this.saveUser}
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
        backgroundColor: '#1F143D',
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
