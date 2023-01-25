// let formEl = document.querySelectorAll(`#formEl`);
// let inputEl = document.querySelectorAll(`.form-input`);
// let selectEl = document.querySelectorAll(`#select`);
// let dollor = document.querySelectorAll(`.result-dollor`);

// formEl.addEventListener(`submit`, (e) => {
//     e.preventDefault()

//     if(selectEl.value === `dollor`){
//         dollor.textContent = Math.round(Number(inputEl.value) / 11000) + `$`;
//     }else if (selectEl.value === `rubil`){
//         dollor.textContent = Math.round(Number(inputEl.value) / 180) + ` P`;
//     }
// }) ;
// const formEl = document.querySelector(`#SginInId`);

// formEl.addEventListener(`submit`), (e) => {
//     const userName = document.querySelector(`#user`);
//     const passwor = document.querySelector(`#password`);

    
// }






const loginArr = []




let signIn = document.getElementById(`signinBtn`);
signIn.style.display="none";

    function signUp (){
    let title = document.querySelector("#title");
    let signUp = document.querySelector("#signupBtn");
    let signIn = document.querySelector("#signinBtn");
    let userName = document.querySelector(".userName");
    let password = document.querySelector(".password");
    let treyPassword = document.querySelector(".treypassword");
   
    let user = userName.value;
    let pass = password.value;
    let treyPass = treyPassword.value;
    
   
    let  loginObj = {
        name:user,
        password:pass,
        treyPassword:treyPass,
    }

      

        if(loginObj.name && loginObj.password && loginObj.treyPassword) {
            const isPassTrue = loginObj.treyPassword === loginObj.password
            if(isPassTrue){
                loginArr.push(loginObj)
                alert("You have successfully logged in")
                treyPassword.style.display = 'none';
                title.textContent = 'Sign In';
                signUp.style.display = 'none';
                signIn.style.display= "block";
            }else{
                alert("Passwords do not match")
            }
        
        }else{
            alert("Please fill all the fields")
        }
    
    

    
    // console.log(loginArr);
    

};




function login () {

    let users = document.querySelector('.userName');
    let psw = document.querySelector('.password');
    // console.log(users);


    const sign = {
        name:users.value,
        password:psw.value,
    }
    console.log(sign); 

  for(let i = 0; i < loginArr.length; i++){

      
      if(loginArr[0].name != sign.name || loginArr[0].password != sign.password){
        alert(`Erorr tekshiring`)
      }else{
        alert(`Welcome to the websayt`)
      }

    }
}

































// function login (){



//     let users = document.querySelector(".userName");
//     let psw = document.querySelector(".password");
//     const signIn = {
//         name:users,
//         password:psw,
//     }

//     if(signIn.name == loginArr[0] && signIn.password == loginArr[1]){
//         alert(`saytga hush kelibsiz`)
//     }else if( signIn.name != loginArr[0]){
//         alert(`ismingini tekshiring`)
//     }else if(signIn.password != loginArr[1]){
//         alert(`parolni tekshiring`)
//     }

//     function def(event){
        
//     let users = document.querySelector(".userName");
//     let psw = document.querySelector(".password");
//         if(users.value =="" && psw.value == ""){
//             alert(`qayta tekshirib ko'ring`)
//         }else{
//             let title = document.querySelector(".title");
//             title.textContent = ""
//             let signup = document.querySelector("#SignupBtn");
//             let signin = document.querySelector("#signIn");
//             let users = document.querySelector(".userName");
//             let psw = document.querySelector(".password");
//             title.textContent = "Xush kelibsiz";
//             signin.style.display = "none";
//             signup.style.display = "none";
//             users.style.display = "none";
//             psw.style.display = "none";
//         }
// }
// def()
// }






// if(userName.value == ""){
//     alert (`ismingizni kiriting`)
// }
// else if (password.value != treyPassword.value){
//     alert(`parollarni bir xil kirting`);
// }else if(password.value == treyPassword.value && userName.value == ""){
//     alert(`ok`)
// }
// else if( password.value && treyPassword.value == ""){
//     alert(`parol kiritng`)
// }else{
//     alert(userName.value + " " + `siz ruxyaxatdan otdingiz`)
// }

