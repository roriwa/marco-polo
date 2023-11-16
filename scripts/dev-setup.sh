#!/usr/bin/env bash
set -e

ROOT="$(realpath "$(dirname "$(realpath "$0")")/../")"
cd "$ROOT"

ln -sr src/obsidian-search/manifest.json vault/.obsidian/plugins/obsidian-search/manifest.json
ln -sr src/obsidian-search/main.js vault/.obsidian/plugins/obsidian-search/main.js
ln -sr src/obsidian-search/styles.css vault/.obsidian/plugins/obsidian-search/styles.css
