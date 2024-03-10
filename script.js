// You can add interactivity or additional functionality to the navbar using JavaScript.
// Here's an example of toggling a mobile navbar:

// const mobileNav = document.querySelector('.mobile-nav');
// const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

// mobileNavToggle.addEventListener('click', () => {
// 	mobileNav.classList.toggle('open');
// });

fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo").then((response)=>response.json()).then((data)=>console.log(data));