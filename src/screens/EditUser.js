import React, { Component } from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Image, Dimensions, Button} from 'react-native'



class User extends Component {


    render() {
        return (
            <ScrollView style={styles.father}>
                <View style={styles.header}>

                    <Image source={require('../images/avatar.png')} style={styles.avatarImage} />
                
                </View>

                <View elevation={2} style={styles.main}>
                    <Text style={{fontSize: 30, alignSelf: 'center'}}> Editar </Text>
                    <View style={{marginTop: 9, borderBottomWidth: 0.2}}/>

                    <Text style={styles.info} > Novo Nome</Text>
                    <TextInput style={styles.txtinput}/> 

                    <Text style={styles.info} > Novo Email </Text>
                    <TextInput style={styles.txtinput}/> 

                    <Text style={styles.info} > Novo Número</Text>
                    <TextInput style={styles.txtinput}/> 

                    <Text style={styles.info} > Novo Sexo </Text>
                    <TextInput style={styles.txtinput}/> 

                    

                    <View style={styles.fixToText}>
                        <Button title='Salvar'
                        color='#8e44ad'/>
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
        backgroundColor: '#ffe0a3',
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
        backgroundColor: 'white',
        paddingTop: 25,
        paddingBottom: 25,
        display: 'flex',        
        flexDirection: 'column',
        marginTop: 25,
        padding: 10,
        //borderWidth: 1,
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

    txtinput:{
        width: 250,
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 5,
        borderBottomWidth: 0.8,
        borderBottomColor: 'black',

    },

    avatarImage: {
      height: 100,
      width: 100,
      position: "relative",
      marginLeft: 25,
      
    },

    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: -20,
    },

    buttonView: {
        display: 'flex',
        flexDirection: 'column',
        //borderWidth: 1,
        marginTop: 5,
        marginLeft: 130,
        justifyContent: 'space-around',
    },
});


  export default User;