let messages=[
  'Ниплохая пикча',
  'Подписываетесь на меня!',
  'Больше света',
  'Поновее ничего нет?',
  'Просто комментарий',
  'Не просто комментарий',
  '=^_^= ',
  'Куплю гараж! 8-800-555-35-35',
  'Красивое',
  'Веселое',
  'Оно существует',
  'Почему так мало комментариев?',
  'Почему так много комментариев?',
  'Искуство во всей его красе',
  'Зачем вы комментируете?',
  'Выражаю протест данным изображением',
  'Даешь больше таких фотографик',
  'Как я сюда попал?',
  'Где купить кота?',
  '-_____-',
  'Скучно',
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
let descriptions=[
  'Описание фотографии',
  'Продам гараж! 8-800-555-35-35',
  'Зачем я это запостил?',
  'Не комментировать!',
  'Лайкните плиз!',
  'Как вам?',
  'Лучшое мое фото',
  'Зачем нужно описание',
  'Бооооринг',
  'Отсылка на ДжоДжо',
  'Гератор комментариев сломался!',
  'ERROR: description no found',
  'Пустое описание',
];
let names =[
  "Леха",
  "Петя",
  "Вася",
  "Катя",
  "Марина",
  "Петрович",
  "Костя",
  "Маша",
  "Марина",
  "Вика",
  "Стас",
  "Даня",
  "Коля",
];

const MAX_AVATAR_IMAGE=6;
const MAX_ID_COMMENT=300;
const MIN_LIKES=15;
const MAX_LIKES=200;
function criateRandomNamber(varFunc,func,obj){
  let newNamber =func(varFunc[0],varFunc[1]);
  if(obj.find((elm)=>elm.id===newNamber)=== undefined || obj.length===0)
    return newNamber
  else
    return criateRandomNamber(varFunc,func,obj);
}
function criateComments(count){
  let commentPull =[];
  for(let i=0; i<count;i++){
    commentPull.push(
      {
        id: criateRandomNamber([1,MAX_ID_COMMENT],_.random,commentPull),
        avatar: 'img/avatar-'+_.random(1,MAX_AVATAR_IMAGE)+'.svg',
        message: messages[_.random(0,messages.length-1)],
        name: names[_.random(0,messages.length-1)],
      }
    )
  }
  return commentPull;
}
function criatePickcher(id){
  return {
    id:id,
    url:`photos/${id}.jpg`,
    description:descriptions[_.random(0,descriptions.length-1)],
    likes:_.random(MIN_LIKES,MAX_LIKES),
    comments:criateComments(_.random(1,4))
  }
}
let pullPhoto = [];
for(let i = 1; i<=25;i++){
  pullPhoto.push(criatePickcher(i));
}
