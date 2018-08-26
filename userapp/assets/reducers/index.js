import {combineReducers} from 'redux';
import SelectionReducer from './SelectionReducer';
import FooterReducer from './FooterReducer';
import RestaurantReducer from './RestaurantReducer';

export default combineReducers({
    selectedProduct: SelectionReducer,
    selectedFooter: FooterReducer,
    selectedRestaurant: RestaurantReducer
});