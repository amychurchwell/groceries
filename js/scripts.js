$(function(){
  $('#grocery').submit(function(event){
    $("#grocery").hide();
    var ids = ['item1','item2','item3'];

    var groceries = ids.map(function(item) {
      return $("input#" + item).val().toUpperCase();
    });
    var groceries = groceries.sort();
    groceries.forEach(function(item){
      $(".results").append("<li>" + item + "</li>");
    });
    event.preventDefault();
  });

});
