/**
 * This is where you configure the validation rules
 */

export default function TodoModalFormValidationRules(values) {
  let errors = {};

  if (!values.status) {
    errors.status = 'Please select status.';
  }

  if (!values.prority) {
    errors.prority = 'Please select prority.';
  }

  if (!values.description) {
    errors.description = 'Please enter description.';
  }

  return errors;
}
