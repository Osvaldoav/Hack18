import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button, Grid, Col} from 'native-base';
import QRCode from 'react-native-qrcode';
import { connect } from 'react-redux';

class QRScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        //const {Id, Points} = this.props.product;
        //const str = Id + '|' + Points;

        return (
            <View style={styles.ContainerStyle}>
                <Text>Especificaciones de tu pedido:</Text>
                <TextInput multiline numberOfLines={4} style={{height: 100, width: 250,  borderWidth: 1,
        borderColor: "#ddd", marginTop: 10}} placeholder="Sin cebolla, poco tomate" editable />
                        <Button block danger style={styles.margin}><Text>Cancel</Text></Button>
                        <Button block success style={styles.margin}><Text>Add</Text></Button>
            </View>
        );
    }
}


const styles = {
    ContainerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    margin: {
        marginTop: 10,
    }
};

const mapStateToProps = state => {
    return {product: state.selectedProduct};
};

export default connect(mapStateToProps)(QRScreen);