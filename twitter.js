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
        var twitterTextArray = response.tweets.statuses;
        var tempTwitterArray = [];
        for(var tIndex = 0; tIndex < twitterTextArray.length; tIndex++){
            var twitterText = response.tweets.statuses[tIndex].text;
            var twitterDiv = $("<span>").append(twitterText);
            var twitterImg = $("<img>", {
                "src": "images/twitterlogo.png",
                "height": "50px",
                "width": "50px",
                "display": "inline-block"
            });
            var dynamicTwitterLogo = $("<span>").append(twitterImg[0]);
            $(".twitterFeed").append(twitterDiv);
            $(".twitterFeed").append(dynamicTwitterLogo);
        }
        //var twitterJoin = tempTwitterArray.join(" ");
        //var twitterSpan = $("<span>").append(twitterJoin);
        //$(".twitterFeed").append(twitterSpan);
        //$(".twitterFeed").text(tempTwitterArray);
    }
}