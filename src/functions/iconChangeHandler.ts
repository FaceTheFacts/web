import { arrowForwardOutline, chevronBackOutline } from 'ionicons/icons';
import { iconEnum } from '../enums/icon.enum';
export const iconChangeHandler = (icon:iconEnum) => {
  let iconName;
  switch(icon){
    case iconEnum.ARROW_FORWARD:
      iconName = arrowForwardOutline
      break
    case iconEnum.CHEVRON_BACK:
      iconName = chevronBackOutline
      break
      
    default:
      iconName = arrowForwardOutline
  }
  return iconName
}