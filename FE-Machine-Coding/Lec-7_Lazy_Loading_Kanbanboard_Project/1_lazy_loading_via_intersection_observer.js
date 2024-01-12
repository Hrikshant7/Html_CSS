/**
 *  Lazy loading: It's a design pattern to use for loading the content on demand. 
 * 
 *   Intersection Observer API:
 * 
 *      - It is provided by browser not the part of JS.
 *      - allows you to watch and respond  when an element enter or leaves visible area of its container.
 * 
 *      use cases:
 *       - lazy loading of the images and videos.
 *       - scroll- triggerring effect.
 *       - loading the component.
 * 
 * 
 *     Steps to implement the IO API:
 * 
 *      1. create the intersection observer instance.
 *          const observer = new IntersectionObserver(handleIntersectionCallback, options);
 * 
 *      2. handleIntersectionCallback(entries, observer) {
 * 
 *             entries.forEach((entry) => {
 *                 if(entry.isIntersecting) {
 *                   // do something here
 *                 } else {
 *                   // do something else here
 *                 }
 * 
 *             })
 *          }
 * 
 *        3. Define the options
 * 
 *            options: {
 *                root: document.querySelector('.image-container');
 *                rootMargin: '50px', // adjust the margin number as per the visibility of the content(images) to the end user.
 *                threshold: [0, 0.25, 0.50, 0.75, 1.0] -> defines how the oberver should trigger the callback (handleIntersectionCallback)
 *            }
 *     
 *         4. observe the element   
 *            observer.observe(targetElement);
 * 
 *         5. unobserve the element
 *            observer.unobserve(targetElement)
 *  
 *         6. disconnect(optional)
 *             observer.disconnect()
 */