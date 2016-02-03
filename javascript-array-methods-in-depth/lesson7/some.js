var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];

var list = document.querySelector('.task-list');
list.classList.add(
    tasks.some(task => task.completed === false)
        ? 'task-list--uncompleted'
        : 'task-list--completed'
);

list.innerHTML = tasks
    .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
    .map(x => `<li>${x}</li>`)
    .join('');