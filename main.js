function searchWithModel() {
    let searchBar_model = document.querySelector('.model').value.toUpperCase();
    let cars = document.querySelectorAll('.featured-car-card');
    let carNames = document.getElementsByTagName('h3');
    let featuredCarList = document.querySelector('.featured-car-list');

    for (let i = 0; i < cars.length; i++) {
        if (carNames[i].innerHTML.toUpperCase().indexOf(searchBar_model) >= 0) {
            cars[i].style.display = "";
            featuredCarList.insertBefore(cars[i], featuredCarList.firstChild);
        } else {
            cars[i].style.display = "none";
        }
    }
}


function searchWithPrice() {
    let searchBarPrice = document.querySelector('.prix').value.toUpperCase();
    let cars = document.querySelectorAll('.featured-car-card');
    let priceElements = document.querySelectorAll('.card-price'); // Assuming prices are within <p> elements with class .price
    let featuredCarList = document.querySelector('.featured-car-list');

    for (let i = 0; i < cars.length; i++) {
        if (priceElements[i].innerHTML.toUpperCase().indexOf(searchBarPrice) >= 0) {
            cars[i].style.display = "";
            featuredCarList.insertBefore(cars[i], featuredCarList.firstChild);
        } else {
            cars[i].style.display = "none";
        }
    }
}





