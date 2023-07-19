// Inserts Jquery ES5
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://blackuspl.github.io/DarknessAir/textonimage/jquery.min.js');
xhr.onload = function () {
  if (xhr.status === 200) {
    var jqueryjs = document.createElement('script');
    jqueryjs.textContent = xhr.responseText;
    document.head.appendChild(jqueryjs);
  }
};
xhr.send();
// void version ES6
/*
async () => {
  await import('https://blackuspl.github.io/DarknessAir/textonimage/jquery.min.js');
  // Your code here...
};
// you can use only import() but still will be void
*/
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
  window.location.reload();
}

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
  <a onclick="jezyk('pl')">Polish</a>
  <a onclick="jezyk('de')">German</a>
  <a onclick="jezykoff()">English</a>
</div></div>
<a href="https://cse.google.com/cse?cx=f57e79ca12bca49ec">Search</a>
<a class="secret" href="secret.html">Secret</a>
</ul>`)
getID("tab").remove();*/

//if (localStorage.getItem('language') == 'pl') {
  function cookievaluefinder(coname) {
    var finded = document.cookie.split("; ").find((lang) => lang.startsWith(`${coname}=`))?.split("=")[1];
    return finded;
  }
  if (window.location.href.split('/')[3] == "DarknessAir") {var web_root = `${'https://' + window.location.host}/DarknessAir`} else {var web_root = window.location.protocol + '//' + window.location.host}
  var zmien, regex, key, textnodes, node, s;

  switch(cookievaluefinder('language')) {
    case 'pl':
  fetch(`${web_root}/languages/pl.json`)
  .then(response => response.json())
  .then(data => {
    zmien = data;
    SetZmien();
  });
      break;
    case 'de':
    fetch(`${web_root}/languages/de.json`)
    .then(response => response.json())
    .then(data => {
      zmien = data;
      SetZmien();
    });
      break;
  }
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
    document.querySelector('[id="goog-gt-tt"]').remove();
  }
}

// creates commands to able to use in console
setTimeout(function(){
  var version = "1.3";
  console.log("%c[Console] %cv"+ version +" %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: gray; font-size: 75%","color: white");
  console.log("%c Advanced %cConsole v" + version +" by BlackusPL %c https://blackuspl.github.io/DarknessAir ", "background: #000000;color: #7EBE45" , "background: #000000;color: #7EBE45" , "");
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
if (document.querySelector("#tab")) {
document.querySelector("#tab").insertAdjacentHTML('beforeend', `<div id="txt" style="display: inline-block; float: right; margin-right: 2em; padding: 1em; align-self: center;"></div>`);
startTime();
function startTime() {
  const today = new Date(Date.now());
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = 'Time: ' + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
  return i;
}

// Szuka po div class "card"
function discordprofile(id) {
var xhr = new XMLHttpRequest();
xhr.open("GET", `https://api.lanyard.rest/v1/users/${id}`, true);
xhr.onload = function () {
  if (this.status == 200) {
    const discord_data = JSON.parse(this.responseText);
//    console.log(discord_data);
    let avatar_url = 'https://cdn.discordapp.com/avatars/' + discord_data.data.discord_user.id + '/' + discord_data.data.discord_user.avatar;
    if (discord_data.data.discord_user.discriminator == "0") {var disusername = `<a href="https://discord.com/users/${discord_data.data.discord_user.id}" style="text-decoration: unset;color: unset;"> @${discord_data.data.discord_user.display_name} </a>`} else {var disusername = `<a href="https://discord.com/users/` + discord_data.data.discord_user.id + `" style="text-decoration: unset;color: unset;">` + discord_data.data.discord_user.username + '#' + discord_data.data.discord_user.discriminator + `</a>`}
    document.getElementById('username').innerHTML = disusername;
    fetch(avatar_url + '.gif?size=4096')
    .then(response => {
      if (response.ok) {
        return document.getElementById('pfp').src = avatar_url + '.gif?size=4096';
      }
      throw document.getElementById('pfp').src = avatar_url + '.webp?size=4096';
    });
    document.getElementById('card-title').innerHTML = "@" + discord_data.data.discord_user.username.toLowerCase() + " > profile";
    function status() {document.getElementById('status').innerHTML = "Status: " + discord_data.data.discord_status;}
    function activity(type) {document.getElementById('activity-name').innerHTML = type + discord_data.data.activities[0].name;
    document.getElementById('activity-state').innerHTML = discord_data.data.activities[0].state ? discord_data.data.activities[0].state : null;
    document.getElementById('activity-detail').innerHTML = discord_data.data.activities[0].details ? discord_data.data.activities[0].details : null;
  }
  const pc = `<svg class="PI-icon_desktop" width="18" height="18" viewBox="-3 -5 28 28"><path fill="currentColor" d="M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"></path></svg>`;
  const mobile = `<svg class="PI-icon_mobile" width="18" height="18" transform="scale(0.9)" viewBox="-3 -5 32 44"><path fill="currentColor" d="M 2.882812 0.246094 C 1.941406 0.550781 0.519531 2.007812 0.230469 2.953125 C 0.0585938 3.542969 0 7.234375 0 17.652344 L 0 31.554688 L 0.5 32.558594 C 1.117188 33.769531 2.152344 34.5625 3.519531 34.847656 C 4.210938 35 7.078125 35.058594 12.597656 35 C 20.441406 34.941406 20.691406 34.925781 21.441406 34.527344 C 22.347656 34.054688 23.078125 33.3125 23.578125 32.386719 C 23.921875 31.761719 23.941406 30.964844 24 18.085938 C 24.039062 8.503906 24 4.167969 23.847656 3.464844 C 23.558594 2.121094 22.75 1.097656 21.519531 0.492188 L 20.5 0 L 12.039062 0.0195312 C 6.402344 0.0390625 3.328125 0.113281 2.882812 0.246094 Z M 20.382812 14.582031 L 20.382812 22.917969 L 3.652344 22.917969 L 3.652344 6.25 L 20.382812 6.25 Z M 13.789062 27.539062 C 14.5 28.296875 14.597656 29.035156 14.132812 29.925781 C 13.308594 31.496094 10.671875 31.421875 9.902344 29.8125 C 9.539062 29.054688 9.539062 28.730469 9.902344 28.011719 C 10.691406 26.535156 12.632812 26.308594 13.789062 27.539062 Z M 13.789062 27.539062 "></path></svg>`;
  const web = `<svg class="PI-icon_web" width="18" height="18" viewBox="-3 -5 28 28"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"></path></svg>`;
  switch (discord_data.data.discord_status) {
      case 'online':
      document.getElementById('status').style.cssText = 'color: rgb(35, 165, 90);opacity: 1;';
      document.getElementById('pfp').style.cssText += 'border: rgb(35, 165, 90) solid;';
      status();
      break;
      case 'idle':
      document.getElementById('status').style.cssText = 'color: rgb(250, 168, 26);opacity: 1;';
      document.getElementById('pfp').style.cssText += 'border: rgb(250, 168, 26) solid;';
      status();
      break;
      case 'dnd':
      document.getElementById('status').style.cssText = 'color: rgb(237 66 69);opacity: 1;';
      document.getElementById('pfp').style.cssText += 'border: rgb(237 66 69) solid;'
      status();
      break;
      case 'offline':
      document.getElementById('status').style.cssText = 'color: #747e8c;opacity: 1;';
      document.getElementById('pfp').style.cssText += 'border: #747e8c solid;';
      status();
      break;
    }
  if (discord_data.data.active_on_discord_web) document.getElementById('status').insertAdjacentHTML('beforeend', web);
	if (discord_data.data.active_on_discord_mobile) document.getElementById('status').insertAdjacentHTML('beforeend', mobile);
	if (discord_data.data.active_on_discord_desktop) document.getElementById('status').insertAdjacentHTML('beforeend', pc);
  if (typeof discord_data.data.activities[0] !== 'undefined')
    switch (discord_data.data.activities[0].type) {
      case 0:
      activity("In game: ");
      break;
      case 1:
      activity("Streaming: ");
      break;
      case 2:
      activity("Listening: ");
      break;
      case 3:
      activity("Watching: ");
      break;
      case 4:
      activity("");
      break;
      case 5:
      activity("Competing in: ");
      break;
    }
  }
};
xhr.send();
};
// end

// Send when everything loads
console.log("%c[Base] %c(v26052023) %cSuccesfully Loaded","color: purple","color: gray; font-size: 75%","color: white");