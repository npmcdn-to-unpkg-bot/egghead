var name = 'shane osbourne';

var upper = name.split(' ') // [shane, osbourne]
        .map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');  // [Shane, Osbourne]

console.log(upper);