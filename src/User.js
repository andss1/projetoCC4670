import React, { Component } from 'react'
import {View, Text, AppRegistry, StyleSheet, Image, Dimensions, Button} from 'react-native'
import MainButton from './MainButton'


class User extends Component {
    render() {
        return (
            <View style={styles.father}>
                <View>
                    <Image source={require('./images/avatar.png')} style={styles.avatarImage} />
                </View>

                <View style={styles.buttonView}>  
                    <View style={styles.fixToText}>
                        <MainButton name='Editar'/>
                    </View>
                    <View style={styles.fixToText}>
                        <MainButton name='Excluir'/>
                    </View>
                </View>

                <View style={{margin:50}}>
                    <Text> Lista usuario</Text>
                </View>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    father:{
        flex: 1,
        backgroundColor: '#F8EFBA',
    },

    avatarImage: {
      height: 100,
      width: 100,
      marginTop: 40,
      marginLeft: 20,
      position: 'absolute',
      
    },

    fixToText: {
        margin: 7,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    buttonView: {
        marginTop: 40,
        marginRight: 20,
    },
});


  export default User;