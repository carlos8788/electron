const { ipcMain } = require('electron');
const { getAvionesController } = require('../controllers/avion.controller.js');

const setupIPC = () => {
    ipcMain.on('getAviones', async (event, arg) => {
        const aviones = await getAvionesController();
        event.reply('getAvionesResponse', aviones);
    });
}

module.exports = setupIPC;
