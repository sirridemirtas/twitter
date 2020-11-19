import React from "react"
import { useRouter } from 'next/router'
import cn from "classnames"
import { MENU } from "../../../constants/nav-menu"
import NavButton from "../../ui/NavigationButton/index.js"
import styles from "./navigation.module.css"
import TextTitle from "../../ui/TextTitle"

function Navigation({ flat = false }) {
	const router = useRouter()
	return <nav className={styles.nav}>
		{MENU.map(menu => (
			<NavButton key={menu.key} isSelected={router.pathname == menu.path}
				href={menu.path}
				notify={menu.notify}
				className={cn(styles.navButton, menu.key)}>
				{router.pathname === menu.path ? (menu.iconSelected || menu.icon) : menu.icon}
				{(menu.title && !flat) && <TextTitle>{menu.title}</TextTitle>}
			</NavButton>
		))}
	</nav>
}

export default Navigation