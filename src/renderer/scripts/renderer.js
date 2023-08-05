const container = document.getElementById('container');

const { ipcRenderer } = require('electron');
ipcRenderer.send('getAviones');

let info = 'application'
ipcRenderer.on('getAvionesResponse', (event, aviones) => {
    aviones.forEach(avion => {
        // console.log(avion.dataValues);
        info += avion.dataValues.modelo
    })
    console.log(info);
    container.innerText = info;
});
