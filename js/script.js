/* 
Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. 
Milestone 2 Coloriamo le icone per tipo
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone 
*/

const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

  showIcons(icons);

  let typesIcons = [];
  icons.forEach(elem => {
    if (!typesIcons.includes(elem.type)) {
        typesIcons.push(elem.type);
        document.getElementById("types").innerHTML += `<option value="${elem.type}">${elem.type}</option>`;
    }
});

const select = document.getElementById("types");
select.addEventListener("change", function() {
    if (select.value != "all") {
        let filtered = icons.filter(elem => elem.type == select.value);
        showIcons(filtered);
    } else showIcons(icons);
});

function showIcons(array) {
    document.getElementById("mainC").innerHTML = "";
    array.forEach(elem => {
        const {name, prefix, type, family} = elem;
        document.getElementById("mainC").innerHTML += `<div class="box ${type}"><i class="${family} ${prefix}${name}"></i><div class="text-uppercase name">${name}</div>`;
    });
}

