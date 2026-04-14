
const menu =document.getElementById('menubtn');
const nav =document.getElementById("nav");

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if
  (menu.classList.contains("active"))
  menu.textContent = "X"
  else
  menu.textContent =  "☰"
});