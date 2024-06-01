//This is the local storage and login/signup JavaScript code. 

//Note: The local storage code was originally AI-generated. However, I modified it to fit the design and functionality I wanted, as well as added a few other additions. :)

function signupFunc() { //shows the signup form when the user clicks "Sign Up Now!"
    document.getElementById("login-part").style.display = "none"; 
    document.getElementById("signup-part").style.display = "block"; 
}

function loginFunc() { //shows the login form
    document.getElementById("signup-part").style.display = "none"; 
    document.getElementById("login-part").style.display = "block"; 
}

function checkEmail(email) { //checks the email format
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailCheck.test(email); 
}

document.getElementById("signupForm").addEventListener("submit", function(e) { 
    e.preventDefault(); 

    const name = document.getElementById("signupName").value; 
    const uName = document.getElementById("signupUserName").value; 
    const email = document.getElementById("signupEmail").value; 
    const pass = document.getElementById("signupPass").value; 
    const confirmPass = document.getElementById("signupPass2").value; 

    if (!checkEmail(email)){ //checks email if it has the correct format
        alert("Email must have the [username]@[mailServer].[domain] format! Example: pengu@gmail.com"); 
        return; 
    }
    
    if (pass !== confirmPass){ //checks the passwords if they match
        alert("Your passwords don't match! Try again!"); 
        return; 
    }

    const user = { 
        name: name,
        username: uName,
        email: email,
        password: pass 
    }; 

    localStorage.setItem("user", JSON.stringify(user)); //local storage for signup information entered
    alert("Signup successful! Please login to the website."); 
    loginFunc(); 
}); 

document.getElementById("loginForm").addEventListener("submit", function(e) { 
    e.preventDefault(); 

    const username = document.getElementById("loginUserName").value; 
    const email = document.getElementById("login-email").value; 
    const password = document.getElementById("login-password").value; 

    if(!checkEmail(email)){ //checks email if it has the correct format
        alert("Email must have the [username]@[mailServer].[domain] format! Example: pengu@gmail.com"); 
        return; 
    }

    const storedInfo = JSON.parse(localStorage.getItem("user")); //gets items from the local storage (from the signup local storage)

    if(storedInfo && storedInfo.username === username && storedInfo.email === email && storedInfo.password === password){ /*if the username, email, and password are the same as what was entered in the signup form (with help from local storage)...*/
        window.location.href = "home.html"; /*the user is redirected to the home page.*/
    }
    else{ /*However, if the values don't match... */
        alert("Incorrect username, email, or password! Please try again!"); /*The page alerts the user to try again. */
        document.getElementById("loginForm").reset(); 
    }
}); 