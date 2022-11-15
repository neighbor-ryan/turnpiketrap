#!/usr/bin/env bash

set -ex

dst="${@:-out/turnpiketrap}"
next build
next export -o "$dst"

top="${dst%%/*}"
touch "$top/.nojekyll"

cd "$dst"
for f in *.html; do
    perl -pi -e 's/="(\/_next\/static)/=".$1/g' "$f"
done
