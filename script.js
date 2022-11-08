const username=document.getElementById('name');
const number=document.getElementById('number');
const email=document.getElementById('email');
const enquiry=document.getElementById('enquiry');
const form=document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    ValidateInputs();
    
});

const setError = (Element , message ) => {
    const inputControl = Element.parentElement
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.ClassList.remove('success')
}

const ValidateInputs = () => {
    const usernamevalue = username.value.trim();
    const numbervalue = number.value.trim();
    const emailvalue = email.value.trim();
    const enquiryvalue = enquiry.value.trim();


}
    if (usernamevalue === ''){
        setError (username, 'username is required')
    } else {
    setSucess(username);
    }

    if (numbervalue === ''){
        setError (number, 'n umber is required')
    } else {
    setSucess(number);}
    
    if (emailvalue === ''){
        setError (email, 'email is required')
    } else {
    setSucess(email);
    }

    if (enquiryvalue === ''){
        setError (enquiry, 'enquiry is required')
    } else {
    setSucess(enquiry);
    }





