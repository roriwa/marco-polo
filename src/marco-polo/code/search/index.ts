import { Plugin } from "obsidian";
import SearchModal from "./search_modal";


export function onload(plugin: Plugin) {
	// button on the left-most bar
	plugin.addRibbonIcon('search', 'Search', () => {
		new SearchModal(this.app).open();
	});

	// This adds a simple command that can be triggered anywhere
	plugin.addCommand({
		id: 'open-search-modal',
		name: 'Open Search',
		callback: () => {
			new SearchModal(this.app).open();
		},
		hotkeys: [
			// warning: overlaps with the core-plugin "search"
			{ modifiers: ["Ctrl", "Shift"], key: "f" }
		],
	});
}
