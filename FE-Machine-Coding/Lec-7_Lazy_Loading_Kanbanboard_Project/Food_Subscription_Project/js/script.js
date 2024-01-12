import IntersectionObserverUtil from "../utils/lazyload.js";

const handleImgIntersection = (img) => {
    img.src = img.dataset.src;
    img.onload = () => {
        img.removeAttribute('data-src');
    };
};

const handleIntersection = (element) => {
    if (element.tagName === 'IMG') {
        handleImgIntersection(element);
    } else {
        // Handle other types of elements as needed
        console.log('Handling other element types:', element);
    }
};

const options = {
   // root: document.querySelectorAll('section'),
    threshold: 0.5,
    rootMargin: '30px',
}

const intersectionObserver = new IntersectionObserverUtil(handleIntersection, options);

const lazyLoadImages = () => {
    const imgElems = document.querySelectorAll("img[data-src]");

    imgElems.forEach((img) => {
        intersectionObserver.observe(img);
    });
}

lazyLoadImages();