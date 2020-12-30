

const names = ['Аркадий', 'Клавдия', 'Иннокентий', 'Варвара', 'Анатолий', 'Василиса'];

const comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getUser(i) {

    const objUser = {
        url: `img/photos/${i + 1}.jpg`,
        description: "описание фотографии",
        likes: getRandomInt(15, 200),
        comments: [
            {
                avatar: `img/avatar-${getRandomInt(1, 7)}.svg`,
                message: comments[getRandomInt(0, comments.length - 1)],
                name: names[getRandomInt(0, names.length - 1)],
            },
        ]
    }
    return objUser;
}

function getFotos(max) {

    const result = [];

    for (let i = 0; i < max; i++) {
        const user = getUser(i);
        result.push(user);
    }
    return result;
}

const photos = getFotos(25);
console.log(photos);