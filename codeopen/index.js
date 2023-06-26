(() => {
document.getElementById('body_code').value = sessionStorage.getItem('body_code');
document.getElementById('head_code').value = sessionStorage.getItem('head_code');
document.getElementById('body_code').addEventListener('change', function () {
   sessionStorage.setItem('body_code', `${document.getElementById('body_code').value}`);
});
document.getElementById('head_code').addEventListener('change', function () {
    sessionStorage.setItem('head_code', `${document.getElementById('head_code').value}`);
});

    document.querySelector("#afterselectcon ~ button").addEventListener('click', function () {
        let type = document.querySelector('select').value;
            switch (type) {
                default:
                    alert('WTH you select?')
                break;
                case 'HTML':
                    if (document.getElementById('afterselect').checked) {
                        window.open().document.write(`${document.getElementById('body_code').value}`)
                    } else {
                        window.open().document.write(`<!DOCTYPE html><html><head>${document.getElementById('head_code').value}</head><body>${document.getElementById('body_code').value}</body></html>`)
                    }
                break;
                case 'JSON':
                    try{window.open(window.URL.createObjectURL(
                        new Blob([`${JSON.stringify(JSON.parse([document.getElementById('body_code').value]), undefined, 2)}`], {type: "application/json"})
                        )
                    )} catch(error) {console.error(error); alert(error)}
                break;
                case 'JS':
                    alert('soon')
                break;
                case 'Custom':
                    alert('soon')
                break;
            }
        });
    document.querySelector('select').addEventListener('change', function () {
        let type_option = document.querySelector('select').value;
        switch (type_option) {
            default:
                try {document.getElementById('afterselectcon').remove()} catch{}
                console.log('File type not found')
                break;
            case 'HTML':
                document.getElementById('head_code').style.display = ""
                try {document.getElementById('afterselectcon').remove()} catch{}
                document.querySelector('select').insertAdjacentHTML('afterend','<div id="afterselectcon"><input type="checkbox" id="afterselect">Full HTML</input></div>')
                document.getElementById('afterselectcon').addEventListener('change', function () {
                    if (document.getElementById('afterselect').checked) {
                        document.getElementById('head_code').style.display = "none";
                    } else {
                    document.getElementById('head_code').style.display = ""
                }
            })
            break;
            case 'JSON':
                try {document.getElementById('afterselectcon').remove()} catch {}
                document.getElementById('head_code').style.display = "none"
            break;
        }
    })

console.log("%c[NewPage Scripts] %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: white;")
// window.open().document.write(`<pre>${JSON.stringify(othersong)}</pre>`)
})();