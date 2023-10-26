$(function(){
    console.log("ready");

   var url = 'https://www.narutodb.xyz/api/akatsuki';

   $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {

            var monarray = data.akatsuki;
        console.log(monarray);

        var monhtml ="";
        var i =0;

for(i=0;i<monarray.length;i++) {
    monhtml +='<div class="carte"> <h2>'+ monarray[i].name+'</h2> '
    // monhtml +=  monarray[i].id+'<br>'

            if(monarray[i].images !== undefined) {

                var ii = 0;

                for(ii=0;ii<monarray[i].images .length;ii++) {
                    monhtml += '<img src="'+monarray[i].images[ii]+'"> '
                }

                monhtml += '<br> '
            }

            if(monarray[i].jutsu !== undefined) {

                
                monhtml += '<h3> Jutsu : </h3> <p>'

                for(ii=0;ii<monarray[i].jutsu .length;ii++) {
                   monhtml += monarray[i].jutsu[ii]+' <br>'
                }

                monhtml += '</p> <br>'
            }

            if(monarray[i].natureType !== undefined) {
                monhtml += '<h3> Type : </h3> <p>'


                for(ii=0;ii<monarray[i].natureType .length;ii++) {
                    monhtml += monarray[i].natureType[ii]+', '
                }

                monhtml += '</p> <br> '
            }

            if(monarray[i].voiceActors !== undefined) {
            
                monhtml += '<h3> voix des acteurs : </h3> <p>'

                
                for (var key in monarray[i].voiceActors) {
                    if (monarray[i].voiceActors.hasOwnProperty(key) ) {
                        console.log(monarray[i].voiceActors[key]);
                    }
                    
        
                    monhtml +=''+key+' :'+'<br>'
                }

                monhtml += '</p> <br> '
            }

    monhtml +=  '</div><hr>'

} // fin boucle i

         $('#contenu').html(monhtml);

        // for (var key in monarray[9].voiceActors) {
        //     if (monarray[9].voiceActors.hasOwnProperty(key) && monarray[9].voiceActors[key].hasOwnProperty('length')) {
        //         console.log(monarray[9].voiceActors[key].length);
        //     }
        // }

        

        },// fin success   
   });// fin ajax
   });//ready