import React, { useContext } from 'react'
import styles from './tweet-footer.module.css'
import IconButton from '../../ui/IconButton'
import { Reply, Retweet, RetweetFill, Like, LikeFill, Share } from '../../icons'
import TweetContext from '../../../store/TweetContext'

function TweetFooter() {
	const tweet = useContext(TweetContext)

	const [favorite, setFavorite] = React.useState(tweet.favorited)
	const [retweet, setRetweet] = React.useState(tweet.retweeted)

	return <footer className={styles.footer}>
		<div className={styles.footerButton}>
			<IconButton className={styles.actionButton}>
				<Reply />
			</IconButton>
		</div>

		<div className={styles.footerButton}>
			<IconButton className={[styles.actionButton, styles.retweet]}
				onClick={() => setRetweet(!retweet)}>
				{retweet ? <RetweetFill style={{ color: "var(--green)" }} /> : <Retweet />}
				<span className={retweet ? styles.retweeted : ""}>
					{tweet.retweetCount || (retweet ? 1 : "")}
				</span>
			</IconButton>
		</div>

		<div className={styles.footerButton}>
			<IconButton className={[styles.actionButton, styles.like]}
				onClick={() => setFavorite(!favorite)} >
				{favorite ? <LikeFill style={{ color: "var(--pink)" }} /> : <Like />}
				<span className={favorite ? styles.liked : ""}>
					{tweet.favoriteCount || (favorite ? 1 : "")}
				</span>
			</IconButton>
		</div>

		<div className={styles.footerButton}>
			<IconButton className={styles.actionButton}>
				<Share />
			</IconButton>
		</div>
	</footer>
}

export default TweetFooter