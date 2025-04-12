// Checks if $i is defined
if (typeof $i == 'undefined') {const $i = (e) => document.getElementById(e)};

// Saves apikey in session storage
let apikey = $i('apikey')
apikey.value = sessionStorage.getItem('apikey');

let avatarurl = $i('avatarurl')
avatarurl.value = sessionStorage.getItem('avatarurl');

let customapi = $i('customapi')
customapi.value = sessionStorage.getItem('customapi');

let apimodel = $i('model')
apimodel.value = sessionStorage.getItem('apimodel');

$i('send_prompt').addEventListener('click', function () {
  sessionStorage.setItem('apikey', apikey.value);
  sessionStorage.setItem('avatarurl', avatarurl.value);
  sessionStorage.setItem('customapi', customapi.value);
  sessionStorage.setItem('apimodel', apimodel.value);
});

// Sprawdza czy kliknięto Enter bez SHifta
document.getElementById('textprompt').addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    ask(document.getElementById('textprompt').value);
  }
});

document.getElementById('apilist').addEventListener('change', function () {
 let capi = document.getElementById('capilist').style = 'display: none';
  switch(document.getElementsByName('api')[0].selectedIndex) {
    case 2:
      document.getElementById('capilist').style = '';
      apikey.style.display = "";
      break;
    case 1:
      capi;
      apikey.style.display = "none";
      break;
    default:
      capi;
      apikey.style.display = "";
      break;
  }
});

function ask(prompt) {
  try {
    const textPrompt = document.getElementById('textprompt');
    // set textprompt value to null/empty
    textPrompt.value = '';
    const userEle = document.getElementById('user');
    const title = `<img style="width: 24px !important;" name="userav"> <b>User</b><pre>${marked.parse(prompt)}</pre>`;
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
        api = 'https://api.pawan.krd/cosmosrp/v1/chat/completions';
        model = "gpt-3.5-turbo";
        key = " ";
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
        userEle.insertAdjacentHTML('beforebegin', `<img src="https://chat.openai.com/favicon-32x32.png" style="width: 24px;"> <b>Assistant</b><pre>${marked.parse(msg)}</pre>`);
        document.getElementById('loading').remove();
        //console.log(response);
      });
  } catch (error) {
    console.error(error);
  }
}
