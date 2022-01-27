export function validateSignupInfo(values) {
  let errors = {};
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const passwordRegex = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{16,})"
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
  } else if (!passwordRegex.test(values.password))
    errors.password =
      "password needs to be 16 characters or more, must contain A-Z,0-9,alphanumeric";

  return errors;
}

export function validateLoginInfo(values) {
  let errors = {};
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const passwordRegex = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{16,})"
  );

  // Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Password
  if (!values.password) {
    errors.password = "Password required";
  } else if (!passwordRegex.test(values.password))
    errors.password =
      "password needs to be 16 characters or more, must contain A-Z,0-9,alphanumeric";

  return errors;
}

export const calculateRemainingTime = () => {
  const currentTime = new Date().getTime();
  const expiryTime = new Date(10000).getTime();

  const loginDuration = expiryTime - currentTime;
  return loginDuration;
};
