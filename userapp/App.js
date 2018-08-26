import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Scene, Router, Tabs} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import Expo, { Permissions, Notifications } from 'expo';

import ProductsList from './assets/containers/ProductsList';
import QRScreen from './assets/containers/QRScreen';
import reducers from './assets/reducers';
import Login from './assets/containers/Login';
import SignIn from './assets/containers/SignIn';
import Logout from './assets/containers/Logout';
import Scanner from './assets/containers/Scanner';
import Alimentos from './assets/containers/Alimentos';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyC5Krk8fIY2fJFNbiODvXlslj9x97HsAko',
      authDomain: 'loyalty-eb0a2.firebaseapp.com',
      databaseURL: 'https://loyalty-eb0a2.firebaseio.com',
      projectId: 'loyalty-eb0a2',
      storageBucket: 'loyalty-eb0a2.appspot.com',
      messagingSenderId: '123456789',
    });

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  async componentDidMount() {
    await this.registerForPushNotificationsAsync();
    this.notificationListener = Notifications.addListener(this._handleNotification);
  }

  componentWillUnmount() {
    this.notificationListener && Notifications.remoceListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    console.log(notification);
  };

  async registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
  
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }
  
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    console.log(finalStatus, token);
  }

  render() {
    if (!this.state.isReady) {
      console.log("Error");
      return <View/>;
    }
    return (
      <Provider store={createStore(reducers)}>
        <Router>
          <Scene hideNavBar>
            <Scene
              key='Login'
              component={Login}
            />
            <Scene 
              key='Logout'
              component={Logout}
            />
            <Scene
              key='SignIn'
              component={SignIn}
            />
            <Scene key="Main" initial>
                <Tabs key="tabs" hideTabBar>
                    <Scene key="Products" component={ProductsList} hideNavBar/>
                    <Scene key="Scanner" component={Scanner} hideNavBar/>
                    <Scene key="Alimentos" component={Alimentos} hideNavBar/>
                </Tabs>
            </Scene>

          </Scene>
            
        </Router>
      </Provider>

    );
  }
}
