import { ExtensionContext, window, StatusBarAlignment, StatusBarItem, workspace, commands } from 'vscode'
import * as child_process from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

var s: StatusBarItem

export function activate(context: ExtensionContext) {
	if(s) s.dispose()

	const openFolder = commands.registerCommand('quickterminal.openfolder', e => {
		// get default terminals from vscode
		const cmd = workspace.getConfiguration('terminal').external
		let p = e.fsPath
		// get folder if the path is a file
		if (!fs.lstatSync(p).isDirectory()) {
			p = path.dirname(p)
		}
		// open terminal based on OS
		if (process.platform === 'win32') {
			child_process.exec(`start /D ${p} "%cd%" cmd`)
		} else if (process.platform === 'darwin') {
			child_process.exec(`open -a ${cmd.osxExec || 'Terminal.app'} "${p}"`)
		} else if (process.platform === 'linux') {
			if (!cmd.linuxExec) {
				return window.showErrorMessage('You have not set your linux terminal. Please add the "terminal.external.linuxExec" to your settings.json')
			}
			child_process.exec(`cd ${e.fsPath} && ${p}`)
		}
	})
	context.subscriptions.push(openFolder)

	workspace.onDidChangeConfiguration(() => {
		if(s) {
			s.hide()
			s.dispose()
		}
		createButton()
	})
	createButton()

}

function createButton() {
	const config = workspace.getConfiguration('quickterminal')
	s = window.createStatusBarItem(StatusBarAlignment.Right, config.get('priority', 0))
	s.command = 'workbench.action.terminal.openNativeConsole'
	s.tooltip = 'Open external terminal'
	s.text = '$(terminal)'
	s.show()
}

export function deactivate() {
	if(s) {
		s.hide()
		s.dispose()
	}
}
