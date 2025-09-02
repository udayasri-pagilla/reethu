function handleRegister(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get form data
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("errorMessage");

    // Clear previous error message
    errorMessage.textContent = "";

    // Check if all fields are filled out
    if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required.";
        return;  // Exit the function and prevent further actions
    }

    // Validate if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;  // Exit the function and prevent further actions
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;  // Exit the function and prevent further actions
    }

    // Hide the registration form
    document.getElementById("formContainer").style.display = "none";

    // Show Thank You message
    document.getElementById("thankYouMessage").style.display = "block";

    // Start balloon animation
    createBalloons();
}

// Create Balloons animation
function createBalloons() {
    let balloonsContainer = document.getElementById("balloons");
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.animationDelay = `${Math.random() * 2}s`; // Randomize delay
        balloonsContainer.appendChild(balloon);
    }
}
