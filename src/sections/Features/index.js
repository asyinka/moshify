import htmlContent from './Features.html?raw';

const Features = (content) => {
    content.innerHTML += htmlContent;
}

export default Features;