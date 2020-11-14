import React from 'react'
import TextTitle from '../../ui/TextTitle'
import styles from './trend-topics.module.css'

function TrendTopics({ children }) {
	const trends = [
		{
			topic: "Architecture",
			tag: "#LoremIpsumDolor",
			count: "61.8K"
		},
		{
			topic: "Sport",
			tag: "#SitAmetConsectetur",
			count: "38.2K"
		},
		{
			topic: "Science",
			tag: "#AdipiscingElit",
			count: "3,141"
		},
		{
			topic: "Engineering",
			tag: "#SedDoEiusmodTemporIncididunt",
			count: "2,718"
		}
	];
	return <div className={styles.trendTopics}>
		<div className={styles.header}>
			<TextTitle>Trend Topics</TextTitle>
		</div>

		<div className={styles.body}>
			{trends.map((trend, index) => {
				return <a href="#" key={index}>
					<span className={styles.ranking}>{
						(index + 1) + " · " + trend.topic + " · Trending"
					}</span>
					<span className={styles.tag}>{trend.tag}</span>
					<span className={styles.count}>{trend.count + " Tweets"}</span>
				</a>
			})}
			<a href="">
				<span className={styles.more}>Show More</span>
			</a>
		</div>
	</div >
}

export default TrendTopics