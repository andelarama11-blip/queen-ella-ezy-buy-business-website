/* ==========================
   AOS INIT
========================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if(loader){
        loader.style.display = "none";
    }
});

/* ==========================
   BACK TO TOP
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* ==========================
   PRODUCT SEARCH
========================== */

function searchProducts(){

    const input =
    document.getElementById("productSearch").value.toLowerCase();

    const cards =
    document.querySelectorAll(".product-item");

    cards.forEach(card => {

        const text =
        card.innerText.toLowerCase();

        if(text.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

/* ==========================
   CATEGORY FILTER
========================== */

function filterCategory(category){

    const products =
    document.querySelectorAll(".product-item");

    products.forEach(product => {

        if(category === "all"){

            product.style.display = "block";

        }

        else if(product.dataset.category === category){

            product.style.display = "block";

        }

        else{

            product.style.display = "none";

        }

    });

}

/* ==========================
   PRODUCT MODAL
========================== */

function showProductDetails(
    name,
    image,
    description,
    price
){

    document.getElementById("modalTitle").innerText = name;

    document.getElementById("modalImage").src = image;

    document.getElementById("modalDescription").innerText =
    description;

    document.getElementById("modalPrice").innerText =
    price;

}

/* ==========================
   GALLERY LIGHTBOX
========================== */

function showGallery(image){

    document.getElementById(
        "galleryPreview"
    ).src = image;

}

/* ==========================
   NEWSLETTER VALIDATION
========================== */

document.addEventListener(
"DOMContentLoaded",
function(){

const newsletter =
document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Thank you for subscribing!"
);

});

}

});

/* ==========================
   LAZY LOAD IMAGES
========================== */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute(
"loading",
"lazy"
);

(() => {

'use strict'

const forms =
document.querySelectorAll(
'.needs-validation'
)

Array.from(forms).forEach(form => {

form.addEventListener(
'submit',
event => {

if (!form.checkValidity()) {

event.preventDefault()

event.stopPropagation()

}

form.classList.add(
'was-validated'
)

}, false)

})

})()

});