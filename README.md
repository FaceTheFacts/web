# Face the Facts

[![codecov](https://codecov.io/gh/Face-the-Facts/mobile-app/branch/develop/graph/badge.svg)](https://codecov.io/gh/Face-the-Facts/mobile-app)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/facethefacts/app?label=build&logo=docker)](https://hub.docker.com/r/facethefacts/app)
![Dependency status](https://img.shields.io/david/face-the-facts/mobile-app)
![Development dependency status](https://img.shields.io/david/dev/face-the-facts/mobile-app)

## Development

npm needs to be installed to run this project

### Run locally

```zsh
git clone
cd face-the-facts
npm install
ionic serve
```

If you want to try out the app on an actual phone use the `external` flag

on iPhone you also need the `https` flag. You will have to ignore the certificate error.

```zsh
ionic serve --https --external
```

## Automated Tests

We use a combination of testing frameworks to ensure functionality accross platforms and browsers

### Unit Tests
We use the jest testing framework. Run these tests with `npm test`

### Integration Tests

### E2E Tests
We use selenium for browser autmation in conjunction with the pytest framework. To run these tests, `cd` into the `pytest` directory. If you've never run the tests you'll need to configure the virtual environment and install dependencies:
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

After this initial setup you can run the whole test suite with the command `pytest`

For more detailed information on supported platforms see [E2E Testing](./pytest/README.md)
