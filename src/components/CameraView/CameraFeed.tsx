import React, { ReactNode } from 'react';
import log from 'loglevel';

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

interface Camera {
    ref: React.RefObject<HTMLVideoElement>;

    start(): Promise<string>;
    stop(): Promise<string>;

}

class CameraFeed extends React.Component<CameraFeedProps> implements Camera {
    ref: React.RefObject<HTMLVideoElement> = React.createRef();
    private stream?: MediaStream;

    async componentDidMount(): Promise<void> {
        await this.start().then((res) => {
            log.debug(res)
        }).catch((err) => {
            log.debug(err)
        })
    }

    async componentWillUnmount(): Promise<void> {
        await this.stop().then((res) => {
            log.debug(res);
        }).catch((err) => {
            log.debug(err)
        })
    }

    private async getVideoStream(): Promise<MediaStream> {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: { ideal: this.props.cameraOpts.width },
                height: { ideal: this.props.cameraOpts.height },
            },
            audio: false,
        });
        return new Promise((resolve, reject) => {
            if(stream){
                resolve(stream);
            } else {
                reject()
            }
        })
            
    }
    
    private async setAspectRatio(): Promise<void> {
		const videoTrack = this.stream?.getVideoTracks()[0];
		const ua = navigator.userAgent.toLowerCase();
		const isAndroid = ua.includes('android');
		const height = isAndroid ? this.props.cameraOpts.width : this.props.cameraOpts.height;
		const width = isAndroid? this.props.cameraOpts.height : this.props.cameraOpts.width;
        console.log(width)
		return videoTrack?.applyConstraints({
			height: height,
			width: width,
			aspectRatio: 4 / 3,
		});
    }
    
    private initVideoElement(): void {
		// initialise video element
		if (this.ref.current !== null) {
			this.ref.current.width = this.props.cameraOpts.width;
			this.ref.current.height = this.props.cameraOpts.height;
			this.ref.current.style.width = String(`${this.props.cameraOpts.width}px`);
			this.ref.current.style.height = String(`${this.props.cameraOpts.height}px`);
			this.ref.current.srcObject = this.stream as MediaStream;

			this.ref.current.onloadedmetadata = (): void => {
				this.ref.current?.play();
			};
		}
    }
    
    async start(): Promise<string> {
        
        // get media tracks
		this.stream = await this.getVideoStream();
		await this.setAspectRatio().then((res) => {
            log.debug(res)
        }).catch((err) => {
            log.debug(err)
        });
		this.props.cameraOpts.height = this.stream?.getVideoTracks()[0].getSettings().height as number;

		this.initVideoElement();

		return new Promise((resolve, reject) => {
			if (this.stream?.getTracks()[0].readyState === 'live') {
                this.props.setCameraReady();
				resolve('successfully started camera');
			} else {
				reject('error starting camera');
			}
		});
    }
    
    async stop(): Promise<string> {
		log.debug('stopping camera');
		const tracks = this.stream?.getTracks();
		if (tracks !== undefined) {
			for (const track of tracks) {
				track.stop();
			}
		}

		return new Promise((resolve, reject) => {
			if (this.stream?.getTracks()[0].readyState === 'ended') {
				resolve('successfully stopped camera stream');
			} else {
				reject('failed to stop camera stream');
			}
		});
	}

    render(): ReactNode {
        return (
            <video
                ref={this.ref}
                id="camera-video"
                className="video-element"
                playsInline
                autoPlay
            ></video>
        )
    }
}

export default CameraFeed