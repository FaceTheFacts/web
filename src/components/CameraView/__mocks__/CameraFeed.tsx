import React from 'react';

interface CameraFeedProps {
    cameraOpts: {
        x: number,
        y: number,
        width: number,
        height: number,
        camera: string,
        tapPhoto: boolean,
        previewDrag: boolean,
        toBack: boolean,
        alpha: number, 
    };
    setCameraReady: Function;
}

class CameraFeed extends React.Component<CameraFeedProps> {

    ref: React.RefObject<HTMLVideoElement> = React.createRef();

    async componentDidMount(): Promise<void> {
        await this.start()
    }


    
    
    initVideoElement(): void {
		// initialise video element
		if (this.ref.current !== null) {
			this.ref.current.width = this.props.cameraOpts.width;
			this.ref.current.height = this.props.cameraOpts.height;
			this.ref.current.style.width = String(`${this.props.cameraOpts.width}px`);
			this.ref.current.style.height = String(`${this.props.cameraOpts.height}px`);
			this.ref.current.src = './test_scan_video_large.mp4';

			this.ref.current.onloadedmetadata = (): void => {
				this.ref.current?.play();
			};
		}
    }
    
    async start(): Promise<string> {
        
		this.initVideoElement();

		return new Promise((resolve, reject) => {
			resolve('successfully started camera');
		});
    }
    render = jest.fn().mockImplementation(() => {
        return (
            <video
                ref={this.ref}
                id="camera-video"
                className="video-element"
                playsInline
                autoPlay
            ></video>
        )
    })
}

export default CameraFeed