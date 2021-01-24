(function () {
    const bigPicture = document.querySelector('.big-picture');
    const commentsCounter = document.querySelector('.social__comment-count');
    const commentsLoader = document.querySelector('.comments-loader');
    const getBody = document.querySelector('body');

    function showElement(element) {
        element.classList.remove('hidden');
    }
    function hideElement(element) {
        element.classList.add('hidden');
    }
    function disableScroll(element) {
        element.classList.add('modal-open');
    }

    function getPhotoCommentHTML(photoDetails) {
        let finalComment = '';
        for (let i = 0; i < photoDetails.comments.length; i++) {
            const avatar = photoDetails.comments[i].avatar;
            const avatarName = photoDetails.comments[i].name;
            const text = photoDetails.comments[i].message;

            const comment = `<li class="social__comment">
                        <img class="social__picture"
                        src="${avatar}"
                        alt="${avatarName}"
                        width="35" height="35">
                        <p class="social__text">${text}"</p>
                       </li>`
            finalComment += comment;
        }
        return finalComment;
    }

    function showPictureDetails(photoDetails) {
        showElement(bigPicture);
        const div = document.querySelector('.big-picture__img');
        const image = div.querySelector('img');
        image.setAttribute('src', photoDetails.url);

        const likesCount = document.querySelector('.likes-count');
        likesCount.textContent = photoDetails.likes;

        const commentsCount = document.querySelector('.comments-count');
        commentsCount.textContent = photoDetails.comments.length;

        const ul = document.querySelector('.social__comments');
        ul.innerHTML = getPhotoCommentHTML(photoDetails);
        const photoDescription = document.querySelector('.social__caption');
        photoDescription.textContent = photoDetails.description

        hideElement(commentsCounter);
        hideElement(commentsLoader);
        disableScroll(getBody);
    };
    showPictureDetails(window.data.photos[0]);

    window.bigPicture = {
        bigPicture: bigPicture,
        hideElement: hideElement,
        showElement: showElement,
    }
})()