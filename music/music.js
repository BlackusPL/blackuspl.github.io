// check if your browser support javascript? or can run webamp
if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("What's the point of anything?")
}
if(!window.WebGLRenderingContext) {
    alert("Oh no! Your browser have WebGL disabled!")
    throw new Error("What's the point of turning this off?")
}

document.querySelector('main').insertAdjacentHTML('beforebegin', `
    <input id="toggle" class="toggle-btn" type="checkbox" style="display: none;" /><label class="fas" for="toggle">Show/Hide</label>
    <div id="custombg_window"></div>
    `);

document.getElementById('custombg_window').innerHTML = `Set custom background<br>
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
let [classics, nightcore] = [
    [
        {
            "metaData": {
                "artist": "Pitbull",
                "title": "Give Me Everything"
            },
            "url": "https://autumn.revolt.chat/attachments/Q0lKeNKtf2tb4w8eUb1fgF-nsx16Lj67xoB6N7mz8r"
        },
        {
            "metaData": {
                "artist": "David Guetta",
                "title": "Sexy Bitch"
            },
            "url": "https://autumn.revolt.chat/attachments/s24qDuASEiwdix3FHgjCEJ64gu6TEPPEWklVo_XmhP"
        },
        {
            "metaData": {
                "artist": "Guru",
                "title": "Infinity 2008"
            },
            "url": "./local_music/Guru - Infinity 2008.ogg"
        },
        {
            "metaData": {
                "artist": "Inna",
                "title": "Sun is Up"
            },
            "url": "./local_music/Inna - Sun is Up.ogg"
        },
        {
            "metaData": {
                "artist": "Tom Boxer",
                "title": "Deep in Love"
            },
            "url": "./local_music/Tom Boxer - Deep in Love.ogg"
        },
        {
            "metaData": {
                "artist": "Morandi",
                "title": "Save me"
            },
            "url": "./local_music/Morandi - Save me.ogg"
        },
        {
            "metaData": {
                "artist": "Pitbull",
                "title": "Rain Over Me (Nightcore)"
            },
            "url": "./local_music/Pitbul - rain over me.ogg"
        },
    ],
    [
        {
            "metaData": {
                "artist": "Nightcore",
                "title": "Day after day"
            },
            "url": "./local_music/Nightcore_-_Day_after_day.m4a"
        },
        {
            "metaData": {
                "artist": "Nightcore Lab NCL",
                "title": "Die Young"
            },
            "url": "./local_music/Nightcore - Die Young.m4a"
        },
        {
            "metaData": {
                "artist": "NightcoreLounge",
                "title": "How Do You Do (Remix)"
            },
            "url": "./local_music/How do you do.m4a"
        }
    ]
];
let coubsong = [
    {
        "metaData": {
            "artist": "Coub / BlackusPL",
            "title": "𝕐𝕠𝕜𝕠𝕤𝕠 (AVANGARD)",
            "coubid": "3fqoo8"
        },
        "url": "./local_music/1727735865_looped_1727735864.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / CiroCool",
            "title": "Dont say goodbye",
            "coubid": "2odxle"
        },
        "url": "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_looped_audio_high/1cac8d6fb7b/2aab10d9c9a3b000f1153/1611604087_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / C152",
            "title": "Back in Time"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/326e1433e1a/4b2f58f6a3fd0f9408fcb/1672467562_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub",
            "title": "Clean Flow"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/b42138495a3/39719a4de577c92b69012/1605700433_high_1576103466_high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub",
            "title": "Chika Dance (Remix)"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_med/58f13a65dd9/63748420a128bed838c91/1605681684_med_1593801249_med.mp3"
    },
    {
        "metaData": {
            "artist": "Coub",
            "title": "ᗪᕮᗩᗪ IᑎSIᗪᕮ"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/45d42a28406/9eb953b2790c82a40ea68/1668781698_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / TRVNSPORTER",
            "title": "Gimme Gimme Gimme"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/dd3704a9709/ab421f7a8f884a4d64ac8/1668471951_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / Korenburg",
            "title": "I'm Good (BeyBo Remix)"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/a25baa9fe35/f86091bea2dbb2bff8f80/1670458382_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / ucaromantic",
            "title": "Polozhenie (slowed + reverb)"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/4d0bc7a581b/e88e7d8f2b558f8a4029e/1636476662_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub",
            "title": "Timberlake"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/887b0aeddcc/ce72175c69ff0aac305da/1630299817_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / CYPARISS",
            "title": "TWXSIDES"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/ff24745721d/4951e9a72f86141dda57e/1668825480_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / BLESSED MANE",
            "title": "Youth"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/27982a5a95b/388d71bd77c31fc1e08ac/1609800684_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / DJ Baddmixx",
            "title": "Ziyad's 9Min WarmUp 128Bpm"
        },
        "url": "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/4e8ed359cb8/4e28eef57d8c523b22d87/1605668806_high_1548410069_high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / YCK",
            "title": "The Game Wasn't Mine to Keep"
        },
        "url": "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/19378f95fe4/745357923e559dda77824/1679879701_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / CREEPYMANE",
            "title": "Long Nights"
        },
        "url": "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/397b0ccf125/b5d252ca891806b72ed59/1644715514_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / Fraunhofer Diffraction",
            "title": "Someday",
            "coubid": "3c2dbl"
        },
        "url": "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/e53f8ea00e1/d0788342953689389fbd1/1689180385_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / ZeFilla",
            "title": "Shadow lady (phonk remix)",
            "coubid": "3c0l21"
        },
        "url": "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/75382d50aff/00be26cf0f06651aff2e6/1688670809_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / 1stSin",
            "title": "Sexy Bitch",
            "coubid": "2tyu08"
        },
        "url": "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_looped_audio_high/3d6fe6dce26/8fbc4169c2af70deebc0f/1625774595_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / Danny & Freja",
            "title": "If Only You",
            "coubid": "32zjkg"
        },
        "url": "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/abf5a1f538c/887870130f4a4f04a13c2/1654446694_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / FakeKaway",
            "title": "ambience",
            "coubid": "3e5gsf"
        },
        "url": "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/52a92fd4280/f4e8e4481602f5b28457a/1712197691_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / PHANTASZZ",
            "title": "ИΞНΔВNЖУ",
            "coubid": "3e4b5r"
        },
        "url": "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/20d4a216063/ae9e40c74e606efb0a608/1711827997_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / removed coub",
            "title": "fivevfire",
            "coubid": "2a6bab"
        },
        "url": "./local_music/2a6bab.webm"
    },
    {
        "metaData": {
            "artist": "Coub / Almogfx",
            "title": "nightrun",
            "coubid": "3vkthx"
        },
        "url": "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_looped_audio_high/d11b7ddc8e9/f7b1bbd8b5885473ba33f/1733785492_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / Hugeloud",
            "title": "Redlight",
            "coubid": "3vj9fi"
        },
        "url": "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_looped_audio_high/2ca5e461245/588a330f668f9b4afac22/1733759061_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / DRKHVN!",
            "title": "Saga Drive",
            "coubid": "3rhe05"
        },
        "url": "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_looped_audio_high/17e9a4223eb/5cf8d129be2ce7faf8def/1731946626_mp3-high.mp3"
    },
    {
        "metaData": {
            "artist": "Coub / GRAVECHILL",
            "title": "God Is Dead",
            "coubid": "41w80b"
        },
        "url": "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_looped_audio_high/3fca0e177e1/5985bda67fe6b1527f843/1737218204_mp3-high.mp3"
    }
];
let othersong = [
    {
        "metaData": {
            "artist": "2Scratch",
            "title": "CLOSER."
        },
        "url": "https://autumn.revolt.chat/attachments/7fBSCsrPZNn4FnIVFaHkcSa6UGoCg6_g5exW_y99As/2Scratch%20-%20CLOSER..mp3"
    },
    {
        "metaData": {
            "artist": "Amøn",
            "title": "Forward Anxious"
        },
        "url": "./local_music/Amøn - Forward Anxious.m4a",
        "_comment": "duration: 260 https://cors-anywhere.riolubruh.repl.co https://cors-anywhere.herokuapp.com"
    },
    {
        "metaData": {
            "artist": "iwilldiehere",
            "title": "LUV & PAIN"
        },
        "url": "https://autumn.revolt.chat/attachments/qwyEOzKZhKfRapFJ70HNfnS6kipmnob1tCWpcaHyDO/LUV%20&%20PAIN.mp3"
    },
    {
        "metaData": {
            "artist": "CryJaxx",
            "title": "Lollipop (feat. Justtjokay)"
        },
        "url": "./local_music/CryJaxx - Lollipop (feat. Justtjokay).m4a"
    },
    {
        "metaData": {
            "artist": "DVRST",
            "title": "You remember it"
        },
        "url": "./local_music/DVRST - You remember it.ogg"
    },
    {
        "metaData": {
            "artist": "g3ox_em",
            "title": "GigaChad Theme (Phonk House Version)"
        },
        "url": "https://us-east-1.tixte.net/uploads/blackuspl.discowd.com/g3ox_em_-_GigaChad_Theme_(Phonk_House_Version).mp3"
    },
    {
        "metaData": {
            "artist": "IceSenpai",
            "title": "stereo love (tiktok version)"
        },
        "url": "./local_music/stereo love (tiktok version).m4a"
    },
    {
        "metaData": {
            "artist": "Kim & Antent",
            "title": "Never Be"
        },
        "url": "./local_music/kim & Antent - Never Be.m4a"
    },
    {
        "metaData": {
            "artist": "Ryu",
            "title": "Din Don Dan"
        },
        "url": "./local_music/Din_Don_Dan.mp3"
    },
    {
        "metaData": {
            "artist": "SAGE",
            "title": "Liberation"
        },
        "url": "./local_music/SAGE_-_LIBERATION.mp3",
        "credits": "https://www.youtube.com/watch?v=Uc5uxHKClQk"
    },
    {
        "metaData": {
            "artist": "Sergio Valentino",
            "title": "Drive Forever (xakavir Remix)"
        },
        "url": "./local_music/Sergio Valentino - Drive Forever (xakavir Remix).m4a"
    },
    {
        "metaData": {
            "artist": "Skan Kai",
            "title": "See You Again"
        },
        "url": "https://us-east-1.tixte.net/uploads/blackuspl.discowd.com/Skan_-_See_You_Again.mp3"
    },
    {
        "metaData": {
            "artist": "The FifthGuys, Skan, Drama B",
            "title": "Armageddon"
        },
        "url": "./local_music/The FifthGuys, Skan, Drama B - Armageddon.mp3"
    },
    {
        "metaData": {
            "artist": "4URA & JSTN DMND",
            "title": "Your Highness"
        },
        "url": "./local_music/4URA & JSTN DMND - Your Highness [NCS Release].mp3"
    },
    {
        "metaData": {
            "artist": "Skeler",
            "title": "ID"
        },
        "url": "./local_music/Skeler_-_ID.mp3"
    },
    {
        "metaData": {
            "artist": "Tanir & Tyomcha",
            "title": "Da Da Da (Slowed Version)"
        },
        "url": "./local_music/Dadada (Slowed version).mp3"
    },
    {
        "metaData": {
            "artist": "RbowChickenn",
            "title": "escape from everyone"
        },
        "url": "./local_music/RbowChickenn - escape from everyone.mp3"
    },
    {
        "metaData": {
            "artist": "Cyrex",
            "title": "TAKE ME"
        },
        "url": "./local_music/TAKE ME.mp3"
    },
    {
        "metaData": {
            "artist": "CYPARISS",
            "title": "Frozen Heart"
        },
        "url": "./local_music/CYPARISS - Frozen Heart (ReVision).mp3"
    },
    {
        "metaData": {
            "artist": "chris marcell",
            "title": "ENIGMA"
        },
        "url": "./local_music/1241026_ENIGMA.mp3"
    }
];
// END Create playlists
let allTracks = othersong.concat(classics, coubsong, nightcore);

const webamp = new Webamp({
    initialTracks: (allTracks),
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
webamp.renderWhenReady(document.getElementById("app"));
webamp.setVolume(10); // default: 75 | 75 is too loud for me
webamp.setSkinFromUrl('./dosamp.wsz');

function changeFunc() {
    var playlists = document.getElementById("playlists");
    var selectedValue = playlists.options[playlists.selectedIndex].value;
    switch (selectedValue) {
        case 'nightcore':
            webamp.setTracksToPlay(nightcore);
            break;
        case 'all':
            webamp.setTracksToPlay(allTracks, []);
            break;
        case 'coub':
            // START Create single array // that contain coubsong array and othersong with number
            var allcoub = coubsong.concat(/*[othersong[15]]*/);
            // END Create single array //
            webamp.setTracksToPlay(allcoub);
            break;
        case 'phonk':
            webamp.setTracksToPlay([
                othersong[1],
                coubsong[9],
                coubsong[0],
                coubsong[2],
                coubsong[11],
                coubsong[10],
                othersong[19],
                othersong[18],
                othersong[17],
                coubsong[3],
                othersong[2],
                othersong[4],
                othersong[5],
                othersong[7],
                othersong[9],
                othersong[14],
                coubsong[4],
                coubsong[14],
                othersong[16],
                coubsong[16],
                coubsong[21],
                coubsong[22],
                coubsong[23],
                coubsong[24],
                coubsong[25],
            ]);
            break;
        case 'classics':
            webamp.setTracksToPlay(classics.concat(
                coubsong[12],
                coubsong[17],
                coubsong[18],
            ));
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
    var BG = document.getElementById('imagebgurl').value;
    localStorage.setItem('CustomBG',BG);
// when input has spaces or = null then removes object named CustomBG and set default background, if doesnt includes spaces or != null then set background from CustomBG
    if (localStorage.getItem('CustomBG').includes(' ') || localStorage.getItem('CustomBG') === '') {localStorage.removeItem('CustomBG'); document.body.style.backgroundImage = `url(https://i.ytimg.com/vi/X10UD5nQDCs/maxresdefault.jpg)`;} 
    else {$i('videobg').src = `${localStorage.CustomBG}`;document.body.style.backgroundImage = `url(${localStorage.CustomBG})`;}
});
// END set Background with url //

// code by Byushee#5808
const image_input = document.querySelector("#custombg");
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

// button to clean user settings
const image_output = document.querySelector("#reset");

image_output.addEventListener('click', function () {
        document.body.style.backgroundImage = `url(https://i.ytimg.com/vi/X10UD5nQDCs/maxresdefault.jpg)`;
        document.body.style.backgroundBlendMode = 'overlay';
        // START my code
        localStorage.removeItem('CustomBG');
        document.getElementById('imagebgurl').value = '';
        $i('videobg').src = '';
        // END my code
    });

const vid_bg_dark = document.querySelector("#vid_bg_dark");
vid_bg_dark.addEventListener('change', function () {
    document.querySelector('body > video').setAttribute('style',`filter: brightness(${this.value}%);`)
});
console.log("%c[Music] %c(v05012023) %cSuccesfully Loaded","color: purple","color: gray; font-size: 75%","color: white");