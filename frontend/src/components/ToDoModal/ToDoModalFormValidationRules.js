/**
 * This is where you configure the validation rules
 */

export default function TodoModalFormValidationRules(values) {
  let errors = {};

  if (!values.status) {
    errors.status = 'Please select status.';
  }

  if (!values.priority) {
    errors.priority = 'Please select priority.';
  }

  if (!values.description) {
    errors.description = 'Please enter description.';
  }

  return errors;
}
