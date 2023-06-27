
function SignupValidation(values) {
  let errors = {};

  if (!values.fullname.trim()) {
    errors.fullname = "Full Name is required";
  }

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
}

export default SignupValidation;
