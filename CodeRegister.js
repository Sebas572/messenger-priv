    var config = {
      apiKey: "AIzaSyB50DbfRdQ3Jw9XKuShlyXMbiiGLTkoRZA",
      authDomain: "mensajeria-3b8b4.firebaseapp.com",
      databaseURL: "https://mensajeria-3b8b4-default-rtdb.firebaseio.com/",
      storageBucket: "mensajeria-3b8b4.appspot.com",
      messagingSenderId: "G-2QFL6Z2FL0"
    };

    firebase.initializeApp(config);
var dbRef = firebase.database().ref().child("Informacion");
let User;
let Password;
let coincideCon;
let addEnvio;
let i = 0;
let Permitir;
("Information")
//solucitud de registro
    dbRef.on('value', snap => addEnvio = snap.val().Information);

document.getElementById("SolucitudDeRegistro").addEventListener("click", function (){
    EnvioDeRegistro()
})

//dectectar si hay un usuario llamado igual
EnvioDeRegistro = a =>{
User = document.getElementById("User").value;
Password = document.getElementById("Password").value;
coincideCon = addEnvio.split(":");
    for(i=0; i<=100; i++){
        if (coincideCon[i] == User){
            Permitir = User;
            Envio();
        }
    }
}
//registrarlo
    Envio = a =>{
        if ((User !== "")&&(User !== " ")&&(User !== Permitir)&&(addEnvio !== undefined)){
                var enviarRegistro ={
                    Information: addEnvio+""+User+":"+Password+"||"
                }
                dbRef.update(enviarRegistro);
        }else {
            alert("Ups. El usuario ya existente registrado...");
        }
    }
///////////////////////////////////////////

function SoloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

especiales = [8,13];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Solo se permite letras'
    })
 return false;
}
}