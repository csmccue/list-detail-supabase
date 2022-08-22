
import { renderShipDetail } from '../render-utils.js';
import { getShip } from '../fetch-utils.js';

 
const params = new URLSearchParams(window.location.search);
console.log(params);
const warshipDetailContainerEl = document.getElementById('warship-detail-container');
  
  // on load
async function loadData() {
    const data = await getShip(params.get('id'));
    console.log(data); //null
    const shipDiv = renderShipDetail(data);
    warshipDetailContainerEl.append(shipDiv);
}
loadData();