class Maps {
    constructor() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: orangeCountyCoordinates,
            zoom: 11.5
        });

        this.getCoordinates = this.getCoordinates.bind(this);

        this.getCoordinates();
    }

    getCoordinates(businesses) {
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

            this.generateMarker(resultInfo, this.map, key);
        }
    }

    generateMarker(resultInfo, map, key) {
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
            map.setZoom(15);
            map.setCenter(this.getPosition());
            infowindow.open(map, this);
        });

        markers[resultInfo.resultName] = {marker: marker, infoWindow: infowindow};
    }

    removeMarkers() {
        this.setMapOnAll(null);
    }

    setMapOnAll() {
        for (var key in markers) {
            markers[key].setMap(null);
        }
    }

    zoomIntoMarker() {
        
    }
}