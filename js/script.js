document.addEventListener("DOMContentLoaded", function() {
    var menuSwitch = document.getElementById('menuSwitch');
    var menuSwitch2 = menuSwitch.querySelector('#menuSwitch2');
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
    var transport = document.getElementById('transport');
    var clickCounter = 0;
    var wholeSum = 0;

    // wysuwane menu

    menuSwitch.addEventListener("mouseover", function() {
        menuSwitch2.classList.add("menu-show");
    });
    menuSwitch.addEventListener("mouseout", function() {
        menuSwitch2.classList.remove("menu-show");
    });


    // efekty najechania na boxy

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

    // slider

    slider_click[0].addEventListener("click", function() {
        clickCounter += 1; // po klikniecuu zwiekszamy licznik i na tej podstawie wyswietla sie wlasciwy obrazek
        if (clickCounter <= 2) {
            if (clickCounter === 1) {
                imgSlider.setAttribute("src", "images/red.png");
            } else if (clickCounter === 2) {
                imgSlider.setAttribute("src", "images/orange.png");
            }
        } else {
            clickCounter = 0; // zerowanie licznika zeby wlasciwie pokazywac obrazki
            imgSlider.setAttribute("src", "images/chair1.png");
        };
        console.log(clickCounter);
    });
    slider_click[1].addEventListener("click", function() {
        clickCounter += 1;
        if (clickCounter <= 2) {
            if (clickCounter === 1) {
                imgSlider.setAttribute("src", "images/red.png");
            } else if (clickCounter === 2) {
                imgSlider.setAttribute("src", "images/orange.png");
            }
        } else {
            clickCounter = 0;
            imgSlider.setAttribute("src", "images/chair1.png");
        }
        console.log(clickCounter);
    });

    // zamowienie - boxy, kalkulator

    for (var i = 0; i < list_arrow.length; i++) {

        // box wybierz rodzaj
        list_arrow[0].addEventListener("click", function() { // event dla pierwszego boxu , dlatego dla pierwszego ze chce wstawiac wartosc do pierwszego wiersza. pierwszy box z lewej = pierwszy box do wstawienia
            this.nextElementSibling.classList.toggle("list_panel_visible"); // dodajemy widocznosc dla ul z wysuwana lista
            for (var j = 0; j < this.nextElementSibling.children.length; j++) { // dlugosc wszysttkich li, ktore zawieraja wartosci
                this.nextElementSibling.children[j].addEventListener("click", function(specifyProduct) { // event na konkretne li, this, na element ktory wlasnie klikam
                    panel_left.children[0].innerHTML = this.dataset.product; // pobieranie nazwy z dataset
                    panel_right.children[0].innerHTML = this.dataset.price; // pobieranie ceny z dataset

                    var productSum = panel_right.children[0].innerHTML;
                    sum_value.innerHTML = Number(productSum);
                    productSum = Number(sum_value.innerHTML); // zapisuje wartosc do zmiennej zeby moc potem dodac

                    // event na transport, musi byc tu zeby ladnie sie sumowala suma do zaplaty w zaleznosci zarowno od tego czy wybranu produkt oraz od tego czy zaznaczono transport
                    transport.parentElement.classList.add("transport-visible"); // transport byl niewidoczny zanim nie wybralo sie produktu, pojawia sie po wybraniu produktu
                    // po kazdym nowym kliknieciu w produkt transport sie odznacza - zeby zapewnic odpowiednia weryfikacje
                    transport.checked = false;
                    panel_left.children[3].innerHTML = "";
                    panel_right.children[3].innerHTML = "";

                    transport.addEventListener("click", function(event) { // event na zaznaczenie transportu
                        var checkbox = event.target; // event target - wazne
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

        // box wybierz kolor
        list_arrow[1].addEventListener("click", function() { // event dla drugiego boxa
            this.nextElementSibling.classList.toggle("list_panel_visible"); // dodajemy widocznosc dla ul z wysuwana lista
            for (var j = 0; j < this.nextElementSibling.children.length; j++) { // dlugosc wszysttkich li, ktore zawieraja wartosci
                this.nextElementSibling.children[j].addEventListener("click", function() { // event na konkretne li, this, na element ktory wlasnie klikam
                    panel_left.children[1].innerHTML = this.dataset.color
                    panel_right.children[1].innerHTML = "0";
                });
                this.nextElementSibling.children[j].addEventListener("mouseover", function(specifyProduct) {
                    this.classList.add("product-show");
                });
                this.nextElementSibling.children[j].addEventListener("mouseout", function(specifyProduct) {
                    this.classList.remove("product-show");
                });
            }

        });

        // box wybierz materiał
        list_arrow[2].addEventListener("click", function() { // event dla pierwszego boxu , dlatego dla pierwszego ze chce wstawiac wartosc do pierwszego wiersza. pierwszy box z lewej = pierwszy box do wstawienia
            this.nextElementSibling.classList.toggle("list_panel_visible"); // dodajemy widocznosc dla ul z wysuwana lista
            for (var j = 0; j < this.nextElementSibling.children.length; j++) { // dlugosc wszysttkich li, ktore zawieraja wartosci
                this.nextElementSibling.children[j].addEventListener("click", function() { // event na konkretne li, this, na element ktory wlasnie klikam
                    panel_left.children[2].innerHTML = this.dataset.material;
                    panel_right.children[2].innerHTML = "0";
                });
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
