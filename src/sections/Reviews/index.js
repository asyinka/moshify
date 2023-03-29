import htmlContent from './Reviews.html?raw';

const Reviews = (content) => {
    content.innerHTML += htmlContent;
}

export default Reviews;