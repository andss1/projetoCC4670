import React, { Component } from 'react'
import { Text, View , TouchableOpacity, Button, Image, StyleSheet} from 'react-native'


class MainButton extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.button}>
                <Text style={{color: '#ffffff'}}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

class main extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#ffe0b3"}}>
                <View style={styles.imageView}>
                    <Image source={require('../images/av_logo.png')} style={styles.iconImage}/>
                </View>
                <View style={styles.buttonView}>
                    <MainButton name='CADASTRAR'/>
                    <View style={styles.separator}></View>
                    <MainButton name='BUSCAR'/>
                    <View style={styles.separator}></View>
                    <MainButton name='LISTAR'/>
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageView:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconImage:{
        height: 200,
        width: 200,
    },

    button: {
        backgroundColor: '#660066',
         alignItems:'center',
         padding: 8

    },
    buttonView: {   
        flex: 1,
        margin: 75,
        marginBottom: 100,
    },
    separator:{
        margin: 10,
    },
});

export default main;