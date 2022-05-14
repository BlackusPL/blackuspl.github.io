function jezykoff() {
    document.cookie="language=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.location.reload()
    //window.location.search = '';
}


function jezyk() {
    document.cookie="language=pl;path=/";
    window.location.reload()
    //window.location.search = 'l=pl'
}

//if (window.location.search.indexOf('l=pl') > -1) {
    if (document.cookie.indexOf("language") > 0 ) {
    var zmien, regex, key, textnodes, node, s;

  zmien = {
    'Home' : 'Główna',
    'and' : 'i',
    'Pages' : 'Strony',
    'Music Player' : 'Odtwarzacz',
    'Social Links' : 'Linki',
    'Games' : 'Gry',
    'About Me' : 'O mnie',
    'Languages' : 'Języki',
    'Polish' : 'Polski',
    'English' : 'Angielski',
    'Abandoned' : 'Porzucone',
    'October' : 'Października',
    'April' : 'Kwietnia',
    'January' : 'Stycznia',
    'ChangeLog' : 'Dziennik zmian',
    'My Projects' : 'Moje Projekty',
    'Last Updated' : 'Ostatnio Aktualizowane',
    // Here is for ChangeLog translation
    'Translation soon on Gry pages' : 'Tłumaczenie do stron z grami wkrótce',
    'Updated icon and images on website' : 'Zaaktualizowano ikonę i obraz strony',
    'Changed text on Main page' : 'Zmieniono główny tekst na stronie głównej',
    'Updated css code' : 'Zaaktualizowano kod CSS',
    'Added "Ostatnio Aktualizowane" text on' : 'Dodano "Ostatnio Aktualizowane" na',
    'Everything about me and website in video below' : 'Wszystko o mnie i o stronie na filmie poniżej',
    'Optimized i fixed some code from' : 'Zoptymalizowano i naprawiono kod na',
    'Added "About Game" for' : 'Dodano "O Grze" na',
    'Added Changelog list' : 'Dodano listę zmian',
    'Updated code to' : 'Zaaktualizowano kod do',
    'doesnt exist in HTML5 so i fixed it' : 'nie istnieje w HTML5 więc to naprawiłem',
    'Added Buttons to change language on website' : 'Dodano opcje by zmienić język strony',
    'Required cookies enabled' : 'Wymaga włączonych ciasteczek',
    'Changed entired' : 'Zmieniono całą', 'Radio Page' : 'Stronę Odtwarzacza',
    'Now website has a preview of links on other websites' : 'Teraz strona ma podgląd linków na innych stronach',
    'Added Button to set custom background i reset it to default on' : 'Dodano opcję ustawienia własnego tła strony i jego zresetowania na',
    'Added more songs in' : 'Dodano więcej piosenek na',
    'Added Odtwarzacz, Discord widget on Główna page i first tests with javascripts' : 'Dodano Odtwarzacz, Widżet Discorda na Stronie głównej i pierwsze testy z JavaScript',
    'Added Cursor i About me page' : 'Dodano kursor i O mnie stronę',
    'Fixed Website URL' : 'Naprawiono adres strony',
    // The end of ChangeLog
    'All rights reserved' : 'Wszelkie prawa zastrzeżone',
    'DO NOT DISTRIBUTE' : 'NIE ROZPOWSZECHNIAĆ',
    'More comming soon...' : 'Więcej wkrótce...',
    'Click here' : 'Kliknij tutaj',
    'to be redirected to my Coub' : 'by zostać przeniesiony na mojego Couba',
    'If redirect not working go to ' : 'Jeżeli klikłeś i nic przejdź na ',
    'Website was created' : 'Strona została stworzane',
    ///////////////////////////////////////////////////////
    '':''};

regex = {};
for (key in zmien) {
    regex[key] = new RegExp(key, 'g');
}

textnodes = document.evaluate( "//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i = 0; i < textnodes.snapshotLength; i++) {
    node = textnodes.snapshotItem(i);
    s = node.data;
    for (key in zmien) {
        s = s.replace(regex[key], zmien[key]);
    }
    node.data = s;
}};