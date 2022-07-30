// Background colors for the sections
const colors = ['chocolate', 'darkkhaki', 'fuchsia', 'mediumspringgreen', 'slateblue'];

// Buidling the dynamic navBar
const navBar = document.querySelector('#navBar');
const list = document.createElement('ul');
const sections = Array.from(document.getElementsByTagName('section'));

// Creating an li element and setting the textContent to the subject name
// Then appending the li element to the ul element

for (let section of sections) {
    const subject = document.createElement('li');
    subject.textContent = section.dataset.subjectName;
    list.appendChild(subject);
}

// Appending the ul element to the navBar div element
navBar.appendChild(list);

const content = document.querySelector("div#content");
const title = document.querySelector('div#page-title');
const posTitle = title.getBoundingClientRect();

// Storing all the div elements in an array
const divs = Array.from(document.querySelectorAll('div.subject'));
const posDivs = Array();

for (let i = 0; i < divs.length; ++i) {

    // Please note at line 1, there is an array of 5 colors
    // If there is more than 5 sections
    // The next section will be colored again starting from index 0
    // till 5
    if (i < colors.length) {
        divs[i].style.backgroundColor = colors[i];
    }
    else {
        divs[i].style.backgroundColor = colors[i - colors.length];
    }
}
// Storing the DOMRect (dimensions) object in an array
for (let div of divs) {
    posDivs.push(div.getBoundingClientRect());
}

const items = Array.from(document.querySelectorAll('ul li'));

// Adding a scroll so that when the scrollBar is scrolled
// 1. The appropriate section is highlighted
// 2. The appropriate section class name is set to 'active'
content.addEventListener('scroll', function (evt) {
    for (let i = 0; i < posDivs.length; ++i) {
        if (content.scrollTop < posDivs[i].bottom - posTitle.bottom) {
            for (let j = 0; j < sections.length; ++j) {
                if (j == i) {
                    // If there is more than 5 sections
                    // The next section will be colored again starting from index 0
                    // till 5
                    if (j < colors.length) items[j].style.color = colors[j];
                    else items[j].style.color = colors[j - colors.length];
                    sections[j].className = 'active';
                }
                else {
                    items[j].style.color = 'white';
                    sections[j].className = '';
                }
            }
            break;
        }
    }
    evt.preventDefault();


});

// Adding a click event listener so that when a li element is clicked
// The scrollBar is scrolled to the appropriate section
const selections = document.querySelectorAll('div#navBar li');
for (let i = 0; i < selections.length; ++i) {
    selections[i].addEventListener('click', function (evt) {
        content.scroll({
            top: posDivs[i].top,
            behavior: "smooth"
        });
        evt.preventDefault();
    });
}