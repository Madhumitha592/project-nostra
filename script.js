var closebtn=document.getElementById("close-btn")
var signup=document.getElementById("signup")
closebtn.addEventListener("click",function(){
    signup.style.display="none"
})
let images = [
    "images/i1.jpg",
    "images/i2.jpg",
    "images/i3.jpg"
];

let currentIndex = 0;

function nextSlide() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("slider-image").src =
        images[currentIndex];
}

function prevSlide() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById("slider-image").src =
        images[currentIndex];
}
function shop(){
    window.location.href="collection.html"
}

const checkboxes = document.querySelectorAll(".filter-option");

const products = document.querySelectorAll(".product");

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const selectedSeasons = [
            ...document.querySelectorAll(
                '[data-filter="season"]:checked'
            )
        ].map(item => item.value);

        const selectedColors = [
            ...document.querySelectorAll(
                '[data-filter="color"]:checked'
            )
        ].map(item => item.value);

        products.forEach(function (product) {

            const seasonMatch =
                selectedSeasons.length === 0 ||
                selectedSeasons.includes(product.dataset.season);

            const colorMatch =
                selectedColors.length === 0 ||
                selectedColors.includes(product.dataset.color);

            if (seasonMatch && colorMatch) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});