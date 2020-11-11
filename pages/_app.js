import '../styles/app.css';
import { useState } from 'react';
import StoreContext from "../store";
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
	const [theme, themeSet] = useState(null)

	useEffect(() => {
		const theme = localStorage.getItem("THEME") || "light";
		themeSet(theme);
	}, [])

	const changeTheme = theme => {
		themeSet(theme)
		localStorage.setItem("THEME", theme)
	}

	useEffect(() => {
		document.querySelector("html").setAttribute("theme", theme)
	}, [theme])

	return <StoreContext.Provider value={{ theme, changeTheme }}>
		<Component {...pageProps} />
	</StoreContext.Provider>
}