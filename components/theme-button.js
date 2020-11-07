import React from "react"
import cn from "classnames"
import Button from "./button.js"
import styles from "./theme-button.module.css"

function ThemeButton({full = false, big = false, className, children, ...props}) {
	return <Button type="button"
	className={cn(
		styles.button,
		full && styles.fullWidth,
		big && styles.bigSize,
		className
	)} {...props}>
		{children}
	</Button>
}

export default ThemeButton