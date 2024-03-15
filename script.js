const inpName = document.querySelector(".name");
const inpDate = document.querySelector("#date");
const inpColor = document.querySelector("#color");
const button = document.querySelector("button");
const error = document.querySelector(".error");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const obj = {
        name: inpName.value,
        date: inpDate.value,
        color: inpColor.value,
    };
    if ((inpName.value !== "", inpDate.value !== "")) {
        console.log(obj);
        error.innerHTML = "";
    } else {
        error.innerHTML = "Все поля обязательны для заполнения";
    }
});
