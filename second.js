var datos=new Array();

$(document).ready(function(){

    /*Boton guardar*/
    $('#boton-guardar').click(function(){

        datos=(localStorage.getItem("registros")) 
            ? JSON.parse(localStorage.getItem("registros")) 
            : [];
      /*Captura de datos escrito en los inputs*/        
        var nom  = $("#nombre").val();
        var correo = $("#email").val();
        datos.push({"Nombre":nom,"Correo":correo});
        
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("registros", JSON.stringify(datos));
        /*localStorage.setItem("Nombre", nom);
        localStorage.setItem("Email", correo);*/
       
        /*Limpiando los campos o inputs*/
        $("#nombre").val("");
        $("#email").val("");
    });

    /*Boton cargar storage */
    $('#boton-ver').click(function(){
        var cuenta=0;
        
        /*Mostrar datos almacenados*/
        var json=JSON.parse(localStorage.getItem("registros"));
        console.log(json.length);
        /*$("#salida").append("<tr><td>"+nombre+"</td><td>"+correo+"</td></tr>");*/
        var datos="";
        if(cuenta<=0){
            datos="<tr><th>Nombre</th><th>Correo electrónico</th></tr>";
            cuenta++
        };
        for(var i=0;i<json.length;i++){
            datos+="<tr><td>"+json[i].Nombre+"</td><td>"+json[i].Correo+"</td></tr>";
        }      
        $("#salida").html(datos); 
    });

    /*Boton limpiar*/
    $("#boton-limpia").click(function(){
        /*Limpiando los campos o inputs*/
        $("#nombre").val(" ");
        $("#email").val(" ");

    });
    $("#boton-borra").click(function(){
        $("table td").remove();
        localStorage.clear();
        localStorage.removeItme("#salida"); 
    });
});