document.querySelector('main div').insertAdjacentHTML('afterend', '<div id="change-obj">\
    <label for="change-list">Changelogs --> </label>\
    <select id="change-list" name="change-list" \onchange="selchangelog()">\
    </select>\
  </div>\
  <h3 id=""></h3>\
  <div class="changelog">\
  </div>\
  <br>\
  <hr>');

let sharebtn = '<a class="material-symbols-outlined skiptranslate share-btn">share</a>';
const chlg = [];

fetch('./changes.json')
.then(response => response.json())
.then(data => {
    chlg.push(data);
    loadchangelog()
});

function loadchangelog() {
    changelogs = chlg[0];
    var i = changelogs.id.length - 1; // ilość zmian
    document.querySelector('#change-obj + h3').id = changelogs.id[0].link_id; // Wpisuje link z najnowszej zmiany
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${changelogs.id[0].name + sharebtn}`; // Wpisuje najnowszą zmiane
    for(c of changelogs.id[0].desc) { // Wypisuje opis najnowszej zmiany
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += c + "<br>";
    };
    function datalist(isLatest) {
        document.getElementById('change-list').insertAdjacentHTML('afterbegin', `<option value="${i}">${isLatest + changelogs.id[i].name}</option>`);
    }
    while (i >= 0) { // Wypisuje wszystkie zmiany do pól wyboru od największej liczby do najmniejszej
        (i == 0) ? datalist("Latest ") : datalist('');
        i--;
    };
    document.getElementById('change-list')[0].selected = true; // Wybiera najnowsze zmiany bo wybiera najstarsze
    document.getElementsByClassName('share-btn')[0].addEventListener('click', function () {
        copyid(this.parentElement.id) // dodaje kopiowanie linku do danej zmainy
    })
};

function selchangelog() {
var e = document.getElementById('change-list').value;
function showelse() {
    document.querySelector('#change-obj + h3').id = changelogs.id[e].link_id; 
    document.querySelector('#change-obj + h3 + .changelog').innerHTML = ''; // czyści poprzedni wyświetlony opis
    for(i of changelogs.id[e].desc) { // Wypisuje opis danej zmiany jak zostanie wybrana
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += i + "<br>";
    };
    document.getElementsByClassName('share-btn')[0].addEventListener('click', function () {
        copyid(this.parentElement.id) // dodaje kopiowanie linku do danej zmainy
    });
}
if(e == 0) { // sprawdza czy wybrano najnowszą zmiane czy nie
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${changelogs.id[0].name + sharebtn}`;
    showelse()
} else {
    document.querySelector('#change-obj + h3').innerHTML = `${changelogs.id[e].name + sharebtn}`;
    showelse()
};
}
function copyid(link) {
    let link_to = window.location.origin + "/news/#" + link;
    navigator.clipboard.writeText(link_to).then(() => {
      console.log('Link copied: ' + link_to);
      alert('Link copied: ' + link_to);
    }).catch((error) => {
      console.error('Could not copy text: ', error);
    });
};

  let h3Elements = document.getElementsByTagName('h3'); // Get all h3 elements 
  // Loop through all h3 elements
  for (i of h3Elements) {
    // Create a new a element
    let newSpan = document.createElement('a');
    newSpan.addEventListener('click', function () {
      copyid(this.parentElement.id)
    });
    newSpan.style = "cursor: copy; width: 0px; color: white; font-size: unset;";
    newSpan.classList = "material-symbols-outlined skiptranslate";
    newSpan.textContent = 'share';
  
    // Append the new span element as a child to the current h3 element
    i.appendChild(newSpan);
}