(function() {

    var DOMs = {
        window1: document.querySelector(".window1"),
        window2: document.querySelector(".window2"),
        btn1: document.querySelector("#start-button")
    }

    DOMs.btn1.addEventListener("click", function() {

        setTimeout(function() {

            DOMs.window1.style.opacity = "0";
            setTimeout(function() {
                DOMs.window1.style.display = "none";
                DOMs.window2.style.display = "flex";
                setTimeout(function() {
                    DOMs.window2.style.opacity = "1";
                }, 450);
            }, 900);

        }, 800);

    })

    /*
    var main = function() {

    }
    main();
    */

})();