import { isLoggedIn } from "./verify.js";

//Checks if user is logged in before proceeding and redirects the user to login page if not
window.addEventListener("DOMContentLoaded", function() {
    if (isLoggedIn() === false || isLoggedIn() === null){
        window.location.href = "../index.html";
    }
});