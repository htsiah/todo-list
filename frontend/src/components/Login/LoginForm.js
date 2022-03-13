import React from 'react';
import { Input } from 'reactstrap';

import LoginFormValidation from './LoginFormValidation';
import LoginFormValidationRules from './LoginFormValidationRules';

const LoginForm = () => {
  // Initial Fields Value
  const INITIAL_FIELDS_VALUES = {
    username: '',
    password: '',
  };

  const { handleSubmit, handleChange, errors, isSubmitting } = LoginFormValidation(INITIAL_FIELDS_VALUES, LoginFormValidationRules);

  return (
    <div>
      <div className='container' style={{ marginTop: '50px' }}>
        <div className='row'>
          <div className='col-sm'>
            <img className='img-fluid ie-fix-flex' src='img/bg7.jpg' alt='Demo'></img>
          </div>
          <div className='col-sm align-self-center'>
            <div className='card card-flat'>
              <div style={{ marginTop: '15px' }}> </div>
              <div className='card-header text-center'>
                <p className='text-center py-2'>Welcome To Do Web App</p>
              </div>
              <div className='card-body'>
                <p className='text-center py-2'> SIGN IN TO CONTINUE.</p>
                <form className='mb-3' name='formLogin' onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <div className='input-group with-focus'>
                      <Input type='username' id='username' name='username' onChange={(e) => handleChange(e)} className={errors.username ? 'form-control is-invalid' : 'border-right-0'} placeholder='Username' data-validate='["required"]' autoFocus />
                      <div className='input-group-append'>
                        <span className='input-group-text text-muted bg-transparent border-left-0'>
                          <em className='fa fa-user'></em>
                        </span>
                      </div>
                    </div>
                    {errors.username && <p className='text-danger'>{errors.username}</p>}
                  </div>
                  <div className='form-group'>
                    <div className='input-group with-focus'>
                      <Input type='password' id='password' name='password' onChange={(e) => handleChange(e)} className={errors.password ? 'form-control is-invalid' : 'border-right-0'} placeholder='Password' data-validate='["required"]' />
                      <div className='input-group-append'>
                        <span className='input-group-text text-muted bg-transparent border-left-0'>
                          <em className='fa fa-lock'></em>
                        </span>
                      </div>
                    </div>
                    {errors.password && <p className='text-danger'>{errors.password}</p>}
                  </div>
                  <button className='btn btn-block btn-primary mt-3' disabled={isSubmitting} type='submit'>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
