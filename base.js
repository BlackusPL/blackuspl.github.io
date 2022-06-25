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

//if (window.location.search.indexOf('l=pl') > -1) {
if (document.cookie.indexOf("language") > -1) {
  var zmien, regex, key, textnodes, node, s;

  zmien = {
    // Here is for ChangeLog translation
    'Remake of navigation bar.': 'Przebudowa paska nawigacyjnego',
    'Added Search Button to able search more information about games.': 'Dodano przycisk wyszukiwania, aby móc wyszukiwać więcej informacji o grach.',
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
    'April': 'Kwietnia',
    'January': 'Stycznia',
    'ChangeLog': 'Dziennik zmian',
    'My Projects': 'Moje Projekty',
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

/*
function search() {
    var x = document.getElementById("searchbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }*/