import { Plugin } from "obsidian";
import GrabQuotes from "./grabquotes";



export function onload(plugin: Plugin) {

	plugin.addRibbonIcon('import', 'Grab Quotes', () => {
		new GrabQuotes().runGrab();
		//console.log("Hello from Maro-Polo");
	});


	// // @ts-ignore
	// // eslint-disable-next-line @typescript-eslint/no-unsafe-call
	// this.app.commands.executeCommandById("");

	// console.log(this.app.internalPlugins.app.commands);
	console.log(this.app.internalPlugins.app.commands.commands['marco-polo:open-search-modal']);
	this.app.internalPlugins.app.commands.commands['marco-polo:open-search-modal'].callback();

	// button on the left-most bar
	//plugin.addRibbonIcon('search', 'Search', () => {
	//	new SearchModal(this.app).open();
	//});

	// This adds a simple command that can be triggered anywhere
	//plugin.addCommand({
	//	id: 'open-search-modal',
	//	name: 'Open Search',
	//	callback: () => {
	//		new SearchModal(this.app).open();
	//	},
	//	hotkeys: [
	//		// warning: overlaps with the core-plugin "search"
	//		{ modifiers: ["Ctrl", "Shift"], key: "f" }
	//	],
	//});
}
