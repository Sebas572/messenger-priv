var config = {
      apiKey: "AIzaSyB50DbfRdQ3Jw9XKuShlyXMbiiGLTkoRZA",
      authDomain: "mensajeria-3b8b4.firebaseapp.com",
      databaseURL: "https://mensajeria-3b8b4-default-rtdb.firebaseio.com/",
      storageBucket: "mensajeria-3b8b4.appspot.com",
      messagingSenderId: "G-2QFL6Z2FL0"
    };
    firebase.initializeApp(config);
    let Saber;let array;let Recivido;let i = 1;let addEnvio;let NameUser = "";let ActualizarReg;let Hours;/*dato curioso sabemos quien mando el mensaje con Hours[1]*/let Estatus = "";let Actualizar;let addFotos;let AbrirCerrar = 0;let AbrirCerrar1 = 0;let xF = 0;let EnviarDatos;let ia = 0;let PantallaDeCargaInclementada = "true";
    var dbRef = firebase.database().ref().child("Informacion");
    dbRef.on('value', snap => Seguridad = snap.val().Information);
    dbRef.on('value', snap => addEnvio = snap.val().Mensaje);
    document.oncontextmenu = function(){return false}
    Comenzar = a =>{
    dbRef.on('value', snap => addFotos = snap.val().LinkDeFotos);
//solucitar informacion necesaria para enviar un mensaje    
    document.getElementById("enviar").addEventListener("click", function(){
        Mensaje =  document.getElementById("EnviarMensaje").value;
        Envio(Estatus, Mensaje)
        document.getElementById("EnviarMensaje").value = "";
    })
//Salir de la cuenta
    document.getElementById("Salir").addEventListener("click", function(){
        localStorage.setItem("Login", "");
        location.reload();
    })
//Agregar Usuario
    document.getElementById("AgregarUsuario").addEventListener("click", function(){
        Estatus = prompt("Nombre al usuario que quieres escribirle");
        Seguridad = Seguridad.split(Estatus+":")
        if((Estatus !== "")&&(Estatus !== " ")&&(Seguridad[1] !== undefined)){
        Envio(Estatus, "Nuevo conctacto "+NameUser+"");
        }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ups. Ese usuario no existe'
            })        
        }
    })

//enviar el mensaje
    Envio = (X, Y) => {
        Hora =  new Date;
        Hora = ""+Hora.getDay()+":"+Hora.getHours()+":"+Hora.getMinutes()+"";
        if ((addEnvio !== undefined)&&(X !== null)&&(Y !== "")&&(Y !== " ")){
            var Envio ={
                    Mensaje: addEnvio+"["+X+":"+Y+"*%&^"+Hora+"(%$(&^"+NameUser+""+"]",
            }
            dbRef.update(Envio)
        }else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ups. Sucedio un error de conexicion, Espera un tiempo'
            })
        }
    }

//resivir el mensaje
Echo = a =>{
    document.getElementById("MensajesLlegados").innerHTML ="";
    document.getElementById("NombreDelUsuario").innerHTML = Estatus;
    if(Estatus == ""){
    document.getElementsByClassName("ParteDeEnvio").item(0).style = "visibility: hidden;"
    }else {
    document.getElementsByClassName("ParteDeEnvio").item(0).style = "visibility: visible;"
    }
    for(i=1;i<10000;i++){
        a1 = addEnvio.split("[");
            a1 = a1[i].split("]");
            a2 = a1[0].split("(%$(&^");
            a3 = a2[0].split("*%&^");
            a4 = a3[0].split(":");
            a5 = a3[0].split(a4[0]+":");
            console.clear();
            console.warn("Messenger Priv - 2020. V1.3");
        if(a2[1] == NameUser){
        Notificaciones(a4[0], a5[1], 0);
        }else {    }
            if(addEnvio !== undefined){
                SeparadorDeMensajes = addEnvio.split("[");
                if(SeparadorDeMensajes[i] !== undefined){
                    //tomamos toda la informacion necesaria
                    SeparadorDeMensajes = SeparadorDeMensajes[i].split("]");
                    SeparadorDeMensajes = SeparadorDeMensajes[0].split(NameUser+":");
                    SeparadorDeMensajesMios = SeparadorDeMensajes[0].split(Estatus+":");
                    IdentificadorPorNombre = SeparadorDeMensajes[0].split(":");
                    //preguntas para mostrar los mensajes del usuario de la cuenta
                    if(SeparadorDeMensajesMios[1] !== undefined){
                        SeparadorDeMensajesMios = SeparadorDeMensajesMios[1].split("(%$(&^");
                        if(SeparadorDeMensajesMios[1] == NameUser){
                            SeparadorDeMensajesMios = SeparadorDeMensajesMios[0].split("*%&^");
                            PreguntarSiEsUnArchivo = SeparadorDeMensajesMios[0].split("*#&$^^");
                            Hours = SeparadorDeMensajesMios[1].split("*%&^");
                            Hours = Hours[0].split("(%$(&^");
                            if(PreguntarSiEsUnArchivo[1]==undefined){
    EnviarDatos = '['+Estatus+':'+SeparadorDeMensajesMios[0]+'*%&^'+SeparadorDeMensajesMios[1]+'(%$(&^'+NameUser+']';
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario1' onmousedown='EliminarMensaje();"+"informacion="+"`"+(EnviarDatos)+"`"+"'>"+"&nbsp;&nbsp;&nbsp;<font id='trans'></font>&nbsp;<font class='Hora'>"+SeparadorDeMensajesMios[1]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                document.getElementById("trans").innerText = ""+SeparadorDeMensajesMios[0]+"";
                                document.getElementById("trans").id='MD';
                            }else if(PreguntarSiEsUnArchivo[1]!==undefined){
                                LinkDeArchivoDeEnvio = SeparadorDeMensajesMios[0].split("*#&$^^");
                                SaberQueTipoDeArchivoEs1 = LinkDeArchivoDeEnvio[1].split(".png");
                                SaberQueTipoDeArchivoEsJpg1 = LinkDeArchivoDeEnvio[1].split(".jpg");
                                SaberQueTipoDeArchivoEsMp4 = LinkDeArchivoDeEnvio[1].split(".mp4");
                                if((SaberQueTipoDeArchivoEs1[1]!==undefined)||(SaberQueTipoDeArchivoEsJpg1[1]!==undefined)){
    EnviarDatos = '['+Estatus+':*#&$^^'+LinkDeArchivoDeEnvio[1]+'*%&^'+SeparadorDeMensajesMios[1]+'(%$(&^'+NameUser+']';
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario1IMG' onmousedown='EliminarMensaje();"+"informacion="+"`"+(EnviarDatos)+"`"+"'><br>&nbsp;&nbsp;&nbsp;<a href='"+LinkDeArchivoDeEnvio[1]+"' target='_blank'><IMG src='"+LinkDeArchivoDeEnvio[1]+"' class='ImagenesEnviadas'></IMG></a><br>&nbsp;&nbsp;&nbsp;&nbsp;<font class='Hora'>"+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                }else if(SaberQueTipoDeArchivoEsMp4[1]!==undefined){
    EnviarDatos = '['+Estatus+':*#&$^^'+LinkDeArchivoDeEnvio[1]+'*%&^'+SeparadorDeMensajesMios[1]+'(%$(&^'+NameUser+']';
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario1IMG' dblclick='EliminarMensaje();"+"informacion="+"`"+(EnviarDatos)+"`"+"'><br>&nbsp;&nbsp;&nbsp;<video src='"+LinkDeArchivoDeEnvio[1]+"' class='ImagenesEnviadas' controls></video><br>&nbsp;&nbsp;&nbsp;&nbsp;<font class='Hora'>"+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                }else {
    EnviarDatos = '['+Estatus+':*#&$^^'+LinkDeArchivoDeEnvio[1]+'*%&^'+SeparadorDeMensajesMios[1]+'(%$(&^'+NameUser+']';
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario1' onmousedown='EliminarMensaje();"+"informacion="+"`"+(EnviarDatos)+"`"+"'>&nbsp;&nbsp;&nbsp;<a href='"+LinkDeArchivoDeEnvio[1]+"' target='_blank'><button>Archivo</button></a>&nbsp;<font class='Hora'>"+SeparadorDeMensajesMios[1]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>"
                            }
                        setTimeout(function(){
                                document.getElementById("MensajesLlegados").scroll(0, 10000000000000);
                        }, 1000)
                        }
                        }else {
                            continue;
                        }
                    }else{
                    
                    }
                    //preguntas para mostrar los mensaje de la persona del otro lado
                    if(SeparadorDeMensajes[1] !== undefined){
                        SeparadorDeMensajes = SeparadorDeMensajes[1].split("*%&^");
                        Hours = SeparadorDeMensajes[1].split("*%&^");
                        Hours = Hours[0].split("(%$(&^");
                        Notificaciones(Hours[1], SeparadorDeMensajes[0], 1);
                        ////Notificaciones(Hours[1], SeparadorDeMensajes[0], 1);
                        if(Estatus == Hours[1]){
                            PreguntarSiEsUnArchivo2 = SeparadorDeMensajes[0].split("*#&$^^");
                            if(PreguntarSiEsUnArchivo2[1]==undefined){
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario2'>"+"&nbsp;&nbsp;&nbsp;<font id=Form1></font>&nbsp;<font class='Hora'> "+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                document.getElementById("Form1").innerText = SeparadorDeMensajes[0];
                                document.getElementById("Form1").id = "Form2";
                            }else if(PreguntarSiEsUnArchivo2[1]!==undefined){
                                LinkDeArchivoDeEnvio1 = SeparadorDeMensajes[0].split("*#&$^^");
                                SaberQueTipoDeArchivoEs = LinkDeArchivoDeEnvio1[1].split(".png");
                                SaberQueTipoDeArchivoEsJpg = LinkDeArchivoDeEnvio1[1].split(".jpg");
                                    SaberQueTipoDeArchivoEsMp41 = LinkDeArchivoDeEnvio1[1].split(".mp4");
                                if((SaberQueTipoDeArchivoEs[1]!==undefined)||(SaberQueTipoDeArchivoEsJpg[1]!==undefined)){
                                    document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario2IMG'><br>&nbsp;&nbsp;&nbsp;<a href='"+LinkDeArchivoDeEnvio1[1]+"' target='_blank'><IMG src='"+LinkDeArchivoDeEnvio1[1]+"' class='ImagenesEnviadas'></IMG></a><br>&nbsp;&nbsp;&nbsp;&nbsp;<font class='Hora'>"+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                }else if(SaberQueTipoDeArchivoEsMp41[1]!==undefined){
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario2IMG'><br>&nbsp;&nbsp;&nbsp;<video src='"+LinkDeArchivoDeEnvio1[1]+"' class='ImagenesEnviadas' controls></video><br>&nbsp;&nbsp;&nbsp;&nbsp;<font class='Hora'>"+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                }else{
                                    document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario2'>"+"&nbsp;&nbsp;&nbsp;<a href='"+LinkDeArchivoDeEnvio1[1]+"' target='_blank'><button>Archivo</button></a>&nbsp;<font class='Hora'>"+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                }
                            }
                        setTimeout(function(){
                            document.getElementById("MensajesLlegados").scroll(0, 10000000000000);
                        }, 1000)
                        }else {
                        
                        }
                    }else {
                    continue;
                    }
                }else {

                }
            }else{
                i=1;
            }
    }
}
//Notificar
Notificaciones = (x,y,z) =>{
        Preg1 = y.split("*#&$^^");
    if(z == 0){
        z = "Enviaste: ";
    }else if(z == 1){
        z = "Te envio: ";
    }else{
        console.log("Error 005")
    }
    if(x !== "null"){
        if (document.getElementById(x) !== null){
                    if (Preg1[1] == undefined){
                        document.getElementById(x+"Mensaje").innerHTML = z+""+y+"";
                        ObtenerFotoDePerfil = document.getElementById(x).innerHTML
                        ObtenerFotoDePerfil = ObtenerFotoDePerfil.split('src="');
                        ObtenerFotoDePerfil = ObtenerFotoDePerfil[1].split('"');
                        document.getElementById("MensajesNuevos").innerHTML =  "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"')><IMG class='fotos' src='"+ObtenerFotoDePerfil[0]+"'></IMG><IMG src='more-vertical.svg' width='30' style='position: fixed;left: 90%;'></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+""+y+"</font></center></div>"
                    }else if (Preg1[1] !== undefined){
                        document.getElementById(x+"Mensaje").innerHTML = ""+z+" Un archivo";
               }
        }else{
            Imagenes = addFotos.split(x+":");
                if(Imagenes[1] !== undefined){
                    Imagenes = Imagenes[1].split("||");
                    colocarIMG = LaImagenEs(x)
                    if(colocarIMG.split("||")[1] !== undefined){
                        colocarIMG = colocarIMG.split("||");
                        colocarIMG = colocarIMG[0];
                    }else {    }
                    if (Preg1[1] == undefined){
                        document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"')><table><tr><td style='width: 100%;'><IMG class='fotos' src='"+colocarIMG+"'><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+""+y+"</font></center></td><td style='display: block;'></IMG><IMG src='more-vertical.svg' width='30' class='more' onclick=SeguroQueQuieresEliminarElChat('"+(x)+"')></IMG></td></tr></table></div><hr>"+document.getElementById("Contactos").innerHTML;
                    }else if (Preg1[1] == undefined){
                        document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"') ><table><tr><td style='width: 100%;'><IMG class='fotos' src='"+colocarIMG+"'></IMG><IMG src='more-vertical.svg' width='30' class='more' onclick=SeguroQueQuieresEliminarElChat('"+(x)+"')></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+" Un archivo</font></center></td><td style='display: block;'></IMG><IMG src='more-vertical.svg' width='30' class='more' onclick=SeguroQueQuieresEliminarElChat('"+(x)+"')></IMG></td></tr></table></div><hr>"+document.getElementById("Contactos").innerHTML;
                    }
                }else{
                    if (Preg1[1] == undefined){
                        document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"') ><table><tr><td style='width: 100%;'><IMG class='fotos' src='ContactoSinFotoDePerfil.png'></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+""+y+"</font></center></td><td style='display: block;'></IMG><IMG src='more-vertical.svg' width='30' class='more' onclick=SeguroQueQuieresEliminarElChat('"+(x)+"')></IMG></td></tr></table></div><hr>"+document.getElementById("Contactos").innerHTML;
                    }else if (Preg1[1] == undefined){
                        document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"')><table><tr><td style='width: 100%;'><IMG class='fotos' src='"+colocarIMG+"'></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+"Un archivo</font></center></td><td style='display: block;'></IMG><IMG src='more-vertical.svg' width='30' class='more' onclick=SeguroQueQuieresEliminarElChat('"+(x)+"')></IMG></td></tr></table></div><hr>"+document.getElementById("Contactos").innerHTML;
                    }
            }
        }
    }else {
        
    }
}
SeguroQueQuieresEliminarElChat = a =>{
    document.getElementById("EliminarSiONoChat").style="visibility: visible;";
    document.getElementById("EliminarAceptar1").addEventListener("click", function(){
        //for(i=0;1<1000;i++){
          while(addEnvio.split("["+a)[0] !== undefined){
            EliminarChat(a);
          }
        //}
    })
    document.getElementById("EliminarRechazar1").addEventListener("click",function (){
        document.getElementById("EliminarSiONoChat").style="visibility: hidden;";
    })
}
EliminarChat = a =>{
    for(ia=1;ia<100;ia++){
        //a = nombre del usuario que le llego el mensaje
        if(addEnvio.split("["+a)[ia] !== undefined){
        BorrarMensajes = addEnvio.split("["+a);
        array = "["+a+BorrarMensajes[ia].split("]")[0]+"]";
        SepararParaEleminar = addEnvio.split(array);
                var EliminarChat ={
                    Mensaje:SepararParaEleminar[0] + SepararParaEleminar[1]
                }
            dbRef.update(EliminarChat)
        }
        if(addEnvio.split("["+NameUser+":") !== undefined){
        BorrarMensajes1 = addEnvio.split("["+NameUser+":");
        array1 = "["+NameUser+":"+BorrarMensajes1[ia].split("(%$(&^"+Estatus+"]")[0]+"(%$(&^"+Estatus+"]";
        SepararParaEleminar1 = addEnvio.split(array1);
                var EliminarChat1 ={
                    Mensaje: SepararParaEleminar1[0] + SepararParaEleminar1[1]
                }
            dbRef.update(EliminarChat1)
        }
        if((addEnvio.split("["+NameUser+":") !== undefined)&&(addEnvio.split("["+a)[ia])){
            document.getElementById("EliminarSiONoChat").style="visibility: hidden;";
            break
        }
        //EliminarChatEnvio(SepararParaEleminar[0], SepararParaEleminar[1]);
            continue
    }
}
EliminarChatEnvio = (a,b) =>{
    if(b[1]!==undefined){
        var EliminarChat ={
            Mensaje:a + b 
        }
    }else{
        var EliminarChat ={
            Mensaje: a
        }
    }
    dbRef.update(EliminarChat)
}

LaImagenEs = a =>{
    Respuesta = addFotos.split("||"+a+":");
    for(xF=1;xF<1000000;xF++){
        if(Respuesta[xF] !== undefined){
            continue;
        }else{
            return Respuesta[xF-1];
        }
    }
////return Respuesta[];
}
Actualizar = a =>{
            Ir = document.getElementById(a).id;
            Estatus = ""+Ir+"";
            Echo();  
}
//Mandar a actualizar
setInterval(function (){
        if((addEnvio !== undefined)&&(PantallaDeCargaInclementada === "true")){
            PantallaDeCarga();
        }else {    }
        if(addEnvio !== ActualizarReg){
            ActualizarReg = addEnvio;
            Echo();
            console.log("Actualizado...")
        }else {
        
        }
}, 1000)
//Configuracion de Usuario
    document.getElementById("Perfil").addEventListener("click", function(){
        if(AbrirCerrar == 0){
        document.getElementById("InformacionDelPerfil").style = "visibility: visible;"
        document.getElementById("Preferencia").style = "visibility: visible;position: relative;"
        document.getElementById("MetodoURL").style = "visibility: hidden;"
        AbrirCerrar = 1;
        }else if(AbrirCerrar == 1){
        document.getElementById("Preferencia").style = "visibility: hidden;"
        document.getElementById("InformacionDelPerfil").style = "visibility: hidden;"
        document.getElementById("MetodoSubida").style = "visibility: hidden;"
        document.getElementById("MetodoURL").style = "visibility: hidden;"
        AbrirCerrar = 0;
        }else{
        
        }
    })
    document.getElementById("FotoDePerfilListo").addEventListener("click", function(){
        Link = document.getElementById("FotoDePerfil").value;
        if(Link.split("http")[1] !== undefined){
            document.getElementById("InformacionDelPerfil").style = "visibility: hidden;"
            document.getElementById("MetodoURL").style = "visibility: hidden;"
            ActualizarFotoDePerfil(Link);
        }else {
            Swal.fire({
              icon: 'error',
              title: 'Ups...',
              text: 'Lo ciento no pusistes un link'
            })
        }
    })

//apartado para eleguir subir foto o usar URL tambien conocido como link
document.getElementById("URL").addEventListener("click", function(){
    document.getElementById("MetodoURL").style = "visibility: visible;"
    document.getElementById("Preferencia").style = "visibility: hidden;position: absolute;"
    document.getElementById("MetodoSubida").style = "visibility: hidden;"
})
document.getElementById("SUBIDA").addEventListener("click", function(){
    document.getElementById("MetodoURL").style = "visibility: hidden;"
    document.getElementById("Preferencia").style = "visibility: hidden;position: absolute;"
    document.getElementById("MetodoSubida").style = "visibility: visible;"
})


ActualizarFotoDePerfil = L =>{
    var FotosDePerfil ={
        LinkDeFotos: addFotos+"||"+NameUser+":"+L
    }
    dbRef.update(FotosDePerfil);
}

document.getElementById("enviarArchivo").addEventListener("click", function() {
    if(AbrirCerrar1 == 0){
        document.getElementById("EnvioDeArchivo").style = "visibility: visible;";
        AbrirCerrar1 = 1;
    }else if(AbrirCerrar1 = 1){
        document.getElementById("EnvioDeArchivo").style = "visibility: hidden;";
        AbrirCerrar1 = 0;
    }else {
        console.log("Error 004");
    }
})
        
///////////////////////////////////Subir foto De perfil

      // Obtener Elementos
      var uploader = document.getElementById('uploader');
      var fileButton = document.getElementById('fileButton');
      var Dowloand;
      // Vigilar selección archivo
      fileButton.addEventListener('change', function(e) {
        //Obtener archivo
        var file = e.target.files[0];

        // Crear un storage ref
        var storageRef = firebase.storage().ref('Archivos/' + file.name);


        // Subir archivo
        var task = storageRef.put(file);

        // Actualizar barra progreso
        task.on('state_changed',

          function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
            Dowloand = task.snapshot.downloadURL;

          },

          function error(err) {

          },


          function complete() {
            Swal.fire({
              icon: 'success',
              title: 'Hey',
              text: 'Archivo Enviado con Exito!!'
            })            
            ActualizarFotoDePerfil(Dowloand);
            uploader.value = 0;
          }
          )
      });

///////////////////////////////EnvioDeArchivo

      // Obtener Elementos
      var uploader1 = document.getElementById('uploaderEnvio1');
      var fileButton1 = document.getElementById('fileButtonEnvio1');
      var Dowloand;
      // Vigilar selección archivo
      fileButton1.addEventListener('change', function(e) {
        //Obtener archivo
        var file = e.target.files[0];

        // Crear un storage ref
        var storageRef = firebase.storage().ref('Archivos/' + file.name);


        // Subir archivo
        var task = storageRef.put(file);

        // Actualizar barra progreso
        task.on('state_changed',

          function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader1.value = percentage;
            Dowloand = task.snapshot.downloadURL;

          },

          function error(err) {

          },


          function complete() {
            document.getElementById("EnvioDeArchivo").style = "visibility: hidden;";
            Swal.fire({
              icon: 'success',
              title: 'Hey',
              text: 'Archivo Enviado con Exito!!'
            })
            Envio(Estatus, "*#&$^^"+Dowloand);
            uploader1.value = 0;
          }
          )
      });
    }
    if (NameUser == ""){
        HoraDeInicioDeSeccion =  new Date;
        HoraDeInicioDeSeccion1 =  new Date;
        HoraDeInicioDeSeccion = HoraDeInicioDeSeccion.getDay()+"-"+(parseFloat(HoraDeInicioDeSeccion.getDay())+1)+"-"+(parseFloat(HoraDeInicioDeSeccion.getDay())+2)+":"+HoraDeInicioDeSeccion.getMonth();
        document.getElementById("Confirmar").addEventListener("click", function (){
            Usuario = document.getElementById("User").value;
            Contra = document.getElementById("Password").value;
            Verificador(Usuario, Contra);
        })
        if(localStorage.getItem("Login") !== null){
            Intervalo = localStorage.getItem("Login");
            if(localStorage.getItem("Login") !== ""){
                Intervalo = localStorage.getItem("Login").split("||");
                PrimerDato = Intervalo[0].split(":")[0];
                SegundoDato = Intervalo[0].split(":")[1];
                SegundoDato = SegundoDato.split("-");
            }else {
                document.getElementById("Cargando").style = "visibility: hidden;";
            }
            }else{    }
        if(localStorage.getItem("Login") !== null){
            if((parseFloat(PrimerDato)+3 <= parseFloat(HoraDeInicioDeSeccion1.getDay())+3)&&(SegundoDato[0] == HoraDeInicioDeSeccion1.getMonth())||(SegundoDato[1] == HoraDeInicioDeSeccion1.getMonth())||(SegundoDato[2] == HoraDeInicioDeSeccion1.getMonth())){
                    Nombre = localStorage.getItem("Login").split("||");
                    NameUser = Nombre[1];
                    Comenzar();
                    document.getElementById("Segundario").style="visibility: hidden;"        
            }else{localStorage.setItem("Login", "");}
        }else {    }
    }
        function Verificador(a,b){
            UsuarioSPLIT = Seguridad.split(a+":");
            UsuarioSPLIT1 = UsuarioSPLIT[1].split("||")
            if(UsuarioSPLIT1[0] == b){
                NameUser = a;
                Comenzar();
                document.getElementById("Segundario").style="visibility: hidden;"
                localStorage.setItem("Login", HoraDeInicioDeSeccion+"||"+a);
                document.getElementById("Cargando").style = "visibility: visible;";
            }
        }

function EliminarMensaje(){
    document.getElementById("EliminarSiONo").style = "visibility: visible;";
}
document.getElementById("EliminarAceptar").addEventListener("click", function(){
    document.getElementById("EliminarSiONo").style = "visibility: hidden;";
    Separar = addEnvio.split(informacion);
    var enviar ={
        Mensaje: Separar[0]+Separar[1]
    }
    dbRef.update(enviar)
})
document.getElementById("EliminarRechazar").addEventListener("click", function(){
    document.getElementById("EliminarSiONo").style = "visibility: hidden;";
})

//identificar dispositivo
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/bot|crawler|spider|crawling/i.test(userAgent)) {
	// do nothing
}

// Windows Phone
else if (/windows phone/i.test(userAgent)) {
	//window.location.replace("/mobile");
    alert("No hay soporte para dispositivos moviles, por los momentos");
}

// Android
else if (/android/i.test(userAgent)) {
	//window.location.replace("/mobile");
    alert("No hay soporte para dispositivos moviles, por los momentos");
}

// iOS
else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
	//window.location.replace("/mobile");
    alert("No hay soporte para dispositivos moviles, por los momentos");
}

function PantallaDeCarga(){
////Cargando
        setTimeout(function (){
            document.getElementById("CargandoPonerLogo").style = "transform: rotateX(45deg);";
            document.getElementById("Name").innerHTML = "<font>Bienvenido nuevamente </font><br><b><font>"+NameUser+"</font></b>";
            setTimeout(function (){
                document.getElementById("CargandoPonerLogo").style = "transform: rotateY(45deg);";
                    setTimeout(function (){
                        document.getElementById("CargandoPonerLogo").style = "transform: rotateZ(45deg);";
                        document.getElementById("Cargando").style = "background: rgb(255,255,255, 0);";
                        setTimeout(function (){
                            PantallaDeCargaInclementada = "false";
                            document.getElementsByClassName("Contenedor").item(0).style="visibility: visible;position: fixed;";
                            setTimeout(function (){
                                document.getElementById("Cargando").style = "visibility: hidden;";
                            },1000)
                        }, 1000)
                    }, 1000)
            }, 1000)
        }, 1000)
}
