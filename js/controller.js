(function() {

    var DOMs = {
        body: document.querySelector("body"),
        window1: document.querySelector(".window1"),
        window2: document.querySelector(".window2"),
        window3: document.querySelector(".window3"),
        box_cat_left: document.querySelector(".box-categories-left"),
        hand_icon: document.querySelector(".hand_icon"),
        btn1: document.querySelector("#start-button"),
        btn2: document.querySelector("#search-button"),
        module_active: document.querySelector("#module-active"),
        module_inactive: document.querySelector("#module-inactive")
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

    //search button event
    DOMs.btn2.addEventListener("click", function(){

        setTimeout(function() {

            DOMs.window2.style.opacity = "0";
            setTimeout(function() {
                DOMs.window2.style.display = "none";
                DOMs.window3.style.display = "flex";
                setTimeout(function() {
                    DOMs.window3.style.opacity = "1";
                }, 450);
            }, 900);

        }, 800);

        setModuleEvents();
    })

    //manage of hand icon display
    DOMs.box_cat_left.addEventListener("scroll", function() {
        DOMs.hand_icon.style.display = "none";
    });

    //manage module touch event
    var module_functions = {
        simpleTouch: function() {
            DOMs.module_active.style.transform = "scale(.9)";
        },

        touchLeft: function() {
            DOMs.module_active.style.transform = "scale(1)";
        },

        drag: function() {
            DOMs.module_active.removeEventListener("touchend", module_functions.touchLeft, false);
            DOMs.module_active.style.transform = "scale(.9) translateX(-120vw)";
            setTimeout(function() {
                DOMs.module_active.id = "module-dragged";
                DOMs.module_inactive.id = "module-active";
                DOMs.module_active = document.querySelector("#module-active");
                setModuleEvents();
            }, 1200);
        }
    }
    var setModuleEvents = function() {
        DOMs.module_active.addEventListener("touchstart", module_functions.simpleTouch, false);
        DOMs.module_active.addEventListener("touchend", module_functions.touchLeft, false);
        DOMs.module_active.addEventListener("touchmove", module_functions.drag, false);
    }



    /*
    var main = function() {

    }
    main();
    */

})();