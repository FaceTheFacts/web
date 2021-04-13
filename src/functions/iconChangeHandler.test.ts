import { iconChangeHandler } from './iconChangeHandler';
import { arrowForwardOutline, chevronBackOutline } from 'ionicons/icons';
test("If args is 'arrowForward, return arrowForwardOutline", () => {
	expect(iconChangeHandler('arrowForwardOutline')).toBe(arrowForwardOutline);
});

