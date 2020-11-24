import React, { useContext } from "react"
import Context from "../../../store/FleetContext"
import Avatar from '../Avatar'
import styles from './fleet.module.css'

function Fleet() {
	const fleet = useContext(Context)

	return <button className={styles.button} key={fleet.id}>
		<Avatar size="50px" className={styles.avatar} />
		<span className={styles.slug}>{fleet.slug}</span>
	</button>
}

export default Fleet