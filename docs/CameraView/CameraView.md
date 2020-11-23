# Draft: Developer Documentation Poster Scanning

This is the developer documentation for the election poster scanning feature [CameraView Component](https://github.com/Face-the-Facts/mobile-app/blob/develop/src/components/CameraView.tsx) which is a vital part of the [Face the Facts application](https://facethefacts.app). It enables users to access information about the candidates in their constituency directly on the election poster. The feature is powered by WebRTC in combination with the HTML Canvas and the machine learning libraries Tensorflow.js and Tesseract.js.

# Camera Stream

The application uses the device camera to obtain the election poster the user is standing before. To achieve this, the HTML standards WebRTC and canvas are implemented in the frontend.

## WebRTC

WebRTC, or web real-time communication, is a HTML standard which allows the capture and streaming of audio and video media directly from the user's browser. It is used to access the device camera from the web application in order to obtain a live video stream. The stream is used as a source object for a HTML `<video>` element.

## HTML Canvas

The canvas API is a HTML standard for drawing graphics using Javascript and the HTML `<canvas>` element. It is used as an intermediary between the video feed and the machine learning libraries. This is necessary because the libraries support the `<video>` element as an input. The `<canvas>` element is also used to indicate detected posters to the user.

# Poster and Candidate detection

After obtaining a video feed from the user's device, the feed is processed further to first, detect the presence of an election poster in the video, and second, recognise the candidate depicted on the poster. The first step is achieved using the tensorflow.js library, the second using tesseract.js. 

## Tensorflow

Tensorflow is an open source platform for machine learning. It comes with pre-trained models, one of which is the Blazeface model used for face detection in images. The model returns a bounding box, which is drawn on a second `<canvas>` element overlaying the aforementioned `<video>` element.

## Tesseract OCR

Tesseract is an optical character recognition engine. It is used to detect characters in images and videos. It initiates a web worker which takes the video feed drawn on the canvas element and attempts to detect characters from it. The web worker's output contains most or all of the characters present in the image, but it also comes with a lot of noise. To filter this out, one final step is required before the poster can be matched to a candidate.

## Fuse.js

Fuse.js is a fuzzy search, or approximate string matching, library that can approximately match strings to tesseract's detected characters. This is achieved using an array of candidate names which is then matched against the output from tesseract's web worker. Once there is a definite match to one of the candidates in the database, the user is presented with a layover on top of the camera feed giving them the possibility to navigate to the candidate's profile in the application.

![CameraView_Sequence_Diagram.png](CameraView_Sequence_Diagram.png)

UML Sequence Diagram for the CameraView component