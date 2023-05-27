var invalidatedDiv = document.getElementById("invalidated");

//Creates a session storage item called "isloggedin" and assigns a value
export function setLoggedIn(value) {
  sessionStorage.setItem("isLoggedIn", value);
}

//Returns the value of "isloggedin" session storage
export function isLoggedIn() {
  return sessionStorage.getItem("isLoggedIn");
}

export function showInvalidCredentialsMessage(){
  invalidatedDiv.textContent = "Invalid Credentials";
}

export function hideInvalidCredentialsMessage(){
  invalidatedDiv.style.display = "none";
}
