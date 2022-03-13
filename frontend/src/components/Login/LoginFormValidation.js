import React, { useEffect, useContext } from 'react';

import { AuthContext } from '../Contexts/AuthContext';
import { useHttpClient } from '../Hooks/HTTPHooks';

const LoginFormValidation = (initialFormValues, LoginFormValidationRules) => {
  const [values, setValues] = React.useState(initialFormValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { sendRequest } = useHttpClient();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        const authentication = async () => {
          // try {
          //   const responseData = await sendRequest(
          //     process.env.REACT_APP_BACKEND_URL + '/system/authentication',
          //     'POST',
          //     JSON.stringify({
          //       username: values.username,
          //       password: values.password,
          //     }),
          //     {
          //       'Content-Type': 'application/json',
          //     }
          //   );
          //   if (responseData.status) {
          auth.login(values.username);
          //   } else {
          //     setErrors({ password: 'Invalid username or wrong password.' });
          //   }
          //   setIsSubmitting(false);
          // } catch (err) {}
        };
        authentication();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting]); // eslint-disable-line

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value, // use the bracket surrounding the event.target.name to dynamically change the property.
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(LoginFormValidationRules(values));
    setIsSubmitting(true);
    // Move to call useEffect
    // If there is error, no submit.
  };

  return { handleSubmit, handleChange, errors, isSubmitting };
};

export default LoginFormValidation;
