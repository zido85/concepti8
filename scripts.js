var menu = document.getElementsByClassName('menu');
var content = document.getElementsByClassName('content');

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.run')) return;

	// Don't follow the link
    event.preventDefault();
    console.log(event.target);
    console.log(menu[0])
    menu[0].classList.add('active');
    content[0].classList.add('active');
    // Log the clicked element in the console
    

}, false);