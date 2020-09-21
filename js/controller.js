(function() {

    var DOMs = {
        body: document.querySelector("body"),
        window1: document.querySelector(".window1"),
        window2: document.querySelector(".window2"),
        box_cat_left: document.querySelector(".box-categories-left"),
        hand_icon: document.querySelector(".hand_icon"),
        btn1: document.querySelector("#start-button")
    }

    //main page button click event
    DOMs.btn1.addEventListener("click", function() {

        setTimeout(function() {

            DOMs.window1.style.opacity = "0";
            //DOMs.body.style.overflow = "auto";
            setTimeout(function() {
                DOMs.window1.style.display = "none";
                DOMs.window2.style.display = "flex";
                setTimeout(function() {
                    DOMs.window2.style.opacity = "1";
                }, 450);
            }, 900);

        }, 800);

    })

    //manage of hand icon display
    DOMs.box_cat_left.addEventListener("scroll", function() {
        DOMs.hand_icon.style.display = "none";
    });


    /*
    var main = function() {

    }
    main();
    */

})();