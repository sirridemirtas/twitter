import React from 'react'
import { formatDistanceToNowStrict } from "date-fns"
import Avatar from '../avatar'
import styles from './index.module.css'
import IconButton from '../icon-button'
import { Reply, Retweet, Like, Share } from '../icons'

function Tweet({ name, slug, datetime, children }) {
	return <article className={styles.tweet}>
		<div className={styles.avatar}>
			<Avatar></Avatar>
		</div>
		<div className={styles.body}>
			<header class={styles.header}>
				<span className={styles.name}>{name} </span>
				<span>{`@`}{slug} {`·`} </span>
				<span>{formatDistanceToNowStrict(datetime)}</span>
			</header>

			<div className={styles.content}>{children}</div>

			<footer className={styles.footer}>
				<div className={styles.footerButton}>
					<IconButton className={styles.actionButton}>
						<Reply></Reply>
					</IconButton>
				</div>

				<div className={styles.footerButton}>
					<IconButton className={[styles.actionButton, styles.retweet]}>
						<Retweet></Retweet>
						<span>12</span>
					</IconButton>
				</div>

				<div className={styles.footerButton}>
					<IconButton className={[styles.actionButton, styles.like]}>
						<Like></Like>
					</IconButton>
				</div>

				<div className={styles.footerButton}>
					<IconButton className={styles.actionButton}>
						<Share></Share>
					</IconButton>
				</div>
			</footer>
		</div>
	</article >
}

export default Tweet