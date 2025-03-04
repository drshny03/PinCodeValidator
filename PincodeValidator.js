//regex to validate pincode
const regex = /^[0-9]{6}$/;

//function to validate pin code
function validate(pincode){
    return regex.test(pincode);
}

console.log(validate(400088));
console.log(validate("A40088"));
console.log(validate("400088B"));