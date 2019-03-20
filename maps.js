class Maps {
    constructor() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: orangeCountyCoordinates,
            zoom: 11.5
        });
        this.map.addListener('click', function () {
            this.map.setZoom({zoom: 11.5});
            this.map.setCenter(orangeCountyCoordinates)
        })
        this.geocoder = new google.maps.Geocoder();

        this.getCoordinates();
    }

    getCoordinates(businesses) {
        var yelpResults = businesses;
        for (var key in yelpResults) {
            var marker = new google.maps.Marker({
                position: {lat: yelpResults[key].coordinates.latitude, lng: yelpResults[key].coordinates.longitude},
                map: this.map,
            })

            marker.addListener('click', function() {
                this.map.setZoom(20);
                this.map.setCenter(marker.getPosition());
            });
        }
    }
}