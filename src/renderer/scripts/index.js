const container = document.getElementById('container');
import {getAvionesFront} from './renderer.js'

async function main() {
    container.innerText = await getAvionesFront();
}
main();




