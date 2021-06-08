# Face the Facts

[![codecov](https://codecov.io/gh/Face-the-Facts/mobile-app/branch/develop/graph/badge.svg)](https://codecov.io/gh/Face-the-Facts/mobile-app)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/facethefacts/app?label=build&logo=docker)](https://hub.docker.com/r/facethefacts/app)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/face-the-facts/mobile-app/eslint?label=ESLint&logo=eslint)

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
