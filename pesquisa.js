$(function(){
  $("#rTable input").keyup(function(){       
      var index = $(this).parent().index();
      var nth = "#rTable td:nth-child("+(index+1).toString()+")";
      var valor = $(this).val().toUpperCase();
      $("#rTable tbody tr").show();
      $(nth).each(function(){
          if($(this).text().toUpperCase().indexOf(valor) < 0){
              $(this).parent().hide();
          }
      });
  });

  $("#rTable input").blur(function(){
      $(this).val("");
  });
});