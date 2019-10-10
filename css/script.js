// window.onload = function() {
// 	var projects = document.getElementsByClassName('project');
// 	var isHover = false; 

// 	for (var i = 0; i < projects.length; i++) {
// 		// Mouse Over
// 		projects[i].addEventListener('mouseover', function() {
// 			whitebg.style.opacity = 0.8;
// 			imageContainer.style.opacity = 1;

// 			imageContainer.firstElementChild.src = './assets/images/' + this.getAttribute('data-project') + '.jpg';
// 			imageContainer.firstElementChild.style.left = Math.floor(Math.random() * (0 - 70 + 1)) + 70 + "%";
// 			imageContainer.firstElementChild.style.top = Math.floor(Math.random() * (0 - 70 + 1)) + 70 + "%";
// 		})

// 		// Mouse Leave
// 		projects[i].addEventListener('mouseleave', function() {
// 			whitebg.style.opacity = 0;
// 			imageContainer.style.opacity = 0;
// 		})
// 	}
// }

window.onload = function() {
	var projects = document.getElementsByClassName('project_image');
	var hprojects = document.getElementsByClassName('project');

	for (var i = 0; i < projects.length; i++) {
		projects[i].style.transform = 'rotate3d(' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (150 - 5 + 1))  + 'deg)';

		console.log(hprojects[i].childNodes[1].childNodes[3])

		hprojects[i].addEventListener('mouseover', function() {
			console.log(this.childNodes[1].childNodes[3].style)
			this.childNodes[1].childNodes[3].style.transform = 'rotate3d(' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (150 - 5 + 1))  + 'deg)';
		})

		hprojects[i].addEventListener('mouseleave', function() {
			this.childNodes[1].childNodes[3].style.transform = 'rotate3d(' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (2 - .2 + .2)) + ',' + Math.floor(Math.random() * (150 - 5 + 1))  + 'deg)';
		})

	}

}