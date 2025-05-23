const typeText = "I'm Kent James Indoc";
let i = 0;

function typeWriter() {
  if (i < typeText.length) {
    document.getElementById("nameTitle").innerHTML += typeText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
document.getElementById("nameTitle").innerHTML = "";
typeWriter();


document.getElementById("profileBtn").addEventListener("click", function () {
      document.getElementById("description").textContent =
        "I’m a dedicated and detail-oriented individual with a strong foundation in web development and IT. I have hands-on experience in front-end design, responsive layouts, and modern web technologies. I'm passionate about learning, building real-world projects, and growing as a developer.";
    document.getElementById("nameTitle").style.display = "none";
    document.getElementById("mainImg").src = "assets/img/profile.jpg";
    document.getElementById("profileContainer").style.display = "block";
  });

AOS.init();

const body = document.body;
const darkModeIcon = document.getElementById("darkModeIcon");

function toggleDarkMode() {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    darkModeIcon.classList.remove("bx-moon");
    darkModeIcon.classList.add("bx-sun");
  } else {
    darkModeIcon.classList.remove("bx-sun");
    darkModeIcon.classList.add("bx-moon");
  }
}

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const contactForm = document.querySelector(".contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});


