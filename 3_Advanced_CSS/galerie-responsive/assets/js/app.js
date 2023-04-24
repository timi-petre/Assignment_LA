const row = document.querySelector('.row');

function init() {
	let out = '';
	let titluImagine = 'Image Title';
	const IMGPATH = './assets/img/placeholder-image.png';
	for (let i = 0; i < 10; i++) {
		out += `<div class="column">
						<figure>
							<img
								src="${IMGPATH}"
								alt="PLaceholder"
								class="placeholder"
							/>
							<figcaption>${titluImagine}</figcaption>
						</figure>
					</div>`;
	}
	row.innerHTML = out;
}

init();
