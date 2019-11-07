import * as React from 'react';
import Main from './screens/Main'
import Register from './screens/Register'
import List from './screens/List.js'
import Schedules from './screens/Schedules'
import User from './screens/User'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack';


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

      Registra:{
        screen: Register,
        navigationOptions:{
          tabBarLabel: "Agendar",
          tabBarIcon:({tintColor}) => (
            <Icon name ="cut" type ="font-awesome" size={20} color='#636e72'/>
          )
        }
      }
    },
  {
    initialRouteName: "Home",
    order: ['Home', 'Agenda', 'Lista', 'Registra'],
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: '#636e72',
      style: {
        borderTopWidth: 1,
        backgroundColor: '#dfe6e9',
      }
    },
  },
)

const StackNav = createStackNavigator(
    {
        TabNavigator : TabNavigator
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return{};
        }
    }
);

const AppContainer = createAppContainer(StackNav);
//export default createAppContainer(TabNavigator);




//--------------------------------------------------------------------------------------------------------------
//import * as React from 'react';
import React, { Component } from 'react';
import Main from './screens/Main'
import Register from './screens/Register'
import List from './screens/List.js'
import Schedules from './screens/Schedules'
import User from './screens/User'
import {
  createSwitchNavigator,
} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements'

class App extends Component {
  render(){
    return <AppContainer/>;
  }
}

export default App;

const DashBoardTabNavigator = createBottomTabNavigator(
  {
    Main,
    Schedules,
    List
  },
  {
    navigationOptions:({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return{
        headerTitle: routeName
      }; 
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashBoardTabNavigator: DashBoardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Inicio: {screen: Main},
  Dashboard: { screen: AppDrawerNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator);