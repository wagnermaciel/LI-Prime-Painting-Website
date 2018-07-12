function carousel () {

	const contact = document.getElementById('header-contact-anchor');
	const page = document.getElementById('page');
	contact.addEventListener('click', () => {
		page.scrollIntoView();
	});

  const images = [
      'img/carousel/image-01.jpg',
      'img/carousel/image-02.jpg',
      'img/carousel/image-03.jpg',
      'img/carousel/image-04.jpg',
      'img/carousel/image-05.jpg',
  ];

  const buttons = [
    document.getElementById('gallery-carousel-bottom-button-01'),
    document.getElementById('gallery-carousel-bottom-button-02'),
    document.getElementById('gallery-carousel-bottom-button-03'),
    document.getElementById('gallery-carousel-bottom-button-04'),
    document.getElementById('gallery-carousel-bottom-button-05'),
  ];

  let count = 0;

  const nextBtn = document.getElementById('gallery-carousel-next');
  const prevBtn = document.getElementById('gallery-carousel-prev');
	const image = document.getElementById('gallery-carousel-image');

  image.src = images[count];
	toggleBottomButton(buttons, 0);

	buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
			image.src = images[index];
    	toggleBottomButton(buttons, index);

			image.opacity = 0.0;
			fadeIn(image);

			count = index;
    });
  });

	function toggleBottomButton(buttons, count) {
    clearButtons(buttons);
    toggle(buttons[count]);
	}

	function toggle(element) {
    element.style.backgroundColor = '#2777b3';
	}

	function clearButtons(buttons) {
		buttons.forEach((button) => {
				button.style.backgroundColor = '';
		});
	}

	nextBtn.addEventListener('click', function () {
		if (count === images.length-1) {
			count = 0;
		} else {
			count++;
		}
		image.src = images[count];
		fadeIn(image);
		toggleBottomButton(buttons, count);
  });

  prevBtn.addEventListener('click', function () {
		if (count == 0) {
				count = images.length-1;
		} else {
				count--;
		}
		fadeIn(image);
		image.src = images[count];
		toggleBottomButton(buttons, count);
	});

	function fadeIn (element) {
		element.style.opacity = 0.0;
		incrOpacity(element);
	}

	function incrOpacity (element) {
		if (element.style.opacity !== "1") {
				element.style.opacity = Number(element.style.opacity) + 0.01;
				setTimeout(incrOpacity.bind(this, element), 1);
		}
	}
}

document.addEventListener('DOMContentLoaded', carousel);
