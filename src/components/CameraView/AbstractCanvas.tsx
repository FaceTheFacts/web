import React from 'react'

interface Canvas {
    ref: React.RefObject<HTMLCanvasElement>
    init: Function
    //draw: Function

}

type CanvasImage = {
    source: HTMLVideoElement | HTMLImageElement;
    width: number;
    height: number;
}



class AbstractCanvas implements Canvas {
    ref: React.RefObject<HTMLCanvasElement> = React.createRef();

    init(width: number, height: number): Promise<string> {
        const ctx = this.ref.current?.getContext('2d');
        if (ctx) {
            ctx.canvas.width = width;
            ctx.canvas.height = height;
        }

        return new Promise<string>((resolve, reject) => {
            if (ctx?.canvas.width === width && ctx?.canvas.height === height) {
                resolve('successfully initialised canvas')
            } else {
                reject('could not initialise canvas')
            }
        })
    }

    // draw(image?: CanvasImage) {
    //     const ctx = this.ref.current?.getContext('2d');
    //     ctx?.drawImage(
    //         image?.source as HTMLVideoElement,
    //         0,
    //         0,
    //         image?.width as number,
    //         image?.height as number
    //     )
    // }
}

export default AbstractCanvas