function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}