import { App, Modal, Plugin } from 'obsidian';


export default class ObsidianSearch extends Plugin {
	async onload() {
		this.addRibbonIcon('search', 'Search', () => {
			new SearchModal(this.app).open();
		});

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-search-modal',
			name: 'Open Search',
			callback: () => {
				new SearchModal(this.app).open();
			},
			hotkeys: [
				{
					key: "f",
					modifiers: ["Ctrl", "Shift"],
				}
			],
		});
	}

	onunload() {

	}
}

class SearchModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.setText('Woah!!!');
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
