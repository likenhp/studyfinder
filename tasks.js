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
        var date = new Date();
        debugger;
        date = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
        $('.tasks').append(
            $('<tr>')
                .append($("<th>").text('In-Progress').addClass('col-xs-3 col-md-3'))
                .append($("<th>").text(task).addClass('col-xs-5 col-md-5'))
                .append($("<th>").text(date).addClass('col-xs-4 col-md-4'))
                .append($("<th>").addClass('col-xs-4 col-md-4')
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