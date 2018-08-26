import React,{Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Button, Icon} from 'native-base';
import {Grid, Row} from 'native-base';
import Card from './Card';
import QRScreen from './QRScreen';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Modal from 'react-native-modalbox';

class PedidoDetail extends Component {

    constructor(props){
        super(props);
    }
    render(){
        const {Id, description, pedidoId, precio, product, status, tupperId, userId, hour, minute} = this.props.product;
        const {Data, Data2, TitleStyle, ImageStyle, TopViewStyle, BottomViewStyle, PointsStyle, ButtonStyle, ButtonTextStyle, StarTextStyle} = styles;
        return(
            <Card>
                <View style={TopViewStyle}>
                    <View style = {{flex: 1}}>
                        <Image style={ImageStyle} source={require('../images/pedido-icon.png')} resizeMode="center"/>
                    </View>
                    <View style = {{flex: 2}}>
                        <Text style={TitleStyle}>Pedido #{pedidoId}</Text>
                    </View>
                </View>
                <View style={Data}>
                    <Text>{product}................. x1</Text>
                </View>
                <View style={Data}>
                    <Text>{description}</Text>
                </View>
                <View style={Data}>
                    <Text>Total ${precio}</Text>
                </View>
                <View style={Data}>
                    <Text>Hora -> {hour}:{minute}</Text>
                </View>
                <View style={Data2}>
                    <Text style={{color: '#44f', fontWeight: 'bold'}}>Status: {status}</Text>
                </View>
                
            </Card>
        );
    }
}

const styles = {
    TitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
    Data: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 30,
    },
    Data2: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        justifyContent: 'flex-end'
    },
    ImageStyle: {
        height: 40,
        width: 40,
        marginTop: 7
    },
    TopViewStyle: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 5
    },
    BottomViewStyle: {
        flexDirection: 'row',
        marginTop: 15
    },
    PointsStyle: {
        color : '#6d6',
        fontSize: 20,
        marginLeft: 30,
        marginTop: '2%'
    },
    ButtonStyle: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        marginLeft: '30%',
        marginBottom: '2%'
    },
    ButtonTextStyle: {
        fontSize: 16,
        color: "#fff"
    },
    StarStyle: {
        height: 10,
        width: 10,
        marginTop: -5
    },
    StarTextStyle: {
        paddingTop: 15,
        marginLeft: -15
    }
};

export default connect(null, actions)(PedidoDetail);