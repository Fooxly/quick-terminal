import {ExtensionContext, window, StatusBarAlignment, StatusBarItem, commands} from 'vscode'

var s: StatusBarItem

export function activate(context: ExtensionContext) {
	if(s) s.dispose()

	s = window.createStatusBarItem(StatusBarAlignment.Right, 0)
	s.command = 'workbench.action.terminal.openNativeConsole'
	s.tooltip = 'Open external terminal'
	s.text = '$(terminal)'
	s.show()
}

export function deactivate() {
	if(s) s.dispose()
}
