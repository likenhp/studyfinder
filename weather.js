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
    var apparentTemp = response.currently.apparentTemperature;
    var tempF = `Temperature: ${apparentTemp} F ${String.fromCharCode(176)}`
    var icon = response.currently.icon;
    var unixTimestamp = response.currently.time;
    var currentSummary = response.currently.summary;
    
    var unixTime = new Date(unixTimestamp*1000);
    var day = unixTime.toDateString();
    var hour = unixTime.getHours();
    var minutes = unixTime.getMinutes();
    var currentTime = `Current Time: ${hour}:${minutes}`
    var currentDate = `${day}`

    //Appending to div
    var temp = $(".temp").append(tempF);
    var weatherSituation = $(".weatherSituation").attr("id", icon);
    var time = $(".time").append(currentTime);
    var date = $(".date").append(currentDate).css("font-weight","bold");
    var summary = $(".summary").append(currentSummary);

    //Loop for future dates and weather
    // for( var index = 1; index < response.daily.data.length; index++){
    //     var futureUnixWeatherTimeStamp = response.daily.data[index].time;
    //     var futureWeatherUnix = new Date (futureUnixWeatherTimeStamp*1000);
    //     var futureWeatherDay = futureWeatherUnix.toDateString();
    //     var futureDate = $("<div>", {
    //         "class": "futureDate"
    //     }).append(futureWeatherDay).css("font-weight","bold");
    //     $(".weather").append(futureDate);

    //     var futureWeatherCondition = response.daily.data[index].icon;
    //     var futureWeatherDiv = $("<canvas>", {
    //         "id": futureWeatherCondition
    //     });
    //     $(".weather").append(futureWeatherDiv);

    //     var futureSummary = response.daily.data[index].summary;
    //     var futureSummaryDisplay =$("<div>", {
    //         "class": "futureSummary"
    //     }).append(futureSummary);
    //     $(".weather").append(futureSummaryDisplay);


    // }
        // debugger;    
  
    var icons = new Skycons(),
                list  = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;
                for(i = list.length; i--; )
                icons.set(list[i], list[i]);
                icons.play();

    }
    
    handleWeatherDataError(response){
        console.log(response);
    }
}

