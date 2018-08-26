export default (state = null, action) => {
    switch(action.type){
        case 'select_restaurant':
            return action.payload;
        default:
            return state;
    }
};