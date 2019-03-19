$(document).ready(initializeApp);


var results = {};

var orangeCountyCoordinates = {
    lat:33.67, lng:-117.78
};

var markers = null;
var map = null;

function initializeApp() {
    map = new Maps();

    map.initMap();
    var weather = new Weather();
    //var yelp = new Yelp();
    clickHandler();
}
function inputData(event){
    debugger;
    console.log(event);
    var inputText = $("#locationInput").val();
    var yelp = new Yelp (inputText);
}

function clickHandler() {
    // $('#submitSearch').on('click', )
    $("#submitSearch").on("click", inputData)
    markers = new Maps();
}

var twitter = new TwitterLocation(results);

    var marker = new google.maps.Marker(
        {
            position: orangeCountyCoordinates, map: map
        }
    );

