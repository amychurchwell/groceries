$(function(){
  $('#grocery').submit(function(event){

    var groceries = ['item1','item2','item3'];

    groceries.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $(".results").append("<li>" + userInput + "</li>");
    });
    event.preventDefault();
  });

});

    /*var sorted = userInput.sort().toUpperCase();
    userInput.forEach(function(item){
      $('.results').append("<li>" + item + "</li>");
    });
    $('#grocery').hide();
    event.preventDefault();
  });
});

  /*var flavors = ["smores", "americone dream", "vanilla", "rocky road"]
  flavors.forEach(function(flavor){
    $(".results").append("<li>" + flavor + "</li>");
  });
});
*/
