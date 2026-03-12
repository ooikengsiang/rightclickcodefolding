// Fold to definations code is from https://github.com/zeevro/vscode-fold-to-definitions

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.fold', () => {
			vscode.commands.executeCommand('editor.fold');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.foldRecursively', () => {
			vscode.commands.executeCommand('editor.foldRecursively');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.foldAllBlockComments', () => {
			vscode.commands.executeCommand('editor.foldAllBlockComments');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.foldAllMarkerRegions', () => {
			vscode.commands.executeCommand('editor.foldAllMarkerRegions');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.foldAll', () => {
			vscode.commands.executeCommand('editor.foldAll');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.foldAllExcept', () => {
			vscode.commands.executeCommand('editor.foldAllExcept');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.unfold', () => {
			vscode.commands.executeCommand('editor.unfold');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.unfoldRecursively', () => {
			vscode.commands.executeCommand('editor.unfoldRecursively');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.unfoldAllMarkerRegions', () => {
			vscode.commands.executeCommand('editor.unfoldAllMarkerRegions');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.unfoldAll', () => {
			vscode.commands.executeCommand('editor.unfoldAll');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.unfoldAllExcept', () => {
			vscode.commands.executeCommand('editor.unfoldAllExcept');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.createFoldingRangeFromSelection', () => {
			vscode.commands.executeCommand('editor.createFoldingRangeFromSelection');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.removeManualFoldingRanges', () => {
			vscode.commands.executeCommand('editor.removeManualFoldingRanges');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.foldToDefinitions', () => {
			performFoldToDefinitions(false);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('rightclickcodefolding.foldToClassDefinitions', () => {
			performFoldToDefinitions(true);
		})
	);
}

function performFoldToDefinitions(isClassDefinition) {
	var activeTextEditor = vscode.window.activeTextEditor;
	if (activeTextEditor !== undefined) {
		vscode.commands.executeCommand("vscode.executeDocumentSymbolProvider", activeTextEditor.document.uri)
			.then((symbols) => {
	
				if (symbols !== undefined) {
					var allSymbols = [];
					getAllSymbol(symbols, allSymbols);

					const kinds = [
						vscode.SymbolKind.Method, 
						vscode.SymbolKind.Property, 
						vscode.SymbolKind.Constructor, 
						vscode.SymbolKind.Function, 
						vscode.SymbolKind.Operator
					];
					if (isClassDefinition) {
						kinds.push(vscode.SymbolKind.Class);
						kinds.push(vscode.SymbolKind.Interface);
					}
	
					allSymbols = allSymbols.filter(symbol => {
						return kinds.includes(symbol.kind);
					});
		
					// Filter for symbols that span multiple lines (including multi-line parameters)
					allSymbols = allSymbols.filter(symbol => {
						const isSingleLine = symbol.range.end.line === symbol.range.start.line;
						return !isSingleLine;
					});
		
					performFold(activeTextEditor, allSymbols);
				}
			}
		);
	}
}

function getAllSymbol(srcSymbols, destSymbols) {
	for (let symbol of srcSymbols) {
		destSymbols.push(symbol);
		if (symbol.children) {
			getAllSymbol(symbol.children, destSymbols);
		}
	}
}

async function performFold(activeTextEditor, symbols) {
	await vscode.commands.executeCommand("editor.unfoldAll");

	const lines = [];
	for (let symbol of symbols) {
		const startLine = symbol.range.start.line;
		const endLine = symbol.range.end.line;
		
		// Find the line with the opening brace '{'
		let foldLine = startLine;
		for (let lineNum = startLine; lineNum <= endLine; lineNum++) {
			const line = activeTextEditor.document.lineAt(lineNum).text;
			if (line.includes('{')) {
				foldLine = lineNum;
				break;
			}
		}
		
		console.log("Folding", vscode.SymbolKind[symbol.kind], symbol.name, "in lines", startLine + 1, "-", endLine + 1);

		// Use the line with the opening brace for folding
		lines.push(foldLine);
	}

	await vscode.commands.executeCommand("editor.fold", {selectionLines: lines});
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
