#!/usr/bin/env bash
set -e

ROOT="$(realpath "$(dirname "$(realpath "$0")")/../")"
cd "$ROOT"

SRC=src/marco-polo/
VLT=vault/
PLUGIN="$VLT"/.obsidian/plugins/marco-polo/


cd "$ROOT/$SRC"
npm install


cd "$ROOT"

ln -sr "$SRC"/manifest.json "$PLUGIN"/manifest.json
ln -sr "$SRC"/main.js "$PLUGIN"/main.js
ln -sr "$SRC"/styles.css "$PLUGIN"/styles.css
