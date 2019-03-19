class Maps {
    constructor() {
        this.locations = {
            Del: {
                lat: 33.649998,
                lng: -117.744933
            },
            Omomo: {
                lat: 33.671621,
                lng: -117.788938
            },
        }; // locations obtained from yelp

        this.initMap();

        this.setMarkers();
    }

    initMap() {
        var locations = {
            Del: {
                lat: 33.649998,
                lng: -117.744933
            },
            Omomo: {
                lat: 33.671621,
                lng: -117.788938
            },
        };
    
        map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 11.5, center: orangeCountyCoordinates
            }
        );

        this.setMarkers();
    
        // for (var key in locations) {
        //     marker = new google.maps.Marker({
        //         position: locations[key],
        //         map: map
        //     });
        // }
        // for (var key in this.locations) {
        //     var marker = new google.maps.Marker({
        //         position: new google.maps.LatLng(this.locations[key].lat, this.locations[key].lng),
        //         map: map
        //     });
        // }
    }

    setMarkers() {
        for (var key in this.locations) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.locations[key].lat, this.locations[key].lng),
                map: map
            });
        }
    }
}