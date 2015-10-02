getSomeJason = function() {
    loadJSON('yourjson.url',
      function(data) {
        if (data == null) {
          console.log('something went wrong man!!  NO FILE FOUND!!!!');
            }
            //log your data to the console.
            console.log(data);
          var d, i;
          for (i = 0; i < data.length; i++) {
            d = data[i];
            if (d.completedOn != null) {
              //do some for every item that's looped though.
              document.getElementById('yourElementID').innerHTML += data.yourobject + '<span> plus some html</span>':
            }
          }
          //run_stuff_when_it_done();
        },
        function(xhr) {
          console.error(xhr);
        }
      );
    }
