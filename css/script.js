window.onload = function() {
	var projects = document.getElementsByClassName('project');
	var isHover = false; 

	for (var i = 0; i < projects.length; i++) {
		// Mouse Over
		projects[i].addEventListener('mouseover', function() {
			whitebg.style.opacity = 0.8;
			imageContainer.style.opacity = 1;

			imageContainer.firstElementChild.src = './assets/images/' + this.getAttribute('data-project') + '.jpg';
			imageContainer.firstElementChild.style.left = Math.floor(Math.random() * (0 - 70 + 1)) + 70 + "%";
			imageContainer.firstElementChild.style.top = Math.floor(Math.random() * (0 - 70 + 1)) + 70 + "%";
		})

		// Mouse Leave
		projects[i].addEventListener('mouseleave', function() {
			whitebg.style.opacity = 0;
			imageContainer.style.opacity = 0;
		})
	}
}