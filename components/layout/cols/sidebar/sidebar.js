import React, { Children } from "react"
import cn from "classnames"
import styles from "./sidebar.module.css"
import Navigation from '../../../common/Navigation'
import ThemeButton from '../../../ui/ThemeButton'
import ProfileBox from '../../../common/ProfileBox'
import { Tweet } from "../../../icons"
import TweetModal from "../../../common/TweetModal/tweet-modal"

function Sidebar({ flat }) {
	const [modalVisible, setModalVisibility] = React.useState(false)


	return <div className={cn(styles.sidebar)} >
		<Navigation flat={flat} />

		<div className={styles.tweet}>
			<ThemeButton big full={!flat}
				onClick={() => setModalVisibility(true)}>
				{flat ? <Tweet /> : "Tweet"}
			</ThemeButton>
		</div>

		{/* tweet modal*/}
		{modalVisible && <TweetModal onClick={(() => { setModalVisibility(false) })} />}

		<div className={styles.profile}>
			<ProfileBox flat={flat} />
		</div>
	</div>
}

export default Sidebar