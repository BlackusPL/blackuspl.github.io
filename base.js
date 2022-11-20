function jezykoff() {
  document.cookie = "language=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
  window.location.reload()
  //window.location.search = '';
};


function jezyk() {
  document.cookie = "language=pl;path=/";
  window.location.reload()
  //window.location.search = 'l=pl'
};

// code by cyan-2048
const getID = (e) => document.getElementById(e), qs = (e) => document.querySelector(e);
/* 
getID("search_bar").onclick = () => {
  getID("searchbar").style.display = getID("searchbar").style.display == "block" ? "none" : "block";
  getID("searchbar").click();
};
//
var script = document.createElement("script");
script.async;
script.src = "https://cse.google.com/cse.js?cx=f57e79ca12bca49ec";
document.head.append(script); 

getID("tab").insertAdjacentHTML('afterend', `<ul id="tab" class="notranslate">
<a href="/" style="margin-left: 0px;">Home</a>
<a href="/games">Games</a>
<a href="/music">Music Player</a>
<div class="dropdown">
  <button class="dropbtn">Social Links ↡ </button>
  <div class="showtasks">
    <a href="https://www.youtube.com/c/BlackusPL">Youtube</a>
    <a href="https://discord.com/users/410243501494894603">Discord</a>
    <a href="https://github.com/BlackusPL">Github</a>
</div></div>
<a href="/about">About Me</a>
<a href="/news">News</a>
<div class="dropdown">
<button class="dropbtn">Languages ↡ </button>
<div class="showtasks">
  <a onclick="jezyk()">Polish</a>
  <a onclick="jezykoff()">English</a>
</div></div>
<a href="https://cse.google.com/cse?cx=f57e79ca12bca49ec">Search</a>
<a class="secret" href="secret.html">Secret</a>
</ul>`)
getID("tab").remove();*/

//if (window.location.search.indexOf('l=pl') > -1) {
//if (document.cookie.match(new RegExp('(^| )' + "language" + '=([^;]+)'))[2] == "pl") {
if (document.cookie.indexOf("language") >= 64) {
  var zmien, regex, key, textnodes, node, s;

  zmien = {
    // Here is for ChangeLog translation
    'Remake of navigation bar': 'Przebudowa paska nawigacyjnego',
    'Added Search Button to able search more information about games': 'Dodano przycisk wyszukiwania, aby móc wyszukiwać więcej informacji o grach.',
    'Translation soon on Games pages': 'Tłumaczenie do stron z grami wkrótce',
    'Updated icon and images on website': 'Zaaktualizowano ikonę i obraz strony',
    'Changed text on Main page': 'Zmieniono główny tekst na stronie głównej',
    'Updated css code': 'Zaaktualizowano kod CSS',
    'Added "Last Updated" text on': 'Dodano "Ostatnio Aktualizowane" na',
    'Everything about me and website in video below': 'Wszystko o mnie i o stronie na filmie poniżej',
    'Optimized and fixed some code from': 'Zoptymalizowano i naprawiono kod na',
    'Added "About Game" for': 'Dodano "O Grze" na',
    'Added Changelog list': 'Dodano listę zmian',
    'Updated code to': 'Zaaktualizowano kod do',
    'doesnt exist in HTML5 so i fixed it': 'nie istnieje w HTML5 więc to naprawiłem',
    'Added option to change language on website': 'Dodano opcje by zmienić język strony',
    'Required cookies enabled': 'Wymaga włączonych ciasteczek',
    'Changed entired': 'Zmieniono całą',
    'Radio Page': 'Stronę Odtwarzacza',
    'Now website has a preview of links on other websites': 'Teraz strona ma podgląd linków na innych stronach',
    'Added Button to set custom background and reset it to default on': 'Dodano opcję ustawienia własnego tła strony i jego zresetowania na',
    'Added more songs in': 'Dodano więcej piosenek na',
    'Added Music Player, Discord widget on Home page and first tests with javascripts': 'Dodano Odtwarzacz, Widżet Discorda na Stronie głównej i pierwsze testy z JavaScript',
    'Added Cursor and About me page': 'Dodano kursor i O mnie stronę',
    'Fixed Website URL': 'Naprawiono adres strony',
    'Added Translation to all Games Pages': 'Dodano tłumaczenie do strony z grami',
    'Uses Google API but doesnt work': 'Użyto Google API lecz nie działa',
    'Added song and radio station': 'Dodano piosenkę i stacje radiową',
    'Button Pages was changed to Games' : 'Przycisk Strony został zmieniony na Gry',
    'Added News page where you can find changelog about website and games' : 'Dodano stronę Nowości gdzie możecie znaleźć dziennik zmian strony i gier',
    'Updated Music Racer 2000 page' : 'Zaaktualizowano stronę Music Racer 2000',
    'Added new project in about page' : 'Dodano nowy projekt na stronie o mnie',
    'Added my avatar in' : 'Dodano mój awatar na',
    'Updated Webamp to newest version' : 'Zaaktualizowano Webamp do najnowszej wersji',
    'You can now exit from Music Player when you dont have javascripts' : 'Możesz teraz wyjść z odtwarzacza muzyki, gdy nie masz javascripts',
    'Fixed songs and added new one' : 'Naprawiono piosenki i dodano nowe',
    'Fixed links to author profile' : 'Naprawiono linki do profilu autora',
    'The download link for the game from Steam has been changed to Widget' : 'Link do pobrania gry z Steam został zmieniony na Widget',
    'If you have suggestions on what to add, write to me' : 'Jak masz propozycje co mam dodać to pisz do mnie',
    'Added some new songs' : 'Dodano kilka nowych piosenek',
    'Added milkdrop to Webamp' : 'Dodano milkdrop do Webampa',
    'Fixed the Home button being able to exit the website' : 'Naprawiono przycisk Home, którym można było wyjść ze strony',
    'Fixed Context Menu in Webamp' : 'Naprawiono Menu kontekstowe w Webampie',
    'Changelog will be moved to News soon' : 'Changelog zostanie wkrótce przeniesiony do News',
    'Changed entire News page' : 'Zmieniono całą stronę Nowości',
    'Added animated background' : 'Dodano animowane tło',
    'The newest Coub will now be played in full hd' : 'Najnowszy Coub będzie teraz odtwarzany w pełnej rozdzielczości HD',
    'Discord widget now have normal position' : 'Widżet Discord ma teraz normalną pozycję',
    'Fixed some things in CSS' : 'Naprawiono kilka rzeczy w CSS',
    'Again next testing google translator' : 'Znowu kolejne testy z google translatorem',
    'Changed entire Games page': 'Zmieniono całą stronę Gry',
    'You can now Download my plugins on' : 'Możesz teraz pobrać moje pluginy na',
    'Updated console text' : 'Zaktualizowany tekst konsoli',
    'New look on My Project in about me page' : 'Nowy wygląd moich Projektów na stronie o mnie',
    'Video background in now untouchable' : 'Tło jako film jest teraz nietykalne',
    'If you dont have JavaScript on, you get notification about this' : 'Jeżeli nie posiadasz właczonych JavaScript, to dostaniesz komunikat o tym',
    // The end of ChangeLog
    'Music Player': 'Odtwarzacz',
    'Social Links': 'Linki',
    'Games': 'Gry',
    'About Me': 'O mnie',
    'News' : 'Nowości',
    'Languages': 'Języki',
    'Search': 'Wyszukaj',
    'Polish': 'Polski',
    'English': 'Angielski',
    'Abandoned': 'Porzucone',
    'October': 'Października',
    'August': 'Sierpnia',
    'January': 'Stycznia',
    'ChangeLog': 'Dziennik zmian',
    'My Projects': 'Moje Projekty',
    'Set custom background' : 'Ustaw własne tło',
    'Last Updated': 'Ostatnio Aktualizowane',
    'All rights reserved': 'Wszelkie prawa zastrzeżone',
    'DO NOT DISTRIBUTE': 'NIE ROZPOWSZECHNIAĆ',
    'More comming soon...': 'Więcej wkrótce...',
    'Everything about me i website in video below': 'Wszystko o mnie i stronie w filmie poniżej',
    'Click here': 'Kliknij tutaj',
    'to be redirected to my Coub': 'by zostać przeniesiony na mojego Couba',
    'If redirect not working go to ': 'Jeżeli klikłeś i nic przejdź na ',
    'Website was created': 'Strona została stworzona',
    'and': 'i',
    'Latest Coub' : 'Najnowszy Coub',
    ///////////////////////////////////////////////////////
    '': ''
  };

  regex = {};
  for (key in zmien) {
    regex[key] = new RegExp(key, 'g');
  }

  textnodes = document.evaluate("//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

  for (var i = 0; i < textnodes.snapshotLength; i++) {
    node = textnodes.snapshotItem(i);
    s = node.data;
    for (key in zmien) {
      s = s.replace(regex[key], zmien[key]);
    }
    node.data = s;
  }
};
if (document.cookie.indexOf("language") > -1) {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'pl'
    });
    document.querySelector('[id="goog-gt-tt"]').remove()
  }
};

setTimeout(function(){
  var version = "1.1"
  console.log("%c Advanced %cConsole v" + version +" by BlackusPL %c https://blackuspl.github.io/DarknessAir ", "background: #000000;color: #7EBE45" , "background: #000000;color: #7EBE45" , "");
  console.log("%c Console wasn't cleared " , "background: #000000;color: orange;font-size: 1.2em")
  console.log("%c Commands under DA_help() " , "background: #000000;color: white;font-size: 1em;word-break: all")
  // window.history.replaceState('#gsc.tab=0', '', ' ')
  /* document.querySelector('div span[style="white-space:nowrap"]').remove() */
},1200);
function DA_help() {
  console.log("%c Commands ", "background: #000;color: red;font-size: 1.5em")
  console.log("%c DA_help - Commands list " , "background: #000;color: white;font-size: 1.2em")
  console.log("%c DA_clear - Clear console " , "background: #000;color: white;font-size: 1.2em")
}
function DA_clear() {
  console.clear()
};