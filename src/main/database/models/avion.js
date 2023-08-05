const sequelize = require('../../config/db.config');
const { DataTypes } = require("sequelize");

const avionModel = sequelize.define('avion', {
    id_avion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    anio_creacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'avion',
    timestamps: false,
});

module.exports = avionModel;