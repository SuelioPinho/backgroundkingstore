$(document).ready(function(){
  //$('#myModal').modal({"backdrop": "static"});
  newProdutoClickListener();
  $("table td a").click(function(){
    $('#myModal').modal({"backdrop": "static"});
  })
});

var newProdutoClickListener = function(){
  $("#new_product_button").click(function(){
    $("#new_product_modal").modal({"backdrop": "static"});
  });
}
