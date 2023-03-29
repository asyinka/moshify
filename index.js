import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Plans from "./sections/plans";
import Hosting from "./sections/Hosting";
import Features from "./sections/Features";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

const appContainer = document.querySelector('#myApp');

Navigation(appContainer);
Hero(appContainer);
Pricing(appContainer);
Plans(appContainer);
Hosting(appContainer);
Features(appContainer);
Reviews(appContainer);
Footer(appContainer);