document.addEventListener("DOMContentLoaded", function() {
    var menuSwitch = document.getElementById('menuSwitch');
    var menuSwitch2 = document.getElementById('menuSwitch2');
    var box_first = document.querySelector(".box_first");
    var box_second = document.querySelector(".box_second");
    var transparent = document.querySelectorAll(".transparent");
    var imgSlider = document.getElementById('img-slider');
    var slider_click = document.querySelectorAll(".slider_click");
    var list_arrow = document.querySelectorAll(".list_arrow");
    var list_panel = document.querySelectorAll(".list_panel");
    var panel_left = document.querySelector(".panel_left");
    var panel_right = document.querySelector(".panel_right");
    var sum_value = document.getElementById('sum_value');
    var wholeSum = 0;
    var transport = document.getElementById('transport')
    menuSwitch.addEventListener("mouseover", function() {
        menuSwitch2.classList.add("menu-show");
    });
    menuSwitch.addEventListener("mouseout", function() {
        menuSwitch2.classList.remove("menu-show");
    });
    box_first.addEventListener("mouseover", function() {
        transparent[0].classList.add("transparent-hide");
    });
    box_first.addEventListener("mouseout", function() {
        transparent[0].classList.remove("transparent-hide");
    });
    box_second.addEventListener("mouseover", function() {
        transparent[1].classList.add("transparent-hide");
    });
    box_second.addEventListener("mouseout", function() {
        transparent[1].classList.remove("transparent-hide");
    });
    // event.detail podaje ilosc klikniec naszego event
    slider_click[0].addEventListener("click", function(first) {

        if (first.detail === 1) {
            imgSlider.setAttribute("src", "images/red.png");
        } else if (first.detail === 2) {
            imgSlider.setAttribute("src", "images/orange.png");
        } else if (first.detail === 3) {
            imgSlider.setAttribute("src", "images/chair1.png");
        }
        first.detail === 0; // kliknieto 3 x wiec zeruje ilosc klikniec i licze od nowa , spelniajac powyzsze warunki

    });
    slider_click[1].addEventListener("click", function(second) {

        if (second.detail === 1) {
            imgSlider.setAttribute("src", "images/orange.png");
        } else if (second.detail === 2) {
            imgSlider.setAttribute("src", "images/red.png");
        } else if (second.detail === 3) {
            imgSlider.setAttribute("src", "images/chair1.png");
        }
        first.detail === 0;

    });
    for (var i = 0; i < list_arrow.length; i++) {
        list_arrow[0].addEventListener("click", function() { // event dla pierwszego boxu , dlatego dla pierwszego ze chce wstawiac wartosc do pierwszego wiersza. pierwszy box z lewej = pierwszy box do wstawienia
            this.nextElementSibling.classList.toggle("list_panel_visible"); // dodajemy widocznosc dla ul z wysuwana lista
            for (var j = 0; j < this.nextElementSibling.children.length; j++) { // dlugosc wszysttkich li, ktore zawieraja wartosci
                this.nextElementSibling.children[j].addEventListener("click", function(specifyProduct) { // event na konkretne li, this, na element ktory wlasnie klikam
                    panel_left.children[0].innerHTML = this.dataset.product;
                    panel_right.children[0].innerHTML = this.dataset.price;




                    var productSum = panel_right.children[0].innerHTML;
                    sum_value.innerHTML = Number(productSum);
                    productSum = Number(sum_value.innerHTML); // zapisuje wartosc do zmiennej zeby moc potem dodac
                    // event na transport, musi byc tu zeby ladnie sie sumowala suma do zaplaty w zaleznosci zarowno od tego czy wybranu produkt oraz od tego czy zaznaczono transport
                    transport.parentElement.classList.add("transport-visible"); // transport byl niewidoczny zanim nie wybralo sie produktu, pojawia sie jak sie produkt wybierze
                    transport.checked = false; // po kazdym nowym kliknieciu w produkt transport sie odznacza - bo inaczej jest zla suma
                    panel_left.children[3].innerHTML = ""; // i kasuje sie transport ..
                    panel_right.children[3].innerHTML = ""; //..po to zeby wymusic na uzytkowniku kolejna akcje, kolejne klikniecie w transport i wtedy robi sie dobra suma
                    transport.addEventListener("click", function(event) {
                        var checkbox = event.target; // event target - bardzo wazne!!!
                        if (checkbox.checked) {
                            panel_left.children[3].innerHTML = "Transport";
                            panel_right.children[3].innerHTML = transport.getAttribute("data-transport-price");
                            wholeSum = productSum + Number(panel_right.children[3].innerHTML);
                            sum_value.innerHTML = wholeSum + " zł";
                        } else {
                            panel_left.children[3].innerHTML = "";
                            panel_right.children[3].innerHTML = "";
                            wholeSum = productSum + Number(panel_right.children[3].innerHTML);
                            sum_value.innerHTML = wholeSum + " zł";
                        }

                    });

                });
                // dodawanie podswietlenia po najechaniu na dana opcje

                this.nextElementSibling.children[j].addEventListener("mouseover", function(specifyProduct) {
                    this.classList.add("product-show");
                });
                this.nextElementSibling.children[j].addEventListener("mouseout", function(specifyProduct) {
                    this.classList.remove("product-show");
                });



            }
        });

        list_arrow[1].addEventListener("click", function() { // event dla pierwszego boxu , dlatego dla pierwszego ze chce wstawiac wartosc do pierwszego wiersza. pierwszy box z lewej = pierwszy box do wstawienia
            this.nextElementSibling.classList.toggle("list_panel_visible"); // dodajemy widocznosc dla ul z wysuwana lista
            for (var j = 0; j < this.nextElementSibling.children.length; j++) { // dlugosc wszysttkich li, ktore zawieraja wartosci
                this.nextElementSibling.children[j].addEventListener("click", function() { // event na konkretne li, this, na element ktory wlasnie klikam
                    panel_left.children[1].innerHTML = this.dataset.color
                    panel_right.children[1].innerHTML = "0";
                });
                // dodawanie podswietlenia po najechaniu na dana opcje

                this.nextElementSibling.children[j].addEventListener("mouseover", function(specifyProduct) {
                    this.classList.add("product-show");
                });
                this.nextElementSibling.children[j].addEventListener("mouseout", function(specifyProduct) {
                    this.classList.remove("product-show");
                });
            }

        });
        list_arrow[2].addEventListener("click", function() { // event dla pierwszego boxu , dlatego dla pierwszego ze chce wstawiac wartosc do pierwszego wiersza. pierwszy box z lewej = pierwszy box do wstawienia
            this.nextElementSibling.classList.toggle("list_panel_visible"); // dodajemy widocznosc dla ul z wysuwana lista
            for (var j = 0; j < this.nextElementSibling.children.length; j++) { // dlugosc wszysttkich li, ktore zawieraja wartosci
                this.nextElementSibling.children[j].addEventListener("click", function() { // event na konkretne li, this, na element ktory wlasnie klikam
                    panel_left.children[2].innerHTML = this.dataset.material;
                    panel_right.children[2].innerHTML = "0";
                });
                // dodawanie podswietlenia po najechaniu na dana opcje

                this.nextElementSibling.children[j].addEventListener("mouseover", function(specifyProduct) {
                    this.classList.add("product-show");
                });
                this.nextElementSibling.children[j].addEventListener("mouseout", function(specifyProduct) {
                    this.classList.remove("product-show");
                });
            }
        });

    }




});
