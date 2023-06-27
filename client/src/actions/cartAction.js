export const addToCart = (cake, quantity, varient) => (dispatch,getState) => {
    var cartItem = {
        name: cake.name,
        _id: cake._id,
        image: cake.image,
        varient: varient,
        quantity: Number(quantity),
        prices: cake.prices,
        price: cake.prices[0][varient]*quantity,
    }
    if(cartItem.quantity > 10){
        alert('you can only add 10 cakes !')
    }else{
        if(cartItem.quantity < 1){
            dispatch({type:'DELETE_FROM_CART',payload:cake})
            localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
            
        }
        else{
            dispatch({type:"ADD_TO_CART", payload: cartItem})
            localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
            
        }
        
    }

}

export const deleteFromCart = (cake) => (dispatch,getState) => {
    dispatch({type:'DELETE_FROM_CART',payload:cake})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

