// the plugin is created here
// each functionality has its own dedicated folder
import { Plugin } from 'obsidian';
import * as search from "./search";
import * as annograbber from "./annograbber";

export default class MarcoPolo extends Plugin {
	onload() {
		search.onload(this);
		annograbber.onload(this);
	}
}
