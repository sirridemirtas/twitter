import React from "react"
import SvgSearch from "../../icons/Search"
import styles from "./search-box.module.css"

function SearchBox() {
	return <form className={styles.container}>
		<input type="text" className={styles.input} placeholder="Search Twitter" />
		<SvgSearch className={styles.icon} />
	</form>
}

export default SearchBox