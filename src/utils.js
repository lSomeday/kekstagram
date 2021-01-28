(function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function showElement(element) {
        element.classList.remove('hidden');
    }
    function hideElement(element) {
        element.classList.add('hidden');
    }
    function disableScroll(element) {
        element.classList.add('modal-open');
    }
    window.utils = {
        getRandomInt: getRandomInt,
        showElement: showElement,
        hideElement: hideElement,
        disableScroll: disableScroll
    }
})()