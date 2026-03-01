console.log("JavaScript File is linked");

// variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currrentDraggedElement = null;

// 🔥 ADDED: reset button + label box reference
const resetBtn = document.getElementById("reset-btn");
const labelBox = document.getElementById("label-box");

// functions
function dragStart() {
    console.log("Started Dragging");
    currrentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    // 🔥 BUG FIX 1: Prevent multiple labels in one zone
    if (this.children.length > 0) {
        console.log("Zone already has a label");
        return;
    }

    this.appendChild(currrentDraggedElement);

    // 🔥 BONUS: remove highlight after drop
    this.classList.remove("highlight");

    currrentDraggedElement = null;
}

// 🔥 BONUS: highlight when entering zone
function dragEnter() {
    this.classList.add("highlight");
}

// 🔥 BONUS: remove highlight when leaving
function dragLeave() {
    this.classList.remove("highlight");
}

// 🔥 BUG FIX 2: Reset Function
function resetPuzzle() {
    console.log("Reset Clicked");

    labels.forEach(label => {
        labelBox.appendChild(label);
    });

    // remove highlight from all zones
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

    // 🔥 BONUS event listeners
    zone.addEventListener("dragenter", dragEnter);
    zone.addEventListener("dragleave", dragLeave);
});

// 🔥 Reset button event listener
resetBtn.addEventListener("click", resetPuzzle);