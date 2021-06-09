export default function validateInfo(values) {
    let errors = {};
    const emailRegex = RegExp(/\S+@\S+\.\S+/);
    // Email
    if (!values.email)
        errors.email = "Email required";
    else if (!emailRegex.test(values.email))
        errors.email = "Email is invalid";

    // Password
    if (!values.password)
        errors.password = "Password required";
    else if (values.password.length < 8)
        errors.password = "password needstoo be 8 characters or more"
    return errors;
}