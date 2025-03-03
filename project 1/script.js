// Event data
const events = [
    { name: 'Concert A', date: '2025-02-20', description: 'Enjoy the best music!', img: 'event1.jpg' },
    { name: 'Art Gallery Opening', date: '2025-02-25', description: 'Discover contemporary art.', img: 'event2.jpg' },
    { name: 'Tech Conference', date: '2025-03-01', description: 'Innovations in technology.', img: 'event3.jpg' },
  
];

// Function to render event cards
function renderEvents(filteredEvents) {
    const eventCardsContainer = document.querySelector('.event-cards');
    eventCardsContainer.innerHTML = ''; // Clear current event cards

    filteredEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        
        eventCard.innerHTML = `
            <img src="${event.img}" alt="${event.name}" class="event-image">
            <div class="event-info">
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p>${event.description}</p>
                <button class="cta-button">View Details</button>
            </div>
        `;
        
        eventCardsContainer.appendChild(eventCard);
    });
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchTerm));
    renderEvents(filteredEvents);
});

// Initially render all events
renderEvents(events);
