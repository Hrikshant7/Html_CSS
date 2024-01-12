/**
 *  Web Performance optimisation:
 *     - Rendering Optimisation Techniques: (deal with HTML and CSS):
 *        1. Avoid unnecessary elements/tags
 *          <div>
 *             <div>
 *                <div>
 *                    <p></p>
 *                 </div>
 *                  
 *             </div>
 * 
 *         </div>
 *        2. try to reduce the DOM size.
 * 
 *        3. validate the HTML page: https://validator.w3.org/#validate_by_input
 * 
 *      - image optimisation techniques:
 *         - compress or optimise images.
 *         - responsive design will download the resources(images/videos/gif) based the devices.
 *         - mordern formt you have to use for images (webp or PNG).
 * 
 *     - CSS optimisation:
 *         - minifinied your CSS/HTML files
 *         - use flexbox layout.
 *         - segregate your files for critical rendering (above the fold) and non critical rendering (below the fold).
 *         - RWD -> please use %, em, rem units in CSS
 * 
 *     - JS Optimisation techniques:
 *         - minified and bundle all the JS files into a single JS file
 *         - use defer or async or both the attribute in the script tag.
 *         - intesection observer -> lazy loading of the content(images/videos)
 *         - avoid the memory leakage problems
 *         - use memeoisation - applications of closure.
 *         - use fragments.
 * 
 *     - Network optimisation techniques:
 *      1. minification (HTML, CSS, JS)
        2. code Splitting (HTML, CSS and JS)
        3. Compression: 
               -> reduces the size of data before transmission, saves the bandwidth of the netwrod and improves the speed.
               -> gzip must be enabled at infra level and at BE (devops team)
        4. caching: 
               -> caching stores copies of data or resources temporarily to speed up access and reduce the load on the servers.
        5. CDN: 
             -> Content Delivery Network: a distributed netword to store the copies of the web content.
             -> for accessing the heavy assests -> AWS cloud front(AWS CDN)
 */