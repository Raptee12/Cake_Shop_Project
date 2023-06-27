import React, {useEffect} from 'react'
import {Row, Col, Container, Button, ButtonGroup} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import Userlist from './Admin/Userlist'
import Cakeslist from './Admin/Cakeslist'
import AddNewCake from './Admin/AddNewCake'
import Orderlist from './Admin/Orderlist'
import Editcake from './Admin/Editcake'
const AdminScreen = ({history}) => {
    const userState = useSelector((state) => state.loginUserReducer)
    const {currentUser} = userState
    useEffect(() => {
     if(localStorage.getItem('currentUser') === null || !currentUser.isAdmin){
      window.location.href = '/'}
    }, [currentUser])
    
  return (
    <>
    <Container>
      <Row>
        <h1 className='text-center bg-dark text-light p-2'>Admin Panel</h1>
        <Col md={2}>
        <ButtonGroup vertical style={{minHeight:'400px'}}>
          <Button onClick={() => history.push('/admin/userlist')}>All Users</Button>
          <Button onClick={() => history.push('/admin/cakelist')}>All Cakes</Button>
          <Button onClick={() => history.push('/admin/addnewcake')}>Add New Cake</Button>
          <Button onClick={() => history.push('/admin/orderlist')}>All Orders</Button>
        </ButtonGroup>
            </Col>
            <Col md={10}>
                <Switch>
                   <Route path='/admin' component={Userlist} exact/> 
                   <Route path='/admin/editcake/:cakeId' component={Editcake} exact/>
                   <Route path='/admin/userlist' component={Userlist} exact/>
                   <Route path='/admin/cakelist' component={Cakeslist} exact/>
                   <Route path='/admin/addnewcake' component={AddNewCake} exact/>
                   <Route path='/admin/orderlist' component={Orderlist} exact/>
                </Switch>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default AdminScreen