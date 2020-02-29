import personData from '../helpers/data/personData.js';
import ultilities from '../helpers/ultilities.js';

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = "";
    persons.forEach((person) => {
        domString += '<div class="col-4 person-card">'
        domString +=    '<div class="card text-center">';
        domString +=        '<div class="card-body">';
        domString +=            `${person.name}`;
        domString +=        '</div>';
        domString +=    '</div>';
        domString += '</div>';
    })
    ultilities.printToDom("graveyard", domString);
}

export default { buildGraveyard };


 


