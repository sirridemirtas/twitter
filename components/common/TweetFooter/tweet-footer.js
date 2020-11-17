import React, { useContext } from 'react'
import styles from './tweet-footer.module.css'
import IconButton from '../../ui/IconButton'
import { Reply, Retweet, RetweetFill, Like, LikeFill, Share } from '../../icons'
import Context from '../../../store/TweetContext'

function TweetFooter() {
	const tweet = useContext(Context)

	const [favorite, setFavorite] = React.useState(tweet.favorited)
	const [retweet, setRetweet] = React.useState(tweet.retweeted)

	return <footer className={styles.footer}>
		<div className={styles.footerButton}>
			<IconButton className={styles.actionButton}>
				<Reply />
			</IconButton>
		</div>

		<div className={styles.footerButton}>
			<IconButton className={[styles.actionButton, styles.retweet, retweet && styles.retweeted]}
				onClick={() => setRetweet(!retweet)}>
				{retweet ? <RetweetFill /> : <Retweet />}
				<span>{tweet.retweetCount || (retweet ? 1 : "")}</span>
			</IconButton>
		</div>

		<div className={styles.footerButton}>
			<IconButton className={[styles.actionButton, styles.like, favorite && styles.liked]}
				onClick={() => setFavorite(!favorite)} >
				{favorite ? <LikeFill /> : <Like />}
				<span>{tweet.favoriteCount || (favorite ? 1 : "")}</span>
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