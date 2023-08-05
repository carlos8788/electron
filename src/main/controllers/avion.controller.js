const AvionManager = require('../services/avion.service.js');

const avion = new AvionManager();

const getAvionesController = async () => {
    try {
        const aviones = await avion.getAviones();
        // Aquí iría cualquier lógica adicional requerida...
        // Por ejemplo, podrías filtrar los aviones de alguna manera, transformar los datos, etc.
        // ...
        return aviones; 
    } catch (err) {
        console.error('Error al recuperar aviones', err);
        return []; // o manejar de otra manera
    }
};

module.exports = {
    getAvionesController,
};
