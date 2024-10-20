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
    var i = Object.keys(data.id).length - 1;
    document.querySelector('#change-obj + h3').id = data.id[0].link_id;
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${data.id[0].name}`;
    for(let c = 0; c < Object.keys(data.id[0].desc).length; c++) {
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += data.id[0].desc[c];
    };
    while (i >= 0) {
        document.getElementById('change-list').insertAdjacentHTML('afterbegin', `<option value="${i}">${data.id[i].name}</option>`);
        i--;
    };
    document.getElementById('change-list')[0].selected = true;
});

function selchangelog() {
fetch('./changes.json')
.then(response => response.json())
.then(data => {
var e = document.getElementById('change-list').value;
function showelse() {
    document.querySelector('#change-obj + h3').id = data.id[e].link_id;
    document.querySelector('#change-obj + h3 + .changelog').innerHTML = '';
    for(let i = 0; i < Object.keys(data.id[e].desc).length; i++) {
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += data.id[e].desc[i];
    };
}
if(e == 0) {
    showelse()
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${data.id[0].name}`;
} else {
    showelse()
    document.querySelector('#change-obj + h3').innerHTML = `${data.id[e].name}`;
};
})
}