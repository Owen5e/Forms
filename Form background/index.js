const wrapper = document.querySelector(".wrapper");
const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");

signupBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signinBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
