import { LoremIpsum } from "lorem-ipsum"
import randomNumber from "../../helpers/randomNumber"

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
	wordsPerSentence: {
		max: 16,
		min: 4
	}
});

let tweets = [];

for (let i = 1; i <= 50; i++) {
	tweets.push({
		id: i,
		name: lorem.generateWords(2),
		slug: lorem.generateWords(1),
		tweet: lorem.generateSentences(randomNumber(1, 4)),
		datetime: new Date() - i * 314153,
		retweetCount: randomNumber(0, 100),
		favoriteCount: randomNumber(0, 1000),
		favorited: randomNumber(100, 999) % 3 == 0 ? true : false,
		retweeted: randomNumber(100, 999) % 5 == 0 ? true : false
	});
}

export default (req, res) => {
	res.status(200).json(JSON.stringify(tweets))
}