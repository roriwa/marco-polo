#!/usr/bin/env bash
set -e

ROOT="$(realpath "$(dirname "$(realpath "$0")")/../")"
cd "$ROOT"

cd src/marco-polo/
npm run dev
