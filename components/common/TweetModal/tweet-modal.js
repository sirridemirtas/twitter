import React from "react"
import { Close as SvgClose, Gif as SvgGif, Emoji as SvgEmoji, Media as SvgMedia, Question as SvgQuestion } from "../../icons/"
import IconButton from "../../ui/IconButton/icon-button"
import ThemeButton from "../../ui/ThemeButton"
import Avatar from "../Avatar"
import styles from "./tweet-modal.module.css"

function TweetModal({ onClick = () => { } }) {
	return <div className={styles.overlay}>
		<div className={styles.modal}>
			<div className={styles.avatar}>
				<Avatar />
			</div>

			<div className={styles.body}>
				<textarea className={styles.textarea} rows="5"
					placeHolder={"What's happening?"} />
				<div className={styles.footer}>
					<div className={styles.buttons}>
						<IconButton><SvgMedia /></IconButton>
						<IconButton><SvgGif /></IconButton>
						<IconButton><SvgQuestion /></IconButton>
						<IconButton><SvgEmoji /></IconButton>
					</div>
					<IconButton className={styles.close} onClick={() => onClick()}>
						<SvgClose />
					</IconButton>
					<ThemeButton>Tweet</ThemeButton>
				</div>
			</div>
		</div>
	</div>
}

export default TweetModal