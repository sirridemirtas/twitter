import React from "react"
import cn from "classnames"
import Button from "../Button"
import styles from "./nav-button.module.css"

function NavButton({ href, notify, selected, className, children, ...props }) {
	return <Button
		className={cn(styles.button, selected && styles.selected, className)}
		{...props} href={href}>
		{notify && <span className={styles.notify}>{notify}</span>}
		{children}
	</Button>
}

export default NavButton