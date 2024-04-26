// Saves apikey in session storage
document.getElementById('apikey').value = sessionStorage.getItem('apikey');

document.getElementById('send_prompt').addEventListener('click', function () {
  sessionStorage.setItem('apikey', document.getElementById('apikey').value);
});

document.getElementById('apilist').addEventListener('change', function () {
  if (document.getElementsByName('api')[0][2].selected) {
    document.getElementById('capilist').style = '';
  } else {
    document.getElementById('capilist').style = 'display: none';
  }
});

function ask(prompt) {
  try {
    const textPrompt = document.getElementById('textprompt');
    // set textprompt value to null/empty
    textPrompt.value = '';
    const userEle = document.getElementById('user');
    const title = `<img style="width: 24px !important;" name="userav"> <b>User</b><pre>${prompt}</pre>`;
    const loading = '<div id="loading"><img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>Loading chatbot...</pre></div>';
    userEle.insertAdjacentHTML('beforebegin', title + loading);
    for (var i = 0; i < document.getElementsByName('userav').length; i++) {
      // if (document.getElementsByName('userav')[i].getAttribute('src') === null || document.getElementsByName('userav')[i].getAttribute('src') === '')
      document.getElementsByName('userav')[i].setAttribute('src',document.getElementById('avatarurl').value ? document.getElementById('avatarurl').value : 'https://storage.modworkshop.net/mods/images/138412_1676797152_574dcace40fa8cdc397f34c4408edc89.gif');
    }

    switch(document.getElementById('apilist').value) {
      case 'OpenAI':
        api = 'https://api.openai.com/v1/chat/completions';
        model = "gpt-3.5-turbo";
        key = 'Bearer ' + document.getElementById('apikey').value;
      break;
      case 'Pawan.Krd':
        api = 'https://api.pawan.krd/v1/chat/completions';
        model = "pai-001-light";
        key = 'Bearer ' + document.getElementById('apikey').value;
      break;
      case 'customapi':
        api = document.getElementById('customapi').value;
        model = document.getElementById('model').value;
        if (document.getElementById('apikey').value !== '') {
          key = 'Bearer ' + document.getElementById('apikey').value;
        } else {
          key = '';
        }
      break;
    }
      $.ajax({
        url: api,
        crossDomain: true,
        method: 'post',
        headers: {
          'Authorization': key
        },
        contentType: 'application/json',
        data: JSON.stringify({
          'model': model,
          'max_tokens': 100,
          'messages': [
            {
              'role': 'system',
              'content': 'You are an helpful assistant.'
            },
            {
              'role': 'user',
              'content': prompt
            }
          ]
        })
      }).done(function(response) {
        var msg = response.choices[0].message.content;
        userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${msg}</pre>`);
        document.getElementById('loading').remove();
        //console.log(response);
      });
  } catch (error) {
    console.error(error);
  }
}
