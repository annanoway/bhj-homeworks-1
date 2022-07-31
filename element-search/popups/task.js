let modal_main = document.querySelector("#modal_main");
modal_main.classList.add("modal_active")
let btn = document.querySelector(".btn");

let close1 = document.querySelector("#modal_main .modal__close")
let close2 = document.querySelector("#modal_success .modal__close") 

btn.onclick = function() {
    modal_main.classList.remove("modal_active");
    modal_success.classList.add("modal_active")
};
close1.onclick = function() {
    modal_main.classList.remove("modal_active");
}

close2.onclick = function() {
    modal_success.classList.remove("modal_active");
}