var whitelist = ['.css', '.js'];

var events = [
    {
        file: 'css/core.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    }
];

var filtered = events.filter(event => {
    var ext = event.file.substr(event.file.lastIndexOf('.'));
    return whitelist.indexOf(ext) > -1;
});

console.log(filtered);