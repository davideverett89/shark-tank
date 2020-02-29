import ultilities from '../helpers/ultilities.js';
import personData from '../helpers/data/personData.js';

const tankBuilder = () => {
    const persons = personData.getLivePersons();
    let domString = '';
    domString +=    '<div class="card text-center">';
    domString +=        '<div class="card-header">';
    domString +=            'Shark Tank';
    domString +=        '</div>';
    domString +=        '<ul class="list-group list-group-flush">';
    persons.forEach((person) => {
        domString +=        `<li class="list-group-item">${person.name}</li>`;
    })
    domString +=        '</ul>';
    domString +=    '</div>';
    ultilities.printToDom("tank", domString);
}

export default { tankBuilder };





    

