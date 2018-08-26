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
import PedidoDetail from './PedidoDetail';

import Modal from 'react-native-modalbox';
import QRScreen from './QRScreen';

class Pedidos extends Component{
    state = {products: [], productsLoaded: false};
    
    constructor() {
        super();
        this.state = {
          isOpen: false,
          isDisabled: false,
          swipeToClose: true,
          sliderValue: 0.3,
          first: true
        };

        this.renderPrices.bind(this);
        this.dataBase.bind(this);
      }

    dataBase(){
        const db = firebase.firestore();
        const settings = {timestampsInSnapshots: true};
        const {selectProduct} = this.props;
        db.settings(settings);
        db.collection('ordenesPendientes').get()
        .then((snapshot) => {
            pedidos = [];
            snapshot.forEach((doc) => {
                pedido = doc.data();
                pedido.Id = doc.id;
                pedidos.push(pedido);
            });
            this.setState({pedidos});
            this.setState({productsLoaded: true});
            this.setState({first: false});
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }

    componentWillMount(){
        const db = firebase.firestore();
        const settings = {timestampsInSnapshots: true};
        db.settings(settings);
        db.collection('ordenesPendientes').get()
        .then((snapshot) => {
            pedidos = [];
            snapshot.forEach((doc) => {
                pedido = doc.data();
                pedido.Id = doc.id;
                pedidos.push(pedido);
            });
            this.setState({pedidos});
            this.setState({productsLoaded: true});
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }

    renderPrices(){
        return this.state.pedidos.map(product => 
            <PedidoDetail key={product.Id} product={product}></PedidoDetail> 
        );
    }

    render(){
        
        return(
            <View style={styles.container}>
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

mapStateToProps = state => {
    return {selectedProduct: state.selectedProduct};
} 

export default connect(mapStateToProps, actions)(Pedidos);