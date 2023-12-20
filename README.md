# marco-polo
plugin for obsidian to search for stuff and more

![example recording](README.assets/example-recording.gif)

## Get the Plugin

### Download

[Download the Latest Release](https://github.com/roriwa/marco-polo/releases/download/latest/marco-polo.tgz)

Extract the downloaded archive into the `.obsidian/plugins/` folder of your obsidian-vault.
Don't forget to go into the vaults settings and turn on community-plugins and enable this one.

### Building it yourself

> Note: Linux or WSL required. (MacOS may work too)

```bash
git clone https://github.com/roriwa/marco-polo.git
cd marco-polo/
make setup
make build
# and see in the dist/ directory
```

Extract the archive or copy the resulting folder into the `.obsidian/plugins/` folder.
Don't forget to turn on community-plugins and enable this one.

## How to develop

> Note: Linux or WSL required. (MacOS may work too)

```bash
make setup
make dev
```

and open `vault/` with obsidian

after changes to `main.ts` use `ctrl-p` to open the command palette and execute `Hot Reload`
