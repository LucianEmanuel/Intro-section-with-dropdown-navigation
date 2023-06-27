"use strict";
const wrapper = document.querySelector(".wrapper");
const drop = document.querySelectorAll(".drop");
const submenu = document.querySelectorAll(".submenu");
const modal = document.querySelector(".modal");
const mobileMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const submenu1 = document.querySelector(".submenu-1");
const submenu2 = document.querySelector(".submenu-2");
const drop1 = document.querySelector(".drop_1");
const drop2 = document.querySelector(".drop_2");

mobileMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("open-menu")) {
    wrapper.classList.add("block");
    modal.classList.remove("hidden");
    closeMenu.classList.remove("hidden");
    document.body.classList.add("overflow");
  } else if (e.target.classList.contains("close-menu")) {
    wrapper.classList.remove("block");
    modal.classList.add("hidden");
    closeMenu.classList.add("hidden");
    document.body.classList.remove("overflow");
  }
});
drop.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("first")) {
      submenu1.classList.toggle("rotate");
      drop1.classList.toggle("block");
    } else if (e.currentTarget.classList.contains("second")) {
      submenu2.classList.toggle("rotate");
      drop2.classList.toggle("block");
    }
  });
});
