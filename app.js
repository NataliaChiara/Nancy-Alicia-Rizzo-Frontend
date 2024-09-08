const menu = document.getElementById('menu');
const titulo = document.getElementById('titulo');
const sobreMi = document.getElementById('sobre-mi');
const tabla = document.getElementById('tabla')
const containerTecnicas = document.getElementById('container-tecnicas')
const testimoniosContainer = document.getElementById('testimonios')

getInfo()
  .then(info => {
    const {psicologo, servicios, terapias, testimonios} = info

    console.log(info)

    menu.innerHTML = `
      <a href="tel:${psicologo.telefono}" class="contacto">
        <img src="/imagenes/wsp.png" alt="WhatsApp icon" width="20">
        <p>${psicologo.telefono}</p>
      </a>
      <a href="https://www.instagram.com/${psicologo.mail}/?hl=es" class="contacto">
          <img src="/imagenes/ig.png" width="20px">
          <p>@${psicologo.mail}</p>
      </a>
    `;
    titulo.innerHTML = `
      <h2>${psicologo.titulo}</h2>
      <h1>${psicologo.subtitulo}</h1>
    `
    sobreMi.innerHTML = `
      <div class="sobre-mi-2">
        <h3>Sobre Mi</h3>
        <p>${psicologo.sobre_mi}</p>
      </div>
      <img src="${psicologo.picture_url}" alt="Foto psicóloga" width="300px">
    `

    servicios.forEach((item) => {
      tabla.innerHTML += `
        <a href="tel:+541150545095">${item.nombre}</a>
      `;
    });

    terapias.forEach((item) => {
      containerTecnicas.innerHTML += `
        <div class="tecnicas">
          <img src="${item.url}" width="200px">
          <p>${item.titulo}<br><br>${item.descripcion}</p>
        </div>
      `
    })

    testimonios.forEach((item) => {
      testimoniosContainer.innerHTML += `
        <img src="${item.url}" alt="Reseña de google">
      `
    })

  })
  .catch(error => {
    console.error('Error fetching info:', error);
  });


