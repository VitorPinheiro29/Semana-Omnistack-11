const knex = require('knex')//puxando as habilidades do knex
const configuration =  require('../../knexfile.js')//a variável que eu exportar, irá vir para cá

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config)// comando de conexão

module.exports = connection//variável a ser exportada