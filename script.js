function goToprojects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}
document.getElementById("contactForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Please fill all fields before submitting.");
        event.preventDefault();
    }

});