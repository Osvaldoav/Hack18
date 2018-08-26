export const selectProduct = (product) => {
    return {
        type: 'select_product',
        payload: product
    };
};

export const selectFooter = (name) => {
    return {
        type: 'select_footer',
        payload: name
    }
}

export const selectRestaurant = (restaurant) => {
    return {
        type: 'select_restaurant',
        payload: restaurant
    }
}

export const selectPedido = (pedido) => {
    return {
        type: 'select_pedido',
        payload: pedido
    }
}