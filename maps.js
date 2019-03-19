class Maps {
    constructor(yelpResults) {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: orangeCountyCoordinates,
            zoom: 11.5
        });
        this.yelpResults = results;
        this.geocoder = new google.maps.Geocoder();

        this.getCoordinates();
    }

    getCoordinates() {
        for (var key in this.yelpResults) {
            geocoder.geocoder(this.yelpResults[key].address, this.callback);
            var marker = new google.maps.Marker({
                position: coordinatesObj,
                map: map
            });
        }
    }

    callback() {
        console.log(this.yelpResults[key]);
    }
}