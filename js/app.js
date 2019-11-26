const menu = document.querySelector(".menu-items");
const burguerButton = document.querySelector(".mcbutton");

burguerButton.addEventListener("click", () => {
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active");
    } else {
        menu.classList.add("is-active");
    }
});

let elementsArray = document.querySelectorAll(".menu-links");

elementsArray.forEach(function(menu){
    menu.addEventListener("click", function(){
     burguerButton.checked = false;
    });
});

