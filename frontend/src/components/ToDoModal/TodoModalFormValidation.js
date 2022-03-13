import { useEffect, useState } from 'react';
import moment from 'moment';

import { useHttpClient } from '../Hooks/HTTPHooks';

const TodoModalFormValidation = (initialFormValues, FormValidationRules, props) => {
  const [values, setValues] = useState({ ...initialFormValues });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    setValues({
      ...initialFormValues,
    });
  }, [props.showTodoModal]); // eslint-disable-line

  useEffect(() => {
    if (props.docID === '') {
      setValues({
        ...initialFormValues,
      });
    } else {
      const fetchFieldValues = async () => {
        try {
          const responceData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/todolist/getbyid?id=' + props.docID);
          setValues({
            ...responceData,
            dueAt: moment(responceData.dueAt).format('DD-MMM-YYYY'),
          });
        } catch (err) {}
      };
      fetchFieldValues();
    }
  }, [props.docID]); // eslint-disable-line

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        props.toggleTodoModal('');
        if (props.docID === '') {
          const createDoc = async () => {
            try {
              const responce = await fetch(process.env.REACT_APP_BACKEND_URL + '/todolist', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  status: values.status,
                  priority: values.priority,
                  description: values.description,
                  dueAt: moment(values.dueAt).format('DD-MMM-YYYY'),
                }),
              });
              const responseData = await responce.json();
              props.addTableData({
                ...values,
                id: responseData._id,
              });
              setIsSubmitting(false);
            } catch (err) {}
          };
          createDoc();
        } else {
          const updateDoc = async () => {
            try {
              await sendRequest(
                process.env.REACT_APP_BACKEND_URL + '/todolist?id=' + props.docID,
                'PATCH',
                JSON.stringify({
                  status: values.status,
                  priority: values.priority,
                  description: values.description,
                  dueAt: moment(values.dueAt).format('DD-MMM-YYYY'),
                }),
                { 'Content-Type': 'application/json' }
              );
              props.updateTableData({
                ...values,
                id: props.docID,
              });
              setIsSubmitting(false);
            } catch (err) {}
          };
          updateDoc();
        }
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

  const handleCustomChange = (type, fieldname, value) => {
    if (type === 'date_m') {
      if (value === '') {
        setValues({
          ...values,
          [fieldname]: moment(values[fieldname]),
        });
      } else {
        setValues({
          ...values,
          [fieldname]: value,
        });
      }
    } else {
      setValues({
        ...values,
        [fieldname]: value,
      });
    }
  };

  const handleBlur = () => {
    setErrors(FormValidationRules(values));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(FormValidationRules(values));
    setIsSubmitting(true);
    // Move to call useEffect
    // If there is error, no submit.
  };

  return {
    handleSubmit,
    handleChange,
    handleCustomChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
};

export default TodoModalFormValidation;
