import React from "react"
import cn from "classnames"

import TrendTopics from "../../../common/TrendTopics"
import SearchBox from "../../../common/SearchBox"
import FooterLinks from "../../../common/FooterLinks"
import styles from "./extra.module.css"

function Extra() {
	return <div className={cn(styles.extra)}>
		<SearchBox />
		<TrendTopics />
		<FooterLinks />
	</div>
}

export default Extra