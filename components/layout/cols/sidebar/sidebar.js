import React, { Children } from "react"
import cn from "classnames"
import styles from "./sidebar.module.css"
import Navigation from '../../../common/Navigation'
import ThemeButton from '../../../ui/ThemeButton'
import ProfileBox from '../../../common/ProfileBox'
import { Tweet } from "../../../icons"

function Sidebar({ flat }) {
	return <div className={cn(styles.sidebar)} >
		<Navigation flat={flat} />

		<div className={styles.tweet}>
			<ThemeButton big full={!flat}>{
				flat ? <Tweet /> : "Tweet"
			}</ThemeButton>
		</div>

		<div className={styles.profile}>
			<ProfileBox flat={flat} />
		</div>
	</div>
}

export default Sidebar