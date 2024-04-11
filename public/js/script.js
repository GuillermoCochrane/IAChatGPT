window.addEventListener("load", ()=>{
    const $index = document.querySelector("#index");
    const $sumario = document.querySelector(".sumario");

    $index.addEventListener("click", function() {
        $sumario.classList.toggle("hidden");
    })
})