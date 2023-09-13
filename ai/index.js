function ask(prompt) {
  try {
    //var apikey = document.getElementById('apikey').disabled;
    //if (apikey === true) { apikey = 'free' } else { apikey = document.getElementById('apikey').value }
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

    if (document.getElementById('customapi').value == '') { customapi = 'https://api.openai.com/v1/chat/completions' } else { customapi = document.getElementById('customapi').value }
    const xhr = new XMLHttpRequest();
    xhr.open('POST', customapi , true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + document.getElementById('apikey').value); // free https://free.churchless.tech/v1/chat/completions
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
          switch(this.status) {
          default:
          var msg = `Error ${this.status}`;
          userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${msg}</pre>`);
          break;
          case 200:
          const response = JSON.parse(this.responseText);
          var msg = response.data.choices[0].message.content;
          userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${msg.slice(1)}</pre>`);
          break;
          case 429:
          var msg = 'Too many requests';
          //const msg = this.status === 429 ? 'Too many requests' : `Error ${this.status}`;
          userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${msg}</pre>`);
          break;
          case 405:
          var msg = 'Method Not Allowed';
          userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${msg}</pre>`);
          break;
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
