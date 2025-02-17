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
        // Get banner from discord or from usrbg
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
            return document.getElementsByClassName('card')[0].style = `background-image: url(${bg})`;
        })

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