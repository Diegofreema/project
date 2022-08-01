const popp =  document.querySelector(".portfolio-popup");
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-button")) {
        toggleport();
    }
})
function toggleport() {
   popp.classList.toggle("open")
   console.log(popp)
}
    