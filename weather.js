class Weather {
    constructor(){
        this.handleWeatherDataSuccess = this.handleWeatherDataSuccess.bind(this);
        this.handleWeatherDataError = this.handleWeatherDataError.bind(this);
        this.handleWeatherData();
    }
    handleWeatherData(){
        $.ajax({
            url: "darksky.php",
            dataType: "json",
            method: "get",
            success: this.handleWeatherDataSuccess,
            error: this.handleWeatherDataError
        })
    }
    handleWeatherDataSuccess(response){
    console.log("it works", response);
        
    }
    handleWeatherDataError(response){
        console.log(response);
    }
}

