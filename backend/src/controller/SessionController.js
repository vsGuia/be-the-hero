const connection = require('../database/connection');

//lOGIN ROUTE WITH ID AUTHENTICATION 
module.exports = {
  async create(req, res){

    //Pegando o id do front 
    const { id } = req.body;

    //Verificando se à uma ONG com o id digitado existe
    const ong = await connection('ongs')
      .where('id', id)//1 - Onde id digitado é igual o id cadastrado
      .select('name')//2 - Seleciona apenas o nome do dessa ONG
      .first();

    //Se essa ONG não existir retorna um erros status 400
    if (!ong) {
      return res.status(400).json({error: "No ONG found with this ID"})
    }

    //Senão retorna o nome da ong
    return res.json(ong);
  }
}