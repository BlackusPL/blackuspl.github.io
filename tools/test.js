// TEST!!! [/BDPlugins/test.png]
document.getElementsByClassName('navbar')[0].insertAdjacentHTML('afterend', `<div class="navbar">
<div class="navbar-items" id="tab">
  <ul class="navbar-links logo">
    <li class="navbar-link">
      <img src="/BDPlugins/icon.png" class="icon">
    </li>
  </ul>
  <ul class="navbar-links main">
    <li class="navbar-link" style="width: 0; height: 70px;"></li>
    <li class="navbar-link">
      <a href="/" class="navbar-item">
        <span>Home</span>
      </a>
    </li>
    <li class="navbar-link">
      <a href="/games" class="navbar-item">
        <span>Games</span>
      </a>
    </li>
    <li class="navbar-link">
      <a href="/music" class="navbar-item">
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
      <a class="navbar-item">
        <span>Tools ↡ </span>
      </a>
      <div class="showtasks">
        <a href="/about">My Projects</a>
        <a href="/gallery">Gallery</a>
        <a href="/BDPlugins">BDPlugins</a>
        <a href="/textonimage">TextonImage</a>
        <a href="/ai">AI Chat</a>
        <a href="/codeopen">Code Opener</a>
      </div>
    </li>
    <li class="navbar-link">
      <a href="/news" class="navbar-item">
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
    <a href="https://cse.google.com/cse?cx=f57e79ca12bca49ec">Search</a>
    <li class="navbar-link">
      <div id="google_translate_element" class="navbar-item">
        <noscript>You need to enable JavaScript to able to use Translator.</noscript>
      </div>
    </li>
    <a class="secret" href="/secret.html">Secret</a>
  </ul>    
</div>
</div>`);
document.getElementsByClassName('navbar')[0].remove();