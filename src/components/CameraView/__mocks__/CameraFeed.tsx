import React from 'react';


class CameraFeed extends React.Component {

    render = jest.fn().mockImplementation(() => {
        return (
            <video
                src='./test_scan_video_large.mp4'
            ></video>
        )
    })
}

export default CameraFeed