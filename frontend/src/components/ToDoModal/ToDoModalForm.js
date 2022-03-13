import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

import TodoModalFormValidation from './TodoModalFormValidation';
import TodoModalFormValidationRules from './ToDoModalFormValidationRules';

const TodoModalForm = (props) => {
  const [docID, setDocID] = useState('');
  const INITIAL_FIELDS_VALUES = {
    id: '',
    status: '',
    priority: '',
    description: '',
    dueAt: moment(),
  };
  const { handleSubmit, handleChange, handleCustomChange, handleBlur, values, errors, isSubmitting } = TodoModalFormValidation(INITIAL_FIELDS_VALUES, TodoModalFormValidationRules, props);

  return (
    <>
      <Modal isOpen={props.showTodoModal} toggle={(e) => props.toggleTodoModal('')}>
        <ModalHeader toggle={(e) => props.toggleTodoModal('')}>{props.docID === '' ? 'Add New Item' : 'Edit Item'}</ModalHeader>
        <ModalBody>
          <form className='form-horizontal' onSubmit={handleSubmit}>
            <FormGroup row>
              <div className='col-xl-12'>
                <select id='status' name='status' type='text' onChange={handleChange} onBlur={handleBlur} value={values.status} className={errors.status ? 'custom-select custom-select-sm is-invalid' : 'custom-select custom-select-sm'}>
                  <option key='0' value=''>
                    Select Status
                  </option>
                  <option key='1' value='Incomplete'>
                    Incomplete
                  </option>
                  <option key='2' value='Completed'>
                    Completed
                  </option>
                </select>
                {errors.status && <p className='text-danger'>{errors.status}</p>}
              </div>
            </FormGroup>
            <FormGroup row>
              <div className='col-xl-12'>
                <select id='priority' name='priority' type='text' onChange={handleChange} onBlur={handleBlur} value={values.priority} className={errors.priority ? 'custom-select custom-select-sm is-invalid' : 'custom-select custom-select-sm'}>
                  <option key='0' value=''>
                    Select Priority
                  </option>
                  <option key='1' value='Low Priority'>
                    Low Priority
                  </option>
                  <option key='2' value='Medium Priority'>
                    Medium Priority
                  </option>
                  <option key='3' value='High Priority '>
                    High Priority
                  </option>
                </select>
                {errors.prority && <p className='text-danger'>{errors.prority}</p>}
              </div>
            </FormGroup>
            <FormGroup row>
              <div className='col-xl-12'>
                <Input id='description' name='description' type='text' value={values.description} onChange={handleChange} placeholder='Description' />
                {errors.description && <p className='text-danger'>{errors.description}</p>}
              </div>
            </FormGroup>
            <FormGroup row>
              <div className='col-xl-12'>
                <Datetime dateFormat='DD-MMM-YYYY' timeFormat={false} closeOnSelect={true} onChange={(value, event) => handleCustomChange('date_m', 'dueAt', value)} value={values.dueAt} inputProps={{ id: 'dueAt', name: 'dueAt', className: 'form-control' }} />
              </div>
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSubmit} disabled={isSubmitting}>
            {props.docID === '' ? 'Add New' : 'Save'}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TodoModalForm;
