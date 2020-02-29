import personData from '../helpers/data/personData.js';
import ultilities from '../helpers/ultilities.js';

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = '<h2 class="text-center">Graveyard</h2>';
    domString += '<div class="d-flex flex-wrap">';
    persons.forEach((person) => {
        domString += '<div class="col-4 person-card">'
        domString +=    '<div class="card text-center p-3">';
        domString +=        '<div class="card-body">';
        domString +=            `${person.name}`;
        domString +=        '</div>';
        domString +=        `<button id="${person.id}" class="btn btn-success col-6 offset-3 revive-me m-auto">Revive</button>`;
        domString +=    '</div>';
        domString += '</div>';
    })
    domString += '</div>';
    ultilities.printToDom("graveyard", domString);
}

export default { buildGraveyard };


 


