
function UserLogin(){
    let userLogin = document.getElementById('inputLogin').value 
    let userPassword = document.getElementById('inputPassword').value 

    let emailMsg = document.getElementById('emailMsg')
    let passwordMsg = document.getElementById('passwordMsg')

    let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


     /**********Email type input (start)***********/ 

    if(userLogin.includes('@')==false){
        document.getElementById('inputLogin').style.border = '1px solid red'
        emailMsg.innerText = "Please type a valid email address."
    }else{
        document.getElementById('inputLogin').style.border = '1px solid #282828'
        emailMsg.innerText = ""
    }
    /***********Email type input (end)**********/ 


     /**********Password type input (start)***********/ 

    if(userPassword.length < 8){
        document.getElementById('inputPassword').style.border = '1px solid red'
        passwordMsg.innerText = "Password field must includes min 8 symbol."
    }else{
        document.getElementById('inputPassword').style.border = '1px solid #282828'
        passwordMsg.innerText = ""
    }

    /**********Password regex validation (start)***********/ 

    if(!regularExpression.test(newPassword)) {
        document.getElementById('inputPassword').style.border = '1px solid red'
        passwordMsg.innerText = "password should contain atleast one number and one special character."
    }else{
        document.getElementById('inputPassword').style.border = '1px solid #282828'
        passwordMsg.innerText = ""
    }

    /**********Password regex validation (end)***********/ 
}