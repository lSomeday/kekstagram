
(function () {
    function getPictures() {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://javascript.pages.academy/kekstagram/data');

        xhr.addEventListener('load', () => {
            const posts = JSON.parse(xhr.response);
            window.pictureList.render(posts, window.pictureList.picturesContainer);
        });
        xhr.send();
    }

    window.data = {
        getPictures: getPictures
    }

})() 