#!/usr/bin/env bash

# abort on errors
#set -e

# build
npm run build

# navigate into the build output directory
cp -f README.md dist/
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tmthyln/tmthyln.github.io.git master

cd -

read -p
