// Generar código QR inicial
function generarQR(url) {
    document.getElementById('qrCode').innerHTML = '';
    new QRCode(document.getElementById('qrCode'), {
        text: url,
        width: 200,
        height: 200,
        colorDark: '#e91e63',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Inicializar con URL por defecto
generarQR('https://www.ejemplo.com');

function abrirPersonalizacion() {
    document.getElementById('modalPersonalizacion').style.display = 'block';
}

function cerrarPersonalizacion() {
    document.getElementById('modalPersonalizacion').style.display = 'none';
}

function guardarPersonalizacion() {
    const mensaje = document.getElementById('inputMensaje').value;
    const url = document.getElementById('inputURL').value;
    const firma = document.getElementById('inputFirma').value;

    if (mensaje) {
        document.querySelector('.mensaje p').textContent = mensaje;
    }

    if (firma) {
        document.querySelector('.firma').innerHTML = `Con todo mi amor, <br> ${firma}`;
    }

    if (url) {
        generarQR(url);
    }

    cerrarPersonalizacion();
}

function descargarTarjeta() {
    alert('Para descargar la tarjeta como imagen:\n\n1. Presiona F12 para abrir herramientas de desarrollador\n2. Haz clic derecho en la tarjeta\n3. Selecciona "Captura de pantalla" o usa una herramienta como ScreenCapture');
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modalPersonalizacion');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}