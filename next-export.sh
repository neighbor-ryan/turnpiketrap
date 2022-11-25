#!/usr/bin/env bash

set -ex

dst="${@:-out/turnpiketrap}"
next build
next export -o "$dst"

dir="${dst%/*}"
touch "$dir/.nojekyll"

cd "$dst"
for f in *.html; do
    perl -pi -e 's/="(\/_next\/static)/=".$1/g' "$f"
done
