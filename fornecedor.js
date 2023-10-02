var tabelaOculta =  $(".tabelaOculta").hide();
var oculta = false;
$(".expandirTabela").click(function(){

    if(oculta == false){
        $(this).parent().find(".tabelaOculta").show();
        oculta = true;

    }else{
        $(this).parent().find(".tabelaOculta").hide();
        oculta = false;
    }
});