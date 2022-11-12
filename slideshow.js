var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num){
    displaySlides(currentIndex += num);
}

function displaySlides(num){
    var x;
    var slides = document.getElementsByClassName("imageSlide");
    if(num > slides.length){ currentIndex = 1 }
    if (num < 1){ currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].getElementsByClassName.dispaly = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}