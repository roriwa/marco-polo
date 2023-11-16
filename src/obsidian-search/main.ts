import { Plugin } from 'obsidian';
import * as search from "./src/search";


export default class ObsidianSearch extends Plugin {
	onload() {
		search.onload(this);
	}
}
