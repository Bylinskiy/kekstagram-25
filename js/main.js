const DESCRIPTIONS = [
  'абырвалг абырвалг',
  'Запятые как оружие у самурая используется только в крайних случаях',
  'Я просто оставлю это тут',
  'зетс ол фолкс',
];

const MESSAGES = [
  'Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Плюшкин',
  'Салампапалам',
  'Камаз Навозов',
  'Парад Уродов',
  'ДжигаДрыга'
];


function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const SIMILAR_POST_COUNT = 25;

const randomFromArr = (arr) => {
  return arr[getRandomPositiveInteger(0, arr.length - 1)]
};

const createPost = (idNumber) => {

  const createComment = () => {
    return {
        id: getRandomPositiveInteger(1, 1546),
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
        message: randomFromArr(MESSAGES),
        name: randomFromArr(NAMES)
    };
  };

  return {
    id: '' + idNumber,
    url: `photos/${idNumber}.jpg`,
    description: randomFromArr(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 6)}, createComment)
  };
};

const similarPosts = Array.from({length: SIMILAR_POST_COUNT},( currentValue, index ) => createPost(index + 1));

