import React,{useState} from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { filterCake } from '../actions/cakeAction'
const Filters = () => {
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState('all')
    const dispatch = useDispatch()
    return (
     <div className='p-4 bg-success mt-4'>
        <Form>
      <Row>
        <Col>
          <Form.Control className='border-warning' value={searchkey} onChange={(e) => setsearchkey(e.target.value)} placeholder="Search Cake" />
        </Col>
        <Col>
          <select className='form-select border-warning' value={category} onChange={(e) => setcategory(e.target.value)}>
           
           <option >All</option>
           <option >veg</option>
           <option >nonveg</option>
          </select>
        </Col>
        <Col>
         <Button className='bg-warning rounded-circle' onClick={() => {dispatch(filterCake(searchkey,category))}}>Search</Button>
        </Col>
      </Row>
    </Form>
     </div>
  )
}

export default Filters