const DataTypes = require("sequelize");
const db = require("../config/dbconnection")

const Cor = db.define('cor', {
    idCor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await Cor.sync(); //{ force: true }
        console.log('Tabela de Cor criada com sucesso.');

    } catch (error) { 
        console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
})();

module.exports = Cor