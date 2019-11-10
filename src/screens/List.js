import React, { Component } from 'react'
import { View , StyleSheet, Text, ScrollView, Button, FlatList} from 'react-native'
import {Radio} from 'native-base'
import { Card, Icon} from 'react-native-elements'
import api from '../api'
import Axios from 'axios'

function Item({ title }) {
    return (
    <View>
        
        <Card
                    title={title.name}
                    containerStyle={styles.card}
                >   
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Tel: </Text> {title.number}                       
                    </Text> 
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Email: </Text> {title.email}                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Sexo: </Text> {title.sex}                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Data nasc.: </Text> {title.dateOfB}                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Data agend.: </Text> {title.date}                       
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Horario: </Text>  {title.schedule}                     
                    </Text>
                    
                    {/*<Button
                        icon={<Icon name='code' color='white' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Mais Detalhes'
                        color='#333295'
                    />*/}
                </Card>
                    
    </View>
    );
}

class List extends Component {
    state = {
        mas: false,
        fem: false,
        all: false,

        user: [],
    }

    masPressed(){
        this.setState({mas:true, fem:false, all: false});
        this.atualizaLista();
    }

    femPressed(){
        this.setState({mas:false, fem:true, all:false});
        this.atualizaLista();
    }
    allPressed(){
        this.setState({mas:false, fem:false, all:true});
        this.atualizaLista();
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
            <ScrollView style={{display: "flex", flex: 1, backgroundColor: "#1F143D"}}>
                <View style={{display:'flex', alignItems: 'center',marginTop: 10, marginBottom: 10 }}>
                    <Button title='Atualiza' onPress={this.atualizaLista()}/>
                </View>

                {/*}
                <View elevation={10} style={styles.header}>
                    <Text style={styles.title}> CLIENTES </Text>
                </View>*/}

                {/*<View style={styles.selectView}>
                    <View style={styles.sex}>
                            <Radio selected={this.state.mas}
                             color="#fbfefd"
                             selectedColor="#fbfefd"
                            onPress={() => this.masPressed()}
                            />
                            <Text style={{marginLeft: 7, color: "#fbfefd"}}> Masculino </Text>
                    </View>

                    <View style={styles.sex}>
                            <Radio selected={this.state.fem}
                             color="#fbfefd"
                             selectedColor="#fbfefd"
                            onPress={() => this.femPressed()}/>
                            <Text style={{marginLeft: 7, color: "#fbfefd"}}> Feminino </Text>
                    </View>

                    <View style={styles.sex}>
                            <Radio selected={this.state.all}
                             color="#fbfefd"
                             selectedColor="#fbfefd"
                            onPress={() => this.allPressed()}/>
                            <Text style={{marginLeft: 7, color: "#fbfefd"}}> Ambos </Text>
                    </View>   
                </View>*/}
                <Icon name="user" color="#fbfefd" type="font-awesome" size={50}/>
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