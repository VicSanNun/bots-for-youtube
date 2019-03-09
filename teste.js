const assert = require('assert')
const Bot = require('./index.js')

const SEARCH_TERM_PATTERN = 'TERM EXAMPLE'

describe('Testando os Robôs', ()=>{
	it('Verificando Termo de Busca', ()=>{
		const resultado = Bot.start()		
		assert.deepEqual(resultado.searchTerm, SEARCH_TERM_PATTERN)
	})
})
