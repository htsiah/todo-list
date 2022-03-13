import React, { useState, useEffect, useContext } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Card, CardBody } from 'reactstrap';
import moment from 'moment';

import Datatable from '../Common/Datatable';
import LatestTableRow from './LatestTableRow';
import { AuthContext } from '../Contexts/AuthContext';

// CSS Loaders
import 'spinkit/css/spinkit.css';

const LatestTable = (props) => {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // const responce = await fetch(process.env.REACT_APP_BACKEND_URL + '/customer');
        // const responceData = await responce.json();
        const responceData = [
          {
            id: '1',
            status: '2',
            priority: '3',
            description: '4',
            dueAt: moment(),
          },
          {
            id: '2',
            status: '2',
            priority: '3',
            description: '4',
            dueAt: moment(),
          },
        ];
        setTableData(responceData);
      } catch (err) {}
    };
    fetchCustomers();
  }, []);

  const dtOptions = {
    lengthChange: false,
    searching: false,
    paging: false, // Table pagination
    ordering: false, // Column ordering
    info: false, // Bottom left status text
    responsive: false,
    bAutoWidth: false, //for better responsiveness
  };

  return (
    <ContentWrapper>
      <Container fluid>
        <Card>
          <CardBody>
            {tableData === undefined && (
              <div className='card-body d-flex align-items-center justify-content-center'>
                <div className='sk-circle'>
                  <div className='sk-circle1 sk-child'></div>
                  <div className='sk-circle2 sk-child'></div>
                  <div className='sk-circle3 sk-child'></div>
                  <div className='sk-circle4 sk-child'></div>
                  <div className='sk-circle5 sk-child'></div>
                  <div className='sk-circle6 sk-child'></div>
                  <div className='sk-circle7 sk-child'></div>
                  <div className='sk-circle8 sk-child'></div>
                  <div className='sk-circle9 sk-child'></div>
                  <div className='sk-circle10 sk-child'></div>
                  <div className='sk-circle11 sk-child'></div>
                  <div className='sk-circle12 sk-child' s></div>
                </div>
              </div>
            )}

            {tableData !== undefined && (
              <div className='table-responsive'>
                <Datatable options={dtOptions}>
                  <table className='table table-striped my-4 w-100'>
                    <thead>
                      <tr>
                        <th data-priority='1'>Status</th>
                        <th>Priority</th>
                        <th>Description</th>
                        <th>Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <LatestTableRow data={tableData} />
                    </tbody>
                  </table>
                </Datatable>
              </div>
            )}
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default LatestTable;
