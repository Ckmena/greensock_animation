(() => {
	//variable first
	const badge = document.querySelector('img'),
		  footerText = document.querySelector('h3')

	function animImage() {
		TweenMax.to(badge, 1, { scaleX: 1.025, scaleY: 1.025, rotation: 50, ease:Elastic.easeOut, onComplete:animFooterText});
	}

	function animFooterText(){
		TweenMax.to(footerText, 0.7, {scaleX: 2, scaleY: 2, esase:Elastic.easeOut });
	}

	//animImage();
	//
	badge.addEventListener('mouseover', animImage)

})();