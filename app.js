// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { getShips } from './fetch-utils.js';
import { renderShipCards } from './render-utils.js';
  
const warshipListContainerEl = document.getElementById('warship-list-container');
  
  // on load
async function loadData() {
      // fetch all dogs
    const data = await getShips();
      // render and append all dog cards to the container
    for (let item of data) {
        const shipDiv = renderShipCards(item);
        warshipListContainerEl.append(shipDiv);
    }
}
loadData();