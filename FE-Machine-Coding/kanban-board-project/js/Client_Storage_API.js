/***
 *  What is client storage API?
 *    - It's a browser API, not the part of JS.
 *    - Purpose is use the user preferences, session data, refersh token or redirection URLs.
 *    - What is benefits of using it?
 *       - Reducing the network request and keeping the data locally in your browser.
 * 
 *    There are kinds of storage API:
 *    1. local storage. (you can persist around 10MB)
 *    2. session storage.(you can persist around 5MB)
 *    3. client side cookies. (you can persist/store 4kb)
 * 
 *    Local storage API:
 *      - store the key-values pairs of data on a user's browser with no expiration.
 *      - local storage will keep the data even the browser or tab is getting closed.
 * 
 *      1. localStorage.setItem('key', 'value'); - setting the key-value pairs of the data.
 *      2. localStorage.getItem('key') - to get the value from local storage.
 *      3. localStorage.removeItem('key') - to delete a partuclar item from the browser's local storage.
 *      3. localStorage.clear() - remove all the items from the local storage.
 * 
 * 
 *    Session storage API:
 *     - store the key-values pairs of data on a user's browser with expiration.
 *     - session storage will not keep the data even the browser or tab is getting closed.
 *      
 *      1. sessionStorage.setItem('key', 'value'); - setting the key-value pairs of the data.
 *      2. sessionStorage.getItem('key') - to get the value from session storage.
 *      3. sessionStorage.removeItem('key') - to delete a partuclar item from the browser's session storage.
 *      3. sessionStorage.clear() - remove all the items from the session storage.
 * 
 *    cookie: it used to store small piece of information around 4kb and generally we shouldn't use the 
 *            the client cookie beacuse on the browser the cookies can be disabled.
 * 
 * 
 */