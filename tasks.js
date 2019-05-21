class Tasks {
    constructor() {
        this.createTask = [];

        this.handleAdd = this.handleAdd.bind(this);

        this.addEventHandlers();
    }

    addEventHandlers() {
        $('.submitTask').on('click', this.handleAdd);
        $('.addTask').on('keypress', (e) => {
            if (e.keyCode === 13 && $('#inputTask').val() !== "") {
                this.handleAdd();
            }
        });
        $('.completedTask').on('click', this.completedTask);
    }

    handleAdd() {
        const task = $('#inputTask').val();
        let date = new Date();

        date = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
        $('.tasks')
            .append($('<tr>').addClass('new-task-row').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'fast')
                .append($("<th>").text('In-Progress').addClass('col-xs-3 col-md-3'))
                .append($("<th>").text(task).addClass('col-xs-5 col-md-5'))
                .append($("<th>").text(date).addClass('col-xs-4 col-md-4'))
                .append($("<th>").addClass('col-xs-4 col-md-4')
                    .append(
                        $('<div>')
                            .addClass('glyphicon glyphicon-trash delete-task-btn')
                            .on('click', () => {
                                $(event.currentTarget).parent().parent().fadeOut('fast');
                            })
                ))
        );
    }
}
