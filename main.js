$(document).ready(initializeApp);

var results = {};
var twitter = new TwitterLocation(results);
var search = null;
var coordinates = null;

var orangeCountyCoordinates = {
    lat:33.67, lng:-117.78
};

var map = null;

function initializeApp() {
    var weather = new Weather();
    var yelp = new Yelp();
    map = new Maps();
    clickHandler();
}

function inputData(event){
    console.log(event);
    var inputText = $("#locationInput").val();
    var yelp = new Yelp (inputText);
}

function clickHandler() {
    $('#submitSearch').on('click', function() {
        search = $('#submitSearch').text
    })
    // $('#submitSearch').on('click', )
    $("#submitSearch").on("click", inputData)
}

var twitter = new TwitterLocation(results);