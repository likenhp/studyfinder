$(document).ready(initializeApp);

var yelpData = null;

// $(document).on({
//     ajaxStart: () => { 
//         $('body').addClass("loading");
//     },
//     ajaxStop: () => { 
//         $('body').removeClass("loading");
//     } 
// })

// $(document).on({
//     ajaxStart: () => { 
//         $('.spinner').css('display', 'block');
//         $('body').css('opacity', '0.5');
//     },
//     ajaxStop: () => { 
//         $('.spinner').css('display', 'none');
//         $('body').css('opacity', '1');
//     } 
// })

$(document).on({
    ajaxStart: () => { 
        $('.sk-cube-grid').css('display', 'block');
        $('body').css('opacity', '0.5');
    },
    ajaxStop: () => { 
        // $('.sk-cube-grid').css('display', 'none');
        $('body').css('opacity', '1');
    } 
})

function initializeApp () {
    tasks = new Tasks();
    map = new Maps();
    clickHandler();
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
        if ($("#yelp").css('display','none')) {
            $("#yelp").show();
            $('ul li:nth-child(1)').addClass('active');
            $('.tasksContainer').hide();
            $('ul li:nth-child(2)').removeClass('active');
        }
    })

    $('ul li:nth-child(2)').on('click', function() {
        if ($('.tasksContainer').css('display','none')) {
            $('.tasksContainer').show().addClass('active');
            $('ul li:nth-child(2)').addClass('active');
            $('#yelp').hide();
            $('ul li:nth-child(1)').removeClass('active');
        }
    })
}
