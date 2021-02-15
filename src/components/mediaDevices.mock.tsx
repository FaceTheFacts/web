const device: MediaDeviceInfo = {
	deviceId: 'default',
	kind: 'audiooutput',
	label: '',
	groupId: 'default',
	toJSON: () => {
		JSON.stringify({
			deviceId: 'default',
			kind: 'videoinput',
			label: '',
			groupId: 'default',
		});
	},
};

const stream = new MediaStreamTrack();

// const stream: MediaStreamTrack = {
//     enabled: true,
//     id: '',
//     isolated: false,
//     kind: '',
//     label: '',
//     muted: false,
//     onended: null,
//     onisolationchange: null,
//     onmute: null,
//     onunmute: null,
//     readyState: 'live',
//     applyConstraints: ((constraints) => {
//         return new Promise((resolve, reject) => {
//             resolve()
//         })
//     }),
//     clone: () => {
//         return new MediaStreamTrack
//     },
//     getCapabilities: () => {
//         return new MediaTrackCapabilities
//     }
// }

Object.defineProperty(navigator, 'mediaDevices', {
	value: jest.fn().mockImplementation((query) => ({
		getUserMedia: jest.fn(),
	})),
});

Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {
	value: jest.fn().mockImplementation(() => {
		return [device];
	}),
});

Object.defineProperty(MediaStream, 'getVideoTracks', {
	value: jest.fn().mockImplementation(() => {
		return [stream];
	}),
});
export default {};
