document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded: El DOM está listo.");
  document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    //validar el nombre para que no este vacio y no tenga espacios en blanco
    const inputName = document.getElementById("name").value;
    const errorName = document.getElementById("nameError");
    console.log(inputName);
    if (inputName.trim() === "") {
      errorName.textContent = "Ingrese su nombre";
      errorName.classList.add("error-message");
    } else {
      errorName.textContent = "";
      errorName.classList.remove();
    }
    //validar el mail con un patron especifico
    const inputMail = document.getElementById("email").value;
    const errorMail = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const res = emailPattern.test(inputMail); // testea que el mail ingresad coincida con el patron
    console.log(res); //true
    if (!res) {
      errorMail.textContent = "Ingrese un correo valido";
      errorMail.classList.add("error-message");
    } else {
      errorMail.textContent = "";
      errorMail.classList.remove("error-message");
    }

    //validar contraseña se mayor que 8
    const pass = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    const resPass = passPattern.test(pass);
    if (!resPass) {
      passwordError.textContent =
        "La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales";
      passwordError.classList.add("error-message");
    } else {
      passwordError.textContent = "";
      passwordError.classList.remove("error-message");
    }
    //si todos lo campos estan llenos y cumpliendo con la condicion se va a mostrar un alert
    //la condicion se cumple cuando todos los campos que notificaban el AVISO DE ERROR estan vacios

    if (
      !errorName.textContent &&
      !errorMail.textContent &&
      !passwordError.textContent
    ) {
      alert("El formulario se ha enviado con exito");
      document.getElementById("formulario").reset();
    }
  });
});
