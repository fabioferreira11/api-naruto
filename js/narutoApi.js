$(function(){
    console.log("ready");

//    var url = 'https://www.narutodb.xyz/api/akatsuki';
   var url = 'js/akatsuki.json';

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

    if(monarray[i].personal.species == undefined) {

        monarray[i].personal.species = "Humain";

    }
    monhtml +='<div class="carte bg-black text-white w-undemi lg:w-unsix h-[42vh] p-3 overflow-auto border-4 border-[#ffffff] rounded-xl my-8 grid-item '+monarray[i].personal.species+'"> <h2 class="text-smal">'+ monarray[i].name+'</h2> '
    // monhtml +=  monarray[i].id+'<br>'


            if(monarray[i].images !== undefined) {

                var ii = 0;

                for(ii=0;ii<monarray[i].images .length;ii++) {
                    monhtml += '<img class="w-full h-3/6 object-cover object-top" src="'+monarray[i].images[ii]+'"> '
                }

                monhtml += '<br> '
            }

            if(monarray[i].jutsu !== undefined) {

                
                monhtml += '<h3 class="text-xsmal"> Jutsu : </h3> <p>'

                for(ii=0;ii<monarray[i].jutsu .length;ii++) {
                   monhtml += monarray[i].jutsu[ii]+' <br>'
                }

                monhtml += '</p> <br>'
            }

            monhtml += '<h3> Espèce : </h3> <p> '+monarray[i].personal.species+'</p> <br> '

            if(monarray[i].natureType !== undefined) {
                monhtml += '<h3> Type : </h3> <p>'


                for(ii=0;ii<monarray[i].natureType .length;ii++) {
                    monhtml += monarray[i].natureType[ii]+', '
                }

                monhtml += '</p> <br> '
            }

            // if(monarray[i].voiceActors !== undefined) {
            
            //     monhtml += '<h3> voix des acteurs : </h3> <p>'
            //     monhtml += monarray[i].voiceActors.japanese[0]+'<br>'
                
            //     for (var key in monarray[i].voiceActors) {
            //         if (monarray[i].voiceActors.hasOwnProperty(key) ) {
            //             console.log(monarray[i].voiceActors[key]);
            //         }
                    
        
            //         monhtml +=''+key+' :'+'<br>'
            //     }

            //     monhtml += '</p> <br> '
            // }
           

    monhtml +=  '</div>'

} // fin boucle i

         $('#contenu').html(monhtml);

        // for (var key in monarray[9].voiceActors) {
        //     if (monarray[9].voiceActors.hasOwnProperty(key) && monarray[9].voiceActors[key].hasOwnProperty('length')) {
        //         console.log(monarray[9].voiceActors[key].length);
        //     }
        // }

        var grid = $('.grille').isotope({
            // options
            itemSelector: '.carte',
            masonry: {
                gutter: 10,
              },
          });
    
          $('.filter button').on( 'click', function() {
            var value = $(this).attr('data-name');
            console.log("value",value);
    
            grid.isotope({ 
              filter: value
            });
           } );//click
        

        },// fin success   
   });// fin ajax
   });//ready