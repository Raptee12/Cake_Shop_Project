import React,{useState,useEffect} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { getCakeById, updateCake  } from '../../actions/cakeAction'
import Loader from '../../components/Loader'
import Error from '../../components/Error'


const Editcake = ({match}) => {
  const [name, setname] = useState('')
  const [smallPrice, setsmallPrice] = useState('')
  const [mediumPrice, setmediumPrice] = useState('')
  const [largePrice, setlargePrice] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const dispatch = useDispatch()
  const getCakeByState = useSelector((state) => state.getCakeByIdReducer)
  const {error,cake} = getCakeByState
  const updateCakeState = useSelector((state) => state.updateCakeByIdReducer)
  const {updateloading} = updateCakeState
    useEffect(() => {
      if(cake){
       if(cake._id === match.params.cakeId){
        setname(cake.name)
        setdescription(cake.description)
        setcategory(cake.category)
        setimage(cake.image)
        setsmallPrice(cake.prices[0]['small'])
        setmediumPrice(cake.prices[0]['medium'])
        setlargePrice(cake.prices[0]['large'])
       }else{
        dispatch(getCakeById(match.params.cakeId))
       }
    }else{
        dispatch(getCakeById(match.params.cakeId))
       }
       
    },[cake, dispatch, match.params.cakeId])
    const submitForm = (e) =>{
        e.preventDefault()
        const updatedCake = {
          _id:match.params.cakeId,
          name,image,description,category,
          prices:{
            small:smallPrice,
            medium:mediumPrice,
            large:largePrice,
          }
        }
        dispatch(updateCake(updatedCake))
    }
  return (
    <div>
    {updateloading && (<Loader />)}
    {error && (<Error error='add new cake error' />)}
    
    <Form onSubmit={submitForm} className='bg-light p-4'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Name"/>
        </Form.Group>
           
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Small Price</Form.Label>
          <Form.Control type="text" value={smallPrice} onChange={(e) => setsmallPrice(e.target.value)} placeholder="Enter Small Price"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Medium Price</Form.Label>
          <Form.Control type="text" value={mediumPrice} onChange={(e) => setmediumPrice(e.target.value)} placeholder="Enter MediumPrice"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Large Price</Form.Label>
          <Form.Control type="text" value={largePrice} onChange={(e) => setlargePrice(e.target.value)} placeholder="Enter Large Price"/>
        </Form.Group>
      </Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={image} onChange={(e) => setimage(e.target.value)} placeholder="Add Image URL" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Enter Description"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" value={category} onChange={(e) => setcategory(e.target.value)} placeholder="Enter Category" />
      </Form.Group>
      
      <Button variant="primary" type='submit'>
        Update Cake
      </Button>
    </Form>
    </div>
  )
}


export default Editcake