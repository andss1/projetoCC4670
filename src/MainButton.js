import React, { Component } from 'react'
import { Text, View , TouchableOpacity, Button, Image, StyleSheet} from 'react-native'

class MainButton extends Component {
    render() {
        return (
            <TouchableOpacity style={style.button}>
                <Text style={{color: '#ffffff'}}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}


const style= StyleSheet.create({
    button: {
        backgroundColor: '#1B9CFC',
        alignItems:'center',
        padding: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#182C61',

    },
});


export default MainButton;