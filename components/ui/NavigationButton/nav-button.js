import React from "react"
import cn from "classnames"
import Button from "../Button"
import styles from "./nav-button.module.css"

function NavButton({ href, notify, isSelected, className, children, ...props }) {
	return <Button
		className={cn(styles.button, (isSelected ? styles.selected : ""), className)}
		{...props} href={href}>
		{notify && <span className={styles.notify}>{notify}</span>}
		{children}
	</Button>
}

export default NavButton