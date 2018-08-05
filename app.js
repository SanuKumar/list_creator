// // // select and element by Id

// // const myHeading = document.getElementById('myHeading');

// // // myHeading.addEventListener('click', () => {
// // // 	myHeading.style.color = 'red';
// // // });

// // // change color by clicking on button

// // const myButton = document.getElementById('myButton');

// // // myButton.addEventListener('click', () => {
// // // 	myHeading.style.color ='red';
// // // });

// // //change color by typing color
// // const myTextInput = document.getElementById('myTextInput');

// // myButton.addEventListener('click', ()=>{
// // 	myHeading.style.color = myTextInput.value;
// // })



// const myList = document.getElementsByTagName('li');

// for (var i = 0; i < myList.length; i +=1) {
// 	myList[i].style.color = 'purple';
// }


// //Select element by class name
// const errorNotPurple = document.getElementsByClassName('error-not-purple');

// for (let i=0; i < errorNotPurple.length; i +=1) {
// 	errorNotPurple[i].style.color ='red';
// }


// //CSS Selector(query selector)
// const evens = document.querySelectorAll('li:nth-child(even)');

// for (let i=0; i < evens.length; i +=1) {
// 	evens[i].style.background ='lightgray';
// }


// //CSS child selector

// // let navigationLink = document.querySelectorAll("nav>ui>li>a");



// // CSS pseudo selector
// const evens = document.querySelectorAll('li:nth-child(even)')

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = document.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;


firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

// const removeItemButton = document.querySelector('button.removeItemButton');

// for hover on the list items
// const listItem = document.getElementsByTagName('li');

// for(let i = 0; i < listItem.length; i +=1) {
// 	listItem[i].addEventListener('mouseover', () => {
// 		listItem[i].textContent = listItem[i].textContent.toUpperCase();
// 	});

// 	listItem[i].addEventListener('mouseout', () => {
// 		listItem[i].textContent = listItem[i].textContent.toLowerCase();
// 	});
// }

	
//hor hover on the list to capatilize

	// listDiv.addEventListener('mouseover', (event) => {
	// 	if (event.target.tagName == 'LI') {
	// 		event.target.textContent = event.target.textContent.toUpperCase();
	// 	}
	// });

	// listDiv.addEventListener('mouseout', (event) => {
	// 	if(event.target.tagName == 'LI') {
	// 		event.target.textContent = event.target.textContent.toLowerCase();
	// 	}
	// })



	function attachedListItemButton(li) {
		let up = document.createElement('button');
		up.className = 'up';
		up.textContent = 'Up';
		li.appendChild(up);

		let down = document.createElement('button');
		down.className = 'down';
		down.textContent = 'Down';
		li.appendChild(down);

		let remove = document.createElement('button');
		remove.className = 'remove';
		remove.textContent = 'Remove';
		li.appendChild(remove);

	}

	for (let i=0; i < lis.length; i++) {
		attachedListItemButton(lis[i]);
	}


// Traverse up the DOM

	listUl.addEventListener('click' , (event) => {
		if (event.target.tagName == 'BUTTON') {
			if (event.target.className == 'remove') {
				let li = event.target.parentNode;
				let ul = li.parentNode;
				ul.removeChild(li);
			}
			if (event.target.className == 'up') {
				let li = event.target.parentNode;
				let prevLi = li.previousElementSibling;
				let ul = li.parentNode;
				if (prevLi) {
					ul.insertBefore(li,prevLi);
				}
			}
			if (event.target.className == 'down') {
				let li = event.target.parentNode;
				let nextLi = li.nextElementSibling;
				let ul = li.parentNode;
				if (nextLi) {
					ul.insertBefore(nextLi,li);
				}
			}
		}
	});


toggleList.addEventListener('click',() => {
	if(listDiv.style.display == 'none') {
		toggleList.textContent = 'Hide List';
		listDiv.style.display = 'block';
	} else {
		toggleList.textContent = 'Show List';
		listDiv.style.display = 'none';
	}
});

descriptionButton.addEventListener('click',() => {
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';  //remove the written data in the text field
});

// p.title = "Link Description"; change the title as link description for p tag

addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0]; //access the first element of the ul element
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	attachedListItemButton(li);
	ul.appendChild(li);
	addItemInput.value = '';  //remove the written data in the text field
});

//remove item button handler
// ++++++++++++++++++++++++++++++++
// removeItemButton.addEventListener('click', () => {
// 	let ul = document.getElementsByTagName('ul')[0];
// 	let li = document.querySelector('li:last-child');
// 	ul.removeChild(li);
// });



