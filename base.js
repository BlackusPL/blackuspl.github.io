// Inserts Jquery ES5

var xhr = new XMLHttpRequest();
xhr.open('GET', `${window.location.origin}/tools/textonimage/jquery.min.js`);
xhr.onload = function () {
  if (xhr.status === 200) {
    var jqueryjs = document.createElement('script');
    jqueryjs.textContent = xhr.responseText;
    document.head.appendChild(jqueryjs);
  }
};
xhr.send();

const today = new Date(Date.now());
// void version ES6
/*
async () => {
  await import('https://blackuspl.github.io/DarknessAir/textonimage/jquery.min.js');
  // Your code here...
};
// you can use only import() but still will be void
*/
let langtime = 1;
// When selected language English then removes cookie
function jezykoff() {
  document.cookie = "language=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
  //localStorage.removeItem('language');
  window.location.reload();
}

// function to create languages cookie
function jezyk(lang) {
  var data = new Date();
  data.setDate(data.getDate() + 3);
  document.cookie = (`language=${lang};path=/;expires=` + data);
  //localStorage.setItem('language', 'pl');
  //window.location.reload();
  if (langtime == 0) {
    window.location.reload();
  } else {
    langtime = 0;
    LanguageLoader();
  }
}
// code by cyan-2048
const $i = (e) => document.getElementById(e), $q = (e) => document.querySelector(e), $c = (e) => document.getElementsByClassName(e);
// JS Navbar = easier editing + less resources [/BDPlugins/test.png]
$c('navbar-items')[0].insertAdjacentHTML('afterend', `<div class="navbar-items" id="tab">
    <ul class="navbar-links logo">
      <li class="navbar-link">
        <a tabindex="0" href="/" class="a_icon">
          <img src="/BDPlugins/icon.png" class="icon">
        </a>
      </li>
    </ul>
    <ul class="navbar-links main">
      <li class="navbar-link" style="width: 0; height: 70px;"></li>
      <li class="navbar-link">
        <a tabindex="0" href="/" class="navbar-item">
          <span>Home</span>
        </a>
      </li>
      <li class="navbar-link">
        <a tabindex="0" href="/games" class="navbar-item">
          <span>Games</span>
        </a>
      </li>
      <li class="navbar-link">
        <a tabindex="0" href="/music" class="navbar-item">
          <span>Music Player</span>
        </a>
      </li>
      <li class="navbar-link dropdown">
        <a class="navbar-item">
          <span>Social Links ↡ </span>
        </a>
        <div class="showtasks">
          <a href="https://www.youtube.com/c/BlackusPL">Youtube</a>
          <a href="https://discord.com/users/410243501494894603">Discord</a>
          <a href="https://github.com/BlackusPL">Github</a>
        </div>
      </li>
      <li class="navbar-link dropdown">
        <a href="/tools" class="navbar-item">
          <span>Tools ↡ </span>
        </a>
        <div class="showtasks">
          <a href="/about">My Projects</a>
          <a href="/gallery">Gallery</a>
          <a href="/BDPlugins">BDPlugins</a>
          <a href="/tools/textonimage">TextonImage</a>
          <a href="/tools/ai">AI Chat</a>
          <a href="/tools/codeopen">Code Opener</a>
        </div>
      </li>
      <li class="navbar-link">
        <a tabindex="0" href="/news" class="navbar-item">
          <span>News</span>
        </a>
      </li>
      <li class="navbar-link dropdown">
        <a class="navbar-item">
          <span>Languages ↡ </span>
        </a>
        <div class="showtasks">
          <a onclick="jezyk('pl')">Polish</a>
          <a onclick="jezyk('de')">German</a>
          <a onclick="jezykoff()">English</a>
        </div>
      </li>
      <li class="navbar-link dropdown">
        <a class="navbar-item">
          <span>Fonts ↡ </span>
        </a>
        <div class="showtasks">
          <a onclick="CustomFont()">Custom Font</a>
          <a><select id="Fonts" onchange="PresFont(this.value)">
            <optgroup label="Presets">
              <option>HeadUpDaisy</option>
              <option>Windows XP Tahoma</option>
              <option>PerfectDOS</option>
              <option>Fredoka</option>
            </optgroup>
            <optgroup label="Reset Font?">
              <option>Confirm</option>
            </optgroup>
          </select></a>
        </div>
      </li>
      <a tabindex="0" href="https://cse.google.com/cse?cx=f57e79ca12bca49ec">Search</a>
      <li class="navbar-link">
        <div id="google_translate_element" class="navbar-item">
          <noscript>You need to enable JavaScript to able to use Translator.</noscript>
        </div>
      </li>
    </ul>    
  </div>
  `); $c('navbar-items')[0].remove();
  window.location.pathname != "/" ? undefined : $q('[class="navbar-link"]:has(#google_translate_element)').insertAdjacentHTML("afterend", `<a tabindex="0" class="secret" href="/secret.html">Secret</a>`);
  $q("footer p").textContent = `Copyright © 2021-${today.getFullYear() >= 2021 ? today.getFullYear() : 2021}, BlackusPL | All rights reserved | DO NOT DISTRIBUTE`;
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

getID("tab").insertAdjacentHTML('afterend', `<div>Old tab removed from here</div>`)
getID("tab").remove();*/

//if (localStorage.getItem('language') == 'pl') {
  // function to get value of selected language in cookie
  function cookievaluefinder(coname) {
    var finded = document.cookie.split("; ").find((lang) => lang.startsWith(`${coname}=`))?.split("=")[1];
    return finded;
  }
  var zmien, regex, key, textnodes, node, s;
function LanguageLoader() {
  switch(cookievaluefinder('language')) {
    case 'pl':
  fetch(`${window.location.origin}/languages/pl.json`)
  .then(response => response.json())
  .then(data => {
    zmien = data;
    SetZmien();
  });
      break;
    case 'de':
    fetch(`${window.location.origin}/languages/de.json`)
    .then(response => response.json())
    .then(data => {
      zmien = data;
      SetZmien();
    });
      break;
  }
}
  LanguageLoader();
  function SetZmien() {
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
}
if (localStorage.getItem('language') == 'pl') {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en'
    });
    $q('[id="goog-gt-tt"]').remove();
  }
}

// Fonts Categories

function CustomFont() {
  var font = prompt("Font name");
  var url = prompt("Font URL");
  document.head.insertAdjacentHTML('beforeend', `<style>
  @font-face {
    font-family: ${font};
    src: url(${url});
  }
  * {
    font-family: ${font};
  }
  `);
};

function PresFont(name) {
  name == "Confirm" ? window.location.reload() : undefined;
  document.head.insertAdjacentHTML('beforeend', `<style>
  * {
    font-family: ${name};
  }`);
  sessionStorage.setItem('font', name);
};

switch (sessionStorage.getItem('font')) {
  default:
  document.head.insertAdjacentHTML('beforeend', `<style>
  * {
    font-family: ${sessionStorage.getItem('font')};
  }`);
  $q("#Fonts").value = sessionStorage.getItem('font');
  break;
  case null:
  break;
  case 'Confirm':
  sessionStorage.removeItem('font');
  break;
}

// creates commands to able to use in console
setTimeout(function(){
  var version = "1.3";
  console.log("%c[Console] %cv"+ version +" %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: gray; font-size: 75%","color: white");
  console.log("%c Advanced %cConsole v" + version +` by BlackusPL %c ${window.location.origin} `, "background: #000000;color: #7EBE45" , "background: #000000;color: #7EBE45" , "");
  // console.log("%c Console wasn't cleared " , "background: #000000;color: orange;font-size: 1.2em")
  console.log("%c Commands under DA.help() " , "background: #000000;color: white;font-size: 1em;word-break: all");
  // window.history.replaceState('#gsc.tab=0', '', ' ')
  /* document.querySelector('div span[style="white-space:nowrap"]').remove() */
},1200);
const DA = {
  help() {
  console.log("%c Commands ", "background: #000;color: red;font-size: 1.5em");
  console.log("%c DA.help() - Commands list " , "background: #000;color: white;font-size: 1.2em");
  console.log("%c DA.clear() - Clear console " , "background: #000;color: white;font-size: 1.2em");
  console.log("%c DA.version() - Console version " , "background: #000;color: white;font-size: 1.2em");
},
  clear() {
  console.clear();
},
  version() {
    console.log("%cVersion: %c1.3" , "color: rgb(58, 113, 193)","color: gray;");
  }
};

// search for element with class "footer" and place a clock
if ($q("#tab")) {
$q("#tab").insertAdjacentHTML('beforeend', `<div id="txt" style="display: inline-block; float: right; margin-right: 2em; padding: 1em; align-self: center;"></div>`);
startTime();
function startTime() {
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  $i('txt').innerHTML = 'Time: ' + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
  }
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
  return i;
}

/*fetch('https://coub.com/rss/channel/blackuspl')
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {
var test = data;
let pubdat = test.querySelectorAll('pubDate')[0].textContent;
if (pubdat > test.querySelectorAll('pubDate')[1].textContent) {
    console.log(test.querySelectorAll('link')[2].textContent);
} else {console.log(test.querySelectorAll('link'))[1].textContent;}
})*/

// Send when everything loads
console.log("%c[Base] %c(v26052023) %cSuccesfully Loaded","color: purple","color: gray; font-size: 75%","color: white");