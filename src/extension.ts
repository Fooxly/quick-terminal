import {ExtensionContext, window, StatusBarAlignment, StatusBarItem, workspace} from 'vscode'

var s: StatusBarItem

export function activate(context: ExtensionContext) {
	if(s) s.dispose()
	const config = workspace.getConfiguration('quickterminal')
	s = window.createStatusBarItem(StatusBarAlignment.Right, config.get('priority', 0))
	s.command = 'workbench.action.terminal.openNativeConsole'
	s.tooltip = 'Open external terminal'
	s.text = '$(terminal)'
	s.show()
}

export function deactivate() {
	if(s) s.dispose()
}
