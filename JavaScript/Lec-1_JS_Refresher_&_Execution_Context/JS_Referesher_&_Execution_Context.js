/**
 *   1. Do you agree JS is a most powerful programming lanuguage?
 * 
 *   Yes, I do agree. JS is the most powerful PL. Now a days, JS is going to develop web apps(Frontend + Backend), mobile apps(React native), desktop apps (electron JS),
 *   gaming apps, IOT apps. not this now a days JS is also using automation testing framework (cypress, webdrivers io).
 * 
 *   2. Who invented this JS Programming language?
 *     
 *   Brendan Eich, in 1995 . He was co-founder of mozilla corporation.
 * 
 *   3. is JS interpreted or compiled?
 * 
 *   JS is a interpreted language, which means that the code is executed without prior compilation.
 * 
 *   4. What JS can't do in the browsers?
 * 
 *   1. can't read/ write files.
 *   2. can't enable the camera/microphone automatically.
 *   3. can't access other's domian data directly.
 * 
 *   5. ECMAScript vs JavaScript
 * 
 *      ES -> a scripting language specification standardized by ECMA International.
 * 
 *      JS is the implementation of ES standard.
 * 
 *      old to latest version:
 *      ES5(2014)
 *      ES14(2023)
 *      upcoming version ES15(2024)
 * 
 *   6. How do you add JS in your web browser?
 *     
 *      1. Inline Script
 *         EG: 
 *              <script>
                    console.log("Head inline script");
                </script>
 *      2. External Script
            EG:
                 <script src="./JS_Referesher_&_Execution_Context.js"></script>


        7. tools required for writing and running JS code.
         1. VS IDE.
         2. Browser dev tools.
         3. Browser -> Sources tab - Go to snippets.

        8. variable: it's just a name to hold any kind of values.

            In ES5: var x = 10.50;
                    var x = 'Ashwani';

            In ES6: let x = 5;
                    const name = 'Ashwani';

        Conclusion: JS is a dynamic type programming language.

        9. Data types in JS?

           - specifies the type of data that a variable can hold.

           - 2 types of data types:
             
             1. primitive: pre-defined DT.

                7 kinds of PDT:
                ----------------
                1. number
                2. string
                3. boolean
                4. null
                5. undefined
                6. bigint
                7. symbol
             2. non-primitive: can be derived from primitive DT.

                1. object.
                2. array.
                3. function.

               
        10. What is typeof operator?

            used to determine the data type of an operand or expression. It returns you a string that represents the data type.

        11. null vs undefined:

                               null                                          undefined

           1. null means intentionally not providing any values.          1. a varibale is being declared but not assigned a value;
           2. typeof null is 'object'.                                    2. typeof undefined is 'undefined'
           3. null is converted into value when we perform a primitive    3. undefined is converted into NaN when you performng a primitive operation.
              operations.
              Eg: let a = null;                                              Eg:let b;

                                                                                b + 10;
                                                                                NaN


                  a + 10; // 10

        12. contional statements and loops:

            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

        13. How the JS code gets executed in the Web browsers?

            1. Firstly, js code gets loaded into the browsers.

            2. In the browser, JS engine where an execution stack is running as a main thread(single thread) called as call stack.
               call stack keeps the track of the all execution context.

            3. After this, JS engine inserts the GEC(Global Execution Context) at the top of the call stack.

        14. Execution Context: Please refere the notes.

        15. What is scope and how many scope are avaiable in JS?

           scope refers to the region of code where a varibale can accessed or modified.

           1. Global scope: varibales declared outside any functions.
           2. Functional Scope(Local scope): Variables declared inside the function.
           3. Block scope: Introduced with let and const only
                           when the variables are declared inside the blocks.


 *      
 */

console.log('External Script file');

function fn(a,b) {
    return a+b;  
}

console.log(fn(2,3));