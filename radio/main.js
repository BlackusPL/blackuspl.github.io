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
        }
    ],
    initialSkin: {
        url: "./anime_amp_2.wsz"
    },
});
webamp.renderWhenReady(document.getElementById('app'));

document.getElementById("tab").innerHTML = '<div class="navbar"><a href="../">Home</a><a href="../pages">Pages</a><a href=".">Music Player</a><div class="subnav">    <button class="subnavbtn">Social Links ↡ <i class="fa fa-caret-down"></i></button>    <div class="subnav-content">        <a href="https://www.youtube.com/c/BlackusPL">Youtube</a>       <a href="https://discord.com/users/410243501494894603">Discord</a>        <a href="https://github.com/BlackusPL">Github</a>    </div></div><div class="subnav">    <button class="subnavbtn">Games ↡ <i class="fa fa-caret-down"></i></button>   <div class="subnav-content">   <a href="../SNS">Saiko No Sutoka Download</a>       <a href="../MR2000">Music Racer 2 Download</a>        <a href="../NSR">Nitro Stunt Race Download</a>        <a href="">More comming soon...</a>    </div></div><a href="../about">About Me</a></div>';