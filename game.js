let goText = "Go"
let pauseText = "Pause"
let resetText = "Reset"

function Go(){
    document.getElementById("outputTest").innerHTML = goText
}
function Pause(){
    document.getElementById("outputTest").innerHTML = pauseText
}
function Reset(){
    document.getElementById("outputTest").innerHTML = resetText
}


const container = document.querySelector(".container");
        function onMouseDrag({ movementX, movementY }) {
            let getContainerStyle = window.getComputedStyle(container);
            let leftValue = parseInt(getContainerStyle.left);
            let topValue = parseInt(getContainerStyle.top);
            container.style.left = `${leftValue + movementX}px`;
            container.style.top = `${topValue + movementY}px`;
        }
        container.addEventListener("mousedown", () => {
            container.addEventListener("mousemove", onMouseDrag);
        });
        document.addEventListener("mouseup", () => {
            container.removeEventListener("mousemove", onMouseDrag);
        });