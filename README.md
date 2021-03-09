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
