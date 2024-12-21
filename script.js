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
    const errorMail = document.getElementById("emailError");
    const inputMail = document.getElementById("email").value;
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
    //si todos lo campos cmplieron mostrar un alert
  });
});
