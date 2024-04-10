window.addEventListener("load", ()=>{
    const $index = document.querySelector("#index");
    const $sumario = document.querySelector(".sumario");
    const $body = document.querySelector("body");
    const $article = document.querySelector("article")

    $index.addEventListener("click", function() {
        $sumario.classList.toggle("hidden");
        $body.classList.toggle("hide-index")
        if(window.matchMedia("(max-width: 600px)")){
            $article.classList.toggle("hidden");
            $sumario.classList.toggle("show")
        }
    })
})