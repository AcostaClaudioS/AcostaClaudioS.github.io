//varialbes 
    //Datos presentante 
const const_foto = document.querySelector('#imagen_perfil');
const const_nombre = document.querySelector('#nombre');
    //Datos Contacto
const const_telefono = document.querySelector('#telefono');
const const_correo = document.querySelector('#correo');
    //Datos Perfil
const const_genero = document.querySelector('#genero');
const const_edad = document.querySelector('#edad');
const const_nacionalidad = document.querySelector('#nacionalidad');
const const_provincia = document.querySelector('#provincia');
const const_localidad = document.querySelector('#localidad');
   //ul_desplegables
const ul_cursos = document.getElementById('ul_cursos');
const ul_habiliades = document.getElementById('ul_habiliades');
 
//Funciones
const generarUsuario = async() => {
    try{
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
    
        const {results} = await respuesta.json();
        const datos = results[0]; 

        const_foto.src = datos.picture.large;
        const_nombre.textContent = datos.name.first + " " + datos.name.last;
        
        const_telefono.textContent = " " + datos.cell;
        const_correo.textContent = datos.email;

        if (datos.gender == "female") {
            const_genero.textContent = " " + "Femenino";
        }else{
            const_genero.textContent = " " + "Masculino";
        }

        const_edad.textContent = " "+ datos.dob.age;
        const_nacionalidad.textContent = " " + datos.location.country;
        const_provincia.textContent = " " + datos.location.state;
        const_localidad.textContent = " " + datos.location.city;

    }catch(error){
        console.log(error);
    }
}

generarUsuario();

//Comportamiento botones

document.getElementById('boton1').onclick = function() {
    if (boton1.style.transform != 'rotate(90deg)') {
        boton1.style.transform = 'rotate(90deg)';
        
        ul_cursos.style.height = '2.5cm';
        ul_cursos.style.width = '8.6cm';
        ul_cursos.style.overflow = 'visible';
        ul_cursos.style.opacity = '100%';
        ul_cursos.style.background = 'white';
        ul_cursos.style.transition = '0.3s'; 

    }else{
        boton1.style.transform = 'rotate(0deg)';
        
        ul_cursos.style.height = '0cm';
        ul_cursos.style.overflow = 'hidden';
        ul_cursos.style.opacity = '0%';
        ul_cursos.style.background = 'white'; 
        ul_cursos.style.transition = '0.3s';
        
    }
} 

document.getElementById('boton2').onclick = function() {
    if (boton2.style.transform != 'rotate(90deg)') {
        boton2.style.transform = 'rotate(90deg)';
        
        ul_habiliades.style.height = '3cm';
        ul_habiliades.style.width = '12cm';
        ul_habiliades.style.overflow = 'visible';
        ul_habiliades.style.opacity = '100%';
        ul_habiliades.style.transition = '0.3s';
        

    }else{
        boton2.style.transform = 'rotate(0deg)';
        
        ul_habiliades.style.height = '0cm';
        ul_habiliades.style.overflow = 'hidden';
        ul_habiliades.style.opacity = '0%';
        ul_habiliades.style.transition = '0.3s'; 
    }
} 