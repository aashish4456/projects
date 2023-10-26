$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success:  function(responce){
        console.log(responce.countries)
        for(i=0;i<responce.countries.length;i++){
            var active=responce.countries[i].Totalconfirmed-responce.countries[i].Totalrecvored
            var tablerow=`<tr>
            <td>${responce.countries[i].country}</td>
            <td>${responce.countries[i].active}</td>
            <td>${totalactive}</td>
            <td>${responce.countries[i].responce}</td>
            <td>${responce.countries[i].totaldeaths}</td>
            </tr>`
            $('#tbody').append(tablerow)
        }
    },
    error :function(error){
        console.log(error)
    }
})  