function attachEventsListeners() {
    let bts = Array.from(document.querySelector('input[type="button"]'));
    bts.forEach(b => b.addEventListener("click", calc));

    function calc(ev) {
        let typeBtn = ev.target.parentElement.children[1].id;
        let value = +ev.target.parentElement.children[1].value;

        let seconds = 0;
        switch (typeBtn) {
            case"days":
                seconds = value * 24 * 60 * 60;
                break;
            case"hours":
                seconds = value * 60 * 60;
                break;
            case"minutes":
                seconds = value * 60;
                break;
            case"seconds":
                seconds = value;
                break;
        }
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
    
        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    
    }

}