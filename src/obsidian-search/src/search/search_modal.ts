import { SuggestModal, TFile } from "obsidian";
import escapeStringRegexp from "escape-string-regexp";
import { nthIndexOfInString } from "../util";


export default class SearchModal extends SuggestModal<TFile> {
	async getSuggestions(query: string): Promise<TFile[]> {
		const keywords = query.trim().split(/\s+/g);
		const pattern = RegExp(keywords.map(escapeStringRegexp).join("|"), 'g');

		const files = this.app.vault.getMarkdownFiles();
		const results = await Promise.all(files.map(async (file) => {
			// we add basename as well path for a higher score if keyword is in basename and path
			const content = (
				`${file.basename}\n${file.path}\n${await this.app.vault.cachedRead(file)}`
			).toLowerCase();
			let score = [...content.matchAll(pattern)].length;
			return { file, score };
		}));
		return results
			.filter(result => !!result.score)
			.sort((a, b) => b.score - a.score)
			.map(result => result.file);
	}

	async renderSuggestion(file: TFile, el: HTMLElement): Promise<any> {
		el.createEl('div', { text: file.path });
		const content = await this.app.vault.cachedRead(file);
		const nth = nthIndexOfInString(content, 3, '\n');
		const text = content.slice(0, nth);
		el.createEl('small', { text: text }).setCssStyles({ opacity: "0.5" });
	}

	async onChooseSuggestion(file: TFile): Promise<any> {
		let leaf = this.app.workspace.getMostRecentLeaf();
		if (leaf === null) leaf = this.app.workspace.getLeaf();
		await leaf.openFile(file);
	}
}
