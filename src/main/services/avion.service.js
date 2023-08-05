const avionModel = require('../database/models/avion.js');


class AvionManager {

    getAviones = async () => {
        return await avionModel.findAll();
    }
}

module.exports = AvionManager;