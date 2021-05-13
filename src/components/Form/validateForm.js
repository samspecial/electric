export default function validateInfo(values) {
    let errors = {};
    const emailRegex = RegExp(/\S+@\S+\.\S+/);
    if (!values.fullname.trim()) {
        errors.fullname = "Fullname required";
    }
    // Email
    if (!values.email)
        errors.email = "Email required";
    else if (!emailRegex.test(values.email))
        errors.email = "Email is invalid";
    // Address
    if (!values.address)
        errors.address = "Address required";
    // Phone number
    if (!values.phoneNumber)
        errors.phoneNumber = "Phone number required";

    if (!values.cardname)
        errors.cardname = "Card name required";
    // Address
    if (!values.cardDigit)
        errors.cardDigit = "Card digit required";
    // Phone number
    if (!values.cvv)
        errors.cvv = "CVV digit required";
    return errors;
}