import { isLoggedIn, setLoggedIn } from "./verify.js";

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevent the form from submitting
    
    //Get the username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var validUsername = "admin";
    var validPassword = "admin";

    //If we want to specify email
    //var validEmail = "email@something.com"

    if (username === validUsername && password === validPassword){
        //Set login session to true
        setLoggedIn(true);
        //Redirect to another page
        window.location.href = "./html/home.html";
    }
    else{
        alert("DENIED!");
        //Clear the form fields or show error message
        //Set login session to false
        setLoggedIn(false);
    }

});

