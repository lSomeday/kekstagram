(function () {
    const picturesContainer = document.querySelector('.pictures');

    function render(pictures, outContainer) {
        const fragment = document.createDocumentFragment();
        for (let picture of pictures) {
            fragment.append(window.picture.getPhotoHTML(picture));
        }
        outContainer.append(fragment);
    }

    window.pictureList = {
        render: render,
        picturesContainer: picturesContainer,
    }

})()