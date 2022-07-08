import criateComments from "./criate-pickcher.js";
import  {
  descriptions as DESCRIPTIONS,
  MIN_LIKES,
  MAX_LIKES,
} from '/js/module/const.js';
function criatePickcher(id){
  return {
    id:id,
    url:`photos/${id}.jpg`,
    description:DESCRIPTIONS[_.random(0,DESCRIPTIONS.length-1)],
    likes:_.random(MIN_LIKES,MAX_LIKES),
    comments:criateComments(_.random(1,4))
  }
}
export default criatePickcher;
