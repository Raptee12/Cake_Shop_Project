import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {BsPatchMinusFill} from 'react-icons/bs'
import {BsFillPatchPlusFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import { addToCart,deleteFromCart} from '../actions/cartAction'
import Checkout from '../components/Checkout'
const CartScreen = () => {
    const cartState = useSelector((state) => state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch()
    const subTotal = cartItems.reduce((x,item) => x + item.price, 0)
  return (
    <>
      <Container>
        <Row>
            <Col md={6}>
                <h1>My Cart Items:</h1>
                <Row>
                    {cartItems.map((item) => (
                            <div key={item._id}>
                            <Col md={7}>
                                <h5>{item.name} [{item.varient}]</h5>
                                <h6>Price: {item.quantity} X {item.prices[0][item.varient]} = {" "}{item.price}</h6>
                                <h6>Quantity: &nbsp; <BsPatchMinusFill className='text-danger' style={{cursor:"pointer"}} onClick={() => {dispatch(addToCart(item,item.quantity-1, item.varient))}} /> {" "} &nbsp; {item.quantity} &nbsp; <BsFillPatchPlusFill style={{cursor:"pointer"}} onClick={() => {dispatch(addToCart(item,item.quantity+1, item.varient))}} className='text-success'/> &nbsp; <AiFillDelete className='text-danger' style={{cursor:"pointer"}} onClick={() => {dispatch(deleteFromCart(item))}}/></h6>
                                 
                            </Col>
                            <Col md={5}>
                                <img alt={item.name} src={item.image} style={{width:'80px',height:'80px'}}/>
                            </Col>
                            <hr />
                            </div>
                        ))
                    }
                </Row>
            </Col>
            <Col md={4}>
                <h1>Payment Info:</h1>
                <h4>Sub Total</h4>
                <h4>{subTotal} Rs/- </h4>
                <Checkout subTotal={subTotal} />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartScreen