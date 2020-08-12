function searchCity() {

    var inputCity = $('#city').val().trim();
  
    var queryURL1 = "https://openweathermap.org/data/2.5/weather?q=" + inputCity + "&units=metric&api_key=d7dd23c8c267df8a15127f3278c01c88"
    console.log(queryURL1);
        $.ajax({
            url: queryURL1,
            method: "GET",
            success: function(data) {
                console.log(data);
            },
        }).then(function(response) {
            console.log(response);
        })
    
    }
    
    
    // search click event
    
    $(".btn").on("click", function(event){
    
       event.preventDefault();
        var inputCity = $('#city').val().trim();
      
      searchCity(inputCity);
      
    })