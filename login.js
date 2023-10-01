let form=document.querySelector("form")
form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username=="" || password==""){
        alert("both should be filled")
    }
    else if(username==localStorage.getItem("username") && password==localStorage.getItem("password")){
        confirm("Logged in successfully")
        window.open("home.html")
    }
    else{
        alert("incorrect creditanls")
    }

})
// ! SHOW PASSWORD
function show_pwd(){
    let password=document.getElementById("password")
    if(password.type=="password")
    password.type="text"
else
password.type="password"

}

let username=document.getElementById("username")
let error1=document.getElementById("error1");
let submit_button=document.getElementById("submit_button")
username.addEventListener("keyup",()=>{
    let validation =username.value.length<6;
    if(validation==true){
        username.classList.add("warning")
        username.classList.remove("success")
        error1.innerHTML="username should be 6 characters"
        submit_button.disabled=true
        submit_button.classList.add("disabled")
    }else{
        username.classList.add("success")
        username.classList.remove("warning")
        error1.innerHTML=""
        submit_button.disabled=false
        submit_button.classList.remove("disabled")
    }
    
} )

let password=document.getElementById("password")
let error2=document.getElementById("error2");
password.addEventListener("keyup",()=>{
    let validation =password.value.length<6;
    if(validation==true){
        password.classList.add("warning")
        password.classList.remove("success")
        error2.innerHTML="password should be 6 characters"
    }else{
        password.classList.add("success")
        password.classList.remove("warning")
        error2.innerHTML=""
    }
    
} )
