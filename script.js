function validatePass(){
    var pass=document.getElementById('password').value;
    if((document.getElementById('password').value)!=(document.getElementById('confirmpassword').value))
    {
        alert("Passwords don't match.");
    }
    
}

function validatePhone(){
    const phone = document.getElementById('phonenumber').value;
    const phoneRegex = /^\d{10}$/;
    console.log(console.log(phone));
    if(!phoneRegex.test(phone))
    {
        alert("Phone number does not match");
    }
}