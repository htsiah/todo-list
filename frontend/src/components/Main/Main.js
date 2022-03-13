import React, { useState } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col, CardHeader, CardBody } from 'reactstrap';

import TodoTable from '../ToDoTable/ToDoTable';
import LatestTable from '../LastestTable/LastestTable';
import ReviewStatistics from '../ReviewStatistic/ReviewStatistic';
import ReviewChart from '../ReviewChart/ReviewChart';

const Todo = (props) => {
  const [activeTab, setActiveTab] = useState('all');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <ContentWrapper>
      <Card>
        <form className='ie-fix-flex'>
          <div role='tabpanel'>
            <Nav tabs justified>
              <NavItem>
                <NavLink
                  href='#latest'
                  className={activeTab === 'latest' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTab('latest');
                  }}
                >
                  Latest List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='#all'
                  className={activeTab === 'all' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTab('all');
                  }}
                >
                  All List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='#review'
                  className={activeTab === 'review' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTab('review');
                  }}
                >
                  Review
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='latest' role='tabpanel'>
                {activeTab === 'latest' && <LatestTable />}
              </TabPane>
              <TabPane tabId='all' role='tabpanel'>
                <TodoTable />
              </TabPane>
              <TabPane tabId='review' role='tabpanel'>
                <ContentWrapper>
                  <Container fluid>
                    <Row>
                      <Col md={6}>{activeTab === 'review' && <ReviewStatistics />}</Col>
                      <Col md={6}>{activeTab === 'review' && <ReviewChart />}</Col>
                    </Row>
                  </Container>
                </ContentWrapper>
              </TabPane>
            </TabContent>
          </div>
        </form>
      </Card>
    </ContentWrapper>
  );
};

export default Todo;
