function loadRepos() {
	const httpRequest = new XMLHttpRequest();
	const userElement = document.getElementById('username'); // input
	const reposElement = document.getElementById('repos'); // ul

	httpRequest.addEventListener('loadend', function(){
		let repos = JSON.parse(this.responseText);

		reposElement.innerHTML = repos.map(x => `<li><a href="${x.html_url}" target="_blank"> ${x.name} </a></li>`).join('');
	});

	const url = `https://api.github.com/users/${userElement.value}/repos`;

	httpRequest.open('GET', url);
	httpRequest.send();
}