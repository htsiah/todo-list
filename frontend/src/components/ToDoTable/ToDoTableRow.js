import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import DelBtn from '../Common/DelBtn';
import { AuthContext } from '../Contexts/AuthContext';

const ToDoTableRow = (props) => {
  const auth = useContext(AuthContext);

  return (
    <>
      {props.data.map((ToDo) => (
        <tr key={ToDo.id}>
          <td>{ToDo.status}</td>
          <td>{ToDo.priority}</td>
          <td>{ToDo.description}</td>
          <td>{moment(ToDo.dueAt).format('DD-MMM-YYYY')}</td>
          <td></td>
        </tr>
      ))}
    </>
  );
};

export default ToDoTableRow;
