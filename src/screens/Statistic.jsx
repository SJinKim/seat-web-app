import React from 'react'
import Header from '../components/Header'
import { TableOne, TableTwo } from '../data/data'
import { Row, Col, Nav, Tab } from 'react-bootstrap'

const Statistic = () => {
  return (
    <>
      <Header title='Statistic' />

      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <TableOne />
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <TableOne />
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                <TableOne />
              </Tab.Pane>
              <Tab.Pane eventKey='fourth'>
                <TableOne />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <div className='border border-dark'>
            <Row>
              <Col sm={3}>
                <Nav variant='pills' className='justify-content-between flex-row'>
                  <Nav.Item>
                    <Nav.Link eventKey='first'>1부</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>2부</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>3부</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='fourth'>총계</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </div>
        </Row>
      </Tab.Container>
      <TableTwo />
    </>
  )
}

export default Statistic
