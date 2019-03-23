class YelpData {
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
    
    // all the css should be in a class, shouldn't be inline

    handleYelpSuccess(response){
        map.removeMarkers();
        debugger;
        this.results = response.businesses;
        $('#yelp').remove();

        var yelpDomElement = $("<div>").attr('id', 'yelp')
            .addClass('col-xs-6 col-sm-6 col-md-6')
            // remove this inline css
            .append($('<img>'), {
                src: 'images/yelplogo.png',
                alt: 'yelpLogo',
                class: 'yelpLogo'
            });

        for (var i = 0; i < this.results.length; i++){
            var restaurantImage = 'url('+this.results[i].image_url+')';
            var restaurantName = this.results[i].name;
            var restaurantRating = this.results[i].rating;
            var restaurantPrice = this.results[i].price;
            var restaurantLocation = this.results[i].location.display_address[0] + ' ' + this.results[i].location.display_address[1] + ', ' 
                this.results[i].location.display_address[1];
            
            var newDomElement = $("<div>").addClass('resultDiv')
                .attr('place', restaurantName).on('click', function() {
                    var placeName = $(event.currentTarget).attr('place');
                    map.map.setZoom(15);
                    // map.map.setCenter(markers[placeName].marker.getPosition());
                    markers[placeName].infoWindow.open(map.map, markers[placeName].marker);
                }
            );

            // click handler needs to be callback (ie openWindow)

            $(newDomElement).append(
                $("<div>").addClass('restaurantImage').css({
                    'background-image': restaurantImage,
                }))
                .append($("<div>").addClass('restaurantInfo')
                    .text(restaurantName)
                    .append($("<div>").addClass('restaurantLocation').text('Address: ' + restaurantLocation))
                    .append($("<div>").addClass('restaurantPrice').text('Price: ' + restaurantPrice))
                    .append($("<div>").addClass('restaurantRating').text('Rating: ' + restaurantRating))
                );

            $(yelpDomElement).append(newDomElement);
        }

        map.map.setCenter(orangeCountyCoordinates);

        $('#map').removeClass('row col-xs-12 col-sm-12 col-md-12').addClass('row col-xs-6 col-sm-6 col-md-6');

        $('.leftContainer').append(yelp);

        map.getCoordinates(this.results);
    }

    handleYelpError(response){
        console.log(response);
        alert('you reached an error son');
    }
}


// dont have yelp directly calling map
// avoid calling map.map.

// yelp calls coordinates, has callback