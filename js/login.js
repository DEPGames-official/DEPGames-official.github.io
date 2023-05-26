import { setLoggedIn, isLoggedIn } from "./check.js";

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
        setLoggedIn(true);
        alert("Welcome!");
        //Redirect to another page or do something
    }
    else{
        setLoggedIn(false);
        alert("DENIED!");
        //Clear the form fields or show error message
    }
})

