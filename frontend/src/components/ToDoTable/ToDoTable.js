import React, { useState, useEffect, useContext } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Card, CardBody } from 'reactstrap';
import moment from 'moment';

import Datatable from '../Common/Datatable';
import ToDoTableRow from './ToDoTableRow';
import TodoModalForm from '../ToDoModal/ToDoModalForm';
import { AuthContext } from '../Contexts/AuthContext';

// CSS Loaders
import 'spinkit/css/spinkit.css';

const TodoTable = (props) => {
  const [tableData, setTableData] = useState();
  const [showToDoModal, setShowTodoModal] = useState(false);
  const [docID, setDocID] = useState('');
  const auth = useContext(AuthContext);

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

  const toggleTodoModal = (p_id) => {
    setDocID(p_id);
    setShowTodoModal((prevState) => !prevState);
  };

  const handleDeleteData = (id) => {
    setTableData((prevTableData) => prevTableData.filter((data) => data.id !== id));
  };

  const dtOptions = {
    pageLength: 10, // Show 10 rows
    paging: true, // Table pagination
    ordering: true, // Column ordering
    info: true, // Bottom left status text
    responsive: false,
    bAutoWidth: false, //for better responsiveness
  };

  return (
    <ContentWrapper>
      <div className='content-heading'>
        <div className='ml-auto'>
          <button className='btn btn-xs btn-secondary' type='button' onClick={(e) => toggleTodoModal('')}>
            <span className='btn-label'>
              <i className='fas fa-plus-square'></i>
            </span>
            Add Task
          </button>
          <TodoModalForm docID={docID} showTodoModal={showToDoModal} toggleTodoModal={toggleTodoModal} />
        </div>
      </div>
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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <ToDoTableRow data={tableData} onDeleteData={handleDeleteData} />
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

export default TodoTable;
