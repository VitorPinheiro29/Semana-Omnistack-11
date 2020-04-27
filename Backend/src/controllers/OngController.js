const generateUniqueId = require('../utils/generateUniqueId');

const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
async index (request, response) {
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
},

    async create(request, response) {
        const {name, email, whatsapp, city, uf} =  request.body

        const id = generateUniqueId();// gera 4 némeros aleatórios criptografados, para o ID das ongs

        await connection('ongs').insert({ 
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        // o await diz para o node esperar todas os campos serem completados, para só então retornar algo

        return response.json({ id })//vai retornar para o usuário, que no caso é a ong
    }
}