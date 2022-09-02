// User selects a Flip Card using mouse "click" OR "enter" key on the keyboard
// Pressing the Enter Key whilst focused on a button is treated in the same way as a click event by the browser
$('.card-list-item').click(function(event) {
	toggleCardFunction($(this));
});

// User selects a Flip Card using the "space" key on the keyboard
$('.card-list-item').keypress(function(event) {
	// Keycode 32 is the "space" key
	if (event.keyCode == 32) {
		toggleCardFunction($(this));
	}
});

// Actual function to flip the card
function toggleCardFunction(selectedCard) {
	$(selectedCard).children('div.flip-card').toggleClass("flipped");
}