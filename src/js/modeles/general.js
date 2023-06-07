let burger = document.querySelector("#burger");

document.addEventListener("DOMContentLoaded", ()=> {
    burger.addEventListener("click", ()=> {
        burger.classList.toggle("active");
    })
})