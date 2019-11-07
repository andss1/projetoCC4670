import React, { Component } from 'react'
import { View , StyleSheet, Text, ScrollView, Button} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {Radio, Left} from 'native-base'
import UserBalloon from '../UserBalloon'
import { Card, ListItem, Icon} from 'react-native-elements'

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
            <ScrollView style={{display: "flex", flex: 1, backgroundColor: "#ffe0a3"}}>
                {/*}
                <View elevation={10} style={styles.header}>
                    <Text style={styles.title}> CLIENTES </Text>
                </View>*/}

                <View style={styles.selectView}>
                    <View style={styles.sex}>
                            <Radio selected={this.state.mas} color="#8e44ad" selectedColor="#8e44ad"
                            onPress={() => this.masPressed()}/>
                            <Text style={{marginLeft: 7}}> Masculino </Text>
                    </View>

                    <View style={styles.sex}>
                            <Radio selected={this.state.mas} color="#8e44ad" selectedColor="#8e44ad"
                            onPress={() => this.femPressed()}/>
                            <Text style={{marginLeft: 7}}> Feminino </Text>
                    </View>

                    <View style={styles.sex}>
                            <Radio selected={this.state.mas} color="#8e44ad" selectedColor="#8e44ad"
                            onPress={() => this.allPressed()}/>
                            <Text style={{marginLeft: 7}}> Ambos </Text>
                    </View>   
                </View>

                <Card
                    title='Anderson Simao'
                    containerStyle={styles.card}
                >
                    
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Tel: </Text> 98888-8888                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Sexo: </Text>  Feminino                     
                    </Text>
                    
                    <Button
                        icon={<Icon name='code' color='white' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Mais Detalhes'
                        color='#8e44ad'
                        onPress={() => this.props.navigation.navigate('Usuario')}
                    />
                </Card>

                <Card
                    title='Anderson Simao'
                    containerStyle={styles.card}
                >
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Tel: </Text> 98888-8888                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Sexo: </Text>  Feminino                     
                    </Text>
                    
                    <Button
                        icon={<Icon name='code' color='white' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Mais Detalhes'
                        color='#8e44ad'
                        onPress={() => this.props.navigation.navigate('Usuario')}
                    />
                </Card>

            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    buttonView: {   
        flex: 3,
        margin: 75,
        marginBottom: 100,
    },

    card:{
        borderWidth: 2,
        width: 330, 
        alignSelf: 'center', 
        borderRadius: 10,
    },
    header: {
        alignSelf: 'center',
        display: 'flex',
        margin: -5,
        padding: 20,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 22,
        shadowOffset: {
            height: 5,
            width: 10
        },
        alignSelf: 'center',
    },
    sex:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 5,
    },

    container: {
        display: "flex",
        justifyContent: 'space-around',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
        //borderWidth: 4,
        //borderColor: 'purple',
    },
    title:{
        marginTop: -40,
        fontFamily: 'Montserrat-Regular',
        fontSize: 40,
        alignSelf: 'center',
        letterSpacing: 15,
    },
    selectView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 45,
        alignSelf: 'center',
    },
    body: {
        display: 'flex',
        flex: 4,    
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: "#ffe0a3"
    },
});

export default List;