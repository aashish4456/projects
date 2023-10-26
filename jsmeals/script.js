$.ajax({
    type:'get',
    url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian',
    success: function(response){
        for(var i=0;i<response.meals.length;i++){
            var dataitem=`
            <div class='col-md-4 m-3 shadow-lg p-3 mb-5 bg-white rounded text-center'>
            <p>${response.meals[i].strMeal}</p>
            <img src="${response.meals[i].strMealThumb}" class='img-fluid'/>
            <p>${response.meals[i].idMeal}</p>
            </div>
            `;
            if (i % 3 === 0) {
                $('#items').append('<div class="row"></div>');
            }
            $('#items .row').last().append(dataitem);
        }
    },
    error:function(error){
        console.log(error)
    }

})  