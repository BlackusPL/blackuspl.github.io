state.plugins.add({format:1,version:"1.2",namespace:"BlackusPL",id:"Always show volume",entrypoint:`
	async () => {
		const r = document.createElement('style');
		r.innerHTML = "video,[class*=Grid-sc]{min-width: 200px;}";
		document.body.appendChild(r);
	}
`})