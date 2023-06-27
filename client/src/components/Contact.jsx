import React from 'react'
import {Container,Row,Col,Table,Image} from 'react-bootstrap'
import {FiPhoneCall} from'react-icons/fi'
import {ImMobile} from'react-icons/im'
import {AiOutlineMail} from'react-icons/ai'
const Contact = () => {
  return (
    <>
       <Container style={{marginTop:'50px'}}>
          <Row>
            <Col md={6}>
             <h1>Cake Shop</h1>
             <p>We will generally overlook that satisfaction doesn’t originate from something we don’t have yet but rather from perceiving and acknowledging what we do… Satisfaction is fellowship… Joy is festivity. It’s tied in with acquiring bliss and praising life.</p>
             <p>Spreading bliss and commending each snapshot of life is the mantra at our cake shop started its endeavor with Handmade Chocolates and gradually moved into Cakes, Pastries, and unified items.</p>
             
             <Table striped bordered hover className='text-center'>
              <thead>
                <tr>
                  <th className='bg-warning text-center' colSpan={3}>... Contact Details ...</th>
         
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td><FiPhoneCall/></td>
                    <td>Phone</td>
                    <td>012-3456789</td>
          
                  </tr>
                  <tr>
                    <td><ImMobile/></td>
                    <td>Call</td>
                    <td>0123456789</td>
          
                  </tr>
                  <tr>
                    <td><AiOutlineMail/></td>
                    <td>Email</td>
                    <td>Cake@help.com</td>
          
                  </tr>
       
                </tbody>
             </Table>
            </Col>
            <Col md={6}>
              <Image src="/images/cake.png" style={{width:'100%', height:'100%'}}/>
            </Col>
          </Row>
       </Container>
    </>
  )
}

export default Contact