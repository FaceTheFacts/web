export const incomeMonthHandler = (date: string): string => {
	const yearIndex = date.indexOf('-');
	const year = date.slice(0, yearIndex);
	const newDate = date.slice(yearIndex + 1);
	const monthIndex = newDate.indexOf('-');
	const month = newDate.slice(0, monthIndex);
	return month + '/' + year;
};
