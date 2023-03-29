import Navigation from "../sections/Navigation";
import Pricing from "../sections/Pricing";
import Plans from "../sections/Plans";
import Features from "../sections/Features";
import Hosting from "../sections/Hosting";
import Callout from "../sections/Callout";
import Footer from "../sections/Footer";

export default function Pricingpage (container) {
    Navigation(container);
    Pricing(container);
    Plans(container);
    Features(container);
    Hosting(container);
    Callout(container);
    Footer(container);
}