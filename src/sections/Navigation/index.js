import htmlContent from './Navigation.html?raw';

const Navigation = (content) => {
    content.innerHTML += htmlContent;
}

export default Navigation;