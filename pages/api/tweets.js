export default (req, res) => {

	res.status(200).json(JSON.stringify([
		{
			id: 1,
			name: "Sırrı Demirtaş",
			slug: "@sirridemirtas",
			tweet: "Hello World!",
			datetime: new Date() - 1
		},
		{
			id: 2,
			name: "Sırrı Demirtaş",
			slug: "@sirridemirtas",
			tweet: "Lorem ipsum dolor sit amet",
			datetime: new Date() - 1200
		}
	]))

}