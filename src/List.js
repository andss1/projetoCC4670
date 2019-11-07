import React, { Component } from 'react'
import { View , StyleSheet, Text, ScrollView} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {Radio, Button, Left, Icon} from 'native-base'
import UserBalloon from './UserBalloon'

class List extends Component {
    state = {
        mas: false,
        fem: false,
        all: false
    }

    masPressed(){
        this.setState({mas:true, fem:false, all: false});
    }

    femPressed(){
        this.setState({mas:false, fem:true, all:false});
    }
    allPressed(){
        this.setState({mas:false, fem:false, all:true});
    }

    render() {
        return (
            <View style={{display: "flex", flex: 1, backgroundColor: "#ffe0b3"}}>
                <Button transparent>
                    <Icon name="arrow-back" color="black"/>
                </Button>
                <View style={styles.header}>
                    <Text style={{fontSize: 25}}>Selecione o sexo:</Text>
                    <View style={styles.selectView}> 
                        <View style={{display: "flex", flex :1,flexDirection: 'row',}}>
                            <Radio selected={this.state.mas} color="#660040" selectedColor="#660040"
                            onPress={() => this.masPressed()}/>
                            <Text style={{marginLeft: 7}}>Masculino</Text>
                        </View>
                        <View style={{display: "flex", flex :1, flexDirection: 'row',}}>
                            <Radio selected={this.state.fem} color="#660040" selectedColor="#660040"
                            onPress={() => this.femPressed()}/>
                                <Text style={{marginLeft: 7}}>Feminino</Text>
                        </View>
                        <View style={{display: "flex", flex :1, flexDirection: 'row',}}>
                            <Radio selected={this.state.all} color="#660040" selectedColor="#660040"
                            onPress={() => this.allPressed()}/>
                                <Text style={{marginLeft: 7}}>Ambos</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.body}>
                    <UserBalloon 
                    name='Anderson' tel='12312312' sexo='M' email='anderson@reactnative'/>
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                    <UserBalloon />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {   
        flex: 3,
        margin: 75,
        marginBottom: 100,
    },
    header: {
        display: "flex",
        justifyContent: 'space-around',
        marginTop: 1,
        marginLeft: 20,
        marginRight: 20,
        //borderWidth: 4,
        //borderColor: 'purple',
    },
    selectView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5
        //borderWidth : 4,
        //borderColor: 'red',
    },
    body: {
        display: 'flex',
        flex: 4,
        borderWidth : 2, // retirar
        borderColor: 'black', //retirar
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: "#550030"
    },
});

export default List;