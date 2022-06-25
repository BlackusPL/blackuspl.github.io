const Webamp = window.Webamp;
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
                artist: "Coub",
                title: "Timberlake"
            },
            url: "https://cdn2.coubovich.com/coub_storage/coub/simple/cw_looped_audio_med/b10eda0921b/e22cc222e869fe5902f54/1630299814_mp3-med.mp3",
            duration: 257
        },
        {
            metaData: {
                artist: "Coub",
                title: "Drive Forever (Chill version)"
            },
            url: "https://cdn2.coubovich.com/coub_storage/coub/simple/cw_looped_audio_med/392bb1b2254/1e0b1e4564d318daa2198/1636476658_mp3-med.mp3",
            duration: 154
        },
        {
            metaData: {
                artist: "Coub",
                title: "Chika Dance (Remix)"
            },
            url: "https://cdn2.coubovich.com/coub_storage/coub/simple/cw_looped_audio_med/58f13a65dd9/63748420a128bed838c91/1605681684_med_1593801249_med.mp3",
            duration: 172
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
                artist: "Taca a Xere pra Mim",
                title: "MC Kaique da VP"
            },
            url: "Taca a Xere pra Mim - MC Kaique da VP.mp3",
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
                 artist: "CryJaxx",
                 title: "Lollipop (feat. Justtjokay)"
             },
             url: "CryJaxx - Lollipop (feat. Justtjokay).m4a",
             duration: 179
         },
         {
            metaData: {
                 title: "RMF MAXXX Śląsk"
             },
             url: "http://217.74.72.6/rmf_maxxx_slk",
             duration: -1
         }
    ],
    initialSkin: {
        url: "./yuzuki_kokubunji.wsz"
    },
});
webamp.renderWhenReady(document.getElementById('app'));

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
document.getElementById("tab").innerHTML = '<!--The tab to move in the website-->\
<ul>\
\
  <a href=".." style="margin-left: 0px;">Home</a>\
  <a href="../games">Games</a>\
  <a href="">Music Player</a>\
  <div class="dropdown">\
    <button class="dropbtn">Social Links ↡ </button>\
    <div class="showtasks">\
      <a href="https://www.youtube.com/c/BlackusPL">Youtube</a>\
      <a href="https://discord.com/users/410243501494894603">Discord</a>\
      <a href="https://github.com/BlackusPL">Github</a>\
  </div></div>\
  <a href="../about">About Me</a>\
  <a href="../news">News</a>\
  <div class="dropdown">\
  <button class="dropbtn">Languages ↡ </button>\
  <div class="showtasks">\
    <a onclick="jezyk()">Polish</a>\
    <a onclick="jezykoff()">English</a>\
  </div></div>\
  <a href="https://cse.google.com/cse?cx=f57e79ca12bca49ec">Search</a>\
\
  </ul>\
  <!--end-->';