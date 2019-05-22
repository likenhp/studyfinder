$(document).ready(initializeApp);

var yelpData = null;

$(document).on({
    ajaxStart: () => { 
        $('.loadingScreen').css('display', 'block');
        $('body').addClass('loading');
    },
    ajaxStop: () => { 
        $('.loadingScreen').css('display', 'none');
        $('body').removeClass('loading');
    } 
})

function initializeApp () {
    tasks = new Tasks();
    map = new Maps();
    clickHandler();
    
}

function checkLocalStorage () {
    for (var index = 0; index < localStorage.length; index++){
        var saved = localStorage.getItem(localStorage.key(index));
        var clonedDiv = $("div[href='"+saved+"']");
        $(".saved").append(clonedDiv);
    }
}

function clickHandler () {
    const mapCallbacks = {
        generateMarkerCallback: map.generateMarker,
        removeMarkersCallback: map.removeMarkers,
        zoomToLocationCallback: map.zoomToLocation,
        setCenterCallback: map.setCenter
    }

    $('.searchContainer').on('keypress', function (e) {
        var locationInput = $('#locationInput').val().replace(' ', '_');

        if (e.keyCode === 13 && locationInput !== "" && $(".leftContainer").hasClass("active")) {
            yelpData = new YelpData (locationInput, mapCallbacks);
            $('.yelpTab').addClass('active');
            $(".tasksTab").removeClass("active");
            $('.tasksContainer').removeClass('active').css('display', 'none');
        } else if (e.keyCode === 13 && locationInput !== "") {
            yelpData = new YelpData (locationInput, mapCallbacks);
            $(".leftContainer").toggleClass("active");
            $(".searchContainer").toggleClass("active");
            $('.yelpTab').addClass('active');
        }

    });

    $('.submitSearch').on('click', () => {
        var search = $('#searchInput').val().replace(' ', '_');
        var locationInput = $('#locationInput').val().replace(' ', '_');

        if (search !== "") {
            yelpData = new YelpData (search, locationInput, mapCallbacks);
        }
    });

    $('ul li:nth-child(1)').on('click', function() {
        if ($("#yelp").hasClass('hide')) {
            $('.saved').addClass('hide');
            $('.tasksContainer').addClass('hide');
            $("#yelp").removeClass('hide');
            $('ul li:nth-child(1)').addClass('active');
            $('ul li:nth-child(2)').removeClass('active');
            $('ul li:nth-child(3)').removeClass('active');
        }
    })

    $('ul li:nth-child(2)').on('click', function() {
        if ($('.tasksContainer').hasClass('hide')) {
            $('#yelp').addClass('hide');
            $('.saved').addClass('hide');
            $('.tasksContainer').removeClass('hide');
            $('ul li:nth-child(1)').removeClass('active');
            $('ul li:nth-child(2)').addClass('active');
            $('ul li:nth-child(3)').removeClass('active');
        }
    })

    $('ul li:nth-child(3)').on('click', function() {
        if ($('.saved').hasClass('hide')) {
            $('.tasksContainer').addClass('hide');
            $('#yelp').addClass('hide');
            $('.saved').removeClass('hide');
            $('ul li:nth-child(1)').removeClass('active');
            $('ul li:nth-child(2)').removeClass('active');
            $('ul li:nth-child(2)').removeClass('active');
        }
    })

    $(".save-btn").on('click', function () {
        var saved = $(yelpData.scrollDiv).attr("href");

        var clonedDiv = $("div[href='"+saved+"']");

        localStorage.setItem(saved, saved);

        $(".saved").append(clonedDiv);

        $(".save-btn").addClass('hide');
        $("#yelp").addClass("hide");
        $(".tasksContainer").addClass("hide");
        $(".saved").removeClass("hide");
        $('ul li:nth-child(1)').removeClass('active');
        $('ul li:nth-child(2)').removeClass('active');
        $('ul li:nth-child(3)').addClass('active');
    });

    $(".tasksTab").on('click', function () {
        checkLocalStorage();
    })
}
