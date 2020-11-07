import React from "react"
import cn from "classnames"
import styles from "./profile-box.module.css"
import Avatar from "./avatar"
import { ArrowBottom } from "./icons"
import Button from "./button"
import TextBody from "./text-body"

function ProfileBox({name= "Sırrı Demirtaş", username="srrdmrts", flat = false}) {
	return <Button className={cn(styles.box)}>
		<Avatar size={39}/>
		{!flat && (
			<>
			<div className={styles.body}>
				<TextBody bold>{name}</TextBody>
				<TextBody className={styles.username}>@{username}</TextBody>
			</div>
			<ArrowBottom className={styles.icon}/>
			</>
		)} 
		
	</Button>
}

export default ProfileBox