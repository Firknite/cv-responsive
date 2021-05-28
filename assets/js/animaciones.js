let targets = document.querySelectorAll('.target');

window.addEventListener("scroll", function () {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    let windowHeight = window.innerHeight;

    for (i = 0; i < targets.length; ++i) {
        let target = targets[i];
        if (target.offsetTop < (top + (windowHeight / 1.5))) {
            target.classList.add("visible");
        }
        // else {
        //     target.classList.remove("visible");
        // }
    }
});