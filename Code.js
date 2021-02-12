    var config = {
      apiKey: "AIzaSyB50DbfRdQ3Jw9XKuShlyXMbiiGLTkoRZA",
      authDomain: "mensajeria-3b8b4.firebaseapp.com",
      databaseURL: "https://mensajeria-3b8b4-default-rtdb.firebaseio.com/",
      storageBucket: "mensajeria-3b8b4.appspot.com",
      messagingSenderId: "G-2QFL6Z2FL0"
    };
    firebase.initializeApp(config);
    let Saber;let array;let Recivido;let i = 1;let addEnvio;let NameUser = "";let ActualizarReg;let Hours;/*dato curioso sabemos quien mando el mensaje con Hours[1]*/let Estatus = "";let Actualizar;let addFotos;let AbrirCerrar = 0;let AbrirCerrar1 = 0;let xF = 0;
    var dbRef = firebase.database().ref().child("Informacion");
    dbRef.on('value', snap => Seguridad = snap.val().Information);
    Comenzar = a =>{
    dbRef.on('value', snap => addEnvio = snap.val().Mensaje);
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
        if (addEnvio !== undefined){
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
    for(i=1;i<100;i++){
        a1 = addEnvio.split("[");
        a1 = a1[i].split("]");
        a2 = a1[0].split("(%$(&^");
        a3 = a2[0].split("*%&^");
        a4 = a3[0].split(":");
        a5 = a3[0].split(a4[0]+":");
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
                            if(PreguntarSiEsUnArchivo[1]==undefined){
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario1'>"+"&nbsp;&nbsp;&nbsp;<font id='trans'></font>&nbsp;<font class='Hora'>"+SeparadorDeMensajesMios[1]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                document.getElementById("trans").innerText = ""+SeparadorDeMensajesMios[0]+"";

                                document.getElementById("trans").id='MD';
                            }else if(PreguntarSiEsUnArchivo[1]!==undefined){
                                LinkDeArchivoDeEnvio = SeparadorDeMensajesMios[0].split("*#&$^^");
                                SaberQueTipoDeArchivoEs1 = LinkDeArchivoDeEnvio[1].split(".png");
                                SaberQueTipoDeArchivoEsJpg1 = LinkDeArchivoDeEnvio[1].split(".jpg");
                                if((SaberQueTipoDeArchivoEs1[1]!==undefined)||(SaberQueTipoDeArchivoEsJpg1[1]!==undefined)){
                                document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario1IMG'><br>&nbsp;&nbsp;&nbsp;<a href='"+LinkDeArchivoDeEnvio[1]+"' target='_blank'><IMG src='"+LinkDeArchivoDeEnvio[1]+"' class='ImagenesEnviadas'></IMG></a><br>&nbsp;&nbsp;&nbsp;&nbsp;<font class='Hora'>"+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
                                }else{
                               document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario1'>&nbsp;&nbsp;&nbsp;<a href='"+LinkDeArchivoDeEnvio[1]+"' target='_blank'><button>Archivo</button></a>&nbsp;<font class='Hora'>"+SeparadorDeMensajesMios[1]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>"
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
                                if((SaberQueTipoDeArchivoEs[1]!==undefined)||(SaberQueTipoDeArchivoEsJpg[1]!==undefined)){
                                    document.getElementById("MensajesLlegados").innerHTML += "<div class='Usuario2IMG'><br>&nbsp;&nbsp;&nbsp;<a href='"+LinkDeArchivoDeEnvio1[1]+"' target='_blank'><IMG src='"+LinkDeArchivoDeEnvio1[1]+"' class='ImagenesEnviadas'></IMG></a><br>&nbsp;&nbsp;&nbsp;&nbsp;<font class='Hora'>"+Hours[0]+"&nbsp;&nbsp;&nbsp;"+"</font></div><br>";
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
    if (document.getElementById(x) !== null){
                if (Preg1[1] == undefined){
                    document.getElementById(x+"Mensaje").innerHTML = z+""+y+"";
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
                    document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"')><IMG class='fotos' src='"+colocarIMG+"'></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+""+y+"</font></center></div><hr>"+document.getElementById("Contactos").innerHTML;
                }else if (Preg1[1] == undefined){
                    document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"')><IMG class='fotos' src='"+colocarIMG+"'></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+" Un archivo</font></center></div><hr>"+document.getElementById("Contactos").innerHTML;
                }
            }else{
                if (Preg1[1] == undefined){
                    document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"')><IMG class='fotos' src='ContactoSinFotoDePerfil.png'></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+""+y+"</font></center></div><hr>"+document.getElementById("Contactos").innerHTML;
                }else if (Preg1[1] == undefined){
                    document.getElementById("Contactos").innerHTML = "<div class='ContenedoresDeMensajes' id='"+x+"' onclick=Actualizar('"+(x)+"')><IMG class='fotos' src='"+colocarIMG+"'></IMG><center><font>"+x+"</font><br><font id='"+x+"Mensaje'>"+z+"Un archivo</font></center></div><hr>"+document.getElementById("Contactos").innerHTML;
                }
        }
    }
}
LaImagenEs = a =>{
    Respuesta = addFotos.split("||"+a+":");
    for(xF=1;xF<1000;xF++){
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
        if(addEnvio !== ActualizarReg){
            ActualizarReg = addEnvio;
            Echo();
            Push.create("Tienes un nuevo mensaje", {
                body: "Te acaba de llegar un mensaje",
                icon: 'send.svg',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });

            console.log("Actualizado...")
        }else {
        
        }
}, 1000)
//Configuracion de Usuario
    document.getElementById("Perfil").addEventListener("click", function(){
        if(AbrirCerrar == 0){
        document.getElementById("InformacionDelPerfil").style = "visibility: visible;"
        document.getElementById("Preferencia").style = "visibility: visible;position: relative;"
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
        document.getElementById("InformacionDelPerfil").style = "visibility: hidden;"
        ActualizarFotoDePerfil(Link);
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
//Bienvenida al usuario

document.getElementById("Name").innerHTML = "<font>Bienvenido nuevamente </font><br><font>"+NameUser+"</font>";

    setTimeout(function(){
document.getElementById("Name").style="visibility: hidden;position: absolute;"
    }, 1000)
    setTimeout(function(){
document.getElementById("Bienvenida").style="visibility: hidden;position: absolute;"
    }, 2000)
    setTimeout(function(){
    document.getElementsByClassName("Contenedor").item(0).style="visibility: visible;position: fixed;"
    document.getElementById("MensajesLlegados").innerHTML += "<IMG src='send.svg' class='Logo'></IMG>";
    }, 3000)

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
            alert("Archivo Enviado con Exito!!");
            ActualizarFotoDePerfil(Dowloand);
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
                SegundoDato = SegundoDato.split("-")
            }else {    }
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
            }
        }
function PruebaDeNotificaciones(){
Push.create("Tienes un nuevo mensaje", {
                body: "Te acaba de llegar un mensaje",
                icon: '/send.svg',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
}
