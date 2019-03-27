class YelpData {
    constructor(search, getCoordinatesCallback, removeMarkersCallback){
        this.results = null;
        this.inputField = search;
        this.markerCallback = getCoordinatesCallback;
        this.removeMarkersCallback = removeMarkersCallback;

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
                this.handleYelpError(resp);
            },
        })
    }
    
    // all the css should be in a class, shouldn't be inline

    handleYelpSuccess(response){
        this.removeMarkersCallback();
        this.results = response;

        $('.rightContainer').removeClass('hide');

        // yelp automatically returns results in irvine, set it so it only returns when input field is given
        console.log(response);

        // is this needed?
        $('#yelp').remove();

        var yelpDomElement = $("<div>").attr('id', 'yelp')
            // remove this inline css
            .append($('<img>'), {
                src: 'images/yelplogo.png',
                alt: 'yelpLogo',
                class: 'yelpLogo'
            });

        for (var i = 0; i < this.results.businesses.length; i++){
            console.log(this.results.businesses);
            var restaurantImage = 'url('+this.results.businesses[i].image_url+')';
            var restaurantName = this.results.businesses[i].name;
            var restaurantRating = this.results.businesses[i].rating;
            var restaurantPrice = this.results.businesses[i].price;
            var restaurantLocation = this.results.businesses[i].location.display_address[0] + ' ' + this.results.businesses[i].location.display_address[1] + ', ' 
            this.results.businesses[i].location.display_address[1];

            var newDomElement = $("<div>").addClass('resultDiv')
                .attr('place', restaurantName).on('click', map.createInfoWindow);
                
            // click handler needs to be callback (ie openWindow)

            $(newDomElement).append(
                $("<div>").addClass('restaurantImage').css({
                    'background-image': restaurantImage,
                }))
                .append($("<div>").addClass('restaurantInfo')
                    .append($("<div>").addClass('restaurantName').text(restaurantName))
                    .append($("<div>").addClass('restaurantLocation').text('Address: ' + restaurantLocation))
                    .append($("<div>").addClass('restaurantPrice').text('Price: ' + restaurantPrice))
                    .append($("<div>").addClass('restaurantRating').text('Rating: ' + restaurantRating))
                );
                $('<a>', {
                    class: 'restaurantLink',
                    text: 'Open in Yelp',
                    href: this.results.businesses[i].url,
                    target: "_blank"
                }).appendTo(newDomElement);

            $(yelpDomElement).append(newDomElement);
        }

        $('.leftContainer').removeClass('row col-xs-12 col-sm-12 col-md-12').addClass('row col-xs-6 col-sm-6 col-md-6');

        $('.tabsContainer').append(yelpDomElement);
        
        // is this how you pass in a callback?
        // how do you call map in yelp object?
        this.markerCallback(this.results);
    }

    handleYelpError(response){
        console.log(response);
        alert('you reached an error son');
    }

    toggleResultsWindow() {
        debugger;
        $("#yelp").toggle();

        if ($("#yelp")) {
            $(".leftContainer").removeClass('row col-xs-12 col-sm-12 col-md-12').addClass('row col-xs-6 col-sm-6 col-md-6');
        } else {
            // add button to show yelp results again
            $(".leftContainer").removeClass('row col-xs-6 col-sm-6 col-md-6').addClass('row col-xs-12 col-sm-12 col-md-12');
        }
    }
}


// dont have yelp directly calling map
// avoid calling map.map.

// yelp calls coordinates, has callback