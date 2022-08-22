import { renderShipDetail } from '../render-utils.js';
import { getShips } from './fetch-utils.js';

 
const params = new URLSearchParams(window.location.search);
const warshipDetailContainerEl = document.getElementById('warship-detail-container');
  
  // on load
async function loadData() {
      // fetch all dogs
    const data = await getShips(params.get('id'));
      // render and append all dog cards to the container
    for (let item of data) {
        const shipDiv = renderShipDetail(item);
        warshipDetailContainerEl.append(shipDiv);
    }
}
loadData();