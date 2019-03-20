class Yelp{
    constructor(inputText){
       
        this.inputField = inputText;
        this.handleYelpSuccess = this.handleYelpSuccess.bind(this);
        this.handleYelpError = this.handleYelpError.bind(this);
        this.getDataFromYelp();
    }

    getDataFromYelp(){
        $.ajax({
            url: 'yelp.php',
            dataType: 'json',
            method: 'get',
            data: {
                'apikey': 'dJbz7ePRpBcLEb3zCwg_1tAT3gLiUJKFoMm6EfhSjQZOrd_TJCBeypMPGz6YX5G9hN6tA3A0QQIqOG5c-Sx59kj5--M5xt5YCswAeIc0S4q5EBIbWAULDSiL90OQXHYx',
                'term': this.inputField,
            },
            success: this.handleYelpSuccess,
            error: this.handleYelpError,
        })
    }

    handleYelpSuccess(response){
        results = response;
        for (var i = 0; i < results.businesses.length; i++){
            var restaurantImage = results.businesses[i].image_url;
            var restaurantName = results.businesses[i].name;
            var restaurantRating = results.businesses[i].rating;
            var domImage = $('<img />', {
                src: restaurantImage
            }).css({
                height: '180px',
                width: '180px'
            }).appendTo(('.yelpImage'));
            var domName = $('<p />', {
                class: 'restName',
                text: restaurantName
            }).css({
                height: '100%',
                width: '100%'
            }).appendTo(('.yelpName'));
            var domRating = $('<p />', {
                class: 'rating',
                text: restaurantRating
            }).appendTo(('#yelp'));
            // console.log('yep', results);
            }).css({
                height: '180px',
                width: '180px'
            }).appendTo(('.yelpRating'));
        }

        debugger;

        map.getCoordinates(results.businesses);
    }

    handleYelpError(response){
        alert('you reached an error son');
    }
}
