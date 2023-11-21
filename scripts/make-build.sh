#!/usr/bin/env bash
set -e

ROOT="$(realpath "$(dirname "$(realpath "$0")")/../")"
cd "$ROOT"

SRC=src/marco-polo/
DST=dist/marco-polo/

cd "$SRC"
npm run build

cd "$ROOT"

if [ -d "$DST" ]; then
  rm -rf "$DST"
fi
mkdir -p "$DST"

cp "$SRC"/manifest.json "$DST"
cp "$SRC"/main.js "$DST"
cp "$SRC"/styles.css "$DST"

cd dist/
if [ -f obsidian-vault.tgz ]; then
  rm obsidian-vault.tgz
fi
tar -czf marco-polo.tgz marco-polo/

echo "Build is placed in dist/"
