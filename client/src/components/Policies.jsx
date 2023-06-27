import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Policies = () => {
  return (
    <>
       <Container style={{marginTop:'50px'}}>
          <h1>Terms and Policies</h1>
          <Row>
            <Col md={10}>
              <h6>Our Terms and Policies</h6>
              <p>All our Products made by us are subject to the following Terms and Conditions.</p>
              <h6>INGREDIENTS</h6>
              <p>All cakes, fillings and icings may contain, or come into contact with, soy, wheat, dairy, nuts or other allergens.</p>
              <p>It is the responsibility of the Customer to inform me prior to the confirmation of their booking of any allergy issues. It is the responsibility of the Customer to inform their guests of all allergy information and accordingly the Supplier will not be held liable for any allergic reaction resulting from consumption of the cake.</p>
              <p>All products are made to be eaten on the day of the celebration.</p>
              <h6>QUOTATIONS</h6>
              <p>All Quotations are valid for 7 days from the date of issue.</p>
              <h6>ORDERS</h6>
              <p>We prefer at least fourteen (14) days notice for all orders, as we are continually booked in advance. We will however endeavor, where availability permits accept short notice cakes.</p>
              <p>Any Products ordered from a picture or photo of a product produced by any other cake maker, can only be reproduced by us  as our interpretation of that product and will NOT be an exact reproduction of the product in the picture or photo.</p>
              <h6>DAMAGE</h6>
              <p>If a third party will be collecting the cake on the customer’s behalf, a release form is to be signed by that person, stating the cake is received in good condition at the time of pickup/delivery.</p>



            </Col>
          </Row>
       </Container>

    </>
  )
}

export default Policies