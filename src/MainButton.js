import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet} from 'react-native'

class MainButton extends Component {
    render() {
        return (
            <TouchableOpacity style={style.button}>
                <Text style={{color: '#ffffff'}}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#660066',
        alignItems:'center',
        padding: 8,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#660040',

    },
});


export default MainButton;