import React, { useContext, useState } from "react"
import AppContext from "../../../store/AppContext";
import styles from "./theme-select.module.css"

function ThemeSelect() {
	const store = useContext(AppContext)

	return <div className={styles.container}>
		{["light", "dim", "dark"].map((theme) =>
			<label key={theme}>
				<input type="radio" name="theme" value={theme}
					checked={theme === store.theme}
					onChange={e => { store.changeTheme(e.target.value) }}
				/>
				{theme}
			</label>
		)}
	</div>
}

export default ThemeSelect