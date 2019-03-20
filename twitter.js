class TwitterLocation {
    constructor(results){
        this.screenName = '';
        this.userID = '';
        this.info = {};
        this.includeEntities = '';

        this.getData();
    }

    getData() {
        $.ajax({
            url: 'https://s-apis.learningfuze.com/hackathon/twitter/index.php',
            dataType: 'json',
            method: '', 
            data: {search_term: 'kanyewest'},
            success: function(result){
                console.log(result);
            }
        });
    }
}