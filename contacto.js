// ========== SCRIPT PARA FORMULARIO DE CONTACTO CON EMAILJS ==========
(function() {
    // Inicializa EmailJS con tu Public Key
    emailjs.init({
      publicKey: "_biwFmjEkoHHoViEi",
    });
})();

window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Muestra un mensaje de "Enviando..."
        formMessage.innerHTML = '<p class="text-blue-600">Enviando mensaje...</p>';

        // Estos IDs deben coincidir con tu cuenta de EmailJS
        const serviceID = 'service_3virsha';
        const templateID = 'template_2i8f47c';

        // Usa la función sendForm para enviar los datos del formulario
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // Éxito en el envío
                formMessage.innerHTML = '<p class="text-green-500 font-bold">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto. ✅</p>';
                contactForm.reset();
            }, (err) => {
                // Error en el envío
                formMessage.innerHTML = `<p class="text-red-500 font-bold">Error al enviar el mensaje. Por favor, inténtalo de nuevo. ❌</p>`;
                console.error('Error de EmailJS:', JSON.stringify(err));
            });
    });
}
// ========== FIN SCRIPT PARA FORMULARIO DE CONTACTO CON EMAILJS ==========