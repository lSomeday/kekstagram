(function () {
    const template = document.querySelector('#picture');

    function getPhotoHTML(picture) {
        const url = picture.url;
        const likes = picture.likes;
        const numberOfComments = picture.comments.length;

        const container = template.content.querySelector('.picture').cloneNode(true);

        const image = container.querySelector('.picture__img');
        const qantityOfComments = container.querySelector('.picture__comments');
        const qantityOfLikes = container.querySelector('.picture__likes');

        image.setAttribute('src', url);
        qantityOfComments.textContent = numberOfComments;
        qantityOfLikes.textContent = likes;

        return container;
    }

    window.picture = {
        getPhotoHTML: getPhotoHTML,
    }
})()