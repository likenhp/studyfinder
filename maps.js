class Maps {
    constructor() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: orangeCountyCoordinates,
            zoom: 11.5
        });
        this.geocoder = new google.maps.Geocoder();

        // this.getCoordinates = this.getCoordinates.bind(this);

        this.getCoordinates();
    }

    getCoordinates(businesses) {
        debugger;
        var yelpResults = businesses;
        for (var key in yelpResults) {
            debugger;
            var marker = new google.maps.Marker({
                position: {lat: yelpResults[key].coordinates.latitude, lng: yelpResults[key].coordinates.longitude},
                map: this.map,
            })
        }
    }
}