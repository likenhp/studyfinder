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

        // pass in option property of zoon levels, check if zoom levels are set
        // default zoom and marker zoom

        this.getCoordinates = this.getCoordinates.bind(this);
        this.removeMarkers = this.removeMarkers.bind(this);
    }

    getCoordinates(response, clearMarkers = false) {
        this.center.lat = response.region.center.latitude;
        this.center.lng = response.region.center.longitude;
        var results = response.businesses;
        this.center = {
            lat: response.region.center.latitude,
            lng: response.region.center.longitude
        };

        // pass in second para that removes markers if true
        // if second is passed in as true, it will remove
        for (var i=0; i<results.length; i++) {
            var address = results[i].location.address1 + results[i].location.address2 +'\n' + results[i].location.city +
                ', ' + results[i].location.state + ' ' + results[i].location.zip_code;

            var resultInfo = {
                latitude: results[i].coordinates.latitude,
                longitude: results[i].coordinates.longitude,
                resultName: results[i].name,
                resultAddress: address
            }

            this.generateMarker(resultInfo, this.map);
        }

        this.map.setZoom(11);
        this.map.setCenter(this.center);
    }

    generateMarker(resultInfo, map) {
        var markerZoom = null;
        
        this.zoomLevels.markers ? markerZoom = this.zoomLevels.markers : markerZoom = this.zoomLevels;

        var content = '<h5>' + resultInfo.resultName+'</h5>' + resultInfo.resultAddress;
        var infowindow = new google.maps.InfoWindow({
            content: content,
            map: map
        })

        this.createInfoWindow();

        var marker = new google.maps.Marker({
            position: {lat: resultInfo.latitude, lng: resultInfo.longitude},
            map: map,
        })
        marker.addListener('click', function() {
            map.setZoom(markerZoom);
            map.setCenter(this.getPosition());
            infowindow.open(map, this);
        });

        this.markers[resultInfo.resultName] = {marker: marker, infowindow: infowindow};
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

    zoomIntoMarker() {
    }

    createInfoWindow() {
        // debugger;
        // var content = '<h5>' + resultInfo.resultName+'</h5>' + resultInfo.resultAddress;
        // var infowindow = new google.maps.InfoWindow({
        //     content: content,
        //     map: map
        // })

        // var placeName = $(event.currentTarget).attr('place');
        // this.map.setZoom(15);
        // this.map.setCenter(markers[placeName].marker.getPosition());
        // markers[placeName].infoWindow.open(this.map, markers[placeName].marker);
    }
}