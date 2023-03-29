import htmlContent from './Hero.html?raw';

const Hero = (content) => {
    content.innerHTML += htmlContent;
}

export default Hero;