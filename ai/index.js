function check() {
  if (document.getElementById('freekey').checked) { document.getElementById('apikey').disabled = true } else { document.getElementById('apikey').disabled = false }
}
function ask(prompt) {
  try {
    var apikey = document.getElementById('apikey').disabled;
    if (apikey == true) { apikey = 'free' } else { apikey = document.getElementById('apikey').value }
    const textPrompt = document.getElementById('textprompt');
    textPrompt.value = '';
    const userEle = document.getElementById('user');
    const title = `<img style="width: 24px !important;" name="userav"> <b>User</b><pre>${prompt}</pre>`;
    const loading = '<div id="loading"><img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>Loading chatbot...</pre></div>';
    userEle.insertAdjacentHTML('beforebegin', title + loading);
    for (var i = 0; i < document.getElementsByName('userav').length; i++) {
      // if (document.getElementsByName('userav')[i].getAttribute('src') === null || document.getElementsByName('userav')[i].getAttribute('src') === '')
      document.getElementsByName('userav')[i].setAttribute('src',document.getElementById('avatarurl').value ? document.getElementById('avatarurl').value : 'https://modworkshop.net/mydownloads/previews/138412_1676797152_574dcace40fa8cdc397f34c4408edc89.gif');
    }

    const xhr = new XMLHttpRequest();
    if (apikey == 'free') { xhr.open('POST', 'https://chatgpt-api.shn.hk/v1', true) } else {
      xhr.open('POST', 'https://api.openai.com/v1/chat/completions', true);
      xhr.setRequestHeader('Authorization', 'Bearer ' + apikey);
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);
          const msg = response.choices[0].message.content;
          userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${msg.slice(1)}</pre>`);
        } else {
          const msg = this.status === 429 ? 'Too many requests' : `Error ${this.status}`;
          userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${msg}</pre>`);
        }
        document.getElementById('loading').remove();
      }
    };
    xhr.send(JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': [{ 'role': 'user', 'content': prompt }]
    })); 
  } catch (error) {
    console.error(error);
  }
}
