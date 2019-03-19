$(document).ready(initializeApp);


var results = {};

var orangeCountyCoordinates = {
    lat:33.67, lng:-117.78
};


function initializeApp() {
    var weather = new Weather();
    var yelp = new Yelp();
}


function initMap() {
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 11, center: orangeCountyCoordinates
        }
    );
    

}

var twitter = new TwitterLocation(results);

    var marker = new google.maps.Marker(
        {
            position: orangeCountyCoordinates, map: map
        }
    );
}

