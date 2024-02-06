const menuButton = document.querySelector(".header__menu");
const sidebarMenu = document.querySelector(".sidebar-menu");

menuButton.addEventListener("click", () => {
  sidebarMenu.classList.toggle("sidebar-menu--active");
});
