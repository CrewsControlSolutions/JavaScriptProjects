// returns an updated version of the list of to-do's
function getToDos() {
    // create an array of tasks that are inputed
    var toDos = new Array;
    // pull the task that was saved in the web browser memory
    var toDosString = localStorage.getItem('toDo');
    // if the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object
    if (toDosString !== null) {
        toDos = JSON.parse(toDosString);
    }
    return toDos;
}

// adds the inputed task to the array of to-do's and converts the string to an array to store the content locally
function add() {
    // this takes the inputed task and creates a variable for it
    var task = document.getElementById('task').value;

    var toDos = getToDos();
    // add a new task to the end of the array
    toDos.push(task);
    // convert the task input to a JSON string and store in the web browser's memory
    localStorage.setItem('toDo', JSON.stringify(toDos));
    document.getElementById('task').value = '';
    show();

    return false;
}

function remove() {
    var index = this.getAttribute('id');
    var toDos = getToDos();
    toDos.splice(index, 1);
    localStorage.setItem('toDo', JSON.stringify(toDos));
    show();

    return false;
}

// shows the tasks as a styled list
function show() {
    // declare and initialize a variable to the output of a function
    var toDos = getToDos();

    // used for setting the format for the list of items that will be appended to this string
    var html = '<ul>';
    // display the tasks in the list by adding them to the screen in chronological order
    for (var i = 0; i < toDos.length; i++) {
        // display each task with a button containing an "x"
        html += '<li>' + toDos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    // display the tasks within the HTML web page
    document.getElementById('toDos').innerHTML = html;

    // remove a list item if the item's button is clicked
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

// add the task to the list when the user submits the task
document.getElementById('add').addEventListener('click', add);
// continuously display the latest list
show();

function makeWhite() {
    document.getElementById('optionalText').style.color = 'white';
}