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
            data: {
                search_term: 'beer' 
            },
            // only searches for beer
            // put search terms as global, pull from global
            success: this.getDataSuccess
        });
    }

    // twitter, move fixed css into classes
    getDataSuccess(response){
        var twitterTextArray = response.tweets.statuses;
        for(var tIndex = 0; tIndex < twitterTextArray.length; tIndex++){
            var twitterText = response.tweets.statuses[tIndex].text;
            var twitterDiv = $("<span>").append(twitterText);
            var twitterImg = $("<img>", {
                class: "twitterfeed"
            });
            var dynamicTwitterLogo = $("<span>").append(twitterImg[0]);
            $(".twitterFeed").append(twitterDiv);
            $(".twitterFeed").append(dynamicTwitterLogo);

            // twitter feed should be dynamic, passed into constructor, pulls from constructor
        }
        //var twitterJoin = tempTwitterArray.join(" ");
        //var twitterSpan = $("<span>").append(twitterJoin);
        //$(".twitterFeed").append(twitterSpan);
        //$(".twitterFeed").text(tempTwitterArray);
    }
}