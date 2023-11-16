import { Plugin } from 'obsidian';
import * as search from "./search";


export default class ObsidianSearch extends Plugin {
	onload() {
		search.onload(this);
	}
}
