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

// Retrieves all event data from localStorage, or if localStorage is empty creates an empty events array
const events = JSON.parse(localStorage.getItem("events")) || [];


// Add event form
const toggleEventForm = () => {
  homeContainer.classList.toggle("hidden");
  addEventContainer.classList.toggle("hidden");
  saveBtn.addEventListener("click", validateInput);
}

// Make the addEventBtn call the addEventForm function
addEventBtn.addEventListener("click", toggleEventForm);

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
    saveEvent(eventName, eventDesc, eventDate)
  }
}

// Create and save Event Object to localStorage
const saveEvent = (eventName, eventDesc, eventDate) => {
  // Create event ID by taking the event name, removing spaces, making ti lower case and adding a time stamp
  const eventID =  eventName.replace(" ", "").trim().toLowerCase() + Date.now();

  // Create event object
  const eventObj = {
    "eventId": eventID,
    "eventName": eventName,
    "eventDesc": eventDesc,
    "eventDate": eventDate
  }
  // Add the event object to the events array
  events.push(eventObj);

  // Sets the localStorage to be equal to the events array
  localStorage.setItem("events", JSON.stringify(events));
  toggleEventForm();
  displayEvents();
}

// Delete event (remove Event Object from localStorage)
const deleteEvent = (i) => {
  // Remove the event from the events array.
  events.splice(i, 1);
  // Set localStorage events to match the events array.
  localStorage.setItem("events", JSON.stringify(events))
  displayEvents();
 }

// Output all Events in localStorage
const displayEvents = () => {
  eventsContainer.innerHTML = "";
  // If the vents array is empty a placeholder is output, otherwise the events are displayed
  if (events.length === 0){
    eventsContainer.innerHTML = `<p id="placeholder">No events added yet.</p>`;
  } else{
    const todaysDate = new Date ();
    // Loops through each event in the event array
    events.forEach(function (event, i) {
      const eventDateObj = new Date (event.eventDate);
      // Calculates how many days from today until the event date
      const daysUntil = Math.ceil((eventDateObj - todaysDate)/(24 * 60 * 60 * 1000));
      // Outputs a card for each event
      eventsContainer.innerHTML += `
            <div class="event-card">
            <h3 class="event-title">${event.eventName}</h3>
            <p class="event-description">${event.eventDesc}</p>
            <p class="event-countdown">Days until event: <span class="countdown">${daysUntil}</span></p>
            <button class="delete-event-btn" onclick="deleteEvent(${i})">Delete</button>
          </div>`
    });}
}

displayEvents();




