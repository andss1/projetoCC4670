import React, { Component } from 'react'
import { View , StyleSheet, Text, ScrollView, Button} from 'react-native'
import { Card, ListItem, Icon, Header} from 'react-native-elements'
import UserBalloon from '../UserBalloon'

class Schedules extends Component {
    render() {
        return (
            <ScrollView style={styles.father}>
                
                {/*
                
                <View elevation={10} style={styles.header}>
                    <Text style={styles.title}> AGENDA </Text>
                </View>*/}
                <Icon name="cut" type="font-awesome" size={50}/>
                
                <Card
                    title='dd/mm/aa'
                    containerStyle={styles.card}
                >
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Nome: </Text>                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Sexo: </Text>                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Corte: </Text>                      
                    </Text>
                </Card>
                </ScrollView>         
        )
    }
}


const styles = StyleSheet.create({
    father:{
        display: 'flex',
        flex: 1,
        backgroundColor: '#f1f2f6',
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

    card:{
        borderWidth: 2,
        width: 330, 
        alignSelf: 'center', 
        borderRadius: 10,
    },

    title:{
        marginTop: -40,
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