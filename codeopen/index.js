(() => {
const id = (_) => document.getElementById(_);
id('body_code').value = sessionStorage.getItem('body_code');
id('head_code').value = sessionStorage.getItem('head_code');
id('body_code').addEventListener('change', function () {
   sessionStorage.setItem('body_code', `${id('body_code').value}`);
});
id('head_code').addEventListener('change', function () {
    sessionStorage.setItem('head_code', `${id('head_code').value}`);
});
id('clear').addEventListener('click', function () {
    sessionStorage.removeItem('body_code');
    sessionStorage.removeItem('head_code');
    id('head_code').value = null;
    id('body_code').value = null;
});
function rm_html() {
    try {id('afterselectcon').remove(); id('video_src').remove()} catch {}
};
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
                    alert('This not working for this!')
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
                id('head_code').placeholder = "Soon";
                id('body_code').placeholder = "Soon";
                id('head_code').style.display = ""
                id('body_code').style.display = "";
                console.log('File type not found')
                break;
            case 'HTML':
                id('head_code').style.display = ""
                id('body_code').style.display = "";
                rm_html()
                id('head_code').placeholder = "Elements in head";
                id('body_code').placeholder = "Elements that will be in body or html code";
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
                id('body_code').placeholder = "JSON code to be formatted";
                id('head_code').style.display = "none"
                id('body_code').style.display = "";
            break;
            case 'JS':
                rm_html()
                id('head_code').placeholder = "Code to eval";
                id('body_code').placeholder = "Result";
                id('head_code').style.display = ""
                id('body_code').style.display = "";
            break;
            case 'Translator':
                rm_html()
                id('head_code').placeholder = "Text to translate";
                id('body_code').placeholder = "Translated text";
                id('head_code').style.display = "";
                id('body_code').style.display = "";
            break;
            case 'Localplayer':
                rm_html()
                document.querySelector('select').insertAdjacentHTML('afterend','<div id="afterselectcon"><input type="file" accept="video/*" id="afterselect"></input></div>');
                document.querySelector('#body_code').insertAdjacentHTML('afterend','<video id="video_src" controls></video>');
                id('afterselect').addEventListener('change', function () {
                    playVideo(this.files)
                });
                id('head_code').style.display = "none";
                id('body_code').style.display = "none";
            break;
            case 'DataURI':
                rm_html();
                id('body_code').placeholder = "Result";
                id('head_code').style.display = "none";
                id('body_code').style.display = "";
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
        }
    })

console.log("%c[NewPage Scripts] %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: white;")
// window.open().document.write(`<pre>${JSON.stringify(othersong)}</pre>`)
})();