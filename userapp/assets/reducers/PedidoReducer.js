export default (state = null, action) => {
    switch(action.type){
        case 'select_pedido':
            return action.payload;
        default:
            return state;
    }
};