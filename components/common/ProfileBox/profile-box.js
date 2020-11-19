import React from "react"
import cn from "classnames"
import styles from "./profile-box.module.css"
import Avatar from "../Avatar"
import { ArrowBottom } from "../../icons"
import Button from "../../ui/Button"
import TextBody from "../../ui/TextBody"

function ProfileBox({ name = "Sırrı Demirtaş", username = "srrdmrts", flat = false }) {
	return <Button className={cn(styles.box)}>
		<Avatar size={39} src="/avatar.png" />
		{!flat && (
			<>
				<div className={styles.body}>
					<TextBody bold>{name}</TextBody>
					<TextBody className={styles.username}>@{username}</TextBody>
				</div>
				<ArrowBottom className={styles.icon} />
			</>
		)}

	</Button>
}

export default ProfileBox