import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Scanner from './screen/scanner';
import PlantView from './screen/plant/plantView';
import Login from './screen/login/login';
import Signup from './screen/login/signup'
import Update from './screen/login/updateUser'


const AppStack = createStackNavigator({
  Login: {
    screen: Login,
    path: 'Login',
    navigationOptions: {
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    path: 'Signup',
    navigationOptions: {
      headerShown: false,
    },
  }, 
  Update: {
    screen: Update,
    path: 'Update',
    navigationOptions: {
      headerShown: false,
    },
  },
  Scanner: {
    screen: Scanner,
    path: 'Scanner',
    navigationOptions: {
      headerShown: false,
    },
  },
  Plant: {
    screen: PlantView,
    path: 'Plant',
    navigationOptions: {
      headerShown: false,
    },
  },
});

const Routes = createSwitchNavigator(
  {
    AppStack,
  },
  {
    initialRouteName: 'AppStack',
  }
);

export default createAppContainer(Routes);
