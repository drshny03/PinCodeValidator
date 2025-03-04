//regex to validate pincode
const regex = /^[0-9]{3}\s?[0-9]{3}$/;

//function to validate pin code
function validate(pincode){
    return regex.test(pincode);
}

console.log(validate(400088));
console.log(validate("A40088"));
console.log(validate("400088B"));
console.log(validate("400 088"));
