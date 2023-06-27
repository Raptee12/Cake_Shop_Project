import React,{useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { Table} from "react-bootstrap"
import {deleteCake, getAllCakes} from '../../actions/cakeAction'
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Cakeslist = () => {
  const dispatch = useDispatch()
  const cakestate = useSelector((state) => state.getAllCakeReducer)
  const{loading, cakes, error} = cakestate
  useEffect(() => {dispatch(getAllCakes())}, [dispatch])
  return (
    <>
        
        {loading ? (<Loader />)
                : error ? (<Error>Error while fetching cakes {error}</Error>)
                : (
                    <div>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Cake Name</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                       {
                        cakes && cakes.map((cake, index) => (
                            <tr key={index}>
                                <td className="text-center">
                                        <a href={cake.image} target="_blank" rel="noopener noreferrer">
                                            <img src={cake.image} alt="Cake" style={{ width: '100px' }} />
                                        </a>
                                </td>
                                <td>{cake.name}</td>
                                <td>Small : {cake.prices[0]['small']}<br/>
                                    Medium : {cake.prices[0]['medium']}<br/>
                                    Large : {cake.prices[0]['large']}</td>
                                <td>{cake.category}</td>
                                <td className="text-center"> &nbsp; &nbsp;  
                                  <Link to={`/admin/editcake/${cake._id}`}>
                                   <AiFillEdit className="text-success" style={{cursor:"pointer"}}/> 
                                   </Link> &nbsp;&nbsp;
                                    <AiFillDelete style={{color:'red',cursor:"pointer"}} onClick={() => {dispatch(deleteCake(cake._id))}}/> &nbsp;&nbsp; </td>
                            </tr>
                        ))
                       }
                      </tbody>
                    </Table>
                  
                    </div>
                   
                )}
        
      
    </>
  )
}

export default Cakeslist