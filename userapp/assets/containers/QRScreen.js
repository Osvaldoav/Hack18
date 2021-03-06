import React, {Component} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {Button, Grid, Col, Icon} from 'native-base';
import QRCode from 'react-native-qrcode';
import { Title, TouchableOpacity } from 'native-base';
import { connect } from 'react-redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

class QRScreen extends Component {
    constructor(props){
        super(props);
        this.state = {text: '', selectedHours: 0, selectedMinutes: 0};
    }

    render(){
        const {product} = this.props;
        const {wachu} = this.props;
        const {selectProduct, selectPedido, selectFooter} = this.props;
        return (
            <View style={styles.ContainerStyle}>
                <TimePicker
                selectedHours={this.state.selectedHours}
                selectedMinutes={this.state.selectedMinutes}
                onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                /> 
                
           
                <Text style={{marginBottom: 5}}>Especificaciones de tu pedido:</Text>
                <TextInput 
                    multiline numberOfLines={4} 
                    style={{height: 100, width: 250,  borderWidth: 1,borderColor: "#ddd",}} 
                    placeholder="Sin cebolla, poco tomate" 
                    editable 
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    />
                    <View alignItems="center">
                        <Button block success style={{marginTop: 15, width: 200, marginLeft: 20}} 
                            onPress={() => {
                                const db = firebase.firestore();
                                const data = {
                                    userId: 0,
                                    product: product.Title,
                                    description: this.state.text,
                                    tupperId: 0,
                                    pedidoId: 231,
                                    precio: product.Price,
                                    status: 'Confirmado',
                                    hour: this.state.selectedHours,
                                    minute: this.state.selectedMinutes
                                }
                                const settings = {timestampsInSnapshots: true};
                                db.settings(settings);
                                db.collection("ordenesPendientes").doc("id_0").set(data).then(()=>{
                                    console.log('listo');
                                    Alert.alert('Pedido #231 confirmado!', 'Tu orden estara lista pronto', [{text: 'OK', onPress: () => {selectFooter('calendar'); Actions.Pedidos()}}], { cancelable: false });
                                    selectPedido(true);
                                });
                                wachu.refs.modal3.close();
                            }}>
                            <Icon name='cart' />
                            <Text style={{color: "#fff"}}>Comprar</Text>
                        </Button>
                    </View>
            </View>
        );
    }
}


const styles = {
    ContainerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
};

const mapStateToProps = state => {
    return {product: state.selectedProduct};
};

export default connect(mapStateToProps, actions)(QRScreen);