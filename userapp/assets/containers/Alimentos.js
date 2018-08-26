import React,{Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from './Header';
import {connect} from 'react-redux';
import ProductDetail from './ProductDetail';
import FooterBar from './FooterBar';
import * as actions from '../actions';

import Modal from 'react-native-modalbox';
import QRScreen from './QRScreen';

class Alimentos extends Component{
    state = {products: [], productsLoaded: false};
    
    constructor() {
        super();
        this.state = {
          isOpen: false,
          isDisabled: false,
          swipeToClose: true,
          sliderValue: 0.3,
          ready: false
        };
      }

    callDataBase(){
        const db = firebase.firestore();
        const {selectedRestaurant} = this.props;
        const settings = {timestampsInSnapshots: true};
        db.settings(settings);
        console.log("Este es....");
        console.log(selectedRestaurant);
        db.collection(selectedRestaurant).get()
        .then((snapshot) => {
            categories = [];
            snapshot.forEach((doc) => {
                //product = doc.data();
                doc.get().then((snapshot) => {
                    snapshot.forEach((doc) => {
                        //console.log(doc.data());
                    })
                });
                console.log(doc.get());
                console.log("HELLOOOO");
                //product.Id = doc.id;
                //products.push(product);
            });
            this.setState({products, productsLoaded: true, ready: true});
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }

    loading(){
        return(
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
            <Header/>
            <ScrollView>
                <Text>NADAAA</Text>
            </ScrollView>
            <FooterBar/>
        </View>
        );
    }

    popupQR(){
        this.refs.modal3.open();
    }

    renderPrices(){
        return this.state.categories.map(product => 
            <ProductDetail key={product.Id} product={product} moduleFunction={this.popupQR.bind(this)}></ProductDetail>
        );
    }

    render(){
        const {selectedRestaurant} = this.props;
        if(!selectedRestaurant){
            return this.loading();
        }else if (!this.state.ready){
            this.callDataBase();
            return this.loading();
        }else{
            return(
                <View style={{ flex: 1, backgroundColor: '#fff'}}>
                    <Header/>
                    <ScrollView>
                        <Text>{this.props.selectedRestaurant}</Text>
                    </ScrollView>
                    <FooterBar/>
                </View>
    
            );
        }

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

mapStateToProps = state => {
    return {selectedRestaurant: state.selectedRestaurant};
}

export default connect(mapStateToProps)(Alimentos);