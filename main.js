$(document).ready(initializeApp);

var results = {};
var markers = {};
var twitter = null;
var yelpData = null;
var weather = null;
var kanyeQuote = null;

// try to have as little globals as possible and move them into your classes

// certain beers better for certain weather conditions like hot and cold (blue sky)

function initializeApp() {
    tasks = new Tasks();
    map = new Maps();
    twitter = new TwitterLocation(results);
    // weather = new Weather();
    kanyeQuote = new KanyeQuote();

    clickHandler();
}

function clickHandler() {
    const mapCallbacks = {
        generateMarkerCallback: map.generateMarker,
        removeMarkersCallback: map.removeMarkers,
        zoomToLocationCallback: map.zoomToLocation
    }

    $('#locationInput').on('keypress', (e) => {
        var search = $('#locationInput').val();
        if (e.keyCode === 13 && search !== "") {
            yelpData = new YelpData (search, mapCallbacks);
        }
    });

    $('.addTask').on('click', () => {
        var search = $('#locationInput').val();

        if (search !== "") {
            yelpData = new YelpData (search, mapCallbacks);
        }
    });

    $('.resultDiv')

    $('ul li:nth-child(1)').on('click', function() {
        if ($("#yelp").hasClass('hide')) {
            $("#yelp").removeClass('hide');
            $('ul li:nth-child(1)').addClass('active');
            $('.tasksContainer').addClass('hide');
            $('ul li:nth-child(2)').removeClass('active');
        }
    })

    $('ul li:nth-child(2)').on('click', function() {
        if ($('.tasksContainer').hasClass('hide')) {
            $('.tasksContainer').removeClass('hide').addClass('active');
            $('ul li:nth-child(2)').addClass('active');
            $('#yelp').addClass('hide');
            $('ul li:nth-child(1)').removeClass('active');

        }
    })
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