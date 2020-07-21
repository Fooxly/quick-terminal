import { ExtensionContext, window, StatusBarAlignment, StatusBarItem, workspace, commands } from 'vscode'
import * as child_process from 'child_process'

var s: StatusBarItem

export function activate(context: ExtensionContext) {
	if(s) s.dispose()

	const openFolder = commands.registerCommand('quickterminal.openfolder', e => {
		const cmd = workspace.getConfiguration('terminal').external
		if (process.platform === 'win32') {
			child_process.exec(`start /D ${e.fsPath} "%cd%" cmd`)
		} else if (process.platform === 'darwin') {
			child_process.exec(`open -a ${cmd.osxExec || 'Terminal.app'} "${e.fsPath}"`)
		} else if (process.platform === 'linux') {
			if (cmd.linuxExec) {
				return window.showErrorMessage('You have not set your linux terminal. Please add the "terminal.external.linuxExec" to your settings.json')
			}
			
			child_process.exec(`cd ${e.fsPath} && ${cmd.linuxExec}`)
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
