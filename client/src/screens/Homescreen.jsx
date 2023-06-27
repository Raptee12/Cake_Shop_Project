import React,{useEffect} from "react"

import {useDispatch, useSelector} from 'react-redux'
import {Container, Row, Col} from "react-bootstrap"
import {getAllCakes} from '../actions/cakeAction'
import Cake from "../components/Cake"
import Loader from "../components/Loader"
import Error from "../components/Error"
import Filters from "../components/Filters"

const Homescreen = () => {
  const dispatch = useDispatch()
  const cakestate = useSelector((state) => state.getAllCakeReducer)
  const{loading, cakes, error} = cakestate
  useEffect(() => {dispatch(getAllCakes())}, [dispatch])
  return (
    <>
      <Container>
        {loading ? (<Loader />)
                : error ? (<Error>Error while fetching cakes {error}</Error>)
                : (<Row>
                  <Filters/>
                  { cakes.map((cake) =>(
                     
                      <Col md={4} key={cake.name}>
                        <div>
                         <Cake cake={cake} />
                         </div>
                      </Col>
                  ))}
              </Row>)
      }
        
      </Container>
    </>
  )
}

export default Homescreen