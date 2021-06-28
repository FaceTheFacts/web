export const constituencyCardHandler = (constituencyCard: string|null): string|null => {
	let cleanConstituencyCard: string;

	if (constituencyCard?.includes('(')) {
		const index = constituencyCard.indexOf('(');
		cleanConstituencyCard = constituencyCard.slice(0, index);
		if (constituencyCard.includes('Landesliste')) {
			const index = cleanConstituencyCard.indexOf('Landesliste');
			cleanConstituencyCard = cleanConstituencyCard.slice(index + 12);
		}
		return cleanConstituencyCard;
	}
	return constituencyCard;
};
