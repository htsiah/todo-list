/**
 * This is where you configure the validation rules
 */

export default function LoginFormValidationRules(values) {
  let errors = {};

  if (!values.username) {
    errors.username = 'Field is required.';
  }

  if (!values.password) {
    errors.password = 'Field is required.';
  }

  return errors;
}
