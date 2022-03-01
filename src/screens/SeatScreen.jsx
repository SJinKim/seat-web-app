import React from 'react'
import { Row, Col, Nav, Tab } from 'react-bootstrap'
import { BiDesktop } from 'react-icons/bi'
import Hallinfo from '../components/Hallinfo'
import Header from '../components/Header'
import Seat from '../components/Seat'
import { Rowcount, Colcount } from '../data/data'

//Seat Navigation
import SeatOneA from './SeatPlans/SeatOneA'
import SeatOneB from './SeatPlans/SeatOneB'
import SeatTwoA from './SeatPlans/SeatTwoA'
import SeatTwoB from './SeatPlans/SeatTwoB'

//row col managing
const SeatScreen = () => {
  const row = []
  const col = []
  for (var i = 0; i < Rowcount.length; i++) {
    row.push(<Seat key={i} />)
  }
  return (
    <>
      <Header title='Seat' />
      <Hallinfo />
      <div className='d-flex flex-column mt-4 mx-2 border border-dark'>
        <div className='mx-auto mb-2 fs-5'>
          <BiDesktop size={25} />
          <div className='border border-dark' />
        </div>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <SeatOneA />
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <SeatOneB />
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <SeatTwoA />
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <SeatTwoB />
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Row>
              <Col sm={3}>
                <Nav variant='pills' className='justify-content-between flex-row'>
                  <Nav.Item>
                    <Nav.Link eventKey='first'>1층A</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>1층B</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>2층A</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='fourth'>2층B</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Row>
        </Tab.Container>
      </div>
    </>
  )
}

export default SeatScreen
