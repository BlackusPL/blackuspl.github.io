state.plugins.add({format:1,version:"1.3",namespace:"BlackusPL",id:"Loop every video and audio",entrypoint:`
	async () => {
const r = console.warn('[Video/Audio Loop] done!');
while(1) {
 let vid = document.querySelectorAll(\`[class*=Grid-sc] video:not([loop]),video:where([class*='_embed_'],[class*='_image_']):not([loop])\`);
    if(!vid[0]){
		await new Promise(r => setTimeout(r, 1000));
		continue;
	}
        for (const e of vid) {
            e.addEventListener('click', function () {
            this['loop'] = true;
        })}
let aud = document.querySelectorAll(\`[class*='audio'] audio:not([loop])\`);
    if(!aud[0]){
		await new Promise(r => setTimeout(r, 1000));
		continue;
	}
        for (const e of aud) {
            e['loop'] = true;
        }
}}
`})