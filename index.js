const readLine = require('readline-sync')

function start(){
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTerm(){
		return readLine.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix(){
		const prefixes = ['Who is', 'What is', 'The History of']
		const selectedPrefixIndex = readLine.keyInSelect(prefixes)
		const selectedPrefixText = prefixes[selectedPrefixIndex]	

		return selectedPrefixText
		console.log(selectedPrefixText)
	}

	return content
}

start()

module.exports = {start}