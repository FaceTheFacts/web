import AbstractCanvas from './AbstractCanvas'

class DetectionCanvas extends AbstractCanvas {
    draw(image: HTMLVideoElement, width: number, height: number): void {
        const ctx = this.ref.current?.getContext('2d');
        ctx?.drawImage(
            image,
            0,
            0,
            width,
            height
        )
    }
}

export default DetectionCanvas