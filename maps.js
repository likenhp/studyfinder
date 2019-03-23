class Maps {
    constructor(zoomLevels) {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: orangeCountyCoordinates,
            zoom: zoomLevels.default,
        });

        if (zoomLevels) {
            this.zoomLevels = zoomLevels;
        } else {
            this.zoomLevels = 11.5;
        }

        // pass in option property of zoon levels, check if zoom levels are set
        // default zoom and marker zoom

        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getCoordinates(businesses, clearMarkers = false) {

        // pass in second para that removes markers if true
        // if second is passed in as true, it will remove
        for (var key in businesses) {
            var address = businesses[key].location.display_address[0];

            if (businesses[key].location.display_address.length === 3) {
                address += ' ' + businesses[key].location.display_address[1];
            }

            address += '\n' + businesses[key].location.display_address[businesses[key].location.display_address.length-1];

            var resultInfo = {
                latitude: businesses[key].coordinates.latitude,
                longitude: businesses[key].coordinates.longitude,
                resultName: businesses[key].name,
                resultAddress: address
            }

            this.generateMarker(resultInfo, this.map);
        }
    }

    generateMarker(resultInfo, map) {
        var markerZoom = null;
        
        this.zoomLevels ? markerZoom = this.zoomLevels.markers : markerZoom = this.zoomLevels;

        var content = '<h5>' + resultInfo.resultName+'</h5>' + resultInfo.resultAddress;
        var infowindow = new google.maps.InfoWindow({
            content: content,
            map: map
        })

        var marker = new google.maps.Marker({
            position: {lat: resultInfo.latitude, lng: resultInfo.longitude},
            map: map,
        })
        marker.addListener('click', function() {
            map.setZoom(markerZoom);
            map.setCenter(this.getPosition());
            infowindow.open(map, this);
        });

        // set zoom factors as parameter, pull out of this.zoomlevel

        markers[resultInfo.resultName] = {marker: marker, infoWindow: infowindow};
    }

    removeMarkers() {
        this.setMapOnAll(null);
    }

    setMapOnAll() {
        for (var key in markers) {
            markers[key].marker.setMap(null);
            delete markers[key];
        }
    }
    // change all markers to only to map
    // might need to add callback into yelp
    // click handler on yelp elements on the right
    // your map has a move to marker
    // use object of markers, get location, move to location on map
    // or
    // maps needs a callback for when maps is clicked, it calls a funcrtion 
    // either on global or yelp space that moves to appropriate listing
    // pass in business name into yelp, yelp scrolls
    // don't pass into constructork, initalize callback, and then add callbacks
    // pass it via function
    // callbacks are kind of like event listeners
    // on click function === on click callback
    // callback function yelp to maps zoom to list
    // callback function map tp yelp move the map to marker

    zoomIntoMarker() {
    }
}