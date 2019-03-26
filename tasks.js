class Tasks {
    constructor() {
        // this.domElements = elementConfig;
        this.createTask = [];

        this.addEventHandlers();
        this.appendToDom();
        this.handleAdd = this.handleAdd.bind(this);
    }

    addEventHandlers() {
        $('.addTask').on('click', this.handleAdd);
        $('.completedTask').on('click', this.completedTask);
    }

    handleAdd() {
        debugger;
        var task = $('#inputTask').val();
        $('<tr>').append($('<th>').text(task));
        // add to database, update div elements
    }

    completedTask() {
        // remove from server, but do not remove from DOM
    }

    displayAllTasks() {
        // displays all the tasks in the database
    }

    appendToDom() {
        $('.rightContainer').append('<div>').text('Task Manager');
    }
}