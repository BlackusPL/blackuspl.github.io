window.onload = function() {
    // Pobieranie parametrów z adresu URL
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get("url");
    if (urlParams.get("text") == null || urlParams.get("text") == '') urlParams.set("text", "null");
    const text = urlParams.get("text");
    if (urlParams.get("textx") == null || urlParams.get("textx") == '') urlParams.set("textx", 200);
    if (urlParams.get("texty") == null || urlParams.get("texty") == '') urlParams.set("texty", 200);
    const textx = urlParams.get("textx");
    const texty = urlParams.get("texty");
    const txtshadow = urlParams.get("shadow");
    const color = urlParams.get("color");
    if (urlParams.get("sizex") == null || urlParams.get("sizex") == '') urlParams.set("sizex", 400);
    if (urlParams.get("sizey") == null || urlParams.get("sizey") == '') urlParams.set("sizey", 400);
    const sizex = urlParams.get("sizex");
    const sizey = urlParams.get("sizey");

    // Tworzenie canvas 
    const canvas = document.createElement("canvas");
    canvas.width = sizex;
    canvas.height = sizey;
    canvas.id = "image";
    const ctx = canvas.getContext("2d");

    // Rysowanie obrazu na canvas
    const image = new Image();
    if (imageUrl == null || imageUrl == '') {image.src= "./kratosmoment.png"} else {
      image.src = imageUrl;
    }
    image.onload = function() {
      ctx.drawImage(image, 0, 0, sizex, sizey);

      // Rysowanie tekstu na canvas
      ctx.fillStyle = color; 
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.font = "36px Arial";
      ctx.textAlign = "center";
      if (txtshadow == 'true') ctx.strokeText(text, sizex-textx, sizey-texty);
      ctx.fillText(text, sizex-textx, sizey-texty);

      // Ustawianie znacznika meta og:image na obraz z canvas
      document.querySelectorAll('center')[0].appendChild(canvas);
      try {
      document.getElementById("ogImage").content = canvas.toDataURL();
      if (window.location.search !== '') document.getElementById("code").value = canvas.toDataURL();
      console.log("%c[TextOnImage]" + " %cConverting to Base64 was completed succesfully!","color: rgb(58, 113, 193)","color: white");
      } catch(error) {console.log("%c[TextOnImage]" + " %cCan't convert this to Base64 becouse CORS blocking it (in future will be possible to do that)","color: rgb(58, 113, 193)","color: red")};
      console.log("%c[TextOnImage]" + " %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: white");
    };
    getID('url').value = imageUrl;
    getID('color').value = color;
    if (window.location.search !== '') getID('sizex').value = sizex,
    getID('sizey').value = sizey, getID('text').value = text, getID('textx').value = textx, getID('texty').value = texty; //getID('textshadow').checked = txtshadow;
  };
  function txt2img() {
    window.location.search = '?url=' + getID('url').value + '&text=' + getID('text').value + '&textx=' + getID('textx').value + '&texty=' + getID('texty').value + '&shadow=' + getID('textshadow').checked + '&color=' + getID('color').value + '&sizex=' + getID('sizex').value + '&sizey=' + getID('sizey').value;
  };
  function newtxt2img(url,text,textx,texty,shadow,color,sizex,sizey) {
    window.location.search = '?url=' + url + '&text=' + text + '&textx=' + textx + '&texty=' + texty + '&shadow=' + shadow + '&color=' + color + '&sizex=' + sizex + '&sizey=' + sizey;
  };
  function debugBase64(base64URL) {
    if (base64URL !== '')
    {window.open().document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')} else 
    {alert("You can do that with only default image.")};
  };
  function viewraw() {
    var x = document.getElementById("code");
    if (x.style.visibility == "hidden") {
      x.style.visibility = "";
    } else {
      x.style.visibility = "hidden";
    }
  };
  function download() {
    try {
    var canvas = document.getElementById("image");
      var url = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.href = url;
      link.download = "textonimage.png";
      document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch(error) {
        alert("Can't download this file. CORS blocking it")
      };
      
  };