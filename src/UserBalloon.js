import React, { Component } from 'react'
import { View , StyleSheet, Text, TouchableOpacity} from 'react-native'

class UserBalloon extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.ballon}>
                <View style={styles.iconUser}>
                </View>
                <View style={styles.textUser}>
                    <Text style={{fontSize: 12, marginLeft: 5}}>Nome: {this.props.name}</Text>
                    <Text style={{fontSize: 12, marginLeft: 5}}>Email: {this.props.email}</Text>
                    <Text style={{fontSize: 12, marginLeft: 5}}>Telefone: {this.props.tel}</Text>
                    <Text style={{fontSize: 12, marginLeft: 5}}>Sexo: {this.props.sexo}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    ballon: {
        display: "flex", 
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#ffe0a3',
        borderWidth : 1.5,
        borderColor: 'black',
        padding: 5,
        borderRadius: 20,
        height: 80,
        marginBottom: 8,
        marginLeft: 5,
        marginRight: 5,
    },

    iconUser:{
        display: "flex",
        flex: 1,
        borderColor: "red",
        borderWidth: 1,
        backgroundColor: "red",
        width: 50,

    },
    
    textUser:{
        display: "flex",
        flex: 3,
        //borderColor: "green", //retirar
        //borderWidth: 2, //retirar
        //backgroundColor: "green"
    },
});

export default UserBalloon;