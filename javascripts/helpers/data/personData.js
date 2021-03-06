const persons = [
    {
        id: 'person1',
        name: 'Zoe Ames',
        isDead: false
    },
    {
        id: 'person2',
        name: 'Luke Landcaster',
        isDead: false
    },
    {
        id: 'person3',
        name: 'Mary West',
        isDead: false
    },
    {
        id: 'person4',
        name: 'Aaron Lain',
        isDead: false
    },
    {
        id: 'person5',
        name: 'Anca Simon',
        isDead: false
    },
    {
        id: 'person6',
        name: 'Beth Nielsen',
        isDead: false
    },
    {
        id: 'person7',
        name: 'Bethany Whitworth',
        isDead: false
    },
    {
        id: 'person8',
        name: 'Christopher Johnson',
        isDead: false
    },
    {
        id: 'person9',
        name: 'David Everett',
        isDead: false
    },
    {
        id: 'person10',
        name: 'Davis Lindell',
        isDead: false
    },
    {
        id: 'person11',
        name: 'Dylan Rowe',
        isDead: false
    },
    {
        id: 'person12',
        name: 'Joey Petrone',
        isDead: false
    },
    {
        id: 'person13',
        name: 'John Fleming',
        isDead: false
    },
    {
        id: 'person14',
        name: 'Jose Marquez',
        isDead: false
    },
    {
        id: 'person15',
        name: 'Kayla Melton',
        isDead: false
    },
    {
        id: 'person16',
        name: 'Kenny McEastland',
        isDead: false
    },
    {
        id: 'person17',
        name: 'Liza Star',
        isDead: false
    },
    {
        id: 'person18',
        name: 'Michele Rawlins',
        isDead: false
    },
    {
        id: 'person19',
        name: 'Monique',
        isDead: false
    },
    {
        id: 'person20',
        name: 'Old Oladinni',
        isDead: false
    },
    {
        id: 'person21',
        name: 'Sarah Holder',
        isDead: true
    },
    {
        id: 'person22',
        name: 'Stephen Castaneda',
        isDead: true
    },
    {
        id: 'person23',
        name: 'Steven Zelenak',
        isDead: true
    },
    {
        id: 'person24',
        name: 'Todd Spainhour',
        isDead: true
    },
    {
        id: 'person25',
        name: 'Zach Crumpton',
        isDead: true
    }
];

const randomMurder = () => {
    const livePeople = getLivePersons();
    if (livePeople.length > 0) {
        const randomNum = Math.floor(Math.random() * livePeople.length);
        const deadPersonsId = livePeople[randomNum].id;
        const deadManIndex = persons.findIndex((person) => person.id === deadPersonsId);
        persons[deadManIndex].isDead = true;
    }
}

const reviveMe = (personId) => {
    const bringToLife = persons.findIndex((person) => person.id === personId);
    persons[bringToLife].isDead = false;
}

const getLivePersons = () => {
    return persons.filter((person) => person.isDead === false);
}

const getDeadPersons = () => {
    return persons.filter((person) => person.isDead);
}

export default { getLivePersons, getDeadPersons, randomMurder, reviveMe };