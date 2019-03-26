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
        var task = $('#inputTask').val();
        $('.tasks').append(
            $('<tr>')
                .append($("<th>").text(task))
                .append($("<th>")
                    .append(
                        $("<button>")
                            .text('Delete')
                            .on('click', function() {
                                $(event.currentTarget).parent().parent().remove();
                            })
                ))
        );
        // add to database, update div elements
    }

    completedTask() {
        // remove from server, but do not remove from DOM
    }

    displayAllTasks() {
        // displays all the tasks in the database
    }

    appendToDom() {
        // $('.rightContainer').append('<div>').text('Task Manager');
    }
}