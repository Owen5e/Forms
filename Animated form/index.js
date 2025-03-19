const signupBtn = document.querySelector(".signupBtn");
const signinBtn = document.querySelector(".signinBtn");
const wrapper = document.querySelector(".wrapper");

signupBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signinBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
