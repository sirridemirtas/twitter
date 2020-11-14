import React, { useState } from 'react'
import { formatDistanceToNowStrict } from "date-fns"
import Avatar from '../Avatar'
import styles from './tweet.module.css'
import IconButton from '../../ui/IconButton'
import { Reply, Retweet, RetweetFill, Like, LikeFill, Share } from '../../icons'

function Tweet({ ...props }) {
	const [favorite, setFavorite] = React.useState(props.favorited)
	const [retweet, setRetweet] = React.useState(props.retweeted)

	return <article className={styles.tweet}>
		<div className={styles.avatar}>
			<Avatar src={props.src} />
		</div>
		<div className={styles.body}>
			<header className={styles.header}>
				<span className={styles.name}>{props.name} </span>
				<span>{`@`}{props.slug} {`·`} </span>
				<span>{formatDistanceToNowStrict(props.datetime)}</span>
			</header>

			<div className={styles.content}>{props.tweet}</div>

			<footer className={styles.footer}>
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
		</div>
	</article >
}

export default Tweet