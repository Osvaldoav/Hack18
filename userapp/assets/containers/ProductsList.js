import React,{Component} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from './Header';
import ProductDetail from './ProductDetail';
import FooterBar from './FooterBar';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Modal from 'react-native-modalbox';
import QRScreen from './QRScreen';

class ProductsList extends Component{
    state = {products: [], productsLoaded: false};
    
    constructor() {
        super();
        this.state = {
          isOpen: false,
          isDisabled: false,
          swipeToClose: true,
          sliderValue: 0.3
        };

        this.renderPrices.bind(this);
      }

    componentWillMount(){
        const db = firebase.firestore();
        const settings = {timestampsInSnapshots: true};
        db.settings(settings);
        db.collection('Products').get()
        .then((snapshot) => {
            products = [];
            snapshot.forEach((doc) => {
                product = doc.data();
                product.Id = doc.id;
                products.push(product);
            });
            this.setState({products});
            this.setState({productsLoaded: true});
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }

    popupQR(){
        this.refs.modal3.open();
    }

    renderPrices(){
        const {selectRestaurant} = this.props;
        return this.state.products.map(product => 
            <TouchableOpacity key={product.Id} onPress={() => {selectRestaurant(product.Title);Actions.Alimentos()}} activeOpacity={1}>
                <ProductDetail  product={product} moduleFunction={this.popupQR.bind(this)}></ProductDetail> 
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <QRScreen/>
                </Modal>
                <Header headerText='Products List'/>
                <ScrollView>
                    {this.state.productsLoaded ? this.renderPrices() : null}
                </ScrollView>
                <FooterBar/>
            </View>

        );
    }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    modal3: {
        height: 300,
        width: 300,
        borderRadius: 10
      },
      modal: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: "black",
        fontSize: 22
      }
  }

export default connect(null, actions)(ProductsList);