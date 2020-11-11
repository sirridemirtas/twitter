import React from "react"
import SvgClose from "../../icons/Close"
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
				<textarea className={styles.textarea} rows="4"
					placeHolder={"What's happening?"} />
				<div className={styles.footer}>
					<IconButton className={styles.close}
						onClick={() => onClick()}
					>
						<SvgClose />
					</IconButton>
					<ThemeButton>Tweet</ThemeButton>
				</div>
			</div>
		</div>
	</div>
}

export default TweetModal