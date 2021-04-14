import {
	arrowForwardOutline,
	chevronBackOutline,
	closeCircle,
	closeOutline,
	searchOutline,
} from 'ionicons/icons';
import { iconEnum } from '../enums/icon.enum';
export const iconChangeHandler = (icon: iconEnum): string => {
	let iconName: string;
	switch (icon) {
	case iconEnum.ARROW_FORWARD:
		iconName = arrowForwardOutline;
		break;
	case iconEnum.CHEVRON_BACK:
		iconName = chevronBackOutline;
		break;
	case iconEnum.SEARCH:
		iconName = searchOutline;
		break;
	case iconEnum.CLOSE:
		iconName = closeOutline;
		break;
	case iconEnum.CLOSE_CIRCLE:
		iconName = closeCircle;
		break;
	default:
		iconName = arrowForwardOutline;
	}
	return iconName;
};
