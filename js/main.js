console.log("JavaScript File is linked");

// variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currrentDraggedElement = null;
// add variable for reset button;

const resetBtn = document.getElementById("reset-btn");
const labelBox = document.getElementById("label-box");

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

    // BUG 1
    if (this.children.length > 0) {
        console.log("Zone already has a label");
        return;
    }

    //drop the piece
    this.appendChild(currrentDraggedElement);

    this.classList.remove("highlight");

    //reset the reference
    currrentDraggedElement = null;
}

function dragEnter() {
    this.classList.add("highlight");
}

function dragLeave() {
    this.classList.remove("highlight");
}

// BUG 2
function resetPuzzle() {
    console.log("Reset Clicked");

    labels.forEach(label => {
        labelBox.appendChild(label);
    });

    // remove highlight
    targetZones.forEach(zone => {
        zone.classList.remove("highlight");
    });
}

// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);

    zone.addEventListener("dragenter", dragEnter);
    zone.addEventListener("dragleave", dragLeave);
});

resetBtn.addEventListener("click", resetPuzzle);