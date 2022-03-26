export function validateSignupInfo(values) {
  let errors = {};
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const passwordRegex = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{16,})"
  );

  //first name
  if (!values.fullname.trim()) {
    errors.fullname = "Full name required";
  } else if (values.fullname.length < 5) {
    errors.fullname = "Full name must be 5+ character long.";
  }

  //last name
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Lastname required";
  } else if (values.phoneNumber.length < 11) {
    errors.phoneNumber = "Phone number not valid";
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

export function validatePackage(values) {
  let errors = {};
  if (!isNaN(values.duration) === false)
    errors.duration = "Duration must be a number";
  else if (!values.duration) {
    errors.duration = "Duration is required";
  }
  console.log(values.price);
  if (values.price < 0) {
    errors.price = "Price must be a number greater or equal to zero";
  } else if (values.price === false) {
    errors.price = "Price is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }
  if (!values.planName) {
    errors.planName = "Plan name is required";
  }

  if (values.benefits.length <= 0) {
    errors.benefits = "Benefits can not be empty";
  }
  if (!values.calltoAction) {
    errors.calltoAction = "Call to action required";
  }

  return errors;
}
