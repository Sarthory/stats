const db = require('../config/dbconnection');
const table = 'REGIAO';

module.exports = {
    listar,
    listarUma,
    inserir,
    remover,
    alterar
};

function listar(callback) {
    db.query(`SELECT * FROM ${table}`, callback);
}

function listarUma(id, callback) {
    db.query(`SELECT * FROM ${table} WHERE REG_CODIGO = ${id}`, callback);
}

function inserir(data, callback) {

    const statement = `INSERT INTO ${table} SET ?`;

    db.query(statement, data, callback);
}

function remover(id, callback) {

    const statement = `DELETE FROM ${table} WHERE REG_CODIGO = ${id}`;

    db.query(statement, callback);
}

function alterar(dados, callback) {

    const statement = `UPDATE ${table} SET 
                        REG_DESCRICAO = '${dados.reg_descricao}', 
                        REG_SIGLA = '${dados.reg_sigla}',
                        REG_AREA_KM2 = ${dados.reg_area_km2},
                        REG_VALOR_PIB = ${dados.reg_valor_pib}
                        WHERE REG_CODIGO = ${dados.reg_codigo}`;

    db.query(statement, callback);
}