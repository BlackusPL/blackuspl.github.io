// check if your browser support javascript? or can run webamp
if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("What's the point of anything?")
}
if(!window.WebGLRenderingContext) {
    alert("Oh no! Your browser have WebGL disabled!")
    throw new Error("What's the point of turning this off?")
}

$q('main').insertAdjacentHTML('beforebegin', `
    <input id="toggle" class="toggle-btn" type="checkbox" style="display: none;" /><label class="fas" for="toggle">Show/Hide</label>
    <div id="custombg_window"></div>
    `);

$i('custombg_window').innerHTML = `Set custom background<br>
<input type="file" id="custombg" accept="image/*"><br>
<input type="reset" id="reset"> Set Default</input><br>
<input style="width: 40%; margin-left: -10%;" type="text" placeholder="Image Url" id="imagebgurl">
<input type="button" value="Save & Load" id="saveload"><br>
<input type="number" max="100" min="0" id="vid_bg_dark" style="width: 20%;" value="100"> VideoBG bright<br>
<input type="checkbox" id="experiments" title="Disables only image upload set" >Experiments function</input>
<!--  <audio src="Dadada (Slowed version).DAA" controls controlslist="nodownload noplaybackrate novolume" /> -->
<br><br>
<label for="playlists">Choose playlist:</label>
<select name="playlists" style="width: 200px; text-align: center;" id="playlists" onchange="changeFunc();">
    <option>---Select Playlist---</option>
    <option value="all">All</option>
    <option value="phonk">Phonk</option>
    <option value="phonk_radio">Phonk Radio</option>
    <option value="classics">Classics</option>
    <option value="nightcore">Nightcore</option>
    <option value="coub">Coub songs</option>
    <option value="custom">Custom Radio</option>
</select>
<button onclick="webamp.reopen()">Reopen webamp</button>`;

// START Create playlists

// cool but hard to read
let [classics, nightcore, coubsong, phonk, othersong] = [[], [], [], [], []], allTracks;
// END Create playlists
async function create_playlist() {
        conplaylists = await fetch('./playlists.json');
        playlists = await conplaylists.json();
        allTracks = playlists;
        playlists.forEach(element => {
        element.metaData.tags?.forEach(tag => {
        switch (tag) {
            case "classics":
                classics.push(element);
                break;
            case "nightcore":
                nightcore.push(element);
                break;
            case "coubsong":
                coubsong.push(element);
                break;
            case "phonk":
                phonk.push(element);
                break;
            }
        })
        if (element.metaData.tags === undefined) {
            othersong.push(element);
        };
    });
    webamp.appendTracks(allTracks);
}
create_playlist();
const webamp = new Webamp({
    //initialTracks: (allTracks),
    /*initialSkin: {
        url: "./yuzuki_kokubunji.wsz"
    },*/
    availableSkins: [
        { url: "./dosamp.wsz", name: "DOSAMP" },
        { url: "./anime_amp_2.wsz", name: "Anime Webamp V2" },
        { url: "./yuzuki_kokubunji.wsz", name: "Yuzuki Kokubunji skin" }
      ],
      filePickers: [{
        // The name that will appear in the context menu.
        contextMenuName: "RMF MAXXX Śląsk...",
        // A function which returns a Promise that resolves to
        // an array of `track`s (see above)
        filePicker: () => Promise.resolve([{
            metaData: {
                 title: "RMF MAXXX Śląsk"
             },
             url: "https://rs7-krk2.rmfstream.pl/rmf_maxxx"
             // url: "http://217.74.72.6/rmf_maxxx_slk"
         }])
    },{
        contextMenuName: "[DOPEPHONK] The Sound of Phonk / 24/7 Phonk Radio",
        filePicker: () => Promise.resolve([{
            metaData: {
                 title: "[DOPEPHONK] The Sound of Phonk / 24/7 Phonk Radio / Website: https://dopephonk.net/"
             },
             url: "https://edge01.atomicradio.eu/dopephonk/highquality"
         }])
    }],
    __butterchurnOptions: {
        importButterchurn: () => Promise.resolve(window.butterchurn),
        getPresets: () => {
            const presets = window.butterchurnPresets.getPresets();
            return Object.keys(presets).map((name) => {
                return {
                    name,
                    butterchurnPresetObject: presets[name]
                };
            });
        },
        butterchurnOpen: true
    },
    __initialWindowLayout: {
        main: { position: { x: 0, y: 0 } },
        equalizer: { position: { x: 0, y: 116 } },
        playlist: { position: { x: 0, y: 232 }, size: [0, 1] },
        milkdrop: { position: { x: 275, y: 0 }, size: [0, 9] }
    },
});
webamp.renderWhenReady($i("app"));
webamp.setVolume(10); // default: 75 | 75 is too loud for me
webamp.setSkinFromUrl('./dosamp.wsz');

function changeFunc() {
    var playlists = $i("playlists"),
    selectedValue = playlists.options[playlists.selectedIndex].value;
    switch (selectedValue) {
        case 'nightcore':
            webamp.setTracksToPlay(nightcore);
            break;
        case 'all':
            webamp.setTracksToPlay(allTracks, []);
            break;
        case 'coub':
            // START Create single array // that contain coubsong array and othersong with number
            allcoub = coubsong.concat(/*[othersong[15]]*/);
            // END Create single array //
            webamp.setTracksToPlay(allcoub);
            break;
        case 'phonk':
            webamp.setTracksToPlay(phonk);
            break;
        case 'classics':
            webamp.setTracksToPlay(classics);
            break;
        case 'phonk_radio':
            webamp.setTracksToPlay([
                {
                    metaData: {
                         title: "[DOPEPHONK] The Sound of Phonk / 24/7 Phonk Radio / Website: https://dopephonk.net/"
                     },
                     url: "https://edge01.atomicradio.eu/dopephonk/highquality"
                 }
                ]);
            break;
        case 'custom':
            let radio = prompt("Type url of radio/stream");
            webamp.setTracksToPlay([
                {
                    metaData: {
                         title: "Custom Radio (no title)"
                     },
                     url: radio
                 }
                ]);
            break;
        default:
            // kod dla innych wartości
            break;
      }
    }
// START set Background with url // if CustomBG have value then set value to input
if (isNaN(localStorage.getItem('CustomBG'))) $i('imagebgurl').value = `${localStorage.CustomBG}`;
// when click Save & Load then create object named CustomBG with url to background and set new background from CustomBG
$i('saveload').addEventListener('click', function () {
    var BG = $i('imagebgurl').value;
    localStorage.setItem('CustomBG',BG);
// when input has spaces or = null then removes object named CustomBG and set default background, if doesnt includes spaces or != null then set background from CustomBG
    if (localStorage.getItem('CustomBG').includes(' ') || localStorage.getItem('CustomBG') === '') {localStorage.removeItem('CustomBG'); document.body.style.backgroundImage = `url(https://i.ytimg.com/vi/X10UD5nQDCs/maxresdefault.jpg)`;} 
    else {$i('videobg').src = `${localStorage.CustomBG}`;document.body.style.backgroundImage = `url(${localStorage.CustomBG})`;}
});
// END set Background with url //

// code by Byushee#5808
const image_input = $q("#custombg"),
image_output = $q("#reset"), // button to clear user settings
vid_bg_dark = $q("#vid_bg_dark");
var uploaded_image;

image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
// when somehow uploaded file is video then send alert to you that you cant do that, if is image then set as background
        if (!image_input.files[0].type.startsWith('image/') && $i('experiments').checked === false) {alert('This is not a image file! If you want background as video use URL option')} else {
        uploaded_image = reader.result;
// check if converted to Base64 uploaded_image have less than 10 MB
//        if (uploaded_image.length > 10 * 1024 * 1024) {
//            alert('File is too large!');
//          } else {
        document.body.style.backgroundImage = `url(${uploaded_image})`;
        document.body.style.backgroundBlendMode = 'unset';
// saving uploaded image to object CustomBG
        localStorage.setItem('CustomBG', `${uploaded_image}`);
    }});
    reader.readAsDataURL(this.files[0]);
});

image_output.addEventListener('click', function () {
        document.body.style.backgroundImage = `url(https://i.ytimg.com/vi/X10UD5nQDCs/maxresdefault.jpg)`;
        document.body.style.backgroundBlendMode = 'overlay';
        // START my code
        localStorage.removeItem('CustomBG');
        $i('imagebgurl').value = '';
        $i('videobg').src = '';
        // END my code
    });

vid_bg_dark.addEventListener('change', function () {
    $q('body > video').setAttribute('style',`filter: brightness(${this.value}%);`)
});
console.log("%c[Music] %c(v05012023) %cSuccesfully Loaded","color: purple","color: gray; font-size: 75%","color: white");