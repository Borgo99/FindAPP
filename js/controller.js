(function() {

    var categories = {
        "auto e moto": ["compra vendita", "app utili", "altro"],
        "bambini": ["salute", "app da colorare", "giochi", "scuola", "altro"],
        "calcio": "calcio",
        "cibo": {
            "domicilio": "a domicilio",
            "ricette": ["vegan", "veggie", "per celiaci"],
            "ristorazione": "ristorazione"
        },
        "cultura": ["libri", "teatro", "concerti", "altro"],
        "economia": ["economia", "finanza e borsa", "notizie"],
        "fotografia": "fotografia",
        "grafica e design": "grafica e design",
        "giochi": ["arcade", "avventura", "trivia", "calcio", "macchine", "guerra", "altro"],
        "informazione": "news",
        "intrattenimento": ["radio", "riproduzione musicale", "riproduzione video"],
        "meteo": "meteo",
        "musica": ["streaming", "strumenti", "tutorial", "karaoke", "testi e spartiti", "altro"],
        "salute": ["alimentazione", "salute", "medicina", "altro"],
        "sport": ["basket", "caccia", "calcio", "fantacalcio", "fitness", "pesca", "palestra", "altri sport"],
        "utility": ["calcolatori", "traduttori", "note", "calendari", "registratori", "scanner", "gestione file", "altro"],
        "viaggi": ["aerei", "mappe", "treni", "vacanze", "guide", "altro"],
        "altro": "altro"
    }

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

    });

    //load categories in window2
    var loadCategories = function() {
        var data = Object.entries(categories);
        var index = 0;
        var name;
        var html_code = "";
        while(index < data.length) {
            name = data[index][0];
            html_code += '<input type="checkbox" name="param-' + index + '" id="param-' + index + '"><label for="param-' + index + '">' + name + '</label>';
            index++;
        }
        //console.log(html_code);
        return html_code;
    };
    const categories_html = loadCategories();
    DOMs.box_cat_left.innerHTML = categories_html;
    //add checkbox event
    (function() {
        var data = Object.entries(categories);

        function setCheckboxesEvent(data) {

            //setto evento della macrocategoria (se è già stata selezionata in precedenza)
            var macroCat = document.querySelector("#param-1000");
            if(macroCat != null) {
                macroCat.addEventListener("click", function() {
                    DOMs.box_cat_left.innerHTML = categories_html;
                    setCheckboxesEvent(Object.entries(categories));
                }) 
            }

            var index = 0;
            while(index < data.length) {
                //se ha delle sottocategorie
                if(Array.isArray(data[index][1])) {
                    document.querySelector("#param-" + index).addEventListener("click", function() {
                        var index = this.id.substring(6);
                        var array = Object.entries(categories)[index][1];
                        if(this.checked) {
                            var html_code = '<input type="checkbox" name="param-' + 1000 + '" id="param-' + 1000 + '" checked><label for="param-' + 1000 + '">' + this.nextSibling.textContent + '</label>';
                            for(var i=0; i<array.length; i++) {
                                html_code += '<input type="checkbox" name="param-' + i + '" id="param-' + i + '"><label for="param-' + i + '">' + array[i] + '</label>';
                            }
                            DOMs.box_cat_left.innerHTML = html_code;
                            DOMs.box_cat_left.scroll(0, 0);
                            setCheckboxesEvent(array);
                        }
                    });
                } 
                //se non ha delle sottocategorie
                //...
                index++;
            }; 
        }

        setCheckboxesEvent(data);
        
    })();

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
            }, 800);
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