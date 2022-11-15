#!/usr/bin/env bash

set -ex

next build
next export -o out/turnpiketrap

cd out
touch .nojekyll

cd turnpiketrap
for f in *.html; do
    perl -pi -e 's/="(\/_next\/static)/=".$1/g' "$f"
done
