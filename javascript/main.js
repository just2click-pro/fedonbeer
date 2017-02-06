var menuElements = document.querySelectorAll('nav ul li a');

function clearMenuItemsActive() {
	for (var index = 0, size = menuElements.length; index < size; index++) {
		menuElements[index].className = '';
	}
}

function setMenuItemActive (index) {
	clearMenuItemsActive();
	menuElements[index].className = 'active';
}

// function toggleMenu () {
// 	var mainMenu = document.getElementById('mainMenu');
// 	if (mainMenu.className.indexOf('hide') >= 0) {
// 		mainMenu.className = mainMenu.className.replace('hide', '').trim();
// 		mainMenu.className += ' show';
// 	} else {
// 		if (mainMenu.className.indexOf('show') >= 0) {
// 			mainMenu.className = mainMenu.className.replace('show', '').trim();
// 			mainMenu.className += ' hide';
// 		} else {
// 			mainMenu.className += ' show';
// 		}
// 	}
// }


// if (!String.prototype.trim) {
//   String.prototype.trim = function () {
//     return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
//   };
// }
