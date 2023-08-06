const AvionManager = require('../services/avion.service.js');

const avion = new AvionManager();

const getAvionesController = async () => {
    try {
        const aviones = await avion.getAviones();
        const dataAviones = aviones.map(avion => avion.dataValues)
        
        return dataAviones; 
    } catch (err) {
        console.error('Error al recuperar aviones', err);
        return []; // o manejar de otra manera
    }
};

module.exports = {
    getAvionesController,
};
