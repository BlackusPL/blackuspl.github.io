document.querySelector('main div').insertAdjacentHTML('afterend', '  \    <div id="change-obj">\
    <label for="change-list">Changelogs --> </label>\
    <select id="change-list" name="change-list" \onchange="selchangelog()">\
    </select>\
  </div>\
  <h3 id=""></h3>\
  <div class="changelog">\
\
  </div>\
  <br>\
  <hr>');

fetch('./changes.json')
.then(response => response.json())
.then(data => {
    var i = Object.keys(data.id).length - 1; // ilość zmian
    document.querySelector('#change-obj + h3').id = data.id[0].link_id; // Wpisuje link z najnowszej zmiany
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${data.id[0].name}`; // Wpisuje najnowszą zmiane
    for(let c = 0; c < Object.keys(data.id[0].desc).length; c++) { // Wypisuje opis najnowszej zmiany
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += data.id[0].desc[c] + "<br>";
    };
    while (i >= 0) { // Wypisuje wszystkie zmiany do pól wyboru od największej liczby do najmniejszej
        document.getElementById('change-list').insertAdjacentHTML('afterbegin', `<option value="${i}">${data.id[i].name}</option>`);
        i--;
    };
    document.getElementById('change-list')[0].selected = true; // Wybiera najnowsze zmiany bo wybiera najstarsze
});

function selchangelog() {
fetch('./changes.json')
.then(response => response.json())
.then(data => {
var e = document.getElementById('change-list').value;
function showelse() {
    document.querySelector('#change-obj + h3').id = data.id[e].link_id; 
    document.querySelector('#change-obj + h3 + .changelog').innerHTML = ''; // czyści poprzedni wyświetlony opis
    for(let i = 0; i < Object.keys(data.id[e].desc).length; i++) { // Wypisuje opis danej zmiany jak zostanie wybrana
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += data.id[e].desc[i] + "<br>";
    };
}
if(e == 0) { // sprawdza czy wybrano najnowszą zmiane czy nie
    showelse()
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${data.id[0].name}`;
} else {
    showelse()
    document.querySelector('#change-obj + h3').innerHTML = `${data.id[e].name}`;
};
})
}