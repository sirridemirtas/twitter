import React from "react"
import cn from "classnames"
import Button from "./button.js"
import styles from "./nav-button.module.css"

function NavButton({notify, selected, children, ...props}) {
    return <Button type="button" className={cn(styles.button, selected && styles.selected)} {...props}>
        {notify && <span className={styles.notify}>{notify}</span>}
        {children}
    </Button>
}

export default NavButton