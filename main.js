function imgSlider(anything){
		document.querySelector('.Starbucks').src = anything;
	}
	function changrColorCircle(color){
		const circle = document.querySelector('.circle')
		circle.style.background = color;
	}
	
	const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

	    menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});