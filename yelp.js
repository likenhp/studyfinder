$(document).ready(startApp);

function startApp(){
    $('.yelpClick').on('click', getDataFromYelp);
}

function getDataFromYelp(){
    $.ajax({
        url: 'yelp.php',
        dataType: 'json',
        method: 'get',
        data: {
            'apikey': 'dJbz7ePRpBcLEb3zCwg_1tAT3gLiUJKFoMm6EfhSjQZOrd_TJCBeypMPGz6YX5G9hN6tA3A0QQIqOG5c-Sx59kj5--M5xt5YCswAeIc0S4q5EBIbWAULDSiL90OQXHYx',
            'location': 'irvine'
        },
        success: function(response){
            console.log(response);
        }
    })
}