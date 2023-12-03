import {Notice} from 'obsidian';
//import {} as zotgrab from "./lib/main"


export default class GrabQuotes {

	runGrab(){

		const list: string[] = [];
		//this.createNewFile();
		//const lol = zotgrab;

		app.workspace.on('file-menu', (menu, file) => {
			if (menu instanceof HTMLElement) {
				// Check if the menu contains a preview button
				const previewButton = menu.querySelector('.prompt-for-selection');
				if (previewButton) {
					// Attach a click event listener to the preview button
					previewButton.addEventListener('click', () => {
						// Access the file being imported (if needed)
						console.log('File being imported:', file
						);
					});
				}
			}
		})
	}

	async createNewFile() {
		const folderPath = '/path/to/your/folder'; // Replace with the actual folder path
		const fileName = 'NewFile.md'; // Replace with your desired file name
		const content = 'Your initial content here'; // Replace with the initial content of the file

		const filePath = `${folderPath}/${fileName}`;


		// Check if the file already exists
		if (app.vault.getAbstractFileByPath(filePath)) {
			new Notice('File already exists!');
			return;
		}

		// Create the new file
		await app.vault.create(filePath, content);

		// Open the new file
		await app.workspace.openLinkText(filePath, '', true);
	}

}
