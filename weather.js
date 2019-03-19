class Weather {
    constructor(){
        this.handleClick = this.handleClick.bind(this);
        this.handleWeatherDataSuccess = this.handleWeatherDataSuccess.bind(this);
        this.handleWeatherDataError = this.handleWeatherDataError.bind(this);
    }
    eventHandlers(){
        $(".weather").on("click", this.handleClick);
    }
    handleClick(){
        this.handleWeatherData;
    }
    handleWeatherData(){
        $.ajax({
            url: "https://api.darksky.net/forecast/fe42c988ad036f09376551f306c17ae9/33.7175,-117.853104",
            dataType: "json",
            method: "get",
            success: this.handleWeatherDataSuccess,
            error: this.handleWeatherDataError,
        })
    }
    handleWeatherDataSuccess(){
        console.log("it works");
    }
    handleWeatherDataError(){
        console.log("it failed");
    }
}