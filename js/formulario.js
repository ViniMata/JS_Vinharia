document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.getElementById("successMessage").style.display = "block";

    document.getElementById("contactForm").reset();


    setTimeout(function() {
        document.getElementById("successMessage").style.display = "none";
    }, 3000); 
});