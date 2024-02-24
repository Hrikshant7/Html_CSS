/***
 *  How do you flatten an array?
 * 
 *   i/p - nested array -> [1,2,[3,4,[5,6,[7,8,[9],10]]]]
 */

let arr = [1,2,[3,4,[5,6,[7,8,[9],10]]]];

console.log(arr.flat(Infinity));

// Ployfill of flat()

Array.prototype.myFlat = function(depth = 1){
   let flattened = [];

      for(let i=0; i<this.length; i++) {
        if(Array.isArray(this[i]) && depth > 0) {
            flattened = flattened.concat(this[i].myFlat(depth-1));
        } else {
            flattened.push(this[i]);
        }
      }

   return flattened;
}

console.log(arr.myFlat(Infinity));