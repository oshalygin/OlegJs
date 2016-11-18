/* eslint-disable */
function showModal(modalName) {
    var modal = document.getElementById('modal-' + modalName);
    modal.className = 'modal show';
}

function hideModal() {
    var modal = document.querySelector('.modal.show');
    modal.className = 'modal';
}

function animateSection(nr) {
    var sectionId = 'section-' + nr;
    var animation = nr % 2 ? 'slideInLeft' : 'slideInRight';

    var h2 = document.querySelector('#' + sectionId + ' > .feature > h2');
    var p = document.querySelector('#' + sectionId + ' > .feature > p');
    var devtools = document.querySelector('#' + sectionId + ' > .feature > .devtools');

    if (h2.className.indexOf('animated') === -1) {
        h2.className = h2.className + ' animated delay-200 ' + animation;
        p.className = p.className + ' animated delay-100 ' + animation;
        devtools.className = devtools.className + ' animated ' + animation;
    }
}

function scrollHandler() {
    var buttons = document.querySelectorAll('.btn-install');

    if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
        for (var i = 0; i < buttons.length; ++i) {
            buttons[i].classList.remove('hidden');
            buttons[i].classList.add('visible');
        }
    } else {
        for (var i = 0; i < buttons.length; ++i) {
            buttons[i].classList.remove('visible');
            buttons[i].classList.add('hidden');
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

var modals = document.querySelectorAll('.modal');

for (var i = 0; i < modals.length; ++i) {
    modals[i].onclick = function () {
        hideModal();
    };

    modals[i].querySelector('.modal-content').onclick = function (event) {
        event.stopPropagation();
    };
}

function onSubmitForm(form) {
    form.classList.add('submitted');
}