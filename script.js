document.getElementById("loginForm").addEventListener("submit", function(event) {  
    event.preventDefault(); 


    const username = document.getElementById("username").value;  
    const password = document.getElementById("password").value;  

   
    if (username === "malaz" && password === "1234") {  
        document.getElementById("message").innerText = "Successfully logged in!";  
        document.getElementById("message").style.color = "green";  
    } else {  
        document.getElementById("message").innerText = "Invalid username or password!";  
         document.getElementById("message").style.color = "red";
    }  
});