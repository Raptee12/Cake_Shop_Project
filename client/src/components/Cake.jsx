import React, {useState} from 'react'
import {Card, Button, Row, Col, Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addToCart } from '../actions/cartAction'

const Cake = ({cake}) => {
    const [varient, setVarient] = useState('small')
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const addToCartHandler = () => {
      dispatch(addToCart(cake, quantity, varient))
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Card style={{ width: '18rem' , marginTop:"30px"}}>
      <Card.Img variant="top" 
      src={cake.image} style={{height:"300px",cursor:'pointer'}} onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{cake.name}</Card.Title>
        <hr />
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select value={varient} onChange={e => setVarient(e.target.value)}>
                    {cake.varients.map((varient) => {
                        return(
                        <option >{varient}</option>
                    )})}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((v,i) =>{
                        return(
                            <option value={i+1} >{i+1}</option>
                        )
                    })}
                </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
            <Col md={6}>Price : {cake.prices[0][varient]*quantity} Rs/- </Col>
            <Col md={6}>
                <Button onClick={addToCartHandler} className='bg-warning text-white'>Add To Cart</Button>
            </Col>
        </Row>
      </Card.Body>
    </Card>
     {/*modal*/}
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cake.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <Card.Img variant="top" 
      src={cake.image} style={{height:"300px"}}/>
            </div>
            <div>
                <h5>Description : </h5>
                 <h6>{cake.description}</h6>
            </div>

        </Modal.Body>
       </Modal>
    </>
  )
}

export default Cake