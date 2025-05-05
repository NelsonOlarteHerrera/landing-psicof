(() => {
    'use strict';
  
    // === Validación del formulario de contacto ===
    const form = document.querySelector('#formContacto');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
          e.stopPropagation();
        } else {
          // Mostrar mensaje de éxito (tipo alerta Bootstrap)
          const successAlert = document.createElement('div');
          successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
          successAlert.role = 'alert';
          successAlert.innerHTML = `
            Gracias por contactarnos. Te responderemos pronto.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
          `;
          form.parentElement.appendChild(successAlert);
          form.reset();
        }
        form.classList.add('was-validated');
      });
    }
  
    // === Activar sombra en navbar al hacer scroll ===
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          navbar.classList.add('shadow-sm');
        } else {
          navbar.classList.remove('shadow-sm');
        }
      });
    }
  })();
  