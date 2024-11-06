// Assign HTML elements to variables
const container = document.getElementById("container");
const homeContainer = document.getElementById("home-container");
const eventsContainer = document.getElementById("events-container");
const placeholder = document.getElementById("placeholder");
const addEventBtn = document.getElementById("add-event-btn");
const addEventContainer = document.getElementById("add-event-container");
const saveBtn = document.getElementById("save-btn");
const eventNameInput = document.getElementById("event-name");
const eventDescriptionInput = document.getElementById("event-description");
const eventDateInput = document.getElementById("event-date"); 



// Add event form
const addEventForm = () => {
  homeContainer.classList.toggle("hidden");
  addEventContainer.classList.toggle("hidden");
  saveBtn.addEventListener("click", validateInput);
}

// Make the addEventBtn call the addEventForm function
addEventBtn.addEventListener("click", addEventForm);

// Validate event form input
const validateInput = ()=>{
  // Stores the values of inputs as variables
  const eventName = eventNameInput.value;
  const eventDesc = eventDescriptionInput.value;
  const eventDate = eventDateInput.value;
  const todaysDate = new Date ();
  const eventDateObj = new Date (eventDate);

  // Checks if any of the inputs are empty and if they are alerts the user
  if (!(eventName && eventDesc && eventDate)){
    alert("Please fill in all required fields.");
  } 
  // Checks the date entered is not before the current date
  else if (eventDateObj < todaysDate) {
    alert("Date of event must be in the future.");
  }
  else {
    alert("All fields passed");
  }
}

// Create Event Object

// Save Event Object to localStorage

// Output all Events in localStorage

// Edit event form

// Update Event Object in localStorage

// Delete event (remove Event Object from localStorage)



