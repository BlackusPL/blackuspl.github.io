(() => {
const id = (_) => document.getElementById(_);
// embed video from selected file
function playVideo(files) {
    try {
      URL.revokeObjectURL(id('video_src').src);
      id('video_src').src = URL.createObjectURL(files[0]);
    } catch (e) {}
};
require.config({
    paths: {
      vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs",
    },
  }),
    require(["vs/editor/editor.main"], () => {
        var th = monaco.editor.create(id("head_code"), {
            //value: "<!--This is head code-->",
            language: "html",
            theme: 'vs-dark',
            wordWrap: "on",
            placeholder: "This is head code",
            fontLigatures: true,
            fontFamily: '"JetBrains Mono", monospace',
            "autoIndent": true,
            // "formatOnPaste": true,
            // "formatOnType": true
        });
        var tb = monaco.editor.create(id("body_code"), {
          //value: "",
          language: "html",
          theme: 'vs-dark',
          wordWrap: "on",
          placeholder: "Elements that will be in body or html code",
          fontLigatures: true,
          fontFamily: '"JetBrains Mono", monospace',
          "autoIndent": true,
        });
        // when click then clear sessionstorage and values in head and body
        id('clear').onclick = function () {
            sessionStorage.removeItem('body_code');
            sessionStorage.removeItem('head_code');
            th.setValue("")
            tb.setValue("");
        };
        var selector = document.querySelector('#codeplace ~ div select');
        var submit = document.querySelector("#afterselectcon ~ button:nth-of-type(3)");
        var pretty = id('pretty');
        //t.setValue(document.querySelector("pre").innerText);
        //document.querySelector("pre").remove();
        function choosen() {
          const showhide = (e, n) => {
            let i;
            switch (e) {
                case 0:
                    i = 'afterselectcon';
                    break;
                case 1:
                    i = 'head_code';
                    break;
                case 2:
                    i = 'body_code';
                    break;
            }
            return id(i).style.display = Boolean(n) ? 'block' : 'none';
          }
          try {document.getElementById('beforecheckbox').remove(); id('video_src').remove(); id('vidframe').remove()} catch {};
          zmien(selector.value.toLowerCase());
          // Selection Menu
          switch (selector.value) {
            default:
                //tb.setValue("")
                tb.updateOptions({ placeholder: "Soon", readOnly: true });
                showhide(1,0);
                showhide(2,1);
                showhide(0,0);
                console.log('File type not found')
                break;
            case 'HTML':
                showhide(0,1);
                showhide(1,1);
                showhide(2,1);
                //th.setValue("")
                //tb.setValue("")
                th.updateOptions({ placeholder: "This is head code" });
                tb.updateOptions({ placeholder: "Elements that will be in body or html code", readOnly: false });
                break;
            case 'JSON':
                //tb.setValue("{\n    \"_comment\" : \"JSON code to be formatted\"\n}");
                tb.updateOptions({ placeholder: "JSON code to be formatted", readOnly: false });
                showhide(1,0);
                showhide(2,1);
                showhide(0,0);
                // Usefull for next project
                //setTimeout(() => {
                //    tb.getAction('editor.action.formatDocument').run();
                //}, 500)
                break;
            case 'JavaScript':
                //th.setValue("")
                th.updateOptions({ placeholder: "/* Code to eval */" });
                //tb.setValue("");
                tb.updateOptions({ placeholder: "Result", readOnly: true });
                showhide(1,1);
                showhide(2,1);
                showhide(0,0);
                break;
            case 'Markdown':
                //tb.setValue("")
                tb.updateOptions({ placeholder: "Here goes markdown", readOnly: false });
                showhide(1,0);
                showhide(2,1);
                showhide(0,0);
                break;
            case 'Localplayer':
                showhide(0,0);
                showhide(1,0);
                showhide(2,0);
                document.querySelector('#codeplace ~ div select').insertAdjacentHTML('afterend','<div id="beforecheckbox"><input type="file" accept="video/*" id="afterselect"></input></div>');
                document.querySelector('#codeplace').insertAdjacentHTML('beforeend', `<div id="vidframe"><video id="video_src" controls></video><br>
                <input type="number" name="width"> Width
                <input type="number" name="height"> Height</div>`);
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
                showhide(0,0);
                showhide(1,0);
                showhide(2,1);
                //tb.setValue("")
                tb.updateOptions({ placeholder: "Result", readOnly: true });
                document.querySelector('#codeplace ~ div select').insertAdjacentHTML('afterend','<div id="beforecheckbox"><input type="file" accept="*/*" id="afterselect"></input></div>');
                id('afterselect').addEventListener('change', function () {
                    function blobToDataURL(blob) {
                        return new Promise((res) => {
                          var a = new FileReader();
                          a.onload = () => res(a.result);
                          a.readAsDataURL(blob);
                        });
                    };
                    async function dataURLFunc(text) {
                        tb.setValue(await blobToDataURL(text))
                    };
                    dataURLFunc(this.files[0]);
                });
                break;
            case "Google It":
                showhide(0,0);
                showhide(1,0);
                showhide(2,1);
                //tb.setValue("")
                tb.updateOptions({ placeholder: "Type what you want to search for", language: "plaintext", readOnly: false });
            };
        }
        // function to set language in editors
        function zmien(_) {
            monaco.editor.setModelLanguage(tb.getModel(), _);
            monaco.editor.setModelLanguage(th.getModel(), _);
        }
        // Run Code
        function odpal() {
            switch (selector.value) {
                default:
                    alert('WTH you select?')
                break;
                case 'HTML':
                    var head = th.getValue();
                    var body = tb.getValue();
                    var fullhtml = id('afterselect').checked ? `<html><head>${head}</head><body>${body}</body></html>` : `${head}${body}`;
                    window.open().document.write(fullhtml);
                break;
                case 'JSON':
                    var fulljson = JSON.parse(tb.getValue());
                    window.open().document.write(JSON.stringify(fulljson, null, 2));
                break;
                case 'JavaScript':
                    try {
                        const result = eval(th.getValue());
                        tb.setValue(result);
                    } catch (error) {
                        tb.setValue(error.toString());
                    }
                break;
                case 'Markdown':
                    window.open().document.write(`<body><script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script><script>document.body.innerHTML = marked.parse(\`${tb.getValue()}\`);</script></body>`)
                break;
                case 'Localplayer':
                    window.open().document.write(`<video style="width: 100%; height: 100%;" src="${id('video_src').src}" controls></video>`)
                break;
                case 'DataURI':
                    switch (tb.getValue().substring(0, 10)) {
                        case 'data:audio':
                            window.open().document.write(`<video controls autoplay name="media"><source src="${tb.getValue()}"></video>`)
                        break;
                        case 'data:video':
                            window.open().document.write(`<video controls autoplay name="media" style="width: 100%; height:100%;"><source src="${tb.getValue()}"></video>`)
                        break;
                        case 'data:image':
                            window.open().document.write(`<image src="${tb.getValue()}">`)
                        break;
                        default:
                            window.open().document.write(`${tb.getValue()}`)
                        break;
                    }
                break;
                case 'Google It':
                    window.open(`https://letmegooglethat.com/?q=${tb.getValue()}`, '_blank')
                break;
                case 'soon':
                    alert('soon')
                break;
            };
        };
        // gets value for head and body from session
        if (sessionStorage.getItem('body_code')) tb.setValue(sessionStorage.getItem('body_code'));
        if (sessionStorage.getItem('head_code')) th.setValue(sessionStorage.getItem('head_code'));
        // if value in body_code or head changed, then add to session storage values
        id('body_code').onchange = function () {
            sessionStorage.setItem('body_code', tb.getValue())
        };
        id('head_code').onchange = function () {
            sessionStorage.setItem('head_code', th.getValue());
        };

        selector.onchange = choosen;
        submit.onclick = odpal;
        pretty.onclick = function () {
            th.getAction('editor.action.formatDocument').run();
            tb.getAction('editor.action.formatDocument').run();
        }
        // document.querySelectorAll("[class=\"view-lines monaco-mouse-cursor-text\"]").forEach((e) => {
        //   e['style'].width = null;
        // });    
    });
    console.log("%c[NewPage Scripts] %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: white;")
    // window.open().document.write(`<pre>${JSON.stringify(othersong)}</pre>`)
})();