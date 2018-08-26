import React, {Component} from 'react';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import * as actions from '../actions';

class FooterBar extends Component {

    textStyle(name){
        const {text, selectedText} = styles;
        return this.props.buttonSelected === name ? selectedText : text;
    }

    iconStyle(name){
        const {icon, selectedIcon} = styles;
        return this.props.buttonSelected === name ? selectedIcon : icon;
    }

    activeIconStyle(name){
        return this.props.buttonSelected === name;
    }



    render () {
        const {selectFooter} = this.props;
        const {container, button, icon, text, selectedIcon, selectedText} = styles;
        const textStyle = this.textStyle.bind(this),
              iconStyle = this.iconStyle.bind(this),
              activeIconStyle = this.activeIconStyle.bind(this);
        return (
            <View style={container}>
                <TouchableOpacity style={button} onPress={() => {selectFooter('search'); Actions.Products()}} activeOpacity={1}>
                    <Icon name="search" style={iconStyle('search')} active={activeIconStyle('search')}/>
                    <Text style={textStyle('search')}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={button} onPress={() => {selectFooter('calendar'); Actions.Pedidos()}} activeOpacity={1}>
                    <Icon name="calendar" style={iconStyle('calendar')} active={activeIconStyle('calendar')}/>
                    <Text style={textStyle('list')}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={button} onPress={() => {selectFooter('cart'); Actions.Scanner()}} activeOpacity={1}>
                    <Icon name="cart" style={iconStyle('cart')} active={activeIconStyle('cart')}/>
                    <Text style={textStyle('cart')}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={button} onPress={() => {selectFooter('profile')}} activeOpacity={1}>
                    <Icon name="person" style={iconStyle('profile')} active={activeIconStyle('profile')}/>
                    <Text style={textStyle('profile')}>Profile</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#fff',
        height: '8%',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#ddd'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 1
    },
    footerButton: {
        flex: 1,
        alignItems: 'center'
    },
    icon: {
        alignSelf: 'center',
        marginBottom: -5,
        color: '#555'
    },
    text: {
        color: '#555',
        fontSize: 12
    },
    selectedIcon: {
        alignSelf: 'center',
        marginBottom: -5,
        color: '#0033a0'
    },
    selectedText: {
        color: '#0033a0',
        fontSize: 12
    }
};

mapStateToProps = state => {
    return {buttonSelected: state.selectedFooter};
}

export default connect(mapStateToProps, actions)(FooterBar);