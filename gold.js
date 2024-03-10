// You can add interactivity or additional functionality to the navbar using JavaScript.
// Here's an example of toggling a mobile navbar:

// const mobileNav = document.querySelector('.mobile-nav');
// const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

// mobileNavToggle.addEventListener('click', () => {
// 	mobileNav.classList.toggle('open');
// });

fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo").then((response)=>response.json()).then((data)=>console.log(data));
let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }
	
