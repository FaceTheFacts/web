export const getMobileOperatingSystem = (): string => {
	const userAgent = navigator.userAgent || navigator.vendor || window.opener;

	if (/android/i.test(userAgent)) {
		return 'Android';
	}

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return 'iOS';
	}

	return 'others';
};
