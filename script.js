function test(){
    var pass=document.getElementById('password').value;
    if((document.getElementById('password').value)!=(document.getElementById('confirmpassword').value))
    {
        alert("Passwords don't match.");
    }
}