async function addReviews() {
	try {
		const reviews = await (await fetch('reviews.json')).json();
		var index = 1;

		for (const review of reviews) {
			const slide = document.createElement('div');
			slide.className = 'reviews-slides';
			slide.classList.add(`slides${index}`);

			var image;
			if (review.anonymous === true) {
				image = 'anonymous';
			} else {
				image = review.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
			}

			slide.innerHTML = `
                <img src="img/reviews/${image}.png" alt="Unloaded Picture" />
                <div class="reviews-slides-text">
                    <h2>${review.name}</h2>
                    <p>- "${review.quote}" ${review.rating}/10</p>
                </div>
            `;

			document.getElementById('reviews').appendChild(slide);
			index += 1;
		}

		showSlide(currentSlide);
		setInterval(nextSlide, secondsTilSwitch * 1000);
	} catch (error) {
		console.error('REVIEWS ERROR:' + error);
	}
}

var currentSlide = 1;
var secondsTilSwitch = 5;

function showSlide(slideIndex) {
	const slides = document.getElementsByClassName('reviews-slides');
	if (slideIndex > slides.length) {
		currentSlide = 1;
	}
	if (slideIndex < 1) {
		currentSlide = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[currentSlide - 1].style.display = 'inline-flex';
}

function nextSlide() {
	showSlide((currentSlide += 1));
}
