window.addEventListener("load", () => {
    const hour = new Date().getHours();
    let greeting = "Hello!";
    if(hour < 12) greeting = "Good Morning!";
    else if(hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    const greetingElement = document.querySelector(".greeting");
    if(greetingElement){
        greetingElement.textContent = `${greeting} I'm Mucherla Uma Devi, a passionate Full-Stack Developer.`;
    }
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === ""){
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    if(!emailPattern.test(email)){
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    contactForm.reset();
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
