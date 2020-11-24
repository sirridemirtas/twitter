import url from "url"
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

export function generateTweets(limit) {
	limit = Number.isInteger(Number(limit)) ? limit : 50
	let tweets = [];

	for (let i = 1; i <= limit; i++) {
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

	return tweets
}

export default (req, res) => {
	const { limit } = url.parse(req.url, true).query
	res.status(200).json(JSON.stringify(
		generateTweets(limit)
	))
}