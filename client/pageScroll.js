// function showModal(modalName) {
//     const modal = document.getElementById(`modal-' + ${modalName}`);
//     modal.className = 'modal show';
// }

function hideModal() {
    const modal = document.querySelector('.modal.show');
    modal.className = 'modal';
}

function animateSection(nr) {
    const sectionId = `section-' + ${nr}`;
    const animation = nr % 2 ? 'slideInLeft' : 'slideInRight';

    const header = document.querySelector(`#${sectionId} > .feature > h2`);
    const paragraph = document.querySelector(`#${sectionId} > .feature > p`);
    const devtools = document.querySelector(`#${sectionId} > .feature > .devtools`);

    if (header.className.indexOf('animated') === -1) {
        header.className = `${header.className} animated delay-200 ${animation}`;
        paragraph.className = `${paragraph.className} animated delay-100 ${animation}`;
        devtools.className = `${devtools.className} animated ${animation}`;
    }
}

function scrollHandler() {
    const buttons = document.querySelectorAll('.btn-install');

    if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
        for (let iterator = 0; iterator < buttons.length; ++iterator) { //eslint-disable-line no-plusplus
            buttons[iterator].classList.remove('hidden');
            buttons[iterator].classList.add('visible');
        }
    } else {
        for (let iterator = 0; iterator < buttons.length; ++iterator) { //eslint-disable-line no-plusplus
            buttons[iterator].classList.remove('visible');
            buttons[iterator].classList.add('hidden');
        }
    }

    if (document.body.scrollTop + window.innerHeight > 870 || document.documentElement.scrollTop + window.innerHeight > 870) {
        setTimeout(animateSection.bind(null, 1), 100);
    }

    if (document.body.scrollTop + window.innerHeight > 1500 || document.documentElement.scrollTop + window.innerHeight > 1500) {
        setTimeout(animateSection.bind(null, 2), 100);
    }

    if (document.body.scrollTop + window.innerHeight > 2110 || document.documentElement.scrollTop + window.innerHeight > 2110) {
        setTimeout(animateSection.bind(null, 3), 100);
    }
}

window.onscroll = scrollHandler;
window.onresize = scrollHandler;

window.onload = function () {
    setTimeout(scrollHandler, 100);
};

const modals = document.querySelectorAll('.modal');

for (let iterator = 0; iterator < modals.length; ++iterator) { //eslint-disable-line no-plusplus
    modals[iterator].onclick = function () {
        hideModal();
    };

    modals[iterator].querySelector('.modal-content').onclick = function (event) {
        event.stopPropagation();
    };
}

// function onSubmitForm(form) {
//     form.classList.add('submitted');
// }
