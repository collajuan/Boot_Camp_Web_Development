
//Agrega evento click a todos los elementos con clase .drum
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        alert("click")
    })
}