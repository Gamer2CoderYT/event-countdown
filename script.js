// Assign HTML elements to variables
const container = document.getElementById("container");
const homeContainer = document.getElementById("home-container");
const eventsContainer = document.getElementById("events-container");
const placeholder = document.getElementById("placeholder");
const addEventBtn = document.getElementById("add-event-btn");
const addEventContainer = document.getElementById("add-event-container");
const saveBtn = document.getElementById("save-btn");



// Add event form
const addEventForm = () => {
  homeContainer.classList.toggle("hidden");
  addEventContainer.classList.toggle("hidden");
}

// Make the addEventBtn call the addEventForm function
addEventBtn.addEventListener("click", addEventForm);

// Create Event Object

// Save Event Object to localStorage

// Output all Events in localStorage

// Edit event form

// Update Event Object in localStorage

// Delete event (remove Event Object from localStorage)



