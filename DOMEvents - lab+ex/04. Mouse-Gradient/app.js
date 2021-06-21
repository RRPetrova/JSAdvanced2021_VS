function attachGradientEvents() {
    document.querySelector("#gradient").addEventListener("mousemove", onMove);

    function onMove(event) {
        let percent = Math.floor(event.offsetX / event.target.clientWidth * 100);
        
        document.querySelector("#result").textContent = percent + "%";
    }

}