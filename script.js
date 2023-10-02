let pool = []

document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM LOADED")

    const drawBut = document.querySelector("#drawBut")

    drawBut.addEventListener("click", display);
});

function display(){ //will become the draw card but for now...
    document.querySelector(".slot>span").innerHTML  = 4
}

/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("Test successful!")
}