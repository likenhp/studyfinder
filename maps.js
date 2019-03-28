class Maps {
    constructor(zoomLevels) {
        this.center = {
            lat:33.67, lng:-117.78
        };
        this.zoomLevels = {
            markers: 15,
            default: 11.5
        };
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: this.center,
            zoom: this.zoomLevels.default,
        });

        this.markers = {};

        this.map.setCenter(this.center);

        this.lastResultClicked = null;

        // pass in option property of zoon levels, check if zoom levels are set
        // default zoom and marker zoom

        this.generateMarker = this.generateMarker.bind(this);
        this.removeMarkers = this.removeMarkers.bind(this);
        this.zoomToLocation = this.zoomToLocation.bind(this);
        this.setCenter = this.setCenter.bind(this);
        // this.closeLastInfowindow = this.closeLastInfowindow.bind(this);
        // this.markerClickCallback = this.markerClickCallback.bind(this);
    }

    generateMarker(resultInfo) {
        // var markerZoom = null;
        
        // this.zoomLevels.markers ? markerZoom = this.zoomLevels.markers : markerZoom = this.zoomLevels;

        const content = '<h5>' + resultInfo.name+'</h5>' + resultInfo.location;
        var infowindow = new google.maps.InfoWindow({
            content: content,
            map: this.map
        })

        // how do you bind the marker to the Maps class?
        // can you only bind in the constructor?

        var marker = new google.maps.Marker({
            position: {lat: resultInfo.coordinates.latitude, lng: resultInfo.coordinates.longitude},
            map: this.map,
        });

        marker.addListener('click', function() {
            map.closeLastInfowindow(infowindow);

            this.map.setZoom(map.zoomLevels.markers);
            this.map.setCenter(this.getPosition());

            infowindow.open(map.map, this);
        });

        this.markers[resultInfo.id] = {
            marker: marker,
            infowindow: infowindow,
            coordinates: {
                lat: resultInfo.coordinates.latitude,
                lng: resultInfo.coordinates.longitude
            }
        };
    }

    removeMarkers() {
        for (var key in this.markers) {
            this.markers[key].marker.setMap(null);
            delete this.markers[key];
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

    zoomToLocation(resultID) {
        this.closeLastInfowindow(this.markers[resultID].infowindow);
        
        this.map.setZoom(this.zoomLevels.markers);
        this.map.setCenter(this.markers[resultID].coordinates);
        this.markers[resultID].infowindow.open(this.map, this.markers[resultID].marker);
    }

    closeLastInfowindow(infowindow) {
        if (map.lastResultClicked !== null) {
            map.lastResultClicked.close();
        }

        map.lastResultClicked = infowindow;
    }

    setCenter(region) {        
        this.map.setCenter({
            lat: region.latitude,
            lng: region.longitude
        })
    }
}