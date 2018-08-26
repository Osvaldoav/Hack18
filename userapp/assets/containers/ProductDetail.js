import React,{Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Button, Icon} from 'native-base';
import {Grid, Col} from 'native-base';
import Card from './Card';
import QRScreen from './QRScreen';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Modal from 'react-native-modalbox';

class ProductDetail extends Component {

    constructor(props){
        super(props);
    }
    render(){
        const {Id, image, Points, Provider, Title, StarStyle} = this.props.product;
        const {TitleStyle, ImageStyle, TopViewStyle, BottomViewStyle, PointsStyle, ButtonStyle, ButtonTextStyle, StarTextStyle} = styles;
        return(
            <Card>
                <View style={TopViewStyle}>
                    <View style = {{flex: 1}}>
                        <Image style={ImageStyle} source={{uri: image}} resizeMode="center"/>
                    </View>
                    <View style = {{flex: 2}}>
                        <Text style={TitleStyle}>{Title}</Text>
                        <Text>{Provider}</Text>
                    </View>
                    <View style = {{flex: 1}}>
                    <Grid>
                        <Col>
                            <Image style={StarStyle} source={require('../images/star-icon.png')} resizeMode="center"/>                        
                        </Col>
                        <Col style={StarTextStyle}>
                            <Text style={{color:"#eed229", fontWeight: "bold"}}>{Points}</Text>                        
                        </Col>
                    </Grid>
                    </View>
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
    ImageStyle: {
        height: 60,
        width: 60,
        borderRadius: 29
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

export default connect(null, actions)(ProductDetail);