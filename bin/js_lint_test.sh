#!/usr/bin/env bash

set -o errexit

yarn run -s install-if-deps-outdated
yarn run lint
yarn run build
yarn test

