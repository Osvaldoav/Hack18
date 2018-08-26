import React,{Component} from 'react';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from './Header';
import {connect} from 'react-redux';
import ProductDetail from './ProductDetail';
import FooterBar from './FooterBar';
import * as actions from '../actions';
import AlimentoDetail from './AlimentoDetail';
import Card from './Card';

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

        let platillos = [];

        db.collection(selectedRestaurant.Title).get()
        .then((snapshot) => {
            const docData = snapshot.docs[0].data().subCollections;
            const docId = snapshot.docs[0].id;
            const subCollections = Object.keys(docData).map((key) => {
                return docData[key];
            });
            Promise.all(subCollections.map((sub) => {
                return this.getItems(selectedRestaurant.Title, docId, sub, db);
            })).then((productsPool) => {
                let products = [];
                productsPool.forEach((p) => {
                    products = [...products, ...p];
                });
                this.setState({products, productsLoaded: true});
            });
            //this.setState({products, productsLoaded: true, ready: true});
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }

    getItems(collection, docId, sub, database) {
        return database.collection(collection).doc(docId).collection(sub).get().then((snapshot) => {
            return snapshot.docs.map(doc => {
                return doc.data();
            });
        });
    }

    loading(){
        return(
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
            <Header/>
            <ScrollView>
                <Text>LOADING</Text>
            </ScrollView>
            <FooterBar/>
        </View>
        );
    }

    popupQR(){
        this.refs.modal3.open();
    }

    renderProducts(){
        return this.state.products.map(product => 
            <TouchableOpacity key={product.Title} onPress={() => {this.popupQR()}} activeOpacity={1}>
                <AlimentoDetail product={product}></AlimentoDetail> 
            </TouchableOpacity>
        );
    }

    render(){
        console.log(this.state.products);
        const {selectedRestaurant} = this.props;
        const {detail, ImageStyle} = styles;
        if(!selectedRestaurant){
            return this.loading();
        }else if (!this.state.productsLoaded){
            this.callDataBase();
            return this.loading();
        }else{
            return(
                <View style={{ flex: 1, backgroundColor: '#fff'}}>
                    <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                        <QRScreen/>
                    </Modal>
                    <Header/>
                    <ScrollView>
                        {this.renderProducts()}
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
      },
      detail: {
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
      },
      ImageStyle: {
        height: 60,
        width: 60,
        borderRadius: 29
    },
  }

mapStateToProps = state => {
    return {selectedRestaurant: state.selectedRestaurant};
}

export default connect(mapStateToProps)(Alimentos);