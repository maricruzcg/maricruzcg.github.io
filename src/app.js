const menu = document.querySelector(".menu-items");
const burguerButton = document.querySelector(".mcbutton");

console.log("hola mundo");

console.log(burguerButton);

console.log(menu);

// const hideShow = () => {
//     if(menu.classList.contains("is-active")){
//         menu.classList.remove("is-active");
//     } else {
//         menu.classList.add("is-active");
//     }
// }
// console.log(hideShow);
burguerButton.addEventListener("click", () => {
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active");
    } else {
        menu.classList.add("is-active");
    }
});

