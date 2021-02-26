# Refactor CameraView Component

-   [x] Setup browser automation test
-   [ ] Extract classes from large class CameraView
    -   [x] Extract FeedbackCanvas class
    -   [x] Test feedback canvas class
    -   [x] Extract DetectionCanvas class
    -   [x] test detectioncanvas class
    -   [x] Extract CameraFeed class
    -   [x] Extract FaceDetection class
    -   [ ] test FaceDetection
    -   [x] Extract CharacterRecognition class
    -   [ ] test CharacterRecognition
-   [ ] Test camera view component
    -   [ ] test facedetection on mocked camerafeed
        -   [ ] correct bbox
        -   [ ] correct bbox on canvas
    -   [ ] test characterrecognition on mocked camerafeed
        -   [ ] correct characters
        -   [ ] shows popover
    -   [ ]

## Classes

### Classes with DOM Elements

#### FeedbackCanvas

#### DetectionCanvas

#### CameraFeed

### Classes without DOM Elements

#### TensorFlow / ImageRecognition

#### Tesseract / CharacterRecognition
