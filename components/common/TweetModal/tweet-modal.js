import React from "react"
import ReactDOM from "react-dom"
import { Close as SvgClose, Gif as SvgGif, Emoji as SvgEmoji, Media as SvgMedia, Question as SvgQuestion, Tweet } from "../../icons/"
import IconButton from "../../ui/IconButton/icon-button"
import ThemeButton from "../../ui/ThemeButton"
import Avatar from "../Avatar"
import { default as TweetComp } from "../Tweet"
import styles from "./tweet-modal.module.css"

import Context from "../../../store/TweetContext"

function TweetModal({ onClick = () => { } }) {

	return <div className={styles.overlay}>
		<div className={styles.modal}>
			<div className={styles.avatar}>
				<Avatar src="/avatar.png" />
			</div>

			<form className={styles.body} onSubmit={(e) => e.preventDefault()}>
				<textarea className={styles.textarea} rows="5"
					placeholder={"What's happening?"}
					maxLength="280" />
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
					<ThemeButton type="reset">Tweet</ThemeButton>
				</div>
			</form>
		</div>
	</div >
}

export default TweetModal