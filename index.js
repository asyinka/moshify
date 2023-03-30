// import Navigation from "./src/sections/Navigation";
// import Hero from "./src/sections/Hero";
// import Pricing from "./src/sections/Pricing";
// import Plans from "./src/sections/plans";
// import Hosting from "./src/sections/Hosting";
// import Features from "./src/sections/Features";
// import Reviews from "./src/sections/Reviews";
// import Callout from "./src/sections/Callout";
// import Footer from "./src/sections/Footer";

// const appContainer = document.querySelector('#myApp');

// Navigation(appContainer);
// Hero(appContainer);
// Pricing(appContainer);
// Plans(appContainer);
// Hosting(appContainer);
// Features(appContainer);
// Reviews(appContainer);
// Callout(appContainer);
// Footer(appContainer);

import Homepage from "./src/pages";
import AboutUs from "./src/pages/About-us";
import Pricingpage from "./src/pages/Pricingpage";


function renderer (pageCall){
// this function accept another function call to append an html content to the html
    const appContainer = document.querySelector('#myApp');
    appContainer.innerHTML = "";

    if (pageCall != undefined){
        pageCall(appContainer);
    } else{
        appContainer.innerHTML = `<div style="display: flex; font-size: 5rem; justify-content: center; align-items: center; height: 100vh;">Something bad happened!!! <br> We will be back online shortly. </div>`
    }

}

//Router

const pathname = window.location.pathname;

//this function defines the location.pathname directory
function router() {
    switch (pathname) {
        case "/":
            renderer(Homepage)
        break;
        case "/Pricingpage":
            renderer(Pricingpage)
        break;
        case "/About-us":
            renderer(AboutUs)
        break;
        default:
            break;
    }
}

router();

