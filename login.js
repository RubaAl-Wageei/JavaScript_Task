
const logmail = document.getElementById('mail')
const password = document.getElementById('pass')
const form = document.getElementById('form')
form.addEventListener('click', logSubmit)


let Users = JSON.parse(localStorage.getItem("users"))

console.log(true);

function logSubmit(event){
    console.log(true);
    console.log('Hello');

    let compmail = logmail.value 
    let compPass = password.value
        if (compmail==""&&compPass=="" ){
            document.getElementById("err").style.display = 'block'
            document.getElementById("err").innerHTML = "**please inter your email and password"
            console.log(true);
            }

        users.map(e => {
            if (compmail !== e.mail && compPass !== e.password ){
                document.getElementById("err").style.display = 'block'
                document.getElementById("err").innerHTML = "**please inter correct your email and password"
                console.log(true);
            }
            })
        
        users.map(e => {  
            if(e.mail === compmail && e.password == compPass && compmail !== "" && compPass !== ""){
                console.log(true);
                window.location=("./home.html")
            }
            })
            
        event.preventDefault();

}


// var users = JSON.parse(localStorage.getItem("users"));
// console.log(true);
//         function logSubmit(event) {
//             console.log(true);
//             console.log('hello from submit');
//             let compmail = logmail.value 
//             let compPass = password.value
//             if (compmail==""&&compPass=="" ){
//                 document.getElementById("err").style.display = 'block'
//                 document.getElementById("err").innerHTML = "**please inter your email and password"
//             console.log(true);
//             }
//             users.map(e => {
//             if (compmail !== e.mail && compPass !== e.password ){
//                 document.getElementById("err").style.display = 'block'
//                 document.getElementById("err").innerHTML = "**please inter correct your email and password"
//             console.log(true);
//             }
//             })
        
//             users.map(e => {
                
//             if(e.mail === compmail && e.password == compPass && compmail !== "" && compPass !== ""){
//                 console.log(true);
//                 window.location=("./home.html")
//             }
//             })
            
//             event.preventDefault();
//         }

//         const logmail = document.getElementById('mail')
//         const password = document.getElementById('pass')
//         const form = document.getElementById('form')
//         form.addEventListener('click', logSubmit)