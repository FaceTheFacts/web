# Face the Facts

[![codecov](https://codecov.io/gh/Face-the-Facts/mobile-app/branch/develop/graph/badge.svg)](https://codecov.io/gh/Face-the-Facts/mobile-app)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/facethefacts/app?label=build&logo=docker)](https://hub.docker.com/r/facethefacts/app)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/face-the-facts/mobile-app/eslint?label=ESLint&logo=eslint)

Face the Facts is a mobile web application enabling users to access information about the political candidates runnning for office in their constituency directly on the election poster.

Check it out here: [https://facethefacts.app](https://facethefacts.app)

For testing the scanning feature, point your device's camera at [this image](.github/media/philipp_amthor_poster.jpeg).

## Technologies

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/face-the-facts/mobile-app/typescript?logo=typescript)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/face-the-facts/mobile-app/react?logo=react)

The application is built using the [Ionic Framework](https://ionicframework.com/) on top of [React](https://reactjs.org/). The scanning feature utilises the WebRTC API to gain access to the device camera alongside the machine learning library Tensorflow with its Blazeface model for face detection and the optical character recognition engine Tesseract.js.

## Contributing

This project is still in a very early stage. If you are interested in contributing, feel free to reach out to [info@facethefacts.app](mailto:info@facethefacts.app).

## Development

npm needs to be installed to run this project

### Run locally

```zsh
git clone https://github.com/Face-the-Facts/mobile-app.git
cd mobile-app
npm install
npm start
```

## Automated Tests

We use a combination of testing frameworks to ensure functionality accross platforms and browsers

### Unit & Integration Tests

We use the jest testing framework. Run these tests with `npm test`

### E2E Tests

We use selenium for browser autmation in conjunction with the pytest framework. To run these tests, `cd` into the `pytest` directory. If you've never run the tests you'll need to configure the virtual environment and install dependencies:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

After this initial setup you can run the whole test suite with the command `pytest`

For more detailed information on supported platforms see [E2E Testing](./pytest/README.md)
