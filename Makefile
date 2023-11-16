default: build
.PHONY: default build dev setup clean

build:
	@bash scripts/make-build.sh

dev:
	@bash scripts/dev-run.sh

setup:
	@bash scripts/dev-setup.sh

clean:
	@rm -rf dist/
	@rm src/marco-polo/main.js
