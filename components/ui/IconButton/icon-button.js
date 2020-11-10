import React from "react"
import cn from "classnames"
import Button from "../Button"
import styles from "./icon-button.module.css"

function IconButton({ children, className, ...props }) {
	return <Button
		className={cn(styles.button, className)}
		{...props}>
		{children}
	</Button>
}

export default IconButton