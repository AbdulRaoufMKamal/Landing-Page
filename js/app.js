const navBar = document.querySelector('#navBar');

const list = document.createElement('ul');

const mathematics = document.createElement('li');
const physics = document.createElement('li');
const chemistry = document.createElement('li');
const biology = document.createElement('li');
const esl = document.createElement('li');

mathematics.textContent = 'Mathematics';
physics.textContent = 'Physics';
chemistry.textContent = 'Chemistry';
biology.textContent = 'Biology';
esl.textContent = 'ESL';

list.appendChild(mathematics);
list.appendChild(physics);
list.appendChild(chemistry);
list.appendChild(biology);
list.appendChild(esl);

navBar.appendChild(list);

const content = document.querySelector("div#content");
const title = document.querySelector('div#page-title');
const posTitle = title.getBoundingClientRect();

const div1 = document.getElementById('mathematics');
const div2 = document.getElementById('physics');
const div3 = document.getElementById('chemistry');
const div4 = document.getElementById('biology');
const div5 = document.getElementById('esl');

const posDiv1 = div1.getBoundingClientRect();
const posDiv2 = div2.getBoundingClientRect();
const posDiv3 = div3.getBoundingClientRect();
const posDiv4 = div4.getBoundingClientRect();
const posDiv5 = div5.getBoundingClientRect();

content.addEventListener('scroll', function () {

    if (content.scrollTop < posDiv2.top - posTitle.bottom) {

        mathematics.style.color = 'chocolate';
        physics.style.color = 'white';
        chemistry.style.color = 'white';
        biology.style.color = 'white';
        esl.style.color = 'white';

        div1.className = 'active';
        div2.className = '';
        div3.className = '';
        div4.className = '';
        div5.className = '';

    }

    else if (content.scrollTop < posDiv3.top - posTitle.bottom) {

        mathematics.style.color = 'white';
        physics.style.color = 'darkkhaki';
        chemistry.style.color = 'white';
        biology.style.color = 'white';
        esl.style.color = 'white';

        div1.className = '';
        div2.className = 'active';
        div3.className = '';
        div4.className = '';
        div5.className = '';

    }

    else if (content.scrollTop < posDiv4.top - posTitle.bottom) {

        mathematics.style.color = 'white';
        physics.style.color = 'white';
        chemistry.style.color = 'fuchsia';
        biology.style.color = 'white';
        esl.style.color = 'white';

        div1.className = '';
        div2.className = '';
        div3.className = 'active';
        div4.className = '';
        div5.className = '';

    }

    else if (content.scrollTop < posDiv5.top - posTitle.bottom) {

        mathematics.style.color = 'white';
        physics.style.color = 'white';
        chemistry.style.color = 'white';
        biology.style.color = 'mediumspringgreen';
        esl.style.color = 'white';

        div1.className = '';
        div2.className = '';
        div3.className = '';
        div4.className = 'active';
        div5.className = '';

    }

    else {

        mathematics.style.color = 'white';
        physics.style.color = 'white';
        chemistry.style.color = 'white';
        biology.style.color = 'white';
        esl.style.color = 'slateblue';

        div1.className = '';
        div2.className = '';
        div3.className = '';
        div4.className = '';
        div5.className = 'active';

    }

});

const selection = document.querySelectorAll('div#navBar li');

selection[0].addEventListener('click', function () {
    content.scroll({
        top: posDiv1.top,
        behavior: "smooth"
    });
});

selection[1].addEventListener('click', function () {
    content.scroll({
        top: posDiv2.top,
        behavior: "smooth"
    });
});

selection[2].addEventListener('click', function () {
    content.scroll({
        top: posDiv3.top,
        behavior: "smooth"
    });

});

selection[3].addEventListener('click', function () {
    content.scroll({
        top: posDiv4.top,
        behavior: "smooth"
    });
});

selection[4].addEventListener('click', function () {
    content.scroll({
        top: posDiv5.top,
        behavior: "smooth"
    });
});