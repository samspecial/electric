export default function validateInfo(values) {
  let errors = {};
  const emailRegex = RegExp(/\S+@\S+\.\S+/);
  const passwordRegex = RegExp(
    /^.*(?=.{16,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
  );
  //first name
  if (!values.firstname.trim()) {
    errors.firstname = "Firstname required";
  }

  //last name
  if (!values.lastname.trim()) {
    errors.lastname = "Lastname required";
  }

  // Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Password
  if (!values.password) {
    errors.password = "Password required";
  } else if (!passwordRegex.test(values.email))
    errors.password =
      "password needs to be 16 characters or more, must contain A-Z,0-9,alphanumeric";

  return errors;
}
