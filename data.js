
const numberOfObjects = 25;

const names = ['Аркадий', 'Клавдия', 'Иннокентий', 'Варвара', 'Анатолий', 'Василиса'];

const comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const CONFIG = {
    LIKES: {
        MIN: 15,
        MAX: 200
    },
    AVATAR: {
        MIN: 1,
        MAX: 7
    },
    COMMENT: {
        MIN: 1,
        MAX: 3,
        COMPARE: 1,
    },
};

function getComment(min, max) {
    let number = getRandomInt(min, max);
    return number === CONFIG.COMMENT.COMPARE
        ? comments[getRandomInt(0, comments.length - 1)]
        : `${comments[getRandomInt(0, comments.length - 1)]} ${comments[getRandomInt(0, comments.length - 1)]}`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getPhotoInfo(i) {
    return {
        url: `photos/${i + 1}.jpg`,
        description: "описание фотографии",
        likes: getRandomInt(CONFIG.LIKES.MIN, CONFIG.LIKES.MAX),
        comments: [
            {
                avatar: `img/avatar-${getRandomInt(CONFIG.AVATAR.MIN, CONFIG.AVATAR.MAX)}.svg`,
                message: getComment(CONFIG.COMMENT.MIN, CONFIG.COMMENT.MAX),
                name: names[getRandomInt(0, names.length - 1)],
            },
        ]
    }
}

function getPhotos(max) {
    const result = [];
    for (let i = 0; i < max; i++) {
        result.push(getPhotoInfo(i));
    }
    return result;
}
const photos = getPhotos(numberOfObjects);

const template = document.querySelector('#picture');
const picturesContainer = document.querySelector('.pictures');

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

function render(pictures, outContainer) {
    const fragment = document.createDocumentFragment();
    for (let picture of pictures) {
        fragment.append(getPhotoHTML(picture));
    }
    outContainer.append(fragment);
}
render(photos, picturesContainer);

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
    ul.innerHTML = '';
    ul.innerHTML = getPhotoCommentHTML(photoDetails);
    const photoDescription = document.querySelector('.social__caption');
    photoDescription.textContent = photoDetails.description

    hideElement(commentsCounter);
    hideElement(commentsLoader);
    disableScroll(getBody);
};
showPictureDetails(photos[0]);


