import React, { useContext } from "react"
import { formatDistanceToNowStrict } from "date-fns"
import Avatar from '../Avatar'
import styles from './tweet.module.css'
import TweetFooter from '../TweetFooter'
import Context from "../../../store/TweetContext"

function Tweet() {
	const tweet = useContext(Context)

	return <article className={styles.tweet}>
		<div className={styles.avatar}>
			<Avatar src={tweet.src} />
		</div>
		<div className={styles.body}>
			<header className={styles.header}>
				<a href="javacript:void(0)" className={styles.userLink}>
					<span className={styles.name}>{tweet.name}</span>
					<span className={styles.slug}> {`@`}{tweet.slug} {`·`} </span>
				</a>
				<span>{formatDistanceToNowStrict(tweet.datetime)}</span>
			</header>

			<div className={styles.content}>{tweet.tweet}</div>

			<TweetFooter />
		</div>
	</article>
}

export default Tweet