//Larry's coding

function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    for (var i = 0 ; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== "-") {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}