//regex to validate pincode
const regex = /^[0-9][0-9]{5}$/;

//function to validate pin code
function validate(pincode){
    return regex.test(pincode);
}

console.log(validate(400088));
console.log(validate("A40088"));