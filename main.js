
const User = document.getElementById('username')
const Email= document.getElementById('email')
const Pass = document.getElementById('password')
const rePass = document.getElementById('repssword')
const form = document.getElementById('form')

// form.addEventListener('submit', logSubmit)

let arr = JSON.parse(localStorage.getItem("users"))

let users = arr || []

//clear localstorage

function logSubmit(event){

    let obj = {name: User.value , mail: Email.value , Password: Pass.value }
    users.push(obj)

    let userCon = /^[a-zA-Z]/
    let mailCon = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/
    let checkPass = /^^[A-Za-z]\w{5,31}$/

    console.log(true);

    let a = false 
    let b = false
    let c = false 
    let d = false 

    if (User.value.match(userCon)){
        a = true 
        document.getElementById("errName").innerHTML = ""
    } else {
        document.getElementById("errName").style.display = 'block'
        document.getElementById("errName").innerHTML = "**The name is not valid" 
    }

    if(Email.value.match(mailCon)){
        b = true
        document.getElementById("errEmail").innerHTML = ""
    } else{
        document.getElementById("errEmail").style.display = 'block'
        document.getElementById("errEmail").innerHTML = "**The email is not valid"
    }

    if(Pass.value.match(checkPass)){
        c = true
        document.getElementById("match").innerHTML = ""
    } else{
        document.getElementById("match").style.display = 'block'
        document.getElementById("match").innerHTML = "**The password does not match"
    }

    if(Pass.value === rePass.value){
        d = true
    } else{
        document.getElementById("match").style.display = 'block'
        document.getElementById("match").innerHTML = "**The password does not match"
    }

    console.log(users);

    if(a==true && b==true  &&  c==true   &&  d==true ){
        localStorage.setItem("users", JSON.stringify(users));

         console.log(true);
         console.log(true);

        window.location=("./login.html")  
    }
    event.preventDefault();
 
}

// localStorage.clear()

////////////////////////////////////////////////////////////////////////////

