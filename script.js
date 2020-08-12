
let latitude = '';
let longitude = '';

let searchedCities = new Set();

let startTimeIndex = 0;

$('.citytosearch').val('');
$(".current-box").hide();
$(".forecast-banner").hide();

// when you click the Search button, get the value inside the input box for the ajax calls

$(".search").on("click", function() {

    let search = $('.citytosearch').val();
    console.log('CiTy: ' + search);

    $('.forecast-day').remove();

    if(!search) {
        alert('City search value is blank');
        return;
    }

    if (!searchedCities.has(search)) {
        $('.prev-list').prepend('<button class="prev-city mt-1">' + search + '</button>');
        searchedCities.add(search);
    }

    $(".current-box").show();
    $(".forecast-banner").show();

    //  Ajax#1. Forcast for the next 5 days

    console.log('SEARCH - ' + search);

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + search + ',CA,001&units=imperial&APPID=9b99b63ce161baa3b4af1fdf61a44834',
        //url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + search + ',CA,001&APPID=9b99b63ce161baa3b4af1fdf61a44834',
        method: 'get',
        statusCode: {
            404: function(responseObject, textStatus, jqXHR) {
                // No content found (404)
                // This code will be executed if the server returns a 404 response
                let parsed_data = JSON.parse(responseObject.responseText);
                alert('HTTP ' + parsed_data.cod + ' - ' + parsed_data.message);
                return;
            },
            503: function(responseObject, textStatus, errorThrown) {
                // Service Unavailable (503)
                // This code will be executed if the server returns a 503 response
                let parsed_data = JSON.parse(responseObject.responseText);
                alert('HTTP ' + parsed_data.cod + ' - ' + parsed_data.message);
            return;
            }
          }
    }).done(function(response){  // or then



        let hour = moment().get('hour');
        console.log('CuRrEnT HoUr: ' + hour);
        console.log('sTi: ' + startTimeIndex);
        console.log('**0. ' + response.list[0].dt_txt + ' ' + response.list[0].dt_txt.substring(11,13));
        console.log('**1. ' + response.list[1].dt_txt + ' ' + response.list[1].dt_txt.substring(11,13));
        console.log('**2. ' + response.list[2].dt_txt + ' ' + response.list[2].dt_txt.substring(11,13));
        console.log('**3. ' + response.list[3].dt_txt + ' ' + response.list[3].dt_txt.substring(11,13));
        console.log('**4. ' + response.list[4].dt_txt + ' ' + response.list[4].dt_txt.substring(11,13));
        console.log('**5. ' + response.list[5].dt_txt + ' ' + response.list[5].dt_txt.substring(11,13));
        console.log('**6. ' + response.list[6].dt_txt + ' ' + response.list[6].dt_txt.substring(11,13));
        console.log('**7. ' + response.list[7].dt_txt + ' ' + response.list[7].dt_txt.substring(11,13));

        console.log('HTTP ' + response.cod);

        console.log('date ' + response.list[startTimeIndex].dt_txt);
        let d1 = moment(response.list[startTimeIndex].dt_txt).format('L');
        console.log('temp ' + response.list[startTimeIndex].main.temp);
        console.log('humd ' + response.list[startTimeIndex].main.humidity);
        console.log('icon ' + response.list[startTimeIndex].weather[0].icon);

        let myUrl = 'http://openweathermap.org/img/w/' + response.list[3].weather[0].icon + '.png';

        $('.forecast-list').append(
            '<div class="my-3 pb-3 col-md-2 col-lg-2 forecast-day">' +
                '<h5>' + d1 + '</h5>' +
                '<img class="ficon" src=' + myUrl + ' alt="Weather icon" />' +
                '<div>' + response.list[startTimeIndex].main.temp + ' °F</div>' +
                '<div>' + response.list[startTimeIndex].main.humidity + '% HUM</div>' +
            '</div>'
        );

        //
        //console.log('hope ' + moment().tz(1597084760, 'America/Los_Angeles').format('MM/DD/YYYY h:mm a'));
        //

        console.log('date ' + response.list[startTimeIndex + 8].dt_txt);
        d1 = moment(response.list[11].dt_txt).format('L');
        console.log('temp ' + response.list[startTimeIndex + 8].main.temp);
        console.log('humd ' + response.list[startTimeIndex + 8].main.humidity);
        console.log('icon ' + response.list[startTimeIndex + 8].weather[0].icon);

        myUrl = 'http://openweathermap.org/img/w/' + response.list[11].weather[0].icon + '.png';

        $('.forecast-list').append(
            '<div class="my-3 pb-3 col-md-2 col-lg-2 forecast-day">' +
                '<h5>' + d1 + '</h5>' +
                '<img class="ficon" src=' + myUrl + ' alt="Weather icon" />' +
                '<div>' + response.list[startTimeIndex + 8].main.temp + ' °F</div>' +
                '<div>' + response.list[startTimeIndex + 8].main.humidity + '% HUM</div>' +
            '</div>'
        );

        console.log('date ' + response.list[startTimeIndex + 16].dt_txt);
        d1 = moment(response.list[19].dt_txt).format('L');
        console.log('temp ' + response.list[startTimeIndex + 16].main.temp);
        console.log('humd ' + response.list[startTimeIndex + 16].main.humidity);
        console.log('icon ' + response.list[startTimeIndex + 16].weather[0].icon);

        myUrl = 'http://openweathermap.org/img/w/' + response.list[19].weather[0].icon + '.png';

        $('.forecast-list').append(
            '<div class="my-3 pb-3 col-md-2 col-lg-2 forecast-day">' +
                '<h5>' + d1 + '</h5>' +
                '<img class="ficon" src=' + myUrl + ' alt="Weather icon" />' +
                '<div>' + response.list[startTimeIndex + 16].main.temp + ' °F</div>' +
                '<div>' + response.list[startTimeIndex + 16].main.humidity + '% HUM</div>' +
            '</div>'
        );

        console.log('date ' + response.list[startTimeIndex + 24].dt_txt);
        d1 = moment(response.list[27].dt_txt).format('L');
        console.log('temp ' + response.list[startTimeIndex + 24].main.temp);
        console.log('humd ' + response.list[startTimeIndex + 24].main.humidity);
        console.log('icon ' + response.list[startTimeIndex + 24].weather[0].icon);

        myUrl = 'http://openweathermap.org/img/w/' + response.list[27].weather[0].icon + '.png';

        $('.forecast-list').append(
            '<div class="my-3 pb-3 col-md-2 col-lg-2 forecast-day">' +
                '<h5>' + d1 + '</h5>' +
                '<img class="ficon" src=' + myUrl + ' alt="Weather icon" />' +
                '<div>' + response.list[startTimeIndex + 24].main.temp + ' °F</div>' +
                '<div>' + response.list[startTimeIndex + 24].main.humidity + '% HUM</div>' +
            '</div>'
        );

        console.log('date ' + response.list[startTimeIndex + 32].dt_txt);
        d1 = moment(response.list[35].dt_txt).format('L');
        console.log('temp ' + response.list[startTimeIndex + 32].main.temp);
        console.log('humd ' + response.list[startTimeIndex + 32].main.humidity);
        console.log('icon ' + response.list[startTimeIndex + 32].weather[0].icon);

        myUrl = 'http://openweathermap.org/img/w/' + response.list[35].weather[0].icon + '.png';

        $('.forecast-list').append(
            '<div class="my-3 pb-3 col-md-2 col-lg-2 forecast-day">' +
                '<h5>' + d1 + '</h5>' +
                '<img class="ficon" src=' + myUrl + ' alt="Weather icon" />' +
                '<div>' + response.list[startTimeIndex + 32].main.temp + ' °F</div>' +
                '<div>' + response.list[startTimeIndex + 32].main.humidity + '% HUM</div>' +
            '</div>'
        );

    });

    // Ajax#2. Weather for today

    let getTodayAjax = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + search + ',US&units=imperial&APPID=9b99b63ce161baa3b4af1fdf61a44834',
        method: 'get',
        statusCode: {
            404: function(responseObject, textStatus, jqXHR) {
                // No content found (404)
                let parsed_data = JSON.parse(responseObject.responseText);
                //alert('2. HTTP ' + parsed_data.cod + ' - ' + parsed_data.message);
                return;
            },
            503: function(responseObject, textStatus, errorThrown) {
                // Service Unavailable (503)
                let parsed_data = JSON.parse(responseObject.responseText);
                //alert('2. HTTP ' + parsed_data.cod + ' - ' + parsed_data.message);
                return;
            }
        }
    }).done(function(response) {  // or then
        $(".current-city").text(response.name + " " + moment().format('L'));
        console.log('2.     TEMP : ' + response.main.temp);
        console.log('2. HUMIDITY : ' + response.main.humidity);

        $(".current-temp").text(response.main.temp + ' degrees');
        $(".current-hum").text(response.main.humidity + '% humidity');

        latitude = response.coord.lat;
        longitude = response.coord.lon;
        console.log('2. from today call : ' + latitude + ' ' + longitude);
        $('.icon').attr('src', 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png');
    });


    // Make sure getTodayAjax is called and finishes before you do the ajax call to get the UV index
    // Ajax#3. UV index for our latitude and longitude

    console.log('* LETS SEE L & L : ' + latitude + ' ' + longitude);

    getTodayAjax.done(function(data) {

        console.log('** LETS SEE L & L : ' + latitude + ' ' + longitude);

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/uvi?&appid=9b99b63ce161baa3b4af1fdf61a44834&lat=" + latitude + "&lon=" + longitude,
            //url: "http://api.openweathermap.org/data/2.5/uvi?&appid=9b99b63ce161baa3b4af1fdf61a44834&lat=33.16&lon=-117.35",
            method: 'get',
            statusCode: {
                404: function(responseObject, textStatus, jqXHR) {
                    // No content found (404)
                    let parsed_data = JSON.parse(responseObject.responseText);
                    //alert('3. HTTP ' + parsed_data.cod + ' - ' + parsed_data.message);
                    return;
                },
                503: function(responseObject, textStatus, errorThrown) {
                    // Service Unavailable (503)
                    let parsed_data = JSON.parse(responseObject.responseText);
                    //alert('3. HTTP ' + parsed_data.cod + ' - ' + parsed_data.message);
                    return;
                }
            }
        }).done(function(response) {  // or then
            console.log('3. from uvi call : ' + latitude + ' ' + longitude);
            console.log('3. UV index : ' + response.value);
        });
    });  // end of getTodayAjax.done(function(data) {
});  // end of $(".search").on("click", function() {

// Clear the previous city items

$('.clear').on("click", function () {
    $(".prev-city").remove();
    searchedCities.clear();
});

// Get the weather if one of the previous selections is clicked

$(document).on("click", ".prev-city", function() {
    event.stopPropagation();
    event.stopImmediatePropagation();

    let citytosearch = $(this).text();
    console.log('**This text: ' + citytosearch);

    $('.citytosearch').val(citytosearch);
    $('.search').click();
}); 
