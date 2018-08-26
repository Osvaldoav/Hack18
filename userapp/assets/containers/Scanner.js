import React from 'react';
import { Dimensions, Text, View, Alert} from 'react-native';

import { BarCodeScanner, Permissions } from 'expo';
import FooterBar from './FooterBar';
import { ScrollView } from '../../node_modules/react-native-gesture-handler';
import Header from './Header';

export default class Scanner extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Header/>
        <ScrollView>
          <Text>Ola k ase</Text>
        </ScrollView>
        <FooterBar/>
      </View>

    );
  }
}