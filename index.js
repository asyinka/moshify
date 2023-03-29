import Navigation from "./src/sections/Navigation";
import Hero from "./src/sections/Hero";
import Pricing from "./src/sections/Pricing";
import Plans from "./src/sections/plans";
import Hosting from "./src/sections/Hosting";
import Features from "./src/sections/Features";
import Reviews from "./src/sections/Reviews";
import Footer from "./src/sections/Footer";

const appContainer = document.querySelector('#myApp');

Navigation(appContainer);
Hero(appContainer);
Pricing(appContainer);
Plans(appContainer);
Hosting(appContainer);
Features(appContainer);
Reviews(appContainer);
Footer(appContainer);
