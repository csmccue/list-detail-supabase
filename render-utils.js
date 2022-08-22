export function renderShipCards(ship) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');
    div.classList.add('warship-card');

    p.textContent = ship.Name;
    img.src = `./assets/${ship.Name}.png`;
    a.href = `/detail/?id=${ship.id}`; 

    div.append(p);
    a.append(div);

    return a;
}

export function renderShipDetail(ship) { 
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    img.src = `../assets/${ship.Name}.png`;

    // div.classList.add('ship-detail');

    nameEl.textContent = ship.Name;
    // nameEl.classList.add('name');

    typeEl.textContent = 'Type: ' + ship.Type;
    // descriptionEl.classList.add('description');

    descriptionEl.textContent = 'Description: ' + ship.Description;
    // descriptionEl.classList.add('description');

    div.append(img, nameEl, typeEl, descriptionEl);

    return div;
}
