/***
 *   How to perform the CURD operations in DOM?
 * 
 *    C (Create)
 * 
 *    U (Update)
 * 
 *    R (Read)
 * 
 *    D (Delete)
 * 
 * 
 * 
 * 
 */

// Read the content of the web page.
const h2Elem = document.querySelector('h2');
console.log(h2Elem);

const h1Elem = document.querySelector('h1');
console.log(h1Elem);

const h2Elems = document.querySelectorAll('h2');
console.log(h2Elems);

// read the web elements via CSS selectors (by id, classname)
const h2Id = document.querySelector('#h2-text');
console.log(h2Id);

const h2ClassName = document.querySelector('.h2-text');
console.log(h2ClassName);

// to the elements by id -> getElementById() -> to the element via id only

const h2ElemViaId = document.getElementById('h2-text');
console.log(h2ElemViaId);

// to the elements via classname -> 
const allClassElems = document.getElementsByClassName('text');
console.log(allClassElems);

const h2AllElms = document.getElementsByTagName('h2');
console.log(h2AllElms);


// create the element and add it into the DOM.
const h3Elem = document.createElement('h3');
h3Elem.innerText =  'Hello, i am h3 tag';
console.log(h3Elem);

const divElem = document.createElement('div');
divElem.innerHTML = '<p>Hello, i am para 2</p>';
console.log(divElem);

// update the DOM.
const bodyElem = document.querySelector('body');
bodyElem.appendChild(h3Elem);
bodyElem.appendChild(divElem);

// delete the DOM element.
h3Elem.remove();






