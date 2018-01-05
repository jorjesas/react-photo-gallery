export function openModal(index) {
    document.getElementById('myModal').style.display = "block";
    currentSlide(index+1);
  }
  
export function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 0;
  showSlides(slideIndex);
  
export function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
export function currentSlide(n) {
    showSlides(slideIndex = n);
  }

export function handleImageClick(n) {
    //openModal();
    // currentSlide(n);
}  
  
export function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("modal-opacity");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if (i == (slideIndex-1)) {
            slides[i].style.display = "block";
        }
        console.log("style " + slides[i].style);
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        if (i == (slideIndex-1)) {
            dots[slideIndex-1].className += " active";
            captionText.innerHTML = dots[slideIndex-1].dataset.imagedescription;
        }
    }
    console.log(slideIndex);
    // slides[0].style.display = "none";
    // console.log("test " + slides[slideIndex-1].style);
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }