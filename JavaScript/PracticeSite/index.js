// Accept user input

let username;

//username = window.prompt();
//console.log(username);

// Accepting user input with a text box
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH3").textContent = `Hello ${username}`
}

let count = 0;
document.getElementById("myIncr").onclick = function() {
    count = document.getElementById("myCount").value;
    
}
