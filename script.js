function validateFrm(){

    //to validate the password.

    var pass=document.getElementById("pass").value
    var conpass=document.getElementById("conpass").value
    if(pass != conpass){
        document.getElementById("passSpan").innerHTML="Passwords don't match."
        document.getElementById("passSpan").style.color="red";
        document.getElementById("passSpan").style.visibility="visible";
        return false;
    }
    
    //to validate first name

    var fstname = document.getElementById("fstname").value;
    for(let i=0; i<fstname.length; i++){
        if((fstname[i] >= 'a' && fstname[i] <= 'z') || (fstname[i] >= 'A' && fstname[i] <= 'Z') || (fstname[i] === ' '))  {

        }  
        else{
        document.getElementById("firstSpan").innerHTML="Enter a valid name"
        document.getElementById("firstSpan").style.color="red";
        document.getElementById("firstSpan").style.visibility="visible";
        return false;
        }
    }
    
    //to validate last name.

    var lstname = document.getElementById("lstname").value;
    for(let i=0; i<lstname.length; i++){
        if((lstname[i] >= 'a' && lstname[i] <= 'z') || (lstname[i] >= 'A' && lstname[i] <= 'Z') || (lstname[i] === ' '))  {

        }  
        else{
        document.getElementById("lastSpan").innerHTML="Enter a valid name"
        document.getElementById("lastSpan").style.color="red";
        document.getElementById("lastSpan").style.visibility="visible";
        return false;
        }
    }
    
    // to validate phone number.

    var phone = document.getElementById("phonenumber").value;
    if(phone.length != 10){
        document.getElementById("phoneSpan").innerHTML="Enter a valid number."
        document.getElementById("phoneSpan").style.color="red";
        document.getElementById("phoneSpan").style.visibility="visible";
        return false;
    }
    else if(phone[0] >='0' && phone[0] <= '5'){
        document.getElementById("phoneSpan").innerHTML="Enter a valid number."
        document.getElementById("phoneSpan").style.color="red";
        document.getElementById("phoneSpan").style.visibility="visible";
        return false;
    }
    else{
        for(let i=0; i<10; i++){
            if(phone[i] >= '0' && phone[i] <= '9'){

            }
            else{
        document.getElementById("phoneSpan").innerHTML="Enter a valid number."
        document.getElementById("phoneSpan").style.color="red";
        document.getElementById("phoneSpan").style.visibility="visible";
        return false;
            }
        }
    }
    
    //to validate email

        var email = document.getElementById("mail").value
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {

          }else {
            document.getElementById("mailSpan").innerHTML="Enter a valid E-mail address."
            document.getElementById("mailSpan").style.color="red";
            document.getElementById("mailSpan").style.visibility="visible";
            return false;
          }
        
    var fstName=document.getElementById('fstname').value;
    var lstName=document.getElementById('lstname').value;
    var password=document.getElementById('pass').value;
    var cpassword=document.getElementById('conpass').value;
    var gender=document.getElementById('gen').value;
    var mail=document.getElementById('mail').value;
    var num=document.getElementById('phonenumber').value;
    var que=document.getElementById('question').value;
    var answer=document.getElementById('ans').value;

    console.log(fstName)
    console.log(lstname)
    console.log(password)
    console.log(cpassword)
    console.log(gender)
    console.log(mail)
    console.log(num)
    console.log(que)
    console.log(answer)
    
            var fstName=document.getElementById('fstname').value;
            var lstName=document.getElementById('lstname').value;
            var password=document.getElementById('pass').value;
            var cpassword=document.getElementById('conpass').value;
            var gender=document.getElementById('gen').value;
            var mail=document.getElementById('mail').value;
            var num=document.getElementById('phonenumber').value;
            var que=document.getElementById('question').value;
            var answer=document.getElementById('ans').value;
            const storage = {
                fname : fstName,
                lname : lstname,
                pswd : password,
                cpswd : cpassword,
                gdr : gender,
                mlad : mail,
                phn : num,
                qu : que,
                an : answer
            };

            const storage_string = JSON.stringify(storage);
            console.log(storage_string);
            localStorage.setItem("data", storage_string);


            const rows = [document.getElementById("fstname").value, document.getElementById("lstname").value, document.getElementById("mail").value, document.getElementById("phonenumber").value];
           const table = document.getElementById("tableid");
                var tbody = document.createElement("tbody");
                for (let i = 0; i < rows.length; i++) {
                    let td = document.createElement("td");
                    let d = document.createTextNode(rows[i]);
                    td.style.border = "2px solid black"
                    td.appendChild(d);
                    td.style.padding = '10px';
                    td.style.textAlign = "center";
                    tbody.append(td);
                }
                table.appendChild(tbody);
        
            

        }
        
