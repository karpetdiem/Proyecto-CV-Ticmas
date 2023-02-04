const btnIdiomas    = document.getElementById('botonIdiomas');
const barrasIdiomas = document.getElementById('barrasIdiomas');

const info  = document.getElementById('info');
const noche = document.getElementById('noche');
const dia   = document.getElementById('dia');

const btnMail = document.getElementById('mail');
const mail    = document.getElementById('mensajeMail');

const btnHabilidades = document.getElementById('botonHab'); 
const habilidades    = document.getElementById('habs');

const listenersMostrarDetalles = (btn, e)=> {
    btn.addEventListener('click', ()=> {
        e.style.display= "block";
        btn.style.display= "none";
    });
}

noche.addEventListener('click', () => {
    document.body.style.backgroundColor = '#000000';  
    info.style.backgroundColor = 'rgb(89, 89, 94)';  
    info.style.color = '#ffffff';  
 });
 
 dia.addEventListener('click', ()=> {
     document.body.style.backgroundColor = '#ffffff';   
     info.style.backgroundColor = 'rgb(238, 232, 232)';  
     info.style.color = '#000000';  
  });

listenersMostrarDetalles(btnIdiomas, barrasIdiomas); //llama a la funcion que muestra info apretando boton detalles
listenersMostrarDetalles(btnHabilidades, habilidades);

btnMail.addEventListener('click', ()=> {
    mail.style.display = 'inline'; 
    setTimeout( ()=> {
        mail.style.display = 'none'; 
    }, 2000);    
 });