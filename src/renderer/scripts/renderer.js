

const { ipcRenderer } = require('electron');
ipcRenderer.send('getAviones');

export const getAvionesFront = () => {
    return new Promise((resolve) => {
        ipcRenderer.on('getAvionesResponse', (event, aviones) => {
            let info = ''
            aviones.forEach(avion => {
                info += avion.modelo
            })
            
            console.log(info);
            resolve(info);
        });
    });
}
