import React, { Component } from 'react'
import { View , StyleSheet, Text, ScrollView, Button, FlatList} from 'react-native'
import { Card, ListItem, Icon, Header} from 'react-native-elements'
import api from '../api'

function Item({ title }) {
    //if(title.date != null){
        return (
            <View>
                <Card title= {title.date} containerStyle={styles.card}>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Nome: </Text> {title.name}
                    </Text>
        
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Hora: </Text> {title.schedule}
                    </Text>                    
                </Card>
                            
            </View>
            );
    //}
}

class Schedules extends Component {

    state = {
        user:[],
    }

    atualizaLista() {
        api.get('/').then(res => {
            console.log(res.data);
            const user = res.data;
            this.setState({ user });
        })
    }

    render() {
        return (
            
            <ScrollView style={styles.father}>
                <View style={{display:'flex', alignItems: 'center',marginTop: 10, marginBottom: 10 }}>
                    <Button title='Atualiza' onPress={this.atualizaLista()}/>
                </View>
                {/*
                
                <View elevation={10} style={styles.header}>
                    <Text style={styles.title}> AGENDA </Text>
                </View>*/}
                <Icon name="cut" color="#fbfefd" type="font-awesome" size={50}/>
                
                <View>
                    <FlatList
                        data={this.state.user}
                        renderItem={({ item }) => <Item title={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>

                
                </ScrollView>         
        )
    }
}


const styles = StyleSheet.create({
    father:{
        display: 'flex',
        flex: 1,
        backgroundColor: '#1F143D',
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