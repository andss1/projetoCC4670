import React, { Component } from 'react'
import { View , StyleSheet, Text, ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import {Button} from 'native-base'
import {createStackNavigator} from 'react-navigation-stack'
import UserBalloon from './UserBalloon'

class Schedules extends Component {
    render() {
        return (
            <ScrollView style={styles.father}>
                <Button transparent>
                    <Icon name="arrow-back" color="black"/>
                </Button>

                <View style={styles.header}>
                    <Text style={styles.title}> AGENDA </Text>
                </View>

                <View elevation={15} style={styles.main}>
                    <View style={styles.schedule}>
                    <View style={styles.dateCon}>
                        <Icon
                            name="calendar"
                            color="black"
                            type = "font-awesome"
                            size={16}
                        />
                        <Text> dd/mm/aa </Text>
                        </View>
                        <View style={styles.info}>
                            <Text> Nome: </Text>
                            <Text> Sexo: </Text>
                            <Text> Corte: </Text>
                        </View>
                    </View>

                    <View style={styles.schedule}>
                    <View style={styles.dateCon}>
                        <Icon
                            name="calendar"
                            color="black"
                            type = "font-awesome"
                            size={16}
                        />
                        <Text> dd/mm/aa </Text>
                        </View>
                        <View style={styles.info}>
                            <Text> Nome: </Text>
                            <Text> Sexo: </Text>
                            <Text> Corte: </Text>
                        </View>
                    </View>

                    <View style={styles.schedule}>
                    <View style={styles.dateCon}>
                        <Icon
                            name="calendar"
                            color="black"
                            type = "font-awesome"
                            size={16}
                        />
                        <Text> dd/mm/aa </Text>
                        </View>
                        <View style={styles.info}>
                            <Text> Nome: </Text>
                            <Text> Sexo: </Text>
                            <Text> Corte: </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.fitToText}>
                    <Button title='Voltar'/>
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

    header: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
    },

    title:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 40,
        alignSelf: 'center',
        letterSpacing: 20,
    },

    main:{
        display: 'flex',        
        flexDirection: 'column',
        marginTop: 25,
        padding: 10,
        borderWidth: 0,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#f8f2fd',
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 22,
        shadowOffset: {
            height: 5,
            width: 10
        }
    },

    dateCon:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },

    schedule:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 7,
        //borderWidth: 1,
        //borderRadius: 10,
    },

    info:{
        marginTop: 5,
        display: 'flex',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
    },

    fitToText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

});

export default Schedules;