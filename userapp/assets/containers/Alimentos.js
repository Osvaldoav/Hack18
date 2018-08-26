import React,{Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from './Header';
import {connect} from 'react-redux';
import ProductDetail from './ProductDetail';
import FooterBar from './FooterBar';
import * as actions from '../actions';
import AlimentoDetail from './AlimentoDetail';

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
        this.callDataBase.bind(this);
      }

    callDataBase(){
        const data =  
            [{
                Title: 'Hot Dogs',
                Products: [{
                    Title: 'Hot Dog',
                    Description: '2 pzas',
                    Price: 42,
                    image: 'http://s3.amazonaws.com/wordpress-n77dj22gw2eczv6a/wp-content/uploads/sites/2/2017/08/29133438/Screen-Shot-2017-08-29-at-1.34.14-PM.png'
                    },
                    {
                    Title: 'Bacon Cheese dog',
                    Description: '1 pza',
                    Price: 30,
                    image: 'http://nathansfamousnorthmyrtlebeach.com/wp-content/uploads/2016/02/bacon-cheese-dog.png'
                    },
                    {
                    Title: 'Papas a la francesa',
                    Description: '',
                    Price: 28,
                    image: 'https://cdn.kiwilimon.com/recetaimagen/240/th5-640x426-2510.jpg'
                    }
                ]
            }];
        this.setState({data, ready: true});
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

    renderProducts(){
        products = undefined;
        this.state.data.forEach(category => {
            products = category.Products.map(pro => 
                <AlimentoDetail key={pro.Title} product={pro}></AlimentoDetail> 
            );
        });
        return products;
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
      }
  }

mapStateToProps = state => {
    return {selectedRestaurant: state.selectedRestaurant};
}

export default connect(mapStateToProps)(Alimentos);