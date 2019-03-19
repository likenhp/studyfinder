class Yelp{
    constructor(){
        this.yelpDomElements = {
            row: null,
            image: null,
            name: null,
            rating: null,
            phone: null,
        }
        this.handleYelpSuccess = this.handleYelpSuccess.bind(this);
        this.handleYelpError = this.handleYelpError.bind(this);
        this.getDataFromYelp();
    }
    getDataFromYelp(){
        $.ajax({
            url: 'yelp.php',
            dataType: 'json',
            method: 'get',
            data: {
                'apikey': 'dJbz7ePRpBcLEb3zCwg_1tAT3gLiUJKFoMm6EfhSjQZOrd_TJCBeypMPGz6YX5G9hN6tA3A0QQIqOG5c-Sx59kj5--M5xt5YCswAeIc0S4q5EBIbWAULDSiL90OQXHYx',
                'location': 'irvine'
            },
            success: this.handleYelpSuccess,
            error: this.handleYelpError,
        })
    }
    handleYelpSuccess(response){
        console.log('yep', response);
    }
    handleYelpError(response){
        console.log('nope', response);
    }
}
