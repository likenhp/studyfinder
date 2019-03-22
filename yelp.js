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
        $('#yelp').remove();

        var yelp = $("<div>").attr('id', 'yelp')
            .addClass('col-xs-6 col-sm-6 col-md-6')
            .append($('<img>'), {
                src: 'images/yelplogo.png',
                alt: 'yelpLogo',
                class: 'yelpLogo'
            });

        for (var i = 0; i < results.businesses.length; i++){
            var restaurantImage = 'url('+results.businesses[i].image_url+')';
            var restaurantName = results.businesses[i].name;
            var restaurantRating = results.businesses[i].rating;
            var restaurantPrice = results.businesses[i].price;
            var restaurantLocation = results.businesses[i].location.display_address[0] + ' ' + results.businesses[i].location.display_address[1] + ', ' 
                results.businesses[i].location.display_address[1];
            var newDomElement = $("<div>", {
                'height': '55%',
                'width': '50%',
                'display': 'inline-block',
                'margin': '0',
                'padding': '0',
            }).addClass('resultDiv').attr('place', restaurantName).on('click', function() {
                var placeName = $(event.currentTarget).attr('place');
                map.map.setZoom(15);
                // map.map.setCenter(markers[placeName].marker.getPosition());
                markers[placeName].infoWindow.open(map.map, markers[placeName].marker);
            });

            $(newDomElement).append(
                $("<div>").addClass('restaurantImage').css({
                    'background-image': restaurantImage,
                    'background-size': 'cover',
                    'background-position': 'center',
                    'margin': '5px'
                }))
                .append($("<div>").css({
                    'margin': '5px',
                    
                }).addClass('restaurantInfo').text(restaurantName)
                    .append($("<div>").addClass('restaurantLocation').text('Address: ' + restaurantLocation))
                    .append($("<div>").addClass('restaurantPrice').text('Price: ' + restaurantPrice))
                    .append($("<div>").addClass('restaurantRating').text('Rating: ' + restaurantRating))
                );

            $(yelp).append(newDomElement);
        }
        map.map.setCenter(orangeCountyCoordinates);

        $('#map').removeClass('row col-xs-12 col-sm-12 col-md-12').addClass('row col-xs-6 col-sm-6 col-md-6');

        $('.leftContainer').append(yelp);

        map.getCoordinates(results.businesses);
    }

    handleYelpError(response){
        console.log(response);
        alert('you reached an error son');
    }
}
