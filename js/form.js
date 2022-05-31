var email = document.querySelector('#email');
var username = document.querySelector('#username') ;
var message= document.querySelector('#message');
var form = document.querySelector("#myForm");

function checkName (){
    var min = 3;
    var name = username.value.trim();
    if(name.length <= 3){
       showError(username , "Name Must be More Than 3 Character");
    }
    else{
        removeError(username )
    }

}

function checkEmail(){

    
    console.log('teeest')
    var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   
   console.log(re.test(emailValid))
    var emailValid = email.value.trim()
    console.log(emailValid)
    if(emailValid === ""){
        showError(email , "Email Must be Not Empty")
    }
    else if(!re.test(emailValid)) {
        showError(email , "Enter Valid Email")
    }
    else{
        removeError(email)
    }
}

function checkmass(){
  var min = 10;
    var name = message.value.trim();
    if(name.length <= 10){
       showError(message , "message Must be More Than 10 Character");
    }
    else{
        removeError(message )
    }

}


function showError(input , message){

    
    var small = input.nextElementSibling;
    
    small.textContent=message;

    
    console.log(input)
    input.style.borderColor="red"
    console.log(small)
}
function removeError(input){
    var small = input.nextElementSibling;
    small.textContent="";
    input.style.borderColor = "gray";
}



form.addEventListener('input', function (e) {
    console.log(e.target.id); 

    switch (e.target.id) {
        case 'username':
            checkName()
            break;
            
        case 'email':
            checkEmail();
            break;
            
        case 'message' :
            checkmass()
            break;    
    }


})



