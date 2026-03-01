console.log("JavaScript File is linked");

// variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currrentDraggedElement = null;
// add variable for reset button;

// functions
function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currrentDraggedElement
    currrentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    //drop the piece
    this.appendChild(currrentDraggedElement);

    //reset the reference
    currrentDraggedElement = null;
}

// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
})