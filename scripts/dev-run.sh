#!/usr/bin/env bash
set -e

ROOT="$(realpath "$(dirname "$(realpath "$0")")/../")"
cd "$ROOT"

cd src/obsidian-search/
npm run dev
