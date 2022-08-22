export function renderShipCards(ship) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    // const img = document.createElement('img');
    const p = document.createElement('p');

    // div.classList.add('dog-card');

    p.textContent = ship.name;
    // img.src = `./assets/${dog.breed}.jpeg`;
    a.href = `/detail/?id=${ship.id}`; // did i do that right??

    div.append(p);
    a.append(div);

    return a;
}

export function renderShipDetail(ship) { //dog is undefined, that is a problem
    //console.log(dog); //defined!!
    //console.log(dog.name); //undefined??
    //console.log(dog.breed); //undefined??
    //console.log(dog.description); //undefined??
    const div = document.createElement('div');
    // const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const descriptionEl = document.createElement('p');


    // div.classList.add('ship-detail');

    nameEl.textContent = ship.name;
    // nameEl.classList.add('name');

    typeEl.textContent = ship.type;
    // descriptionEl.classList.add('description');

    descriptionEl.textContent = ship.description;
    // descriptionEl.classList.add('description');

    div.append(nameEl, typeEl, descriptionEl);

    return div;
}
