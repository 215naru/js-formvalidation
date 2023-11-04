document.getElementById('contrasena').addEventListener('input',verifyPassword);
document.getElementById('confirmacion').addEventListener('input',confirmPassword);

function verifyPassword(){
    let pw = document.getElementById("contrasena");
    let pwc = document.getElementById("confirmacion");
    let btn = document.querySelector("button[type='submit']");
    let pwMsg = document.getElementById("pw-msj");
    pwMsg.classList.remove("red","green");
    if(pw.value.length < 8){
        pwMsg.innerHTML = 
        "*La contrasena debe tener al menos 8 caracteres";
        pw.focus();
        pwMsg.classList.add("red");
        btn.disabled =true;
        pwc.disabled =true;
    }else{
        pwMsg.innerHTML = "La constrasena es segura"
        pwMsg.classList.add("green")
        btn.disabled=false;
        pwc.disabled=false;
    }
}

function confirmPassword(){
    let pw = document.getElementById("contrasena").value;
    let pw_c = document.getElementById("confirmacion");
    let btn = document.querySelector("button[type='submit']");
    let pwcMsg = document.getElementById("pwc-msj");
    pwcMsg.classList.remove("red","green");

    if(pw === pw_c.value){
        pwcMsg.innerHTML = 
        "Correcto! Las dos contrasenas coinciden";
        pwcMsg.classList.add("green");
        btn.disabled = false;
    }else{
        pwcMsg.innerHTML =
        "*Su constrasena no coincide.Intente de nuevo";
        pw_c.focus();
        pwcMsg.classList.add("red");
        btn.disabled =true;
    }
}

function sendRegister(){
    let nombre = document.getElementById("nombre");
    alert("Gracias! "+nombre.value+" tu registro fue exitoso")
}

document.querySelector("form").addEventListener('submit', function(event){
    event.preventDefault();
    sendRegister();
})