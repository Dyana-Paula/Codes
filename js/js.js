

function ocultar(obj){
    document.getElementById('home').style.display="none";
    document.getElementById('quemsoueu').style.display="none";
    document.getElementById('cards_java').style.display="none";

    if(obj.id == "mostrar_home"){
        document.getElementById('home').style.display="block";
        document.getElementById('quemsoueu').style.display = "none";
        document.getElementById('cards_java').style.display="none";
    }
    if(obj.id == "mostrar_quemsoueu"){
        document.getElementById('quemsoueu').style.display = "block";
        document.getElementById('home').style.display = "none";
        document.getElementById('cards_java').style.display="none";
    }

    if(obj.id == "mostrar_cards_java"){
        document.getElementById('cards_java').style.display="block";
        document.getElementById('home').style.display = "none";
        document.getElementById('quemsoueu').style.display = "none";

    }

}