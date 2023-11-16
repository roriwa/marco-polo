import {App, SuggestModal, Plugin, TFile} from 'obsidian';


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
				{ modifiers: ["Ctrl", "Shift"], key: "f" }
			],
		});
	}

	onunload() {

	}
}


class SearchModal extends SuggestModal<TFile> {
	constructor(app: App) {
		super(app);
	}

	getSuggestions(query: string): TFile[] | Promise<TFile[]> {
		const files = this.app.vault.getMarkdownFiles()
		return files.filter(file => file.basename.toLowerCase().contains(query));
	}

	async renderSuggestion(file: TFile, el: HTMLElement): Promise<any> {
		el.createEl('div', { text: file.path });
		const content = await this.app.vault.cachedRead(file);
		const text = content.slice(0, nthIndexOfInString(content, 3, '\n'));
		el.createEl('small', { text: text }).setCssStyles({ opacity: "0.5" });
	}

	async onChooseSuggestion(file: TFile): Promise<any> {
		let leaf = this.app.workspace.getMostRecentLeaf();
		if (leaf === null) leaf = this.app.workspace.getLeaf();
		await leaf.openFile(file);
	}
}


function nthIndexOfInString(text: string, n: number, searchString: string): number {
	let index = -1;
	for (let i = 0; i < n; i++) {
		index = text.indexOf(searchString, index);
		if (index < 0) break;
	}
	return index;
}
