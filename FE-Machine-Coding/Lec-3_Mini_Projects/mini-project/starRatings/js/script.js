/***
 *   Implement the star rating component?
 * 
 *    Requirements - Clarify it with your interview?
 * 
 *      must have features:
 *       
 *         1. rating must from 1 to 5
 *         2. when click on the stars - must filled with color
 *         3. When the ratings being provided a text has to be updated as Rating count: 5
 *         4. a hover effect should be there.
 * 
 *      good to have features
 *         1. can optimised if required so, 
 *         2. can provide the web accessibility.
 *         3. Emojis instead of numbers.
 *         4. slider based start ratings.
 * 
 *     Approach:
 *       3 events i would be required to use
 *        1. click event you need to fill the stars with yellow color
 *        2. mouseover - we have change the star color
 *        3. mouseleave - move it to gray color.
 * 
 *        after clicking the event the rating count text has to be updated.
 * 
 */



class StarRating {

    constructor(containerId) {
      this.container = document.querySelector(containerId);
      console.log(this.container);

      this.stars = this.container.querySelectorAll('.star');
      this.filled = 0;

      this.bindEvents();
    }

    /**
     * Method to bind all the events
     */
    bindEvents() {
        // binding all the events
        this.container.addEventListener('click', (event)=>{this.onStarClick(event)});
        this.container.addEventListener('mouseover', (event)=> {this.onStarMouseOver(event)});
        this.container.addEventListener('mouseleave', ()=> {this.restoringRating()});
    }

    /**
     * Method to define on the element clicked
     * @param {event} event 
     * @returns void
     */
    onStarClick(event) {
        const starElem = event.target.classList[0];
        if (starElem !== 'star') return;
    
        //const currentClicked = event.target.dataset.id;
        const currentClicked = parseInt(event.target.getAttribute("data-index"));
        //console.log(typeof currentClicked);
       
        this.fillColors(currentClicked);
        this.filled = currentClicked;

        this.updateRatingCount(currentClicked);
    }

    fillColors(count) {
       for(let i=0; i<5; i++) {
        this.stars[i].classList.remove("star-filled");
       }

        for(let i = 0; i<count; i++) {
            this.stars[i].classList.add("star-filled");
        }
    }

    updateRatingCount(count) {
       document.getElementById("count").textContent = `Rating Count: ${count}`;
    }

    onStarMouseOver(event) {
        const currentMouseHoverIndex = parseInt(event.target.getAttribute("data-index"));

        this.fillColors(currentMouseHoverIndex);
    }

    restoringRating() {
        this.fillColors(this.filled);
    }

}

new StarRating("#star-container");


