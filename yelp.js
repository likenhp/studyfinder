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
            error: (resp) => {
                console.log("error response", resp.responseText);
                this.handleYelpError(resp);
            },
        })
    }

    handleYelpSuccess(response){
        map.removeMarkers();
        results = response;
        $('#yelp').empty();
        for (var i = 0; i < results.businesses.length; i++){
            var restaurantImage = 'url('+results.businesses[i].image_url+')';
            var restaurantName = results.businesses[i].name;
            var restaurantRating = results.businesses[i].rating;
            var restaurantPrice = results.businesses[i].price;
            var restaurantLocation = results.businesses[i].location.display_address[0] + ' ' + results.businesses[i].location.display_address[1] + ', ' 
                results.businesses[i].location.display_address[1];
            var newDomElement = $("<div>").addClass(restaurantName+' resultDiv');
            $(newDomElement).append(
                $("<div>").addClass('restaurantImage').css({
                    'background-image': restaurantImage,
                    'background-size': 'cover',
                    'background-position': 'center'
                }))
                .append($("<div>").addClass('restaurantInfo').text(restaurantName)
                    .append($("<div>").addClass('restaurantLocation').text('Address: ' + restaurantLocation))
                    .append($("<div>").addClass('restaurantPrice').text('Price: ' + restaurantPrice))
                    .append($("<div>").addClass('restaurantRating').text('Rating: ' + restaurantRating))
                );

            $(newDomElement).on('click', function() {
                map.map.setZoom(15);
                map.map.setCenter(markers[0].getPosition());
            });

            $("#yelp").append(newDomElement);
        }

        map.getCoordinates(results.businesses);
    }

    handleYelpError(response){
        console.log(response);
        alert('you reached an error son');
    }
}
