
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const cantidadObras = data.amount_of_products;
    const elementoHTML = document.getElementById('cantidad-obras');
    elementoHTML.textContent = `Cantidad de obras en oferta: ${cantidadObras}`;
  } else {
    console.error('Error al obtener datos JSON');
  }
};
xhr.send();
















