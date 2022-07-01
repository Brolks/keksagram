import {criateRandomNamber} from '/js/module/utility.js';
import  {
  messages as MESSAGES,
  names as NAMES,
  MAX_AVATAR_IMAGE,
  MAX_ID_COMMENT,
} from '/js/module/const.js';
function criateComments(count){
  let commentPull =[];
  for(let i=0; i<count;i++){
    commentPull.push(
      {
        id: criateRandomNamber([1,MAX_ID_COMMENT],_.random,commentPull),
        avatar: 'img/avatar-'+_.random(1,MAX_AVATAR_IMAGE)+'.svg',
        message: MESSAGES[_.random(0,MESSAGES.length-1)],
        name: NAMES[_.random(0,NAMES.length-1)],
      }
    )
  }
  return commentPull;
}
export default criateComments;
