// Checks if $i is defined
if (typeof $i == null) {const $i = (e) => document.getElementById(e)};

// Saves apikey in session storage
let
  apikey = $i('apikey'),
  max_tokens = $i('max_tokens'),
  avatarurl = $i('avatarurl'),
  customapi = $i('customapi'),
  apimodel = $i('model');

apikey.value = sessionStorage.getItem('apikey');
max_tokens.value = sessionStorage.getItem('max_tokens') || -1; // Default value
avatarurl.value = sessionStorage.getItem('avatarurl');
customapi.value = sessionStorage.getItem('customapi');
apimodel.value = sessionStorage.getItem('apimodel');

function session_storage() {
  sessionStorage.setItem('apikey', apikey.value);
  sessionStorage.setItem('avatarurl', avatarurl.value);
  sessionStorage.setItem('customapi', customapi.value);
  sessionStorage.setItem('apimodel', apimodel.value);
  sessionStorage.setItem('max_tokens', max_tokens.value);
}
// TODO Doesn't work at all, must be fixed
$i('send_prompt').addEventListener('click', session_storage());

// Sprawdza czy kliknięto Enter bez SHifta
$i('textprompt').addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    session_storage();
    ask($i('textprompt').value);
  }
});

$i('apilist').addEventListener('change', function () {
 let capi = $i('capilist').style = 'display: none';
  switch($i('apilist').selectedIndex) {
    case 2:
      $i('capilist').style = null;
      apikey.style.display = null;
      break;
    case 1:
      capi;
      apikey.style.display = null;
      break;
    default:
      capi;
      apikey.style.display = null;
      break;
  }
});

function ask(prompt) {
  try {
    const textPrompt = $i('textprompt'),
    userEle = $i('user'),
    title = `<div><img style="width: 24px !important;" name="userav"> <b>User</b><code>${marked.parse(prompt)}</code></div>`,
    loading = '<div id="loading"><img src="https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp" style="width: 24px;"> <b>Assistant</b><div>Loading chatbot...</div></div>';
    // set textprompt value to null/empty
    textPrompt.value = '';
    userEle.insertAdjacentHTML('beforebegin', title + loading);
    for (let i = 0; i < document.getElementsByName('userav').length; i++) {
      // if (document.getElementsByName('userav')[i].getAttribute('src') === null || document.getElementsByName('userav')[i].getAttribute('src') === '')
      document.getElementsByName('userav')[i].setAttribute('src',$i('avatarurl').value ? $i('avatarurl').value : 'https://storage.modworkshop.net/mods/images/138412_1676797152_574dcace40fa8cdc397f34c4408edc89.gif');
    }
    switch($i('apilist').value) {
      case 'OpenAI':
        api = 'https://api.openai.com/v1/chat/completions';
        model = "gpt-mini";
        key = 'Bearer ' + $i('apikey').value;
      break;
      case 'ch.at':
        api = 'https://ch.at/v1/chat/completions';
        model = "claude-4-sonnet";
        key = " ";
      break;
      case 'customapi':
        api = $i('customapi').value;
        model = $i('model').value;
        if ($i('apikey').value !== '') {
          key = 'Bearer ' + $i('apikey').value;
        } else {
          key = '';
        }
      break;
    }
    max_tokens = $i('max_tokens').value
    // Metoda do /chat/completions i /completions
    // TODO Add more methods and seperate them into different functions
    var chat = {
      model,
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
    }
    var compl = {
      model,
      max_tokens,
      prompt
    }
    // TODO msg_prompt is not defined.
    if (/chat\/completions/gm.test($i("customapi").value) || $i("apilist").value == "ch.at") {
      const msg_prompt = chat;
    } else {
      const msg_prompt = compl;
    };
      $.ajax({
        url: api,
        crossDomain: true,
        method: 'post',
        headers: {
          'Authorization': key
        },
        contentType: 'application/json',
        data: JSON.stringify(msg_prompt)
      }).fail(function(response) {
        userEle.insertAdjacentHTML('beforebegin', `<div><img src="https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp" style="width: 24px;"> <b>Assistant</b><pre>${'Error fetching AI response: ' + response.responseJSON.error.message}</pre></div>`);
        $i('loading').remove();
      }).done(function(response) {
        let msg = /chat\/completions/gm.test($i("customapi").value) || $i("apilist").value == "ch.at" ? response.choices[0].message.content : response.choices[0].text;
        userEle.insertAdjacentHTML('beforebegin', `<div><img src="https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp" style="width: 24px;"> <b>Assistant</b><pre>${marked.parse(msg)}</pre></div>`);
        $i('loading').remove();
        //console.log(response);
      });
  } catch (error) {
    console.error(error);
  }
}
