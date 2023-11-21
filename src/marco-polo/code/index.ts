// the plugin is created here
// each functionality has its own dedicated folder
import { Plugin } from 'obsidian';
import * as search from "./search";


export default class MarcoPolo extends Plugin {
	onload() {
		search.onload(this);
	}
}
