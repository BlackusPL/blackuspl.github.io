// Dodaje elementy dla wstawienia danych
document.querySelector('.card').innerHTML = `
<div id="card-title">@unknown</div>
<div class="user-info">
  <div id="pfp-info">
    <img id="pfp" src="https://placehold.co/128/000/FFF?text=Profile\nPicture" alt="Profile Picture" width="128px" style="border-radius: 100%">
    <div id="username">Loading...</div>
    <div id="status"></div>
  </div>
  <div id="activity">
    <div id="activity-icon"></div>
    <div id="activity-name" style="font-weight: bold;"></div>
    <div id="activity-state"></div>
    <div id="activity-detail"></div>
  </div>
</div>
`;

// Szuka po div class "card"
function discordprofile(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.lanyard.rest/v1/users/${id}`, true);
    xhr.onload = function () {
      if (this.status == 200) {
        const discord_data = JSON.parse(this.responseText);
        let avatar_url = `https://cdn.discordapp.com/avatars/${discord_data.data.discord_user.id}/${discord_data.data.discord_user.avatar}?size=4096`;
        if (discord_data.data.discord_user.discriminator == "0")
          {var disusername = `<a href="https://discord.com/users/${discord_data.data.discord_user.id}" style="text-decoration: unset;color: unset;"> @${discord_data.data.discord_user.display_name} </a>`} 
            else
          {var disusername = `<a href="https://discord.com/users/${discord_data.data.discord_user.id}" style="text-decoration: unset;color: unset;">${discord_data.data.discord_user.username}#${discord_data.data.discord_user.discriminator}</a>`}
        document.getElementById('username').innerHTML = disusername;
        /*fetch(avatar_url + '.gif?size=4096')
        .then(response => {
          if (response.ok) {
            return document.getElementById('pfp').src = avatar_url + '.gif?size=4096';
          }
          throw document.getElementById('pfp').src = avatar_url + '.webp?size=4096';
        });*/
        document.getElementById('pfp').src = avatar_url;
        // Check if user have nameplate // for now disabled
        // if (discord_data.data.discord_user.collectibles?.nameplate == undefined) {
        //   document.getElementsByClassName('card')[0].insertAdjacentHTML('afterbegin', `
        //     <video src="https://cdn.discordapp.com/assets/collectibles/${discord_data.data.discord_user.collectibles.nameplate.asset}asset.webm" loop="" autoplay="" style="position: absolute;right: 0;top: 0;width: auto;height: 100%;z-index: -1;" disablepictureinpicture="" muted=""></video>
        //     `)
        // } else {
        // Get banner from discord or from usrbg // sometimes must be https://corsproxy.io?url=
        fetch(`https://corsproxy.io/?https://widgets.vendicated.dev/user?id=${discord_data.data.discord_user.id}&theme=dark&banner=true&full-banner=true&rounded-corners=false&discord-icon=true&badges=true&guess-nitro=true&`)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser()
            // First check if user have banner from nitro, if not use usrbg banner without checking if user exist in usrbg database
            if (parser.parseFromString(data, "text/html")?.querySelectorAll('.banner img')[0]?.src == undefined) {
              // Banner from usrbg
              var bg = `https://usrbg.is-hardly.online/usrbg/v2/${discord_data.data.discord_user.id}?9807=&size=1024&format=gif`;
            } else {
              // Banner from Discord
              var bg = parser.parseFromString(data, "text/html").querySelectorAll('.banner img')[0]?.src;
            };
            return document.getElementsByClassName('card')[0].style['backgroundImage'] = `url(${bg})`;
          })
        //}
        document.getElementById('card-title').innerHTML = "@" + discord_data.data.discord_user.username.toLowerCase() + " > profile";
        function status() {document.getElementById('status').innerHTML = "Status: " + discord_data.data.discord_status}
        function activity(type) {document.getElementById('activity-name').innerHTML = type + discord_data.data.activities[0]?.name
        document.getElementById('activity-state').innerHTML = discord_data.data.activities[0]?.state ? discord_data.data.activities[0].state : null;
        document.getElementById('activity-detail').innerHTML = discord_data.data.activities[0]?.details ? discord_data.data.activities[0].details : null;
      switch (discord_data.data.activities[0]?.assets.large_image?.split(":")[0]) {
        default:
          document.getElementById('activity-icon').innerHTML = discord_data.data.activities[0].assets.large_image ? `<img src="${discord_data.data.activities[0].assets.large_image}">` : null;
        break;
        case 'mp':
          document.getElementById('activity-icon').innerHTML = `<img src="//media.discordapp.net/${discord_data.data.activities[0].assets.large_image.split(":")[1]}">`;
        break;
        case 'spotify':
          document.getElementById('activity-icon').innerHTML = `<img src="${discord_data.data.spotify.album_art_url}">`;
          document.getElementById('activity-detail').innerHTML = `<a style="color: #FFF" href="https://open.spotify.com/track/${discord_data.data.spotify.track_id}">${discord_data.data.activities[0].details}</a>`;
        break;
      }
      /*switch (discord_data.data.activities[0].id) {
      }*/}
      const pc = `<svg width="18" height="18" viewBox="-3 -5 28 28"><path fill="currentColor" d="M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"></path></svg>`;
      const mobile = `<svg width="18" height="18" transform="scale(0.9)" viewBox="-3 -5 32 44"><path fill="currentColor" d="M 2.882812 0.246094 C 1.941406 0.550781 0.519531 2.007812 0.230469 2.953125 C 0.0585938 3.542969 0 7.234375 0 17.652344 L 0 31.554688 L 0.5 32.558594 C 1.117188 33.769531 2.152344 34.5625 3.519531 34.847656 C 4.210938 35 7.078125 35.058594 12.597656 35 C 20.441406 34.941406 20.691406 34.925781 21.441406 34.527344 C 22.347656 34.054688 23.078125 33.3125 23.578125 32.386719 C 23.921875 31.761719 23.941406 30.964844 24 18.085938 C 24.039062 8.503906 24 4.167969 23.847656 3.464844 C 23.558594 2.121094 22.75 1.097656 21.519531 0.492188 L 20.5 0 L 12.039062 0.0195312 C 6.402344 0.0390625 3.328125 0.113281 2.882812 0.246094 Z M 20.382812 14.582031 L 20.382812 22.917969 L 3.652344 22.917969 L 3.652344 6.25 L 20.382812 6.25 Z M 13.789062 27.539062 C 14.5 28.296875 14.597656 29.035156 14.132812 29.925781 C 13.308594 31.496094 10.671875 31.421875 9.902344 29.8125 C 9.539062 29.054688 9.539062 28.730469 9.902344 28.011719 C 10.691406 26.535156 12.632812 26.308594 13.789062 27.539062 Z M 13.789062 27.539062 "></path></svg>`;
      const web = `<svg width="18" height="18" viewBox="-3 -5 28 28"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"></path></svg>`;
      const xbox = `<svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18"><path d="m11.0044 21.9585c-1.53959-.1466-3.09923-.6996-4.44082-1.5746-1.12356-.7329-1.3772-1.0327-1.3772-1.6346 0-1.2059 1.32825-3.3201 3.59762-5.7275 1.2904-1.3681 3.0859-2.9715 3.2795-2.9293.3782.0844 3.3973 3.0292 4.5276 4.4128 1.7888 2.1942 2.612 3.9886 2.1937 4.7882-.3182.6085-2.2872 1.7966-3.7333 2.2519-1.1926.3775-2.7589.5374-4.0471.4131zm-7.33315-4.4617c-.93222-1.4302-1.40389-2.8405-1.63306-4.877-.07564-.6729-.04894-1.0571.17132-2.4385.27366-1.72113 1.2526-3.71101 2.43178-4.93691.50282-.5219.54732-.53523 1.15916-.32869.7431.25096 1.53516.79729 2.76551 1.90993l.71863.64849-.39157.48192c-1.82217 2.23416-3.74223 5.40106-4.46532 7.35986-.3938 1.0638-.55176 2.1343-.38267 2.5784.11346.2998.0089.1888-.37378-.3975zm16.37505.2421c.0912-.4487-.0245-1.2748-.2981-2.1076-.5896-1.8033-2.5675-5.1613-4.383-7.44207l-.5718-.71734.6185-.56853c.8076-.74176 1.3683-1.18593 1.9734-1.56126.4784-.29759 1.1592-.55965 1.4529-.55965.1802 0 .8165.65959 1.3305 1.38137.7965 1.11486 1.3816 2.46958 1.6775 3.87758.1913.9106.2069 2.8582.0312 3.7643-.1447.744-.4517 1.7101-.7498 2.3675-.2247.4908-.781 1.4435-1.0257 1.7544-.1246.1555-.1246.1555-.0556-.1887zm-8.8772-13.29846c-.8388-.4264-2.13147-.88167-2.84565-1.00604-.25141-.0422-.67636-.06663-.95002-.0533-.58959.02887-.56289 0 .38268-.44639.78538-.37088 1.44171-.58853 2.33169-.77508 1.0012-.21098 2.8812-.2132 3.8668-.00444 1.0635.22431 2.3161.69068 3.0214 1.12375l.2091.12881-.4806-.02443c-.9567-.04886-2.3494.33757-3.8468 1.066-.4516.21987-.8432.39531-.8721.38865-.0267-.00444-.396-.18433-.8165-.39753z"/></svg>`;
      const ps = `<svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18"><path clip-rule="evenodd" d="m23.6687 17.1554c-.4641.5856-1.6012 1.0033-1.6012 1.0033l-8.459 3.0384v-2.2408l6.2252-2.218c.7065-.2532.8149-.611.2407-.7988-.5731-.1883-1.6109-.1343-2.3179.1198l-4.148 1.461v-2.3255l.2391-.081s1.1986-.4242 2.8841-.6109c1.6854-.1856 3.7491.0254 5.3692.6395 1.8258.5769 2.0314 1.4275 1.5678 2.013zm-9.255-3.8155v-5.73031c0-.67298-.1241-1.29254-.7555-1.46793-.4836-.15489-.7836.29412-.7836.96656v14.35008l-3.87007-1.2283v-17.11c1.64547.30545 4.04277 1.02754 5.33147 1.46199 3.2775 1.12523 4.3887 2.52569 4.3887 5.68121 0 3.0756-1.8986 4.2413-4.311 3.0767zm-12.51026 5.3822c-1.8743097-.5278-2.186244-1.6277-1.331932-2.2612.789552-.5851 2.132272-1.0254 2.132272-1.0254l5.54898-1.9731v2.2494l-3.99309 1.4291c-.70536.2531-.81383.6114-.24069.7992.57368.1878 1.61202.1344 2.31846-.1192l1.91532-.6952v2.0125c-.12143.0216-.25689.0432-.38209.0642-1.91586.313-3.95639.1824-5.96723-.4803z"/></svg>`;
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
        // Sprawdza ilość aktywności i czy istnieje taka która emuluje daną kosnolę
        for (p of discord_data.data?.activities) {
          if (p.platform == 'xbox') {
            document.getElementById('status').insertAdjacentHTML('beforeend', xbox);
            continue;
          }
          if (p.platform == 'ps4' || p.platform == 'ps5') {
            document.getElementById('status').insertAdjacentHTML('beforeend', ps);
            continue;
          }
        }
        discord_data.data.active_on_discord_web ? document.getElementById('status').insertAdjacentHTML('beforeend', web) : undefined;
        discord_data.data.active_on_discord_mobile ? document.getElementById('status').insertAdjacentHTML('beforeend', mobile) : undefined;
        discord_data.data.active_on_discord_desktop ? document.getElementById('status').insertAdjacentHTML('beforeend', pc) : undefined;
      //if (typeof discord_data.data.activities[0] !== 'undefined')
        switch (discord_data.data.activities[0]?.type) {
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