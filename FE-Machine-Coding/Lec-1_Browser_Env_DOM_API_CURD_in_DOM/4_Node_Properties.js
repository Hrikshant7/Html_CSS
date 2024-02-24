/**
 *   What are the node properties?
 * 
 *       <p id="text" class="p-text"> Hello, i am paragragh </p> -> one complete node.
 * 
 *       1. tagName: returns the name of the HTML tag.
 *  
 *       2. id: get and set the value of the element's attribute id.
 * 
 *       3. className: get and set the class name to the HTML elmenents.
 * 
 *       4. innerHTML: to provide the content with html tag inside another HTML element.
 * 
 *       5. innerText: to provide the inner text to the HTML elementa s string.
 * 
 *       6. textContent: get and set the content of the element and its descedant.
 * 
 *       7. style: provide the access to the inline styles to the elements.
 *      
 *       8. classList.add(className): Adds a CSS class to the element. -> to give the class name to any HTML elements.
 * 
 *       9. setattribute('name', 'value');
 *    
 *       10. getAttribute('name');
 *     
 * 
 * 
 */

const pElem = document.querySelector('h1');
console.log(pElem.tagName);

// if(pElem.tagName === 'P') {

// } else {

// }