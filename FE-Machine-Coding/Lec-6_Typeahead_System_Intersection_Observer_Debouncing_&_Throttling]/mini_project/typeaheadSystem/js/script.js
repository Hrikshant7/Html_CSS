/**
 *  What is typeahead system/auto complete?
 * 
 *      -> show suggestions as you type in the input box or search box.
 * 
 *       Benefits of using typeahead stsyem:
 *       -> makes the better user experience by helping users quickly select the available suggestions/results.
 * 
 *      Must have features:
 *        1. input search box
 *        2. make API request to fetch the data
 *        3. populate the data if having and dispaly them as ul li
 * 
 *      Good to have features:
 *        1. if no data found display this msg "No Data Found!"
 *        2. sorting of the data
 *        3. make the result look like fancy one
 * 
 *      Approach:
 *        1. require input search box
 *        2. An API that we need to make a request.
 *        3. populate the suggestions/results in ul and li to display to the end user
 *        4. attach an event listener when we want to select the suggestions
 */

import { getCountriesData } from "../utils/fetchData.js";
import { debounce } from "../utils/debouncingUtil.js";

class TypeaheadSystem {
    constructor() {
     // get the input box element
       this.searchInput = document.getElementById('search-input-box');
     // get the ul element
        this.results = document.getElementById('results');
     // attaching event on search input
        //console.log(this.handleSuggestions.bind(this));
        this.debouncedHanldeSuggestionsInput = debounce(this.handleSuggestions.bind(this), 1000);
        this.searchInput.addEventListener('input', this.debouncedHanldeSuggestionsInput);
    }

    async handleSuggestions(event) {
        const keyword = event.target.value.trim();
        if(!keyword.length){
            this.clearResults();
            return;
        }
        // handleSearch()
        const countryNameArr = await this.handleSearch(keyword);
        // populate the counties in list
        this.populateSuggestions(countryNameArr);
    }

    async handleSearch(keyword) {
       // to get the countries -> create a util where we will be using getCountries via fetch API to get country data.
       const countiesNameArr = await getCountriesData(keyword);
       //console.log(countiesNameArr);
       
       const countryNameArr = countiesNameArr.map(country=>country.name.common);

       return countryNameArr;
       
    }

    populateSuggestions(countryNameArr) {
        //console.log(countryNameArr);
        // will be creating li and append the country name after fetch the countries.
        // we can create fragments and then append in the real DOM.
        this.clearResults();

        if(countryNameArr && countryNameArr.length){
            // create and populate the results

            const fragment = document.createDocumentFragment();
        
            countryNameArr.forEach((countryName)=>{
                const resultItem = document.createElement('li');

                resultItem.className = 'result-item';

                resultItem.textContent = countryName; // <li class='result-item'>Armenia</li>

                fragment.appendChild(resultItem);

                resultItem.addEventListener('click', ()=>{
                    this.searchInput.value = countryName;
                    this.clearResults();
                });
            });

            this.results.appendChild(fragment);
        } else {
            // show no data found

            const noResultFound = document.createElement('li');

            noResultFound.className = 'no-result-found';
            
            noResultFound.textContent = 'NO Data Found!';
            this.results.appendChild(noResultFound);
        }
    }

    clearResults(){
       this.results.innerHTML = '';
    }
}

new TypeaheadSystem();

