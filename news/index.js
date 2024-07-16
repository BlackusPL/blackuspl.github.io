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
    var test = data;
    var i = Object.keys(test.id).length - 1;
    document.querySelector('#change-obj + h3').id = test.id[i].link_id;
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${test.id[i].name}`;
    for(let c = 0; c < Object.keys(test.id[i].desc).length; c++) {
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += test.id[i].desc[c];
    };
    while (i >= 0) {
        document.getElementById('change-list').insertAdjacentHTML('beforeend', `
            <option value="${i}">${test.id[i].name}</option>
        `);
        i--;
    }
});

function selchangelog() {
fetch('./changes.json')
.then(response => response.json())
.then(data => {
var test = data;
var i = Object.keys(test.id).length - 1;
var e = document.getElementById('change-list').value;
function showelse() {
    document.querySelector('#change-obj + h3').id = test.id[e].link_id;
    document.querySelector('#change-obj + h3 + .changelog').innerHTML = '';
    for(let i = 0; i < Object.keys(test.id[e].desc).length; i++) {
        document.querySelector('#change-obj + h3 + .changelog').innerHTML += test.id[e].desc[i];
    };
}
if(e == i) {
    showelse()
    document.querySelector('#change-obj + h3').innerHTML = `Latest ${test.id[i].name}`;
} else {
    showelse()
    document.querySelector('#change-obj + h3').innerHTML = `${test.id[e].name}`;
};
})
}