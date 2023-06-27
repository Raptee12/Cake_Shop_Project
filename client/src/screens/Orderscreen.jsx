import React, {useEffect} from 'react'
import { getUserOrders } from '../actions/orderAction'
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import Error from '../components/Error'

const Orderscreen = () => {
    const orderState = useSelector((state) => state.getUserOrderReducer)
    const {loading, error, orders} = orderState
   const dispatch = useDispatch()
   useEffect(() => {
     dispatch(getUserOrders())
   },[dispatch])
  return (
    <>
        <h1>Your Orders</h1>
        {loading && (<Loader />)}
        {error && (<Error error="something went wrong"/>)}
        {orders && orders.map((order) => (
           <div className='container border p-4 bg-light' key={order._id}>
            <Row >
                <Col md={4}>
                   { order.orderItems.map((item) => (
                    
                    <div className='container'  key={item._id}>
                        
                        <h6 key={item.name}>{item.name} [{item.varient}] * {item.quantity} = {item.price}</h6>
                    </div>
        ))}
                </Col>
                <Col md={4}>
                  <h4>Address</h4>
                  <h6>Street : {order.shippingAddress.street}</h6>
                  <h6>City : {order.shippingAddress.city}</h6>
                  <h6>Pincode : {order.shippingAddress.pincode}</h6>
                  <h6>Country : {order.shippingAddress.country}</h6>
                  </Col>
                <Col md={4}>
                  <h4>Order Info</h4>
                  <h6>Order Amount : {order.orderAmount}</h6>
                  <h6>Transaction id : {order.transactionId}</h6>
                  <h6>Order id : {order._id}</h6>
                </Col>
            </Row>
            </div>
        ))}
    </>
  )
}

export default Orderscreen