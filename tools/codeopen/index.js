(() => {
const id = (_) => document.getElementById(_);
// gets value for head and body from session
id('body_code').value = sessionStorage.getItem('body_code');
id('head_code').value = sessionStorage.getItem('head_code');
// if value in body_code or head changed, then add to session storage values
id('body_code').addEventListener('change', function () {
   sessionStorage.setItem('body_code', `${id('body_code').value}`);
});
id('head_code').addEventListener('change', function () {
    sessionStorage.setItem('head_code', `${id('head_code').value}`);
});
// cwhen click then clear sessionstorage and values in head and body
id('clear').addEventListener('click', function () {
    sessionStorage.removeItem('body_code');
    sessionStorage.removeItem('head_code');
    id('head_code').value = null;
    id('body_code').value = null;
});
function rm_html() {
    try {id('afterselectcon').remove(); id('video_src').remove()} catch {}
};
// embed video from selected file
function playVideo(files) {
    try {
      URL.revokeObjectURL(id('video_src').src);
      id('video_src').src = URL.createObjectURL(files[0]);
    } catch (e) {}
};

    document.querySelector("#afterselectcon ~ button + button").addEventListener('click', function () {
        let type = document.querySelector('select').value;
            switch (type) {
                default:
                    alert('WTH you select?')
                break;
                case 'HTML':
                    if (id('afterselect').checked) {
                        window.open().document.write(`${id('body_code').value}`)
                    } else {
                        window.open().document.write(`<!DOCTYPE html><html><head>${id('head_code').value}</head><body>${id('body_code').value}</body></html>`)
                    }
                break;
                case 'JSON':
                    try{window.open(window.URL.createObjectURL(
                        new Blob([`${JSON.stringify(JSON.parse([id('body_code').value]), undefined, 2)}`], {type: "application/json"})
                        )
                    )} catch(error) {console.error(error); alert(error)}
                break;
                case 'JS':
                    //function evalFunc(_copy = false, showResult = false) {
                    function evalFunc() {
                        try {
                          const result = eval(id('head_code').value);
                          //if (showResult) {
                            id('body_code').value = result;
                            //return;
                          //}
                          //_copy && copyValue(result);
                        } catch (error) {
                          alert(error);
                        }
                    }
                    evalFunc()
                break;
                case 'Translator':
                    alert('soon')
                break;
                case 'Localplayer':
                    window.open().document.write(`<video style="width: 100%; height: 100%;" src="${id('video_src').src}" controls></video>`)
                break;
                case 'DataURI':
                    switch (id('body_code').value.substring(0, 10)) {
                        case 'data:audio':
                            window.open().document.write(`<video controls autoplay name="media"><source src="${id('body_code').value}"></video>`)
                        break;
                        case 'data:video':
                            window.open().document.write(`<video controls autoplay name="media" style="width: 100%; height:100%;"><source src="${id('body_code').value}"></video>`)
                        break;
                        case 'data:image':
                            window.open().document.write(`<image src="${id('body_code').value}">`)
                        break;
                        default:
                            window.open().document.write(`${id('body_code').value}`)
                        break;
                    }
                break;
                case 'Google It':
                    window.open(`https://letmegooglethat.com/?q=${id('head_code').value}`, '_blank')
                break;
                case 'soon':
                    alert('soon')
                break;
            }
        });
    document.querySelector('select').addEventListener('change', function () {
        let type_option = document.querySelector('select').value;
        switch (type_option) {
            default:
                rm_html()
                id("codeplace").innerHTML = `<textarea placeholder="Soon" id="head_code"></textarea><br> \
              <textarea placeholder="Soon" id="body_code"></textarea>`;
                console.log('File type not found')
                break;
            case 'HTML':
                rm_html()
                id("codeplace").innerHTML = `<textarea placeholder="Elements in head" id="head_code"></textarea><br> \
              <textarea placeholder="Elements that will be in body or html code" id="body_code"></textarea>`;
                document.querySelector('select').insertAdjacentHTML('afterend','<div id="afterselectcon"><input type="checkbox" id="afterselect">Full HTML</input></div>')
                id('afterselect').addEventListener('change', function () {
                    if (id('afterselect').checked) {
                        id('head_code').style.display = "none";
                    } else {
                    id('head_code').style.display = ""
                }
            })
            break;
            case 'JSON':
                rm_html()
                id("codeplace").innerHTML = `<textarea placeholder="JSON code to be formatted" id="body_code"></textarea>`;
            break;
            case 'JS':
                rm_html()
                id("codeplace").innerHTML = `<textarea placeholder="Code to eval" id="head_code"></textarea><br> \
                <textarea placeholder="Result" id="body_code"></textarea>`;
            break;
            case 'Translator':
                rm_html()
                id("codeplace").innerHTML = `<textarea placeholder="Text to translate" id="head_code"></textarea><br> \
                <textarea placeholder="Translated text" id="body_code"></textarea>`;
            break;
            case 'Localplayer':
                rm_html()
                document.querySelector('select').insertAdjacentHTML('afterend','<div id="afterselectcon"><input type="file" accept="video/*" id="afterselect"></input></div>');
                document.querySelector('#codeplace').innerHTML = `<video id="video_src" controls></video><br> \
                <input type="number" name="width"> Width \
                <input type="number" name="height"> Height`;
                id('afterselect').addEventListener('change', function () {
                    playVideo(this.files)
                });
                document.querySelector('[name=width]').addEventListener("change", function () {
                    id('video_src').style.width = `${document.querySelector('[name=width]').value}px`
                });
                document.querySelector('[name=height').addEventListener("change", function () {
                    id('video_src').style.height = `${document.querySelector('[name=height]').value}px`
                });
            break;
            case 'DataURI':
                rm_html();
                id("codeplace").innerHTML = `<textarea placeholder="Result" id="body_code"></textarea>`;
                document.querySelector('select').insertAdjacentHTML('afterend','<div id="afterselectcon"><input type="file" accept="*/*" id="afterselect"></input></div>');
                id('afterselect').addEventListener('change', function () {
                function blobToDataURL(blob) {
                    return new Promise((res) => {
                      var a = new FileReader();
                      a.onload = () => res(a.result);
                      a.readAsDataURL(blob);
                    });
                };
                async function dataURLFunc(text) {
                    id("body_code").value = await blobToDataURL(text);
                };
                dataURLFunc(this.files[0]);
            });
            break;
            case 'Google It':
                rm_html();
                id("codeplace").innerHTML = `<textarea placeholder="Type what you want to search for" id="head_code"></textarea>`;
        }
    })

console.log("%c[NewPage Scripts] %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: white;")
// window.open().document.write(`<pre>${JSON.stringify(othersong)}</pre>`)
})();