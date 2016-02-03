var people = [
    {
        name: 'Shane'
    },
    {
        name: 'Sally'
    }
];

var people2 = [
    {
        name: 'Simon'
    },
    {
        name: 'Ben'
    }
];

people.concat(people2)
    .forEach(function (person) {
        console.log(person.name);
    });