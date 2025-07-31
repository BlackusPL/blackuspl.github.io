$q('main div').insertAdjacentHTML('afterend', `<div id="change-obj">
    <label for="change-list">Changelogs --> </label>
    <select id="change-list" name="change-list" onchange="selchangelog()">
    </select>
  </div>
  <h3 id=""></h3>
  <div class="changelog">
  </div>
  <br>
  <hr>`);

let sharebtn = '<a class="material-symbols-outlined skiptranslate share-btn">share</a>';
const chlg = [];

fetch('./changes.json')
.then(response => response.json())
.then(data => {
    chlg.push(data);
    loadchangelog()
});

// Funkcja która odpowiada za dodanie opisu do danej zmiany
function ch_desc(e) {
    changelogs.id[e]?.special_name == null ? changelogsname = "Update " + changelogs.id[e].date : changelogsname = changelogs.id[e].special_name;
    var chnagelogslink = "update-" + changelogs.id[e].date.replaceAll(".20","").replaceAll(".", "");
    $q('#change-obj + h3').id = chnagelogslink; // Wpisuje link z najnowszej zmiany

    function showelse() { 
        $q('#change-obj + h3 + .changelog').innerHTML = ''; // czyści poprzedni wyświetlony opis
        $c('share-btn')[0].addEventListener('click', function () {
            copyid(this.parentElement.id) // dodaje kopiowanie linku do danej zmainy
        });
    };

    if(e == 0) { // sprawdza czy wybrano najnowszą zmiane czy nie
        if (changelogs.id[0].special_name !== null && changelogs.id[0]?.special_name !== undefined) {
            $q('#change-obj + h3').innerHTML = `Latest ${changelogs.id[0].special_name + sharebtn}`;
        } else {
            $q('#change-obj + h3').innerHTML = `Latest Update ${changelogs.id[0].date + sharebtn}`;
        }
        showelse()
    } else {
        $q('#change-obj + h3').innerHTML = `${changelogsname + sharebtn}`;
        showelse()
    };

    for(i of changelogs.id[e].desc) {
        switch(true) { // Sprawdza czy zmiana jest jako Added, Fixed, itd. a następnie dodaje odpowiedni zamiennik
             case /\[(a|A)]/.test(i):
                i = i.replace(/\[(a|A)]/, '• [Added]');
                break;
            case /\[(f|F)]/.test(i):
                i = i.replace(/\[(f|F)]/, '• [Fixed]');
                break;
            case /\[(c|C)]/.test(i):
                i = i.replace(/\[(c|C)]/, '• [Changed]');
                break;
            case /\[(r|R)]/.test(i):
                i = i.replace(/\[(r|R)]/, '• [Removed]');
                break;
            case /\[(i|I)]/.test(i):
                i = i.replace(/\[(i|I)]/, '• [Info]');
                break;
            case /\[(p|P)]/.test(i):
                i = i.replace(/\[(p|P)]/, '• [Planned]');
                break;
        }
        $q('#change-obj + h3 + .changelog').innerHTML += i + "<br>";
    };
};

function loadchangelog() {
    changelogs = chlg[0];
    var i = changelogs.id.length - 1; // ilość zmian
    ch_desc(0); // Wypisuje opis najnowszej zmiany
    function datalist(isLatest) {
        $i('change-list').insertAdjacentHTML('afterbegin', `<option value="${i}">${isLatest}</option>`);
    }
    while (i >= 0) { // Wypisuje wszystkie zmiany do pól wyboru od największej liczby do najmniejszej
        if (changelogs.id[i].special_name !== null && changelogs.id[i]?.special_name !== undefined) {
            (i == 0) ? datalist(`Latest ${changelogs.id[i].special_name}`) : datalist(`${changelogs.id[i].special_name}`);
        } else {
            (i == 0) ? datalist(`Latest Update ${changelogs.id[i].date}`) : datalist(`Update ${changelogs.id[i].date}`);
        }
        i--;
    };
    $i('change-list')[0].selected = true; // Wybiera najnowsze zmiany bo wybiera najstarsze
    $c('share-btn')[0].addEventListener('click', function () {
        copyid(this.parentElement.id) // dodaje kopiowanie linku do danej zmainy
    })
};

function selchangelog() {
    var e = $i('change-list').value;
    ch_desc(e);
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
    newSpan['style'] = "cursor: copy; width: 0px; color: white; font-size: unset;";
    newSpan['classList'] = "material-symbols-outlined skiptranslate";
    newSpan['textContent'] = 'share';
  
    // Append the new span element as a child to the current h3 element
    i.appendChild(newSpan);
}