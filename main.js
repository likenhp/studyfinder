$(document).ready(initializeApp);

var results = {};
var markers = {};
var twitter = null;
var yelpData = null;
var weather = null;
var zoomLevels = {
    markers: 15,
    default: 11.5
}

// try to have as little globals as possible and move them into your classes


var orangeCountyCoordinates = {
    lat:33.67, lng:-117.78
};

// certain beers better for certain weather conditions like hot and cold (blue sky)

function initializeApp() {
    map = new Maps(zoomLevels);
    twitter = new TwitterLocation(results);
    yelpData = new YelpData (inputText);
    weather = new Weather();


    clickHandler();
}

function clickHandler() {
    $(document).on('keypress', function(e) {
        if (e.keyCode === 13) {
            var search = $('#submitSearch').text();
            inputData();
        }
    });
}

function inputData(){
    var inputText = $("#locationInput").val();
}

// pass in map callback to yelp constructor
// getCoordinates, removeMarkers, changeCenter are all callbacks given to yelp

// Dan's comments
// Dollar signs on price should have greyed out items for missing dollar signs
// Show markers on map with something that indicates overall quality level
// Click handler on map markers that brings relevant relp review on right into view
// Click on map item moves map to view marker
// Add photo modal with carousel
// Change yelp function to something more befitting what it is doing, like initiateYelpSearch
// Move yelp object up to initializeApp
// Pass in map callback functions to yelp constructor
// Move weather instatniation into initializeApp
// Yelp: move fixed css properties to css
// Twitter: move fixed css into classes
// Initialie twitter in intializeapp
// Darsky: take in dom elements dynamically
// Html entieis for degrees symbol
// Click on temperature converts between fahrenheit and celsius
// Clicking on time converts between 24 hour and 12 hour
// Move all marker code into maps

// renamed yelp to yelpData
// renamed yelp select in yelp.js to yelpDomElement