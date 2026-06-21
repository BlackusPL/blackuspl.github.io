(function() {
    const form = document.getElementById('EmbederForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent site from refreshing on submit
    
        // Download the form data and convert it to an object
        const formData = new FormData(form),
            data = Object.fromEntries(formData.entries()),
            embedurl = `${window.location.origin}/about/projects_gen.html?url=${encodeURIComponent(data.url)}&url_download=${encodeURIComponent(data.url_download)}&name=${encodeURIComponent(data.name)}&plat=${encodeURIComponent(data.plat)}&desc=${encodeURIComponent(data.desc)}&plat_ico=${encodeURIComponent(data.plat_ico)}&ico=${encodeURIComponent(data.ico)}`;
        
        document.getElementById('embed_url').value = embedurl;
    
        if (document.getElementById('preview').checked) {
            document.getElementById('embed_preview').src = embedurl;
        }
    });
})();
