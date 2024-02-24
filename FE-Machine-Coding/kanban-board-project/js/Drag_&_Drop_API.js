/***
 *  Drag & Drop API:
 *   -  provided by browser not the part of JS
 *   -  allows the users to drag and drop the elements in specified target area.
 * 
 *   coronological order: 
 *    - drag started
 *    - drop happened
 *    - drag end
 * 
 *  drag and drop events:
 *       1. dragstart: fires when the elements start dragging.
 *       2. dragend: fires when the element drag operation is done.
 *       3. dragover: fires repeatedly while the dragged element is being dragged over a valid target area.
 *       4. dragenter: fires when the dragged element enters a valid drop target area.
 *       5. dragleave: fires when the drag element leaves a valid drop area.
 *       6. drop: fires when the dragged element is released over a valid drop target. 
 * 
 *  How to implement it?
 *   1. set the HTML Structure
 *       - <div draggagle="true"></div>
 *       - <div id="drop-area"></div>
 *   2. add css style (optional)
 * 
 *   3. attach event on the draggable element
 * 
 *      elem.addEventListener('drag and drop event name', methods)
 *       event.dataTransfer.setData("text/plain", event.target.id)
 * 
 * 
 */