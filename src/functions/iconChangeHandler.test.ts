import { iconChangeHandler } from './iconChangeHandler';
import { arrowForwardOutline } from 'ionicons/icons';
import { iconEnum } from '../enums/icon.enum';

test("If args is 'iconEnum.ARROW_FORWARD', return arrowForwardOutline", () => {
	//given=> then
	expect(iconChangeHandler(iconEnum.ARROW_FORWARD)).toBe(arrowForwardOutline);
});

test("If args is 'iconEnum.SEARCH', should not return arrowForwardOutline", () => {
	//given=> then
	expect(iconChangeHandler(iconEnum.SEARCH)).not.toBe(arrowForwardOutline);
});
