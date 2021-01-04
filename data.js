
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
        MAX: 3
    }
};

function getComment(min, max) {
    let number = Math.floor(Math.random() * (max - min)) + min;

    if (number === 2) {
        return comments[getRandomInt(0, comments.length - 1)];
    } else {
        return `${comments[getRandomInt(0, comments.length - 1)]} ${comments[getRandomInt(0, comments.length - 1)]}`;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getUser(i) {
    return {
        url: `img/photos/${i + 1}.jpg`,
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

function getFotos(max) {
    const result = [];

    for (let i = 0; i < max; i++) {

        result.push(getUser(i));
    }
    return result;
}
const photos = getFotos(numberOfObjects);