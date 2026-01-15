// Get elements
const filterBtn = document.getElementById('filterBtn');
const locationInput = document.getElementById('locationInput');
const priceInput = document.getElementById('priceInput');
const hostelCards = document.querySelectorAll('.hostel-card');

filterBtn.addEventListener('click', () => {
    const locationValue = locationInput.value.toLowerCase();
    const maxPrice = parseInt(priceInput.value);

    hostelCards.forEach(card => {
        const hostelLocation = card.dataset.location.toLowerCase();
        const hostelPrice = parseInt(card.dataset.price);

        let show = true;

        // Filter by location
        if(locationValue && !hostelLocation.includes(locationValue)){
            show = false;
        }

        // Filter by price
        if(!isNaN(maxPrice) && hostelPrice > maxPrice){
            show = false;
        }

        card.style.display = show ? 'block' : 'none';
    });
});
