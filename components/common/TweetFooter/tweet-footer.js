import React from 'react'
import styles from './tweet-footer.module.css'
import IconButton from '../../ui/IconButton'
import { Reply, Retweet, RetweetFill, Like, LikeFill, Share } from '../../icons'

function TweetFooter({ ...props }) {
	const [favorite, setFavorite] = React.useState(props.favorited)
	const [retweet, setRetweet] = React.useState(props.retweeted)

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
					{props.retweetCount || (retweet ? 1 : "")}
				</span>
			</IconButton>
		</div>

		<div className={styles.footerButton}>
			<IconButton className={[styles.actionButton, styles.like]}
				onClick={() => setFavorite(!favorite)} >
				{favorite ? <LikeFill style={{ color: "var(--pink)" }} /> : <Like />}
				<span className={favorite ? styles.liked : ""}>
					{props.favoriteCount || (favorite ? 1 : "")}
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