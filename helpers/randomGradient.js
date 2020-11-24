function randomGradient() {
	let randomColor = () =>
		("#" +
			Math.floor(Math.random() * 16777215)
				.toString(16) + "333333"
		).slice(0, 7)
	return `radial-gradient(circle at top left, ${randomColor()}, ${randomColor()})`
}

export default randomGradient