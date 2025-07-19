
  document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault(); // ✔️ Evita el envío tradicional

    const form = e.target;

    // ✅ Validación manual de campos requeridos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
      alert("Por favor completa todos los campos antes de enviar.");
      return;
    }

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        const mensajeDiv = document.getElementById("mensajeEnviado");
        mensajeDiv.style.display = "block";
        mensajeDiv.style.opacity = "1";

        setTimeout(() => {
          mensajeDiv.style.opacity = "0";
        }, 4000);
      } else {
        alert("Hubo un problema al enviar el mensaje.");
      }
    })
    .catch(error => alert("Error al enviar el mensaje."));
  });


