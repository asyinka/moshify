import htmlContent from './Plans.html?raw';

const Plans = (content) => {
    content.innerHTML += htmlContent;
}

export default Plans;