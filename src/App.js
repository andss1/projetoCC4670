//import * as React from 'react';
import React, { Component } from 'react';
import Main from './screens/Main'
import Register from './screens/Register'
import List from './screens/List.js'
import Schedules from './screens/Schedules'
import User from './screens/User'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


class App extends Component {
    render() {
      return <AppContainer />;
    }
  }
  export default App;



const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      
      screen: Main,
      navigationOptions: {
        tabBarLabel:"Início",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" type = "font-awesome" size={25} color="#636e72"/>
        )
      },
    },

    Agenda: {
      screen: Schedules,
      navigationOptions: {
        tabBarLabel:"Agenda",
        tabBarIcon: ({ tintColor }) => (
          <Icon elevation={5} name="address-book" type = "font-awesome" size={20} color="#636e72" />
        )
      },
    },

    Lista:{
      screen: List,
      navigationOptions:{
        tabBarLabel: "Clientes",
        tabBarIcon:({tintColor}) => (
          <Icon name ="user" type ="font-awesome" size={20} color='#636e72'/>
        )
      }
    },
  },
)

const StackNav = createStackNavigator(
    {
        TabNavigator : TabNavigator,
        Registra: Register,
        Usuario: User,
    },    
);

const AppContainer = createAppContainer(StackNav);