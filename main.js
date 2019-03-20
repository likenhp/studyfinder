$(document).ready(initializeApp);

var results = {};
var markers = [];
var twitter = new TwitterLocation(results);
var search = null;
var coordinates = null;

var orangeCountyCoordinates = {
    lat:33.67, lng:-117.78
};

var weather = new Weather();

function initializeApp() {
    map = new Maps();

    clickHandler();
}

function clickHandler() {
    $('#submitSearch').on('click', function() {
        search = $('#submitSearch').text
    })
    // $('#submitSearch').on('click', )
    $("#submitSearch").on("click", inputData)
}

function inputData(){
    var inputText = $("#locationInput").val();
    var yelp = new Yelp (inputText);
}

