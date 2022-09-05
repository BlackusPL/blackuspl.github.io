const webamp = new Webamp({
    initialTracks: [{
            metaData: {
                artist: "Skeler",
                title: "ID"
            },
            url: "./Skeler_-_ID.mp3",
            duration: 228
        },
        {
            metaData: {
                artist: "Tanir & Tyomcha",
                title: "Da Da Da (Slowed Version)"
            },
            url: "../uploads/Dadada (Slowed version).mp3",
            duration: 247
        },
        {
            metaData: {
                artist: "Skan Kai",
                title: "See You Again"
            },
            url: "https://blackuspl.discowd.com/r/Skan_-_See_You_Again.mp3",
            duration: 128
        },
        {
            metaData: {
                 artist: "CryJaxx",
                 title: "Lollipop (feat. Justtjokay)"
             },
             url: "CryJaxx - Lollipop (feat. Justtjokay).m4a",
             duration: 179
        },
        {
            metaData: {
                artist: "Skan",
                title: "Running To You (feat. Drama B)"
            },
            url: "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/5277645807e/aab9f1a2d5dd0182dd81b/1659708702_mp3-high.mp3",
            duration: 119
        },
        {
            metaData: {
                artist: "Sergio Valentino",
                title: "Drive Forever (xakavir Remix)"
            },
            url: "Sergio Valentino - Drive Forever (xakavir Remix).m4a",
            duration: 225
        },
        {
            metaData: {
                artist: "Amøn",
                title: "Forward Anxious"
            },
            url: "Amøn - Forward Anxious.m4a",
            duration: 260
        },
        {
            metaData: {
                artist: "IceSenpai",
                title: "stereo love (tiktok version)"
            },
            url: "stereo love (tiktok version).m4a",
            duration: 228
        },
        {
            metaData: {
                artist: "Coub",
                title: "LXTRV-PHONK"
            },
            url: "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/34f7b220323/d00ce902c0a53ad491819/1647016111_mp3-high.mp3",
            duration: 198
        },
        {
            metaData: {
                artist: "Coub",
                title: "Timberlake"
            },
            url: "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/887b0aeddcc/ce72175c69ff0aac305da/1630299817_mp3-high.mp3",
            duration: 257
        },
        {
            metaData: {
                artist: "Coub / ucaromantic",
                title: "Polozhenie (slowed + reverb)"
            },
            url: "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/4d0bc7a581b/e88e7d8f2b558f8a4029e/1636476662_mp3-high.mp3",
            duration: 154
        },
        {
            metaData: {
                artist: "Coub",
                title: "Chika Dance (Remix)"
            },
            url: "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_med/58f13a65dd9/63748420a128bed838c91/1605681684_med_1593801249_med.mp3",
            duration: 172
        },
        {
            metaData: {
                artist: "Coub / DJ Baddmixx",
                title: "Ziyad's 9Min WarmUp 128Bpm"
            },
            url: "https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/4e8ed359cb8/4e28eef57d8c523b22d87/1605668806_high_1548410069_high.mp3",
            duration: 183
        },
        {
           metaData: {
                artist: "Nightcore Lab NCL",
                title: "Die Young"
            },
            url: "Nightcore - Die Young.m4a",
            duration: 178
        },
        {
            metaData: {
                 artist: "NightcoreLounge",
                 title: "How Do You Do (Remix)"
             },
             url: "How do you do.m4a",
             duration: 184
         },
         {
            metaData: {
                 title: "RMF MAXXX Śląsk"
             },
             url: "http://217.74.72.6/rmf_maxxx_slk",
             duration: -2
         }
    ],
    initialSkin: {
        url: "./yuzuki_kokubunji.wsz"
    },
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
    }
}).renderWhenReady(document.getElementById("app"));
// code by Byushee#5808
const image_input = document.querySelector("#custombg");
var uploaded_image;

image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.body.style.backgroundImage = `url(${uploaded_image})`;
        document.body.style.backgroundBlendMode = 'unset';
    });
    reader.readAsDataURL(this.files[0]);
});

const image_output = document.querySelector("#reset");

image_output.addEventListener('click', function () {
        document.body.style.backgroundImage = `url(https://i.ytimg.com/vi/X10UD5nQDCs/maxresdefault.jpg)`;
        document.body.style.backgroundBlendMode = 'overlay';
    });

//
// document.getElementById("tab").innerHTML = '<!--The tab to move in the website-->\ ';