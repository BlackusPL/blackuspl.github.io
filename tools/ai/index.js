// Checks if $i is defined
if (typeof $i == 'undefined') {const $i = (e) => document.getElementById(e)};

// Saves apikey in session storage
let apikey = $i('apikey')
apikey.value = sessionStorage.getItem('apikey');

let max_tokens = $i('max_tokens')
max_tokens.value = sessionStorage.getItem('max_tokens') || -1; // Default value

let avatarurl = $i('avatarurl')
avatarurl.value = sessionStorage.getItem('avatarurl');

let customapi = $i('customapi')
customapi.value = sessionStorage.getItem('customapi');

let apimodel = $i('model')
apimodel.value = sessionStorage.getItem('apimodel');

function session_storage() {
  sessionStorage.setItem('apikey', apikey.value);
  sessionStorage.setItem('avatarurl', avatarurl.value);
  sessionStorage.setItem('customapi', customapi.value);
  sessionStorage.setItem('apimodel', apimodel.value);
  sessionStorage.setItem('max_tokens', max_tokens.value);
}

$i('send_prompt').addEventListener('click', session_storage());

// Sprawdza czy kliknięto Enter bez SHifta
document.getElementById('textprompt').addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    session_storage();
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
    const title = `<img style="width: 24px !important;" name="userav"> <b>User</b><code>${marked.parse(prompt)}</code>`;
    const loading = '<div id="loading"><img src="https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp" style="width: 24px;"> <b>Assistant</b><div>Loading chatbot...</div></div>';
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
    max_tokens = $i('max_tokens').value
    // Metoda do /chat/completions i /completions
    var chat = JSON.stringify({
      model,
      max_tokens,
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
    var compl = JSON.stringify({
      model,
      max_tokens,
      prompt
    })
    
    if (/chat\/completions/gm.test($i("customapi").value)) {
      msg_prompt = chat;
    } else {
      msg_prompt = compl;
    };
      $.ajax({
        url: api,
        crossDomain: true,
        method: 'post',
        headers: {
          'Authorization': key
        },
        contentType: 'application/json',
        data: msg_prompt
      }).done(function(response) {
        var msg = /chat\/completions/gm.test($i("customapi").value) ? response.choices[0].message.content : response.choices[0].text;
        userEle.insertAdjacentHTML('beforebegin', `<img src="https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp" style="width: 24px;"> <b>Assistant</b><code>${marked.parse(msg)}</code>`);
        document.getElementById('loading').remove();
        //console.log(response);
      });
  } catch (error) {
    console.error(error);
  }
}
