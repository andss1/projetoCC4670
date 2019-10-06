import React, { Component } from 'react'
import {View, Text, AppRegistry, StyleSheet, Image, Dimensions, Button} from 'react-native'


class Teste extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image source={require('./images/avatar.png')} style={styles.avatarImage} />
                </View>

                <View style={styles.buttons}>
                    <View style={styles.fixToText}>
                        <Button title='Editar' style={styles.buttons}/>
                    </View>
                    <View style={styles.fixToText}>
                        <Button title='Excluir' style={styles.buttons}/> 
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarImage: {
      height: 100,
      width: 100,
      marginTop: 40,
      marginLeft: 20,
      position: "absolute",
    },

    buttons: {
        marginTop: 40,
        marginRight: 20,
        justifyContent: 'space-around',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
  });


  export default Teste;