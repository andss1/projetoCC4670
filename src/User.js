import React, { Component } from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Image, Dimensions, Button} from 'react-native'
import MainButton from './MainButton'


class User extends Component {
    render() {
        return (
            <ScrollView style={styles.father}>
                <View style={styles.header}>

                    <Image source={require('./images/avatar.png')} style={styles.avatarImage} />

                    <View style={styles.buttonView}>
                        <View style={styles.fixToText}>
                            <MainButton name='Editar'/>
                        </View>
                        <View style={styles.fixToText}>
                            <MainButton name='Excluir'/>
                        </View>
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={{fontSize: 30, alignSelf: 'center'}}> 'Nome Do Usuário' </Text>

                    <Text style={styles.info} > Email </Text>
                    <Text style={styles.informacao}> </Text>

                    <Text style={styles.info} > Número</Text>
                    <Text style={styles.informacao}> </Text>

                    <Text style={styles.info} > Sexo </Text>
                    <Text style={styles.informacao}> </Text>

                    <Text style={styles.info} > Data de nascimento</Text>
                    <Text style={styles.informacao}> </Text>

                    <View style={styles.fixToText}>
                        <MainButton name='Agendamentos'/>
                    </View>
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

    info:{
        fontSize: 15,
        marginLeft: 10,
        marginTop: 20,
    },

    informacao:{
        marginTop: 20,
        borderBottomWidth: 0.8,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },

    titulo:{
        fontSize: 30,
        //fontFamily: 'Open Sans Regular',
        //fontWeight:'800',
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


    input:{
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },

    avatarImage: {
      height: 100,
      width: 100,
      position: "relative",
      marginLeft: 25,
      
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
    },

    buttonView: {
        width: 70,
        marginTop: 5,
        marginLeft: 130,
        justifyContent: 'space-around',
    },
});


  export default User;