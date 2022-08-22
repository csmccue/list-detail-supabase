import { getShips } from './fetch-utils.js';
import { renderShipCards } from './render-utils.js';
  
const warshipListContainerEl = document.getElementById('warship-list-container');
  
  // on load
async function loadData() {
    const data = await getShips();
    for (let item of data) {
        const shipDiv = renderShipCards(item);
        warshipListContainerEl.append(shipDiv);
    }
}
loadData();