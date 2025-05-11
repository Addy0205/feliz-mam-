let indice = 0;

function cambiarImagen(direccion) {
  const carrusel = document.getElementById('carrusel-imagenes');
  const total = carrusel.children.length;
  indice = (indice + direccion + total) % total;
  carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

// Hacer que el carrusel avance automáticamente cada 3 segundos
setInterval(() => {
  cambiarImagen(1); // Avanza una imagen
}, 3000); // Cambia cada 3 segundos

function mostrarSorpresa() {
  const sorpresa = document.getElementById('sorpresa');
  const audio = document.getElementById('audioSorpresa');
  const container = document.getElementById('corazones-container');

  sorpresa.style.display = 'block';
  sorpresa.classList.add('mostrar');
  audio.play();
  sorpresa.scrollIntoView({ behavior: 'smooth' });

  // Generar corazones animados
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'corazon';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    const size = Math.random() * 1.5 + 1;
    heart.style.transform = `scale(${size})`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
