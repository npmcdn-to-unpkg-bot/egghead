const numbers = [1, 2, 3, 4, 5];

//numbers.reduce(function(previous, current, index, array) {
//    console.log({previous, current, index, array});
//    return current;
//}, "Hello")

//console.log(
//    "Total Sum",
//    numbers.reduce((prev, cur) => prev + cur)
//)

const people = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 1,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 11,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
];

function classifyExperience(employee) {
    const years = employee.yearsExperience;

    if (years <= 1) {
        return 'NEWBIE';
    }
    if (years <= 5) {
        return 'AMATEUR';
    }
    if (years <= 1) {
        return 'PRO';
    }

    return 'EXPERT';
}

console.log(
    "All experience sum",
    people.reduce((sum, current) => sum + current.yearsExperience, 0)
)

const departmentExperienceSums = people.reduce((groupedByObject, employee) => {
    const department = employee.department;
    if (!groupedByObject[department]) {
        groupedByObject[department] = 0;
    }
    groupedByObject[department] += employee.yearsExperience;
    return groupedByObject;
}, {})
console.log("Sum each department's collective experience", departmentExperienceSums);

const groupedByExperience = people.reduce((accumulator, current) => {
    const xpClass = classifyExperience(current);
    if (!accumulator[xpClass]) {
        accumulator[xpClass] = [];
    }
    accumulator[xpClass].push(current.name)
    return accumulator;
}, {});
console.log("Group employees by experience", groupedByExperience);

const numEmployeesByDept = people.reduce((accumulator, current) => {
    if (!accumulator[current.department]) {
        accumulator[current.department] = 0;
    }
    accumulator[current.department]++;
    return accumulator;
}, {});
console.log("Count the number of employees in each department", numEmployeesByDept);
