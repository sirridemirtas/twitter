function randomGradient() {
	let randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
	return `radial-gradient(circle at top left, ${randomColor()}, ${randomColor()})`
}

export default randomGradient