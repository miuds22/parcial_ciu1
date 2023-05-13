var Primario = document.querySelector('.primario');
var Primarioposicion = Primario.getBoundingClientRect().top;

Primario.classList.add('aparecer');

window.addEventListener('scroll', function() {
    var secundario = document.querySelector('.secundario');
    var secundarioposicion = secundario.getBoundingClientRect().top;

    var alturaPantalla = window.innerHeight;

    if (secundarioposicion < alturaPantalla) {
        secundario.classList.add('aparecer');
      }
  });


//Efecto oscurecimiento
const header = document.querySelector('header');
const media = document.getElementById('media');

header.addEventListener('mouseover', function() {
  media.style.display = 'flex';
});

header.addEventListener('mouseout', function() {
  media.style.display = 'none';
});



//boton login
var btnLogin = document.getElementById("btnLogin");
var quejar = function(e){
    alert("eso no se toca che!!!!")
  };
 btnLogin.addEventListener("click", quejar);




var btnregistrar = document.getElementById("btnregistrar");

var validar = function(e){
    const nombre = document.getElementById("txtuser").value;
    const mail = document.getElementById("txtmail").value;
    const pass1 = document.getElementById("txtpass").value;
    const pass2 = document.getElementById("txtpassVal").value;
    if(nombre ==""){
        alert("el nombre no puede ser vacio");
    }
    else if(mail =="" || !mail.includes('@') )
    {
        alert("el mail debe tener el formato correcto!!");
    }else if(pass1 =="" || pass1 != pass2)
    {
        alert("Las contraseñas no coinciden");
    }else{
        alert("Se registro con exito!!")
        document.getElementById("txtpassVal").value = "";
        document.getElementById("txtpass").value="";
        document.getElementById("txtuser").value="";
        document.getElementById("txtmail").value="";

    }


  };

  btnregistrar.addEventListener("click", validar);
