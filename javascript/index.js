function runSlideShow() {
	const slides = Array.from(document.querySelectorAll('.slides > div'))
	const selector = document.querySelector('#thumbnails')
	const thumbnails = Array.from(selector.children)
	const previous = document.querySelector("#previous")
	const next = document.querySelector("#next")
	const output = document.querySelector("output")

	thumbnails.forEach((thumbnail, index) => thumbnail.onclick = () => goToSlide(index))
	selector.classList.remove("hide")
	previous.classList.remove("hide")
	next.classList.remove("hide")
	output.classList.remove("hide")

	function getCurrentIndex() {
		return slides.findIndex((slide) => !slide.classList.contains("hide"))
	}

	function goToSlide(num) {
		slides.forEach((slide, index) =>
			index === num
				? slide.classList.remove("hide")
				: slide.classList.add("hide")
		)

		output.textContent = thumbnails[getCurrentIndex()].getAttribute("alt")
	}

	previous.onclick = () => {
		const currentIndex = getCurrentIndex()
		const previousIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1

		goToSlide(previousIndex)
	}

	next.onclick = () => {
		const currentIndex = getCurrentIndex()
		const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1

		goToSlide(nextIndex)
	}

	goToSlide(3)
}

window.onload = runSlideShow;