class TwitterLocation {
    constructor(results){
        this.screenName = '';
        this.userID = '';
        this.info = {};
        this.includeEntities = '';
        this.getDataSuccess = this.getDataSuccess.bind(this);
        this.getData();
    }

    getData() {
        $.ajax({
            url: 'https://s-apis.learningfuze.com/hackathon/twitter/index.php',
            dataType: 'json',
            method: '', 
            data: {search_term: 'irvine', 
            search_term: 'beer', },
            success: this.getDataSuccess
        });
    }
    getDataSuccess(response){
        debugger;
        var twitterTextArray = response.tweets.statuses;
        var tempTwitterArray = [];
        console.log(twitterTextArray);
        for(var tIndex = 0; tIndex < twitterTextArray.length; tIndex++){
            var twitterText = response.tweets.statuses[tIndex].text;
            tempTwitterArray.push(twitterText);
            //var twitterDiv = $("<span>").append(twitterText);
            //$(".twitterFeed").append(twitterDiv);
        }
        var twitterJoin = tempTwitterArray.join(" ");
        var twitterSpan = $("<span>").append(twitterJoin);
        $(".twitterFeed").append(twitterSpan);
        //$(".twitterFeed").text(tempTwitterArray);
    }
}