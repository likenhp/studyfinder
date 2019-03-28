class Weather {
    constructor(){
        this.tempFlagF = true;
        this.localTime = false;
        this.tempF = null;
        this.tempC = null;
        this.interval12hr = null;
        this.interval24hr = null;
        this.handleWeatherDataSuccess = this.handleWeatherDataSuccess.bind(this);
        this.handleWeatherDataError = this.handleWeatherDataError.bind(this);
        this.handleTemperature = this.handleTemperature.bind(this);
        this.clickCallBackTemp = this.clickCallBackTemp.bind(this);
        this.clickCallBackTime = this.clickCallBackTime.bind(this);
        this.handleWeatherData();
        this.handleClick();
        this.handleAmPmTime();
    }

    handleClick(){
        $(".temp").on("click", this.clickCallBackTemp);
        $(".time").on("click", this.clickCallBackTime);
    }
    
    clickCallBackTime(){
        if(this.localTime === true){
            this.localTime = false;
            this.handleAmPmTime();
            
        }else{
            this.localTime = true;
            this.handleMilitaryTime();
            
        }
    }

    handleAmPmTime(){
        var amPmTime = new Date().toLocaleTimeString();
        $(".time").empty()
        $(".time").append(amPmTime);
        this.interval12hr = setInterval(this.handleAmPmTime, 1000);
        clearInterval(this.interval24hr);
    }

    handleMilitaryTime(){
        var date = new Date();
        var militaryTimeHours = date.getHours()
        var militaryTimeMinutes = date.getMinutes()
        var militaryTimeSeconds = date.getSeconds();
        var militaryTime = `${militaryTimeHours}:${militaryTimeMinutes}:${militaryTimeSeconds}`;
        $(".time").empty();
        $(".time").append(militaryTime);
        this.interval24hr = setInterval(this.handleMilitaryTime, 1000);
        clearInterval(this.interval12hr);
    }

    handleWeatherData(){
        $.ajax({
            url: "darksky.php",
            dataType: "json",
            method: "get",
            success: this.handleWeatherDataSuccess,
            error: this.handleWeatherDataError
        });
    }

    handleTemperature (response) {
        console.log(response);
        var apparentTempF = response.currently.apparentTemperature; //is in Farenheight
        this.tempF = "Temperature: "+apparentTempF+" \xB0F";
        var apparentTempC = (apparentTempF - 32)*(5/9);
        this.tempC = "Temperature: "+apparentTempC.toFixed(2)+ " \xB0C";
        
        //tempArray.push(tempF, tempC);
        $(".temp").append(this.tempC);
    }

    clickCallBackTemp(){
        //console.log(this);
        if(this.tempFlagF === true){
            this.tempFlagF = false;
            $(".temp").empty();
            $(".temp").append(this.tempF);
        } else {
            this.tempFlagF = true;
            $(".temp").empty();
            $(".temp").append(this.tempC);
        }
    }

    handleWeatherDataSuccess(response){
    this.handleTemperature(response);

    var icon = response.currently.icon;
    var unixTimestamp = response.currently.time;
    var currentSummary = response.currently.summary;
    var unixTime = new Date(unixTimestamp*1000);
    var day = unixTime.toDateString();
    var currentDate = `${day}`

    //Appending to div
    var weatherSituation = $(".weatherSituation").attr("id", icon);
    var date = $(".date").append(currentDate).css("font-weight","bold");
    var summary = $(".summary").append(currentSummary);

        var icons = new Skycons();
        var list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
        ];

        for (var i = list.length; i--; ) {
            icons.set(list[i], list[i]);
            icons.play();
        }

    }
    
    handleWeatherDataError(response){
        console.log(response);
    }
}

